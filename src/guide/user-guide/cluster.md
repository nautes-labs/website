---
footerLink: /guide/user-guide/cluster
title: 注册运行时集群
---
# 注册运行时集群

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解在 Nautes 中部署应用的主体流程和相关术语。

运行时集群用于承载应用的运行时环境。集群形态支持物理集群和虚拟集群。

支持通过 [命令行](run-a-pipeline.md#注册运行时集群) 和 API 两种方式注册运行时集群。

## 前提条件

### 创建 access token

您需要创建一个 access token，作为请求 API 的请求头。详情参考 [注册 GitLab 账号](run-a-pipeline.md#注册-gitlab-账号)。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，请[导入证书](run-a-pipeline.md#导入证书)。

## 注册物理集群（API）

### 生成注册物理集群的 API 请求

通过接口定义 `Cluster_SaveCluster` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab access token
    # 替换变量 $cluster-name 为集群名称
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/clusters/$cluster-name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
        # 集群的 API SERVER URL。使用物理集群的 server 地址替换该变量
        "api_server": $api-server,
        # 集群种类：目前只支持 kubernetes
        "cluster_kind": "kubernetes",
        # 集群类型：virtual或physical
        "cluster_type": $cluster-type,
        # 集群用途：host或worker
        "usage": $usage,
        # 运行时类型：pipeline（流水线运行时）或者 deployment（部署运行时）
        "worker_type": $worker-type
        # 主域名，使用物理集群的 IP 替换变量 $cluster-ip
        "primary_domain": "$cluster-ip.nip.io"
        # tekton 域名：当 worker_type 是 pipeline 时才需要填写该属性，使用物理集群的 IP 替换变量 $cluster-ip
        "tekton_host": "tekton.physical-worker-$suffix.$cluster-ip.nip.io"
        # argocd 域名：$cluster-name 替换为集群名称,$cluster-ip 替换为集群IP
        "argocd_host": "argocd.$cluster-name.$cluster-ip.nip.io",
        # traefik 配置
        "traefik": {
          "http_node_port": "30080",
          "https_node_port": "30443"
        },
        # 集群的 kubeconfig 文件内容：使用物理集群的 kubeconfig 替换该变量
        "kubeconfig": $kubeconfig
    }'
```

替换变量后部署运行时集群的请求示例如下：

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
      "worker_type": "deployment",
      "primary_domain": "8.217.50.114.nip.io",
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

### 执行注册物理集群的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以注册物理集群。

请求成功后，将向租户配置库写入物理集群的资源文件，并根据资源文件向租户管理集群注册物理集群作为运行时集群。注册成功后，将在物理集群中安装 ArgoCD、Tekton、ExternalSecret、HNC、Vault-agent 等组件。

> 只有当您的账号是租户配置库的成员，并且具备 main 分支的写入权限，才可以注册运行时集群。

## 注册虚拟集群（API）

注册虚拟集群时需要先将物理集群注册为宿主集群，再在宿主集群上注册虚拟集群。

### 生成注册宿主集群的 API 请求

通过接口定义 `Cluster_SaveCluster` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab access token
    # 替换变量 $cluster-name 为集群名称
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/clusters/$cluster-name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
        # 集群的 API SERVER URL，使用宿主集群的 server 地址替换该变量
        "api_server": $api-server,
        # 集群种类：目前只支持 kubernetes
        "cluster_kind": "kubernetes",
        # 集群类型：virtual或physical
        "cluster_type": $cluster-type,
        # 集群用途：host或worker
        "usage": $usage,
        # 主域名，使用物理集群的 IP 替换变量 $cluster-ip
        "primary_domain": "$cluster-ip.nip.io"
        # traefik 配置
        "traefik": {
          "http_node_port": "30080",
          "https_node_port": "30443"
        },
        # 集群的 kubeconfig 文件内容，使用宿主集群的 kubeconfig 替换该变量
        "kubeconfig": $kubeconfig
      }'
```

替换变量后的请求示例如下：

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
  "primary_domain": "8.217.50.114.nip.io",
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

### 执行注册宿主集群的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以注册宿主集群。

请求成功后，将向租户配置库写入宿主集群的资源文件，并根据资源文件向租户管理集群注册宿主集群。注册成功后，将在宿主集群中安装 Traefik 等组件。

### 生成注册虚拟集群的 API 请求

通过接口定义 `Cluster_SaveCluster` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab access token
    # 替换变量 $cluster-name 为集群名称
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/clusters/$cluster-name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
        # 集群的 API SERVER URL，使用 https://$hostcluster-ip:$api-server-port 格式替换参数，其中 $hostcluster-ip 指宿主集群的IP，$api-server-port 指虚拟集群的 API Server 端口
        "api_server": $api-server,
        # 集群种类：目前只支持 kubernetes
        "cluster_kind": "kubernetes",
        # 集群类型：virtual或physical
        "cluster_type": $cluster-type,
        # 集群用途：host或worker
        "usage": $usage,
        # 运行时类型：pipeline（流水线运行时）或者 deployment（部署运行时）
        "worker_type": $worker_type,
        # 所属宿主集群：virtual类型集群才有此属性，使用宿主集群的名称替换参数
        "host_cluster": $host-cluster,
        # 主域名，使用宿主集群的 IP 替换变量 $cluster-ip
        "primary_domain": "$cluster-ip.nip.io"
        # tekton 域名：当 worker_type 是 pipeline 时才需要填写该属性，使用物理集群的 IP 替换变量 $cluster-ip
        "tekton_host": "tekton.vcluster-$suffix.$cluster-ip.nip.io"
        # argocd 域名：$cluster-name 替换为集群名称,$cluster-ip 替换为宿主集群IP
        "argocd_host": "argocd.$cluster-name.$cluster-ip.nip.io",
        # 虚拟集群配置：virtual类型集群才有此属性
        "vcluster": {
          # API SERVER 端口号
          "https_node_port": $api-server-port,
        }
    }'
