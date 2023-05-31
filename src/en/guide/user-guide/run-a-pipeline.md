---
footerLink: /guide/user-guide/run-a-pipeline
title: Run a Pipeline
---
# Run a Pipeline

This document describes the process of registering a new Kubernetes cluster to Nautes, on which a CI pipeline will be run.

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

After the K3s installation is complete, you need to add an inbound rule for port `6443`. For more information, refer to the [Security Group Rules](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/create-a-security-group-2).

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

Replace the variables in the physical cluster property template located at the relative path `examples/demo-cluster-physical-worker-pipeline.yaml`, including `$suffix`, `$api-server`, `$cluster-ip` and `$kubeconfig`.

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
  name: "physical-worker-$suffix"
  # Cluster API SERVER URL. Replace the variable with the address of the physical cluster.
  apiServer: "$api-server"
  # Cluster kind. Currently only supports Kubernetes.
  clusterKind: "kubernetes"
  # Cluster type: virtual or physical
  clusterType: "physical"
  # Cluster usage: host or worker
  usage: "worker"
  # Runtime type: pipeline runtime
  workerType: "pipeline"
  # Primary domain, replace $cluster-ip with the cluster IP.
  primaryDomain: "$cluster-ip.nip.io"
  # Tekton domain. Replace $cluster-ip with the cluster IP.
  tektonHost: "tekton.physical-worker-$suffix.$cluster-ip.nip.io"
  # ArgoCD domain. Replace $cluster-ip with the cluster IP.
  argocdHost: "argocd.physical-worker-$suffix.$cluster-ip.nip.io"
  # Traefik configuration
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  # Content of the kubeconfig file of the cluster: Replace the variable with the kubeconfig of the physical cluster.
  kubeconfig: |
    $kubeconfig
```

The physical cluster property example after replacing the variables is shown below:

```yaml
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  name: "physical-worker-aliyun"
  apiServer: "https://8.217.50.114:6443"
  clusterKind: "kubernetes"
  clusterType: "physical"
  usage: "worker"
  workerType: "pipeline"
  primaryDomain: "8.217.50.114.nip.io"
  tektonHost: "tekton.physical-worker-aliyun.8.217.50.114.nip.io"
  argocdHost: "argocd.physical-worker-aliyun.8.217.50.114.nip.io"
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

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.3.0) and run the following command to register the physical cluster.

```Shell
# examples/demo-cluster-physical-worker-pipeline.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes apply -f examples/demo-cluster-physical-worker-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

### Register Virtual Cluster

When registering a virtual cluster as a runtime cluster, you need to first register the physical cluster as the host cluster, and then register the virtual cluster to the host cluster.

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
  # Primary domain, replace $cluster-ip with the cluster IP.
  primaryDomain: "$cluster-ip.nip.io"
  # Traefik configuration
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  # Content of the kubeconfig file of the cluster. Replace the variable with the kubeconfig of the host cluster
  kubeconfig: |
    $kubeconfig
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
  primaryDomain: "8.217.50.114.nip.io"
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

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.3.0) and run the following command to register the host cluster.

```Shell
# examples/demo-cluster-host.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes apply -f examples/demo-cluster-host.yaml -t $gitlab-access-token -s $api-server-address
```

Replace the variables in the virtual cluster property template located at the relative path `examples/demo-cluster-virtual-worker-pipeline.yaml`, including `$suffix`, `$api-server`, `$cluster-ip`, and `$api-server-port`.

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
  # Runtime type: pipeline runtime
  workerType: "pipeline"
  # Host cluster: the property is only available for virtual type clusters. Replace the parameter with the name of the host cluster.
  hostCluster: "$host-cluster"
  # Primary domain, Replace $cluster-ip with the host cluster IP.
  primaryDomain: "$cluster-ip.nip.io"
  # Tekton domain. Replace $cluster-ip with the host cluster IP.
  tektonHost: "tekton.vcluster-$suffix.$cluster-ip.nip.io"
  # ArgoCD domain. Replace $cluster-ip with the host cluster IP.
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
  workerType: "pipeline"
  hostCluster: "host-aliyun"
  primaryDomain: "8.217.50.114.nip.io"
  tektonHost: "tekton.vcluster-aliyun.8.217.50.114.nip.io"
  argocdHost: "argocd.vcluster-aliyun.8.217.50.114.nip.io"
  vcluster: 
    httpsNodePort: "31456"
```

Run the following command to register the virtual cluster.

