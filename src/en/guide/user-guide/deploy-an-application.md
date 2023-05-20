---
footerLink: /guide/user-guide/deploy-an-application
title: Deploy an Application
---
# Deploy an Application

This document describes the process of registering a new Kubernetes cluster to Nautes, on which an application will be deployed.

## Prerequisites

### Register a GitLab Account

After GitLab installation, you need to register an account and create a [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) with the scopes: api, read_api, read_repository, and write_repository.

The account needs to call the API for [managing the runtime clusters](#register-runtime-cluster), you need to add the account to the member list of the tenant configuration repository and ensure that the account can push code to the main branch.

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol, please download the ca.crt certificate from [the installation result](installation.md#check-the-installation-results), and add ca.crt to the trusted certificate list of the server that executes the API.

### Prepare a Server

You need to prepare a server for installing the Kubernetes cluster. If you already have a Kubernetes cluster (with a public IP), you can skip this step.

The following will describe how to prepare a server and install a K3s cluster using Alibaba Cloud as an example.

Create an ECS cloud server. For more details, refer to [Elastic Compute Service (ECS)](https://help.aliyun.com/document_detail/25422.html). After the server is successfully installed, install K3s on the server using the following command:

```Shell
# Replace $PUBLIC_IP with the public IP of the server.
# Replace $DEX_SERVER with the oauth_url located at /opt/nautes/out/service directory of the installation machine.
# Download the ca.crt located at /opt/nautes/out/pki directory of the installation machine, and upload it to the /etc/ssl/certs/ directory of the server.
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.21.14+k3s1 INSTALL_K3S_EXEC="--tls-san $PUBLIC_IP" sh -s - server --disable servicelb --disable traefik --disable metrics-server --kube-apiserver-arg=oidc-issuer-url=$DEX_SERVER --kube-apiserver-arg=oidc-client-id=nautes --kube-apiserver-arg=oidc-ca-file=/etc/ssl/certs/ca.crt --kube-apiserver-arg=oidc-groups-claim=groups -p ${HOME}/.kube
mkdir -p ${HOME}/.kube
/bin/cp -f /etc/rancher/k3s/k3s.yaml ${HOME}/.kube/k3s-config
/bin/cp -f /etc/rancher/k3s/k3s.yaml ${HOME}/.kube/config
export KUBECONFIG=${HOME}/.kube/config
```

After the K3s installation is complete, you need to add an inbound rule for port 6443. For more information, refer to the [Security Group Rules](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/create-a-security-group-2).

## Installation

Using Alibaba Cloud as an example, this section describes the process of deploying Nautes on a public cloud. For more information, refer to the [Installation](installation.md).

## Register Runtime Cluster

Registering a runtime cluster involves adding a prepared Kubernetes cluster to the tenant management cluster and initializing its configuration through the tenant management cluster. After initialization, the cluster can host the runtime of applications.

The supported cluster types include physical clusters and virtual clusters.

When higher performance, isolation, and reliability are required for your runtime of applications, it is recommended to use a [physical cluster](#register-physical-cluster). For other environments such as development, testing, and trial environments, a [virtual cluster](#register-runtime-cluster) can be used.

### Register Physical Cluster

Clone the command-line repository to your local machine.

```Shell
git clone https://github.com/nautes-labs/cli.git
```

Replace the variables in the physical cluster property template located at the relative path `examples/demo-cluster-physical-worker.yaml`, including `$suffix`, `$api-server`, `$cluster-ip` and `$kubeconfig`.

```Shell
# View the kubeconfig for the physical cluster.
cat ${HOME}/.kube/config
```

```yaml
# Physical cluster property template
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  # Cluster name
  name: "host-worker-$suffix"
  # Cluster API SERVER URL. Replace the variable with the address of the physical cluster.
  apiServer: "$api-server"
  # Cluster kind. Currently only supports Kubernetes.
  clusterKind: "kubernetes"
  # Cluster type: virtual or physical
  clusterType: "physical"
  # Cluster usage: host or worker
  usage: "worker"
  # Runtime type: deployment runtime
  workerType: "deployment"
  # Primary domain, replace $cluster-ip with the cluster IP.
  primaryDomain: "$cluster-ip.nip.io"
  # ArgoCD domain. replace $cluster-ip with the cluster IP.
  argocdHost: "argocd.host-worker-$suffix.$cluster-ip.nip.io"
  # Traefik configuration
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  # Content of the kubeconfig file of the cluster: Replace the variable with the kubeconfig of the physical cluster.
  kubeconfig: |
    "$kubeconfig"
```

The physical cluster property example after replacing the variables is shown below:

```yaml
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  name: "host-worker-aliyun"
  apiServer: "https://8.217.50.114:6443"
  clusterKind: "kubernetes"
  clusterType: "physical"
  usage: "worker"
  workerType: "deployment"
  primaryDomain: "8.217.50.114.nip.io"
  argocdHost: "argocd.host-worker-aliyun.8.217.50.114.nip.io"
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  kubeconfig: |
    apiVersion: v1
    clusters:
    - cluster:
        certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSMzRuTjVPWWhxb3MrekV1YXZsVDRleXE4ZFRVZ2pxcUdoN2Z6NkpMZEMKem1FN0cwZjE5K0hLcEw5cU1tSXVBaStRelBZZFNzWGJpR20rNjR0R0NuVkRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVUp0WVUxbkNvTXNNYWpVeUJGN3RVCndjZWJ6TW93Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQU9hR2pWNlRpK2o1Yy9kWlV5a1pERml0OU9DdkFmZjEKWjJSVUJ6TkJTOUlhQWlFQTB1bzM2YUVGRnkvdWQ0eHREZnNkWmhYWmZOaXQ3c2N4SXREa1k5STlQUkU9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
        server: https://127.0.0.1:6443
      name: default
    contexts:
    - context:
        cluster: default
        user: default
      name: default
    current-context: default
    kind: Config
    preferences: {}
    users:
    - name: default
      user:
        client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJSjYyRGdFT3JiM3d3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamd4TWprd01EazFNQjRYRFRJek1EUXhNakE1TURFek5Wb1hEVEkwTURReApNVEE1TURFek5Wb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJJNnlLRlBKNENmS25BUFkKQ0Q5ZFVtZlZ5ekR2aFpEQUdhU1lYODVoWWRYZ0NKdmxHRmlad3dGN2ExKzEzdlQ5ZjE2MUJwSGhKTm9mYi9oeAozUVo1MWs2alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCVHhiVTM2eC9iMnl3WU14SmpuUjF5L2w2cHZCREFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlFQS9rZ3FCOGJLZnNLSGNmaDBUSFQ2bTZNLzdrMzlNWmFGYlVCaE9GTzVDSW9DSURiRWNaeUxkc055R3lVVQpSTDl5K0hHcVJ3b1FTWGhOa1NrQjhlbkpsQTEzCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTbnNEVkxLTU4xTWl4cHAwclRMRTBOVGdjamFRWFhmUmZmOThiOTRqd1gKYjRPNVh1aCtFclZwZ3BjamxRYjVZKzM0T1NwaG03TnVXWlA2OHBkUWhMTW5vMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVThXMU4rc2YyOXNzR0RNU1k1MGRjCnY1ZXFid1F3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUtXSStXQ2wwRFlJME5oVDBzbDkwSVRHRW05V2EyaE0KQXV4UXkrcDVUcGpzQWlBdWxFd0NkK2lWYXNVY2VHa2I4WU81dlduQitaTVJmSU1rYWRHSGhpSmlrdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
        client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU5ZZFVkaER2SlFXcVNSRzR0d3gzQ2I4amhnck1HZlVOMG1uajV5dTRWZ1RvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFanJJb1U4bmdKOHFjQTlnSVAxMVNaOVhMTU8rRmtNQVpwSmhmem1GaDFlQUltK1VZV0puRApBWHRyWDdYZTlQMS9YclVHa2VFazJoOXYrSEhkQm5uV1RnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=
```

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0) and run the following command to register the physical cluster.

```Shell
# examples/demo-cluster-physical-worker-deployment.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes apply -f examples/demo-cluster-physical-worker-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

### Register Virtual Cluster

When registering a virtual cluster as a deployment runtime cluster, you need to first register the physical cluster as the host cluster, and then register the virtual cluster to the host cluster.

Clone the command-line repository to your local machine.

```Shell
git clone https://github.com/nautes-labs/cli.git
```

Replace the variables in the host cluster property template located at the relative path `examples/demo-cluster-host.yaml`, including `$suffix`, `$api-server`, and `$kubeconfig`.

```Shell
# View the kubeconfig for the host cluster.
cat ${HOME}/.kube/config
```

```yaml
# Host cluster property template
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  # Cluster name
  name: "host-$suffix"
  # Cluster API SERVER URL. Replace the variable with the address of the host cluster.
  apiServer: "$api-server"
  # Cluster kind. Currently only supports Kubernetes.
  clusterKind: "kubernetes"
  # Cluster type: virtual or physical
  clusterType: "physical"
  # Cluster usage: host or worker
  usage: "host"
  # Traefik configuration
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  # Content of the kubeconfig file of the cluster. Replace the variable with the kubeconfig of the host cluster
  kubeconfig:
    "$kubeconfig"
```

The host cluster property example after replacing the variables is shown below:

```yaml
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  name: "host-aliyun"
  apiServer: "https://8.217.50.114:6443"
  clusterKind: "kubernetes"
  clusterType: "physical"
  usage: "host"
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  kubeconfig: |
    apiVersion: v1
    clusters:
    - cluster:
        certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSMzRuTjVPWWhxb3MrekV1YXZsVDRleXE4ZFRVZ2pxcUdoN2Z6NkpMZEMKem1FN0cwZjE5K0hLcEw5cU1tSXVBaStRelBZZFNzWGJpR20rNjR0R0NuVkRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVUp0WVUxbkNvTXNNYWpVeUJGN3RVCndjZWJ6TW93Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQU9hR2pWNlRpK2o1Yy9kWlV5a1pERml0OU9DdkFmZjEKWjJSVUJ6TkJTOUlhQWlFQTB1bzM2YUVGRnkvdWQ0eHREZnNkWmhYWmZOaXQ3c2N4SXREa1k5STlQUkU9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
        server: https://127.0.0.1:6443
      name: default
    contexts:
    - context:
        cluster: default
        user: default
      name: default
    current-context: default
    kind: Config
    preferences: {}
    users:
    - name: default
      user:
        client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJSjYyRGdFT3JiM3d3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamd4TWprd01EazFNQjRYRFRJek1EUXhNakE1TURFek5Wb1hEVEkwTURReApNVEE1TURFek5Wb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJJNnlLRlBKNENmS25BUFkKQ0Q5ZFVtZlZ5ekR2aFpEQUdhU1lYODVoWWRYZ0NKdmxHRmlad3dGN2ExKzEzdlQ5ZjE2MUJwSGhKTm9mYi9oeAozUVo1MWs2alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCVHhiVTM2eC9iMnl3WU14SmpuUjF5L2w2cHZCREFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlFQS9rZ3FCOGJLZnNLSGNmaDBUSFQ2bTZNLzdrMzlNWmFGYlVCaE9GTzVDSW9DSURiRWNaeUxkc055R3lVVQpSTDl5K0hHcVJ3b1FTWGhOa1NrQjhlbkpsQTEzCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTbnNEVkxLTU4xTWl4cHAwclRMRTBOVGdjamFRWFhmUmZmOThiOTRqd1gKYjRPNVh1aCtFclZwZ3BjamxRYjVZKzM0T1NwaG03TnVXWlA2OHBkUWhMTW5vMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVThXMU4rc2YyOXNzR0RNU1k1MGRjCnY1ZXFid1F3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUtXSStXQ2wwRFlJME5oVDBzbDkwSVRHRW05V2EyaE0KQXV4UXkrcDVUcGpzQWlBdWxFd0NkK2lWYXNVY2VHa2I4WU81dlduQitaTVJmSU1rYWRHSGhpSmlrdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
        client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU5ZZFVkaER2SlFXcVNSRzR0d3gzQ2I4amhnck1HZlVOMG1uajV5dTRWZ1RvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFanJJb1U4bmdKOHFjQTlnSVAxMVNaOVhMTU8rRmtNQVpwSmhmem1GaDFlQUltK1VZV0puRApBWHRyWDdYZTlQMS9YclVHa2VFazJoOXYrSEhkQm5uV1RnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=
```

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0) and run the following command to register the host cluster.

```Shell
# examples/demo-cluster-host.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes apply -f examples/demo-cluster-host.yaml -t $gitlab-access-token -s $api-server-address
```

Replace the variables in the virtual cluster property template located at the relative path `examples/demo-cluster-virtual-worker-deployment.yaml`, including `$suffix`, `$api-server`, `$host-cluster`, and `$api-server-port`.

```yaml
# Virtual cluster property template
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  # Cluster name
  name: "vcluster-$suffix"
  # Cluster API SERVER URL. Replace the parameter with the format 'https://$hostcluster-ip:$api-server-port', where $hostcluster-ip refers to the IP of the host cluster and $api-server-port refers to the API SERVER port of the virtual cluster.
  apiServer: "$api-server"
  # Cluster kind: Currently only supports Kubernetes
  clusterKind: "kubernetes"
  # Cluster type: virtual or physical
  clusterType: "virtual"
  # Cluster usage: host or worker
  usage: "worker"
  # Runtime type: deployment runtime
  workerType: "deployment"
  # Host cluster: the property is only available for virtual type clusters. Replace the parameter with the name of the host cluster.
  hostCluster: "$host-cluster"
  # Primary domain, Replace $cluster-ip with the host cluster IP.
  primaryDomain: "$cluster-ip.nip.io"
  # ArgoCD domain, Replace $cluster-ip with the host cluster IP.
  argocdHost: "argocd.vcluster-$suffix.$cluster-ip.nip.io"
  # Virtual cluster configuration: the property is only available for virtual type clusters.
  vcluster: 
    # API SERVER port 
    httpsNodePort: "$api-server-port"
```

The virtual cluster property example after replacing the variables is shown below:

```yaml
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  name: "vcluster-aliyun"
  apiServer: "https://8.217.50.114:31456"
  clusterKind: "kubernetes"
  clusterType: "virtual"
  usage: "worker"
  workerType: "deployment"
  hostCluster: "host-aliyun"
  primaryDomain: "8.217.50.114.nip.io"
  argocdHost: "argocd.vcluster-aliyun.8.217.50.114.nip.io"
  vcluster: 
    httpsNodePort: "31456"
```

Run the following command to register the virtual cluster.

```Shell
# examples/demo-cluster-virtual-worker-deployment.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes apply -f examples/demo-cluster-virtual-worker-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

## Initialize a Product

Initializing the product refers to creating various entities in the Nautes product model, and initializing a set of resources for executing automated deployment in the runtime cluster, including namespace, serviceaccount, secret, and ArgoCD related resources, etc.

The following sections describe the entities related to initializing the product through the command-line, including a product, a project, a code repository, an authorization, an environment, and a deployment runtime.

Clone the command-line repository to your local machine.

```Shell
git clone https://github.com/nautes-labs/cli.git
```

Replace the variables in the product property template located at the relative path `examples/demo-product.yaml`, including `$suffix`.

```yaml
# Product
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Product
spec:
  name: demo-$suffix
  git:
    gitlab:
      # Product name
      name: demo-$suffix
      # Product path
      path: demo-$suffix
      visibility: private
      description: demo-$suffix
      parentID: 0
---
# Project
apiVersion: "nautes.resource.nautes.io/v1alpha1"
kind: Project
spec:
  # Project name
  name: project-demo-$suffix
  # The product to which the project belongs
  product: demo-$suffix
  language: golang
---
# source code repository
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  # coderepo name
  name: coderepo-sc-demo-$suffix
  codeRepoProvider: gitlab
  deploymentRuntime: false
  pipelineRuntime: true
  # The product to which the coderepo belongs
  product: demo-$suffix
  # The project to which the coderepo belongs
  project: project-demo-$suffix
  webhook:
    events: ["push_events"]
    isolation: shared
  git:
    gitlab:
      # Repository name
      name: coderepo-sc-demo-$suffix
      # Repository path
      path: coderepo-sc-demo-$suffix
      # Repository visibility：private or public
      visibility: private
      description: coderepo-sc-demo-$suffix
---
# deployment manifests repository
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  # coderepo name
  name: coderepo-deploy-demo-$suffix
  codeRepoProvider: gitlab
  deploymentRuntime: false
  pipelineRuntime: true
  # The product to which the coderepo belongs
  product: demo-$suffix
  webhook:
    events: ["push_events"]
    isolation: shared
  git:
    gitlab:
      # Repository name
      name: coderepo-deploy-demo-$suffix
      # Repository path
      path: coderepo-deploy-demo-$suffix
      # Repository visibility：private or public
      visibility: private
      description: coderepo-deploy-demo-$suffix
```

The file example after replacing the variables is shown below:

```yaml
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Product
spec:
  name: demo-quickstart
  git:
    gitlab:
      name: demo-quickstart
      path: demo-quickstart
      visibility: private
      description: demo-quickstart
      parentID: 0
---
apiVersion: "nautes.resource.nautes.io/v1alpha1"
kind: Project
spec:
  name: project-demo-quickstart
  product: demo-quickstart
  language: golang
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  name: coderepo-sc-demo-quickstart
  codeRepoProvider: gitlab
  deploymentRuntime: false
  pipelineRuntime: true
  product: demo-quickstart
  project: project-demo-quickstart
  webhook:
    events: ["push_events"]
    isolation: shared
  git:
    gitlab:
      name: coderepo-sc-demo-quickstart
      path: coderepo-sc-demo-quickstart
      visibility: private
      description: coderepo-sc-demo-quickstart
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  name: coderepo-deploy-demo-quickstart
  codeRepoProvider: gitlab
  deploymentRuntime: false
  pipelineRuntime: true
  product: demo-quickstart
  webhook:
    events: ["push_events"]
    isolation: shared
  git:
    gitlab:
      name: coderepo-deploy-demo-quickstart
      path: coderepo-deploy-demo-quickstart
      visibility: private
      description: coderepo-deploy-demo-quickstart
```

Replace the variables in the runtime environment property template located at the relative path `examples/demo-deployment.yaml`, including `$suffix` and `$deployment-runtime-cluster`.

```yaml
---
# Testing Environment
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Environment
spec:
  # Environment name
  name: env-test-demo-$suffix
  # The product to which the environment belongs
  product: demo-$suffix
  # Runtime cluster related to the environment
  cluster: $deployment-runtime-cluster
  # Environment type
  envType: test
---
# Grant deployment configuration repository authorization to the deployment runtime.
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepoBinding
spec:
  # The product to which the authorized code repository belongs.
  productName: demo-$suffix
  name: coderepobinding-deploy-dr-demo-$suffix
  # Authorized code repository
  coderepo: coderepo-deploy-demo-$suffix
  # The product with granted authorization
  product: demo-$suffix
  # Permissions: readonly, readwrite
  permissions: readonly
---
# DeploymentRuntime
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: DeploymentRuntime
spec:
  # DeploymentRuntime name
  name: dr-demo-$suffix
  # The target environment of the deployment runtime
  destination: env-test-demo-$suffix
  manifestsource:
    # The source coderepo of the deployment runtime
    codeRepo: coderepo-deploy-demo-$suffix
    # The relative path of the source coderepo 
    path: deployments/test
    # The revision or branch of the source coderepo 
    targetRevision: main
  # The product to which the deployment runtime belongs
  product: demo-$suffix
  # The project to which the deployment runtime belongs
  projectsRef:
    - project-demo-$suffix
```

The file example after replacing the variables is shown below:

> According to the cluster type selected in the previous section, you need to set `spec.cluster` of Environment resource to the [physical cluster name](#register-physical-cluster) or [virtual cluster name](#register-virtual-cluster).

```yaml
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Environment
spec:
  name: env-test-demo-quickstart
  product: demo-quickstart
  cluster: vcluster-aliyun
  envType: test
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepoBinding
spec:
  productName: demo-quickstart
  name: coderepobinding-deploy-dr-demo-quickstart
  coderepo: coderepo-deploy-demo-quickstart
  product: demo-quickstart
  permissions: readonly
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: DeploymentRuntime
spec:
  name: dr-demo-quickstart
  destination: env-test-demo-quickstart
  manifestsource:
    codeRepo: coderepo-deploy-demo-quickstart
    path: deployments/test
    targetRevision: main
  product: demo-quickstart
  projectsRef:
    - project-demo-quickstart
```

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0) and run the following command to initialize the product.

```Shell
# examples/demo-product.yaml and examples/demo-deployment.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes apply -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
nautes apply -f examples/demo-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

## Deployment

Submit the Kubernetes Manifests to the deployment configuration repository, such as deployment, service, and other resources.

Clone the sample example repository to your local machine.

```Shell
git clone https://github.com/nautes-examples/user-deployment.git
```

Modify the domain name of the Ingress resource in the local code repository: `deployment/test/devops-sample-svc.yaml`

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ks-sample-dev
spec:
  rules:
  # Replace $cluster-ip with the public IP of the runtime cluster.
  - host: devops-sample.$cluster-ip.nip.io
    http:
      paths:
      ...
```

Access [GitLab](installation.md#check-the-installation-results), and configure your GitLab account to have the force-push permission to the main branch of the [deployment configuration repository](#initialize-a-product), which is used to store Kubernetes Manifests. For more information, refer to  [Allow Force Push to a Protected Branch](https://docs.gitlab.com/ee/user/project/protected_branches.html#allow-force-push-on-a-protected-branch).

Push the Kubernetes Manifests to the deployment configuration repository.

```Shell
# Change the URL of the remote repository 'origin' to that of the deployment configuration repository, the repository URL below is only an example, replace $gitlab-url with the IP or domain of GitLab.
git remote set-url origin git@$gitlab-url:demo-quickstart/coderepo-deploy-demo-quickstart.git
# Push the Kubernetes Manifests to the deployment configuration repository.
git add .
git commit -m 'submit the kubernetes manifests.'
git push origin main -f
```

## View Deployment Results

After the deployment is successful, you will be able to access the UI of the sample application by using a browser to access `http://devops-sample.$cluster-ip.nip.io:$traefik-httpnodeport`.

> Replace the $cluster-ip variable with the public IP of the runtime cluster.
>
> Replace the $traefik-httpnodeport variable with the traefik port of the runtime cluster. For more information, refer to `spec.traefik.httpNodePort` in the property template in the [Register Physical Cluster](#register-physical-cluster) or [Register Virtual Cluster](#register-virtual-cluster) section, for example, `30080`.

Through the ArgoCD console, you will be able to view the deployment results of the application and manage resources related to authorized products only.

Access the ArgoCD console installed on the runtime cluster by using a browser to access `https://$argocdHost:$traefik-httpsNodePort`. Click `LOG IN VIA DEX` for unified authentication. If you haven't logged into GitLab in the current browser session, you'll need to enter your GitLab account and password to log in. After logging in successfully, the page will automatically redirect to the ArgoCD console.

> Replace the $argocdHost variable with the argocdHost address of the runtime cluster. For more information, refer to `spec.argocdHost` in the property template in the [Register Physical Cluster](#register-physical-cluster) or [Register Virtual Cluster](#register-virtual-cluster) section, for example, `argocd.vcluster-aliyun-0412.8.217.50.114.nip.io`.
>
> Replace the $traefik-httpsNodePort variable with the traefik port of the runtime cluster. For more information, refer to `spec.traefik.httpsNodePort` in the property template in the [Register Physical Cluster](#register-physical-cluster) or [Register Virtual Cluster](#register-virtual-cluster) section, for example, `30443`.

The ArgoCD console lists ArgoCD applications related to products authorized for you, and you will be able to view and manage related resources. By clicking on an ArgoCD application card, you can see the resource manifest, YAML, events, logs, and perform actions such as synchronize, restart, and delete. By clicking on "Settings" in the left menu bar of the ArgoCD console, you can also view ArgoCD projects related to authorized products.