```

替换变量后的部署运行时集群的请求示例如下：

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
  "worker_type": "pipeline",
  "host_cluster": "cluster-host",
  "primary_domain": "8.217.50.114.nip.io",
  "argocd_host": "argocd.vcluster-virtual.8.217.50.114.nip.io",
  "vcluster": {
    "https_node_port": "31456"
  }
}'
```

### 执行注册虚拟集群的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以注册虚拟集群。

请求成功后，将向租户配置库写入虚拟集群的资源文件，并根据资源文件向租户管理集群注册虚拟集群作为运行时集群。注册成功后，将在虚拟集群中安装 ArgoCD、Tekton、ExternalSecret、HNC、Vault-agent 等组件。

> 只有当您的账号是租户配置库的成员，并且具备 main 分支的写入权限，才可以注册运行时集群。

## 删除物理集群（API）

> 请确保已成功注册物理集群。
>
> 在删除集群之前请先[删除运行时(命令行)](clean-environment.md#删除运行时)，或者参考[删除部署运行时](deployment-runtime.md#删除部署运行时api)、[删除流水线运行时](project-pipeline-runtime.md#删除流水线运行时api)、[删除环境](environment.md#删除环境api)、 [删除代码库](code-repo.md#删除代码库api)、[删除项目](project.md#删除项目api)、[删除产品](product.md#删除产品api)等 API 接口。

### 生成删除物理集群的 API 请求

通过接口定义 `Cluster_DeleteCluster` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/clusters/$cluster-name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-physical' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除物理集群的 API 请求

使用 curl 命令或者其他工具执行 API 请求。

请求成功后，将删除物理集群，以及在租户配置库的集群资源文件。

> 只有当您的账号是租户配置库的成员，并且具备 main 分支的写入权限，才可以删除运行时集群。

## 删除虚拟集群（API）

> 请确保已成功注册虚拟集群。
>
> 在删除集群之前请先删除产品配置清单。

### 生成删除虚拟集群的 API 请求

通过接口定义 `Cluster_DeleteCluster` 生成 API 请求示例，并添加 access token 作为请求头。API请求示例与[删除物理集群](#删除物理集群api)类似：

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-virtual' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除虚拟集群的 API 请求

使用 curl 命令或者其他工具执行 API 请求。
请求成功后，将删除虚拟集群，以及在租户配置库中的集群资源文件。

### 生成删除宿主集群的 API 请求

通过接口定义 `Cluster_DeleteCluster` 生成 API 请求示例，并添加 access token 作为请求头。API请求示例与[删除物理集群](#删除物理集群api)类似：

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除宿主集群的 API 请求

使用 curl 命令或者其他工具执行 API 请求。

请求成功后，将删除宿主集群，以及在租户配置库中的集群资源文件。
> 只有当您的账号是租户配置库的成员，并且具备 main 分支的写入权限，才可以删除运行时集群。