```Shell
# examples/demo-cluster-virtual-worker-pipeline.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes apply -f examples/demo-cluster-virtual-worker-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

## Initialize a Product

Initializing the product refers to creating various entities in the Nautes product model, and initializing a set of resources for running the pipeline in the runtime cluster, including namespace, serviceaccount, secret, argoevents and Tekton related resources, etc.

The following sections describe the entities related to initializing the product through the command-line, including a product, a project, two code repositories, an authorization, an environment, and a project pipeline runtime.

Clone the command-line repository to your local machine.

```Shell
git clone https://github.com/nautes-labs/cli.git
```

Replace the variables in the property template located at the relative path `examples/demo-product.yaml`, including `$suffix`.

> Here are two code repositories created: "source code repository" is used to store project source code and pipeline configuration files, while "deployment configuration repository" is used to store project deployment manifests.

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
# Source code repository
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  # Coderepo name
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
# Deployment configuration repository
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  # Coderepo name
  name: coderepo-deploy-demo-$suffix
  codeRepoProvider: gitlab
  deploymentRuntime: true
  pipelineRuntime: false
  # The product to which the coderepo belongs
  product: demo-$suffix
  webhook:
    events: ["push_events"]
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
  deploymentRuntime: true
  pipelineRuntime: false
  product: demo-quickstart
  webhook:
    events: ["push_events"]
  git:
    gitlab:
      name: coderepo-deploy-demo-quickstart
      path: coderepo-deploy-demo-quickstart 
      visibility: private
      description: coderepo-deploy-demo-quickstart
```

Replace the variables in the property template located at the relative path `examples/demo-pipeline.yaml`, including `$suffix` and `$pipeline-runtime-cluster`.

```yaml
---
# Development environment
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Environment
spec:
  # Environment name
  name: env-dev-demo-$suffix
  # The product to which the environment belongs
  product: demo-$suffix
  # Runtime cluster related to the environment
  cluster: $pipeline-runtime-cluster
  # Environment type
  envType: dev
---
# Grant deployment configuration repository authorization to the project pipeline runtime.
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepoBinding
spec:
  # The product to which the authorized code repository belongs.
  productName: demo-$suffix
  name: coderepobinding-deploy-pipeline-demo-$suffix
  # Authorized code repository
  coderepo: coderepo-deploy-demo-$suffix
  # The product with granted authorization
  product: demo-$suffix
  # The projects with granted authorization
  projects: 
    - project-demo-$suffix
  # Permission: readonly, readwrite
  permissions: readwrite
---
# ProjectPipelineRuntime
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: ProjectPipelineRuntime
spec:
  # ProjectPipelineRuntime name
  name: pr-demo-$suffix
  # The product to which the project pipeline runtime belongs
  product: demo-$suffix
  # The project to which the project pipeline runtime belongs
  project: project-demo-$suffix
  # The source coderepo of the pipeline configuration
  pipelineSource: coderepo-sc-demo-$suffix
  # The definition of pipelines
  pipelines:
    # Pipeline name
  - name: pipeline-dev-demo-$suffix
    # The label of pipeline resources
    label: main
    # The relative path of pipeline configuration files
    path: pipelines/main.yaml
  # The target environment of the project pipeline runtime
  destination: env-dev-demo-$suffix
  # The event sources triggered pipelines
  eventSources:
    # The event source name
  - name: webhook
    # Gitlab event source
    gitlab:
      # Repository name
      repoName: coderepo-sc-demo-$suffix
      # Repository branch that generates events, where "*" indicates that the event source receives events from all branches.
      revision: main
      # Event types received by the event source from the repository.
      events:
      - push_events
  # The isolation of the resources related to the pipelines: shared（default）or exclusive
  isolation: exclusive
  # Associate pipelines and event sources
  pipelineTriggers:
    # Associated event source
  - eventSource: webhook
    # Associated pipeline
    pipeline: pipeline-dev-demo-$suffix
```

The file example after replacing the variables is shown below:

> According to the cluster type selected in the previous section, you need to set `spec.cluster` of Environment resource to the [physical cluster name](#register-physical-cluster) or [virtual cluster name](#register-virtual-cluster).

```yaml
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Environment
spec:
  name: env-dev-demo-quickstart
  product: demo-quickstart
  cluster: vcluster-aliyun
  envType: dev
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepoBinding
spec:
  productName: demo-quickstart
  name: coderepobinding-deploy-pipeline-demo-quickstart
  coderepo: coderepo-deploy-demo-quickstart
  product: demo-quickstart
  projects: 
    - project-demo-quickstart
  permissions: readwrite
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: ProjectPipelineRuntime
spec:
  name: pr-demo-quickstart
  product: demo-quickstart
  project: project-demo-quickstart
  pipelineSource: coderepo-sc-demo-quickstart
  pipelines:
  - name: pipeline-dev-demo-quickstart
    label: main
    path: pipelines/main.yaml
  destination: env-dev-demo-quickstart
  eventSources:
  - name: webhook
    gitlab:
      repoName: coderepo-sc-demo-quickstart
      revision: main
      events:
      - push_events
  isolation: exclusive
  pipelineTriggers:
  - eventSource: webhook
    pipeline: pipeline-dev-demo-quickstart
```

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.3.0) and run the following command to initialize the product.

