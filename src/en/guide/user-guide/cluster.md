---
footerLink: /guide/user-guide/cluster
title: Register Runtime Cluster
---
# Register Runtime Cluster

Before starting this section, please ensure that you have read the  [Main Process](main-process.md) section to understand the main process and related terminology for deploying applications in Nautes.

Runtime clusters are used to host the runtime environment for applications. The supported cluster types include physical clusters and virtual clusters.

Support both [Command Line](deploy-an-application.md#register-runtime-cluster)  and  API for registering runtime clusters. 

## Prerequisites

### Create access token

After GitLab installation, you need to register an account and create a  [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) with the scopes: api, read_api, read_repository, and write_repository. 

The access token will be used for GitLab API request headers. 


### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol,  you need to [import certificates](deploy-an-application.md#import-certificates).

## Register Physical Cluster（API）
1. Generate an API request example by API definition `Cluster_SaveCluster` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server
    # Replace the variable $gitlab-access-token with the GitLab access token
    # Replace the variable $cluster_name with the cluster name
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/clusters/$cluster_name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
      # Cluster API SERVER URL. Replace the variable with the address of the physical cluster.
      "api_server": $api_server,
      # Cluster kind. Currently only supports Kubernetes.
      "cluster_kind": "kubernetes",
      # Cluster type: virtual or physical
      "cluster_type": $cluster_type,
      # Cluster usage: host or worker
      "usage": $usage,
      # ArgoCD domain. Replace the variable $cluster_ip with the IP of the physical cluster.
      "argocdHost": "argocd.cluster-demo-$suffix.$cluster_ip.nip.io"
      # Traefik configuration
      "traefik": {
        "http_node_port": "30080",
        "https_node_port": "30443"
      },
      # Content of the kubeconfig file of the cluster. Replace the variable with the kubeconfig of the physical cluster.
      "kubeconfig": $kubeconfig
    }'
```

The request example after replacing the variables is shown below: 

```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-physical' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
      -d '{
      "api_server": "https://8.217.50.114:6443",
      "cluster_kind": "kubernetes",
      "cluster_type": "physical",
      "usage": "worker",
      "argocd_host": "argocd.host-worker-aliyun-0412.8.217.50.114.nip.io",
      "traefik": {
        "http_node_port": "30080",
        "https_node_port": "30443"
      },
      "kubeconfig": |
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
    }'
```

2. Use the curl command or other tools to execute the API request to register a physical cluster.    
After the request is successful, the physical cluster will be registered as a deployment runtime cluster to the tenant management cluster, and components such as ArgoCD, ArgoRollouts, ExternalSecret, HNC, and Vault-agent will be installed in the physical cluster. For the example of the physical cluster resource file, refer to the physical cluster property example  in the [Register Physical Cluster](deploy-an-application.md#register-physical-cluster) section.

> If your account is a member of the tenant configuration repository and has write access to the `main` branch, you can register runtime clusters.


## Register Virtual Cluster（API）
1. Generate an API request example by API definition `Cluster_SaveCluster` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server
    # Replace the variable $gitlab-access-token with the GitLab access token
    # Replace the variable $cluster_name with the cluster name
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/clusters/$cluster_name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
      # Cluster API SERVER URL. Replace the variable with the address of the host cluster.
      "api_server": $api_server,
      # Cluster kind. Currently only supports Kubernetes.
      "cluster_kind": "kubernetes",
      # Cluster type: virtual or physical
      "cluster_type": $cluster_type,
      # Cluster usage: host or worker
      "usage": $usage,
      # Traefik configuration
      "traefik": {
        "http_node_port": "30080",
        "https_node_port": "30443"
      },
      # Content of the kubeconfig file of the cluster. Replace the variable with the kubeconfig of the host cluster.
      "kubeconfig": $kubeconfig
    }'
```

The request example after replacing the variables is shown below: 

```Shell
curl -X 'POST' \
  'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
  -d '{
  "api_server": "https://8.217.50.114:6443",
  "cluster_kind": "kubernetes",
  "cluster_type": "physical",
  "usage": "host",
  "traefik": {
    "http_node_port": "30080",
    "https_node_port": "30443"
  },
  "kubeconfig": | 
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
}'
```