```Shell
# examples/demo-product.yaml and examples/demo-pipeline.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes apply -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
nautes apply -f examples/demo-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

Before running the pipeline, you need to prepare an image repository for storing the container images generated by the pipeline. We will take GitHub's `ghcr.io` as an example.

You need to prepare an account or organization on GitHub, for example, `https://github.com/nautes-labs`, and generate a personal access token with `write:packages` permission under the account that has permissions to the organization.

When a namespace with the same name as the project pipeline runtime is ready in the runtime cluster, you need to create a ConfigMap resource under the namespace. The `image-build` task in the pipeline can use the ConfigMap resource to authenticate with the image repository when pushing container images.

The template for the ConfigMap resource is located at the relative path `examples/config.json`. You need to replace the `$auth` variable in it with the string generated by the following command:

```shell
# github-user refers to your GitHub account
# github-token refers to the personal access token of your GitHub account
echo -n '$github-user:$github-token' | base64
```

After replacing the variables, use the `kubectl` command to create the ConfigMap resource in the runtime cluster:

```shell
# pipeline-runtime-name refers to the name of the project pipeline runtime, such as pr-demo-quickstart
kubectl create configmap registry-auth --from-file=config.json -n $pipeline-runtime-name
```

## Run a Pipeline

Submit the source code and pipeline configuration files of the sample project to the source code repository, and submit the Kubernetes manifests of the sample project to the deployment configuration repository, such as deployment, service, and other resources.

### Submit Kubernetes Manifest

Clone the sample repository to your local machine.

```Shell
git clone https://github.com/nautes-examples/user-deployment.git
```

Modify the domain name of the Ingress resource in the local code repository: `deployment/test/devops-sample-svc.yaml`.

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