2. Use the curl command or other tools to execute the API request to register a host cluster. 
After the request is successful, the host cluster will be registered to the tenant management cluster, and components such as traefik  will be installed in the host cluster. For the example of the host cluster resource file, refer to the host cluster property example in the [Register Virtual Cluster](deploy-an-application.md#register-virtual-cluster) section.
3. Generate an API request example by API definition `Cluster_SaveCluster` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server
    # Replace the variable $gitlab-access-token with the GitLab access token
    # Replace the variable $cluster_name with the cluster name
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/clusters/$cluster_name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
      # Cluster API SERVER URL. Replace the parameter with the format 'https://$hostcluster-ip:$api-server-port', where $hostcluster-ip refers to the IP of the host cluster and $api-server-port refers to the API SERVER port of the virtual cluster.
      "api_server": $api_server,
      # Cluster kind: Currently only supports Kubernetes
      "cluster_kind": "kubernetes",
      # Cluster type: virtual or physical
      "cluster_type": $cluster_type,
      # Cluster usage: host or worker
      "usage": $usage,
      # Host cluster: the property is only available for virtual type clusters. Replace the parameter with the name of the host cluster.
      "host_cluster": $host_cluster,
      # ArgoCD domain. Replace the variable $cluster_ip with the IP of the host cluster.
      "argocd_host": "argocd.cluster-demo-$suffix.$cluster_ip.nip.io",
      # Virtual cluster configuration: the property is only available for virtual type clusters.
      "vcluster": {
         # API SERVER port 
        "https_node_port": $api_server_port,
      }
    }'
```

The request example after replacing the variables is shown below: 

```Shell
curl -X 'POST' \
  'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-virtual' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
  -d '{
  "api_server": "https://8.217.50.114:31456",
  "cluster_kind": "kubernetes",
  "cluster_type": "virtual",
  "usage": "worker",
  "host_cluster": "cluster-host",
  "argocd_host": "argocd.cluster-virtual.8.217.50.114.nip.io",
  "vcluster": {
    "https_node_port": "31456"
  }
}'
```

4. Use the curl command or other tools to execute the API request to register a virtual cluster. 
After the request is successful, the virtual cluster will be registered as a deployment runtime cluster to the tenant management cluster, and components such as ArgoCD, ArgoRollouts, ExternalSecret, HNC, and Vault-agent will be installed in the virtual cluster. For the example of the virtual cluster resource file, refer to the virtual cluster property example  in the  [Register Virtual Cluster](deploy-an-application.md#register-virtual-cluster) section.

> If your account is a member of the tenant configuration repository and has write access to the `main` branch, you can register runtime clusters.


## Delete Physical Cluster（API）

> Please ensure that a physical cluster has been successfully registered.
>
> Before deleting the cluster, please ensure that the product configuration manifest has been successfully deleted.  For more information, refer to the [Delete Product Configuration Manifest (Command-Line)](clean-environment.md#delete-runtime-environment)  section or the deletion sections (API) in [Maintain Deployment Runtime](deployment-runtime.md), [Maintain Environment](environment.md), [Maintain Code Repository](code-repo.md), [Maintain Project](project.md), [Maintain Product](product.md).


1. Generate an API request example by API definition `Cluster_DeleteCluster` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/clusters/$cluster_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below: 

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-physical' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

2. Use the curl command or other tools to execute the API request.  
After the request is successful, the physical cluster and the cluster resource file in the tenant configuration repository will be deleted.

> If your account is a member of the tenant configuration repository and has write access to the `main` branch, you can delete runtime clusters.

## Delete Virtual Cluster（API）
> Please ensure that a virtual cluster has been successfully registered. 
>
> Before deleting the cluster, please ensure that the product configuration manifest has been successfully deleted.  

1. Generate an API request example by API definition `Cluster_DeleteCluster` and add the access token as a request header. The API request example is similar to [Delete Physical Cluster](#delete-physical-clusterapi):

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-virtual' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

2. Use the curl command or other tools to execute the API request.  
After the request is successful, the virtual cluster and the cluster resource file in the tenant configuration repository will be deleted.

3. Generate an API request example by API definition `Cluster_DeleteCluster` and add the access token as a request header. The API request example is similar to [Delete Physical Cluster](#delete-physical-clusterapi):

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

4. Use the curl command or other tools to execute the API request.  
After the request is successful, the host cluster and the cluster resource file in the tenant configuration repository will be deleted.

> If your account is a member of the tenant configuration repository and has write access to the `main` branch, you can delete runtime clusters.