Access [GitLab](installation.md#check-the-installation-results), and configure your GitLab account to have the force-push permission to the `main` branch of the [deployment configuration repository](#initialize-a-product). For more information, refer to  [Allow Force Push to a Protected Branch](https://docs.gitlab.com/ee/user/project/protected_branches.html#allow-force-push-on-a-protected-branch).

Push the Kubernetes Manifests to the deployment configuration repository.

```Shell
# Change the URL of the remote repository 'origin' to that of the deployment configuration repository, 
# the repository URL below is only an example, replace $gitlab-url with the IP or domain of GitLab.
git remote set-url origin git@$gitlab-url:demo-quickstart/coderepo-deploy-demo-quickstart.git
git add .
git commit -m 'submit the kubernetes manifests.'
git push origin main -f
```

### Submit Pipeline Configuration

Clone the sample repository to your local machine.

```shell
git clone https://github.com/nautes-examples/user-pipeline.git
```

Replace variables in the pipeline configuration file `pipelines/main.yaml` in the code repository, including:

**$pipeline-runtime-name** should be replaced with the project pipeline runtime name, such as `pr-demo-quickstart`.

**$sc-repo-id** should be replaced with the source code repository ID, which you can find on the `Project` home page in the Gitlab console.

**$sc-repo-url** should be replaced with the SSH URL of the source code repository, which you can find on the `Project` home page in the Gitlab console, such as `git@$gitlab-url:demo-quickstart/coderepo-sc-demo-quickstart.git`.

**$deploy-repo-url** should be replaced with the SSH URL of the deployment configuration repository.  The method for finding SSH URL is similar to **$sc-repo-url**.

**$registry-url** should be replaced with the URL of the container image repository, such as `ghcr.io/nautes-labs`.

```yaml
apiVersion: tekton.dev/v1beta1
kind: PipelineRun
metadata:
  name: main-pipiline
spec:
  params:
  - name: REVISION
    value: main
  taskRunSpecs:
  - pipelineTaskName: git-clone-sourcecode
    taskServiceAccountName: nautes-sa
    metadata:
      annotations:
        vault.hashicorp.com/agent-inject: 'true'
        vault.hashicorp.com/agent-pre-populate-only: "true"
        vault.hashicorp.com/tls-secret: "ca"
        vault.hashicorp.com/ca-cert: "/vault/tls/ca.crt"
        vault.hashicorp.com/role: '$pipeline-runtime-name'
        vault.hashicorp.com/agent-run-as-user: '0' 
        vault.hashicorp.com/agent-run-as-group: '0'
        vault.hashicorp.com/agent-inject-secret-id_ecdsa: "git/data/gitlab/repo-$sc-repo-id/default/readonly"
        vault.hashicorp.com/secret-volume-path-id_ecdsa: "/root/.ssh"
        vault.hashicorp.com/agent-inject-perms-id_ecdsa: '0400'
        vault.hashicorp.com/agent-inject-template-id_ecdsa: |
          {{- with secret "git/data/gitlab/repo-$sc-repo-id/default/readonly" -}}
          {{ .Data.data.deploykey }}
          {{- end -}}
  - pipelineTaskName: git-clone-deployment
    taskServiceAccountName: nautes-sa
    metadata:
      annotations:
        vault.hashicorp.com/agent-inject: 'true'
        vault.hashicorp.com/agent-pre-populate-only: "true"
        vault.hashicorp.com/tls-secret: "ca"
        vault.hashicorp.com/ca-cert: "/vault/tls/ca.crt"
        vault.hashicorp.com/role: '$pipeline-runtime-name'
        vault.hashicorp.com/agent-run-as-user: '0' 
        vault.hashicorp.com/agent-run-as-group: '0'
        vault.hashicorp.com/agent-inject-secret-id_ecdsa: "git/data/gitlab/repo-$sc-repo-id/default/readwrite"
        vault.hashicorp.com/secret-volume-path-id_ecdsa: "/root/.ssh"
        vault.hashicorp.com/agent-inject-perms-id_ecdsa: '0400'
        vault.hashicorp.com/agent-inject-template-id_ecdsa: |
          {{- with secret "git/data/gitlab/repo-$sc-repo-id/default/readwrite" -}}
          {{ .Data.data.deploykey }}
          {{- end -}}
  - pipelineTaskName: manifest-update
    taskServiceAccountName: nautes-sa
    metadata:
      annotations:
        vault.hashicorp.com/agent-inject: 'true'
        vault.hashicorp.com/agent-pre-populate-only: "true"
        vault.hashicorp.com/tls-secret: "ca"
        vault.hashicorp.com/ca-cert: "/vault/tls/ca.crt"
        vault.hashicorp.com/role: '$pipeline-runtime-name'
        vault.hashicorp.com/agent-run-as-user: '0' 
        vault.hashicorp.com/agent-run-as-group: '0'
        vault.hashicorp.com/agent-inject-secret-id_ecdsa: "git/data/gitlab/repo-$sc-repo-id/default/readwrite"
        vault.hashicorp.com/secret-volume-path-id_ecdsa: "/root/.ssh"
        vault.hashicorp.com/agent-inject-perms-id_ecdsa: '0400'
        vault.hashicorp.com/agent-inject-template-id_ecdsa: |
          {{- with secret "git/data/gitlab/repo-$sc-repo-id/default/readwrite" -}}
          {{ .Data.data.deploykey }}
          {{- end -}}
  pipelineSpec:
    params:
      - name: REVISION
        type: string
        description: Revision to checkout. (branch, tag, sha, ref, etc...)
        default: ""
    tasks:
    - name: git-clone-sourcecode
      taskRef:
        name: git-clone
        kind: ClusterTask
      workspaces:
      - name: output
        workspace: source-volume
      params:
      - name: url
        value: $sc-repo-url
      - name: revision
        value: $(params.REVISION)
      - name: subdirectory
        value: sourcecode
    - name: git-clone-deployment
      runAfter:
      - git-clone-sourcecode
      taskRef:
        name: git-clone
        kind: ClusterTask
      workspaces:
      - name: output
        workspace: source-volume
      params:
      - name: url
        value: $deploy-repo-url
      - name: revision
        value: $(params.REVISION)
      - name: subdirectory
        value: deployment
    - name: mvn-build
      runAfter:
      - git-clone-deployment
      taskRef:
        name: maven
        kind: ClusterTask
      workspaces:
      - name: source
        workspace: source-volume
      - name: maven-settings
        workspace: empty-dir
      - name: maven-repository
        workspace: maven-repository-volume
      params:
      - name: GOALS
        value: 
          - -DskipTests
          - clean
          - install
          - -f
          - sourcecode/pom.xml
    - name: image-build
      runAfter:
      - mvn-build
      taskRef:
        name: kaniko
        kind: ClusterTask
      workspaces:
      - name: source
        workspace: source-volume
      - name: dockerconfig
        workspace: dockerconfig-volume
      params:
      - name: IMAGE
        value: $registry-url/devops-sample:0.0.1-$(tasks.git-clone-sourcecode.results.commit)
      - name: DOCKERFILE
        value: ./sourcecode/Dockerfile
      - name: CONTEXT
        value: ./sourcecode
    - name: manifest-update
      runAfter:
      - image-build
      taskRef:
        name: git-cli
        kind: ClusterTask
      workspaces:
      - name: source
        workspace: source-volume
      params:
      - name: BASE_IMAGE
        value: gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/git-init:v0.29.0
      - name: GIT_USER_NAME
        value: pipelinerobot
      - name: GIT_USER_EMAIL
        value: pipelinerobot@nautes.io
      - name: GIT_SCRIPT
        value: |
          cd deployment
          sed -i -e "s#ghcr.io/lanbingcloud/devops-sample.*#$(tasks.image-build.results.IMAGE_URL)#g" deployments/test/devops-sample.yaml 
          git add deployments/test/devops-sample.yaml
          git commit -a -m "automatic update by pipeline bot: $(tasks.image-build.results.IMAGE_URL)"
          git push origin HEAD:$(params.REVISION) --force
    workspaces:
    - name: source-volume
    - name: empty-dir
    - name: maven-repository-volume
    - name: dockerconfig-volume
  workspaces:
  - name: empty-dir
    emptyDir: {}
  - name: source-volume
    volumeClaimTemplate:
      spec:
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 50M
  - name: maven-repository-volume
    volumeClaimTemplate:
      spec:
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 500M
  - name: dockerconfig-volume
    configMap:
      name: registry-auth
```

Access [GitLab](installation.md#check-the-installation-results), and configure your GitLab account to have the force-push permission to the `main` branch of the [source code repository](#initialize-a-product). For more information, refer to [Allow Force Push to a Protected Branch](https://docs.gitlab.com/ee/user/project/protected_branches.html#allow-force-push-on-a-protected-branch).

Push the pipeline configuration files to the source code repository.

```Shell
# Change the URL of the remote repository 'origin' to that of the source code repository,
# the repository URL below is only an example, replace $gitlab-url with the IP or domain of GitLab.
git remote set-url origin git@$gitlab-url:demo-quickstart/coderepo-sc-demo-quickstart.git
git add .
git commit -m 'submit the pipeline configurations.'
git push origin main -f
```

## View Pipeline Results

### Pipeline

After you submit the pipeline configurations to the source code repository, Nautes will respond to the Webhook callback from the code repository, and trigger the pipelines in the cluster declared in the project pipeline runtime.

You can view the pipeline information in the Tekton Dashboard by using a browser to access `https://$tekonHost:$traefik-httpsNodePort`.

> Replace the $tekonHost variable with the tekonHost address of the runtime cluster. For more information, refer to `spec.tekonHost` in the property template in the [Register Physical Cluster](#register-physical-cluster) or [Register Virtual Cluster](#register-virtual-cluster) section, for example, `tekton.vcluster-aliyun.8.217.50.114.nip.io`.
>
> Replace the $traefik-httpsNodePort variable with the traefik port of the runtime cluster. For more information, refer to `spec.traefik.httpsNodePort` in the property template in the [Register Physical Cluster](#register-physical-cluster) or [Register Virtual Cluster](#register-virtual-cluster) section, for example, `30443`.

When you access the Tekton Dashboard, if you haven't logged into the GitLab in the current browser session, the action will trigger unified authentication. During the authentication process, you need to enter your GitLab account and password to log in. After successful login, the page will automatically redirect to the Tekton Dashboard.

### Image Repository

If the pipelines have been successfully executed, you can view the newly added images in the image repository (for example: `https://github.com/orgs/nautes-labs/packages`). To pull the images, you can use a similar command.

```shell
docker pull ghcr.io/nautes-labs/devops-sample:0.0.1-bdcdba83f17169db12e95bc9ff0592ace612016b
```

### Deployment Manifest

If the pipelines have been successfully executed, you can observe that the container image tags have been automatically updated to the versions containing the latest commit ID in the files within the deployment configuration repository (for example: `deployments/test/devops-sample.yaml`). The configuration snippet is as follows:

```yaml
spec:
  template:
    spec:
      containers:
        - name: ks-sample
          image: ghcr.io/nautes-labs/devops-sample:0.0.1-bdcdba83f17169db12e95bc9ff0592ace612016b
```
