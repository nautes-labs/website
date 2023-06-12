---
footerLink: /guide/user-guide/cluster
title: 注册运行时集群
---
# 注册运行时集群

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解执行流水线和部署应用的主体流程和相关术语。

运行时集群用于承载应用的运行时。集群形态支持物理集群和虚拟集群。

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
                # 集群类型：virtual 或 physical
                "cluster_type": $cluster-type,
                # 集群用途：host 或 worker
                "usage": $usage,
                # 运行时类型：pipeline（流水线运行时）或者 deployment（部署运行时）
                "worker_type": $worker-type,
                # 主域名，使用物理集群的 IP 替换变量 $cluster-ip
                "primary_domain": "$cluster-ip.nip.io",
                # tekton 域名：当 worker_type 是 pipeline 时才需要填写该属性，使用物理集群的 IP 替换变量 $cluster-ip
                "tekton_host": "tekton.$cluster-name.$cluster-ip.nip.io",
                # argocd 域名：使用物理集群的 IP 替换变量 $cluster-ip
                "argocd_host": "argocd.$cluster-name.$cluster-ip.nip.io",
                # traefik 配置
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                # 集群的 kubeconfig 文件内容：使用物理集群的 kubeconfig 替换该变量，并且 kubeconfig 需要转义换行符
                "kubeconfig": $kubeconfig
            }'
```

替换变量后流水线运行时集群的请求示例如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/physical-worker-pipeline' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:6443",
                "cluster_kind": "kubernetes",
                "cluster_type": "physical",
                "usage": "worker",
                "worker_type": "pipeline",
                "primary_domain": "8.217.50.114.nip.io",
                "tekton_host": "tekton.physical-worker-pipeline.8.217.50.114.nip.io",
                "argocd_host": "argocd.physical-worker-pipeline.8.217.50.114.nip.io",
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                "kubeconfig": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkakNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFRdnRkRTdSVW1BSHYxOHdEWDF2L2pucWFFU3NmcjduUm5wbTViYjZ0NmEKRDZmZHg0NnVRYitDYWFjVXJUMVVycTVOSTJNTHhHSC8yS0xBL2Y0T2V4WjRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVW13L1FHSXc1N2VtQjhnaDhwQVpGCmdrVG1sQzB3Q2dZSUtvWkl6ajBFQXdJRFJ3QXdSQUlnU0FCZDdMdEVxYnY3Q0pqQ2VHa1ljL1ZqUkh3NnNTSkUKMHJFV3ZyVFFoSFlDSUJoZXpPOXRTVVpxV3dlVGk1SFZTUEhYNnRmR2E0SkpkTlNuN01ma0RMZnMKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n    server: https://10.204.118.23:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrRENDQVRlZ0F3SUJBZ0lJT0MvTUZodzFVSXd3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamcyTVRRd05EYzBNQjRYRFRJek1EWXdOekV5TWpFeE5Gb1hEVEkwTURZdwpOakV5TWpFeE5Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJDdmFlak9Yc09NVWtsd1oKU25nL1dXTy9zTE5XRG9rMzF3Z3A4ditVVWZ6b25SRGtGRzRJK3RYNXpwYUF6TXlsZndmWWc2aUZ1RmkzaWRkKwpQRlpod0d1alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUStpcXZQYVQxRW5qZVA0SlhqWkxSYWd1NnRzVEFLQmdncWhrak9QUVFEQWdOSEFEQkUKQWlCMVFtQ2NyRHZGSUxVMUl3K01laURkZERMQkhoQVdhOUJ1T3NCRFZLU0F5Z0lnSEgyOVF5UDg1aEZQUkd6dQpQZENjdjdVN01NL2lpOG5zbGQrTy8ySW8yYnc9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFReXM3c3JZWEFFczBPa2lqWkt0R1hEZk1HWlhzMGJySGx4T1dwRGZ0d2cKK2xFMGRaNFJ4U1hYVWhCNEo0ZjB0ZUhXRk5NVmU3c1pjN2kyNTAwbWVoUUVvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVVBvcXJ6Mms5Uko0M2orQ1Y0MlMwCldvTHVyYkV3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUxjQlllRGFEMTc0YVpaUU1CQm53NHAvNmY5S1hVb2YKM2tpRFFXNUNLTWgzQWlCdWFPR252Yml2ajRDeHJPckgxWEZSUS9VR2tXYmtGWEUweExWc1VJZmprQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUZ6TDY2TDZMWGkvM3IzUEdFYTRMUmxlUXoybGUwU0R4cFdPV1dMRzZIamhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFSzlwNk01ZXc0eFNTWEJsS2VEOVpZNyt3czFZT2lUZlhDQ255LzVSUi9PaWRFT1FVYmdqNgoxZm5PbG9ETXpLVi9COWlEcUlXNFdMZUoxMzQ4Vm1IQWF3PT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo="
            }'
```

替换变量后部署运行时集群的请求示例如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/physical-worker-deployment' \
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
                "argocd_host": "argocd.physical-worker-deployment.8.217.50.114.nip.io",
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                "kubeconfig": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkakNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFRdnRkRTdSVW1BSHYxOHdEWDF2L2pucWFFU3NmcjduUm5wbTViYjZ0NmEKRDZmZHg0NnVRYitDYWFjVXJUMVVycTVOSTJNTHhHSC8yS0xBL2Y0T2V4WjRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVW13L1FHSXc1N2VtQjhnaDhwQVpGCmdrVG1sQzB3Q2dZSUtvWkl6ajBFQXdJRFJ3QXdSQUlnU0FCZDdMdEVxYnY3Q0pqQ2VHa1ljL1ZqUkh3NnNTSkUKMHJFV3ZyVFFoSFlDSUJoZXpPOXRTVVpxV3dlVGk1SFZTUEhYNnRmR2E0SkpkTlNuN01ma0RMZnMKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n    server: https://10.204.118.23:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrRENDQVRlZ0F3SUJBZ0lJT0MvTUZodzFVSXd3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamcyTVRRd05EYzBNQjRYRFRJek1EWXdOekV5TWpFeE5Gb1hEVEkwTURZdwpOakV5TWpFeE5Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJDdmFlak9Yc09NVWtsd1oKU25nL1dXTy9zTE5XRG9rMzF3Z3A4ditVVWZ6b25SRGtGRzRJK3RYNXpwYUF6TXlsZndmWWc2aUZ1RmkzaWRkKwpQRlpod0d1alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUStpcXZQYVQxRW5qZVA0SlhqWkxSYWd1NnRzVEFLQmdncWhrak9QUVFEQWdOSEFEQkUKQWlCMVFtQ2NyRHZGSUxVMUl3K01laURkZERMQkhoQVdhOUJ1T3NCRFZLU0F5Z0lnSEgyOVF5UDg1aEZQUkd6dQpQZENjdjdVN01NL2lpOG5zbGQrTy8ySW8yYnc9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFReXM3c3JZWEFFczBPa2lqWkt0R1hEZk1HWlhzMGJySGx4T1dwRGZ0d2cKK2xFMGRaNFJ4U1hYVWhCNEo0ZjB0ZUhXRk5NVmU3c1pjN2kyNTAwbWVoUUVvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVVBvcXJ6Mms5Uko0M2orQ1Y0MlMwCldvTHVyYkV3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUxjQlllRGFEMTc0YVpaUU1CQm53NHAvNmY5S1hVb2YKM2tpRFFXNUNLTWgzQWlCdWFPR252Yml2ajRDeHJPckgxWEZSUS9VR2tXYmtGWEUweExWc1VJZmprQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUZ6TDY2TDZMWGkvM3IzUEdFYTRMUmxlUXoybGUwU0R4cFdPV1dMRzZIamhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFSzlwNk01ZXc0eFNTWEJsS2VEOVpZNyt3czFZT2lUZlhDQ255LzVSUi9PaWRFT1FVYmdqNgoxZm5PbG9ETXpLVi9COWlEcUlXNFdMZUoxMzQ4Vm1IQWF3PT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo="
            }'
```

### 执行注册物理集群的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以注册物理集群。

请求成功后，将向租户配置库写入物理集群的资源文件，并根据资源文件向租户管理集群注册物理集群作为运行时集群。注册成功后，将在物理集群中安装 ArgoCD、ArgoRollouts、Tekton、ExternalSecret、HNC、Vault-agent 等组件。

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
                # 集群类型：virtual 或 physical
                "cluster_type": $cluster-type,
                # 集群用途：host 或 worker
                "usage": $usage,
                # 主域名，使用物理集群的 IP 替换变量 $cluster-ip
                "primary_domain": "$cluster-ip.nip.io",
                # traefik 配置
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                # 集群的 kubeconfig 文件内容，使用宿主集群的 kubeconfig 替换该变量，并且 kubeconfig 需要转义换行符
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
                "kubeconfig": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkakNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFRdnRkRTdSVW1BSHYxOHdEWDF2L2pucWFFU3NmcjduUm5wbTViYjZ0NmEKRDZmZHg0NnVRYitDYWFjVXJUMVVycTVOSTJNTHhHSC8yS0xBL2Y0T2V4WjRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVW13L1FHSXc1N2VtQjhnaDhwQVpGCmdrVG1sQzB3Q2dZSUtvWkl6ajBFQXdJRFJ3QXdSQUlnU0FCZDdMdEVxYnY3Q0pqQ2VHa1ljL1ZqUkh3NnNTSkUKMHJFV3ZyVFFoSFlDSUJoZXpPOXRTVVpxV3dlVGk1SFZTUEhYNnRmR2E0SkpkTlNuN01ma0RMZnMKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n    server: https://10.204.118.23:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrRENDQVRlZ0F3SUJBZ0lJT0MvTUZodzFVSXd3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamcyTVRRd05EYzBNQjRYRFRJek1EWXdOekV5TWpFeE5Gb1hEVEkwTURZdwpOakV5TWpFeE5Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJDdmFlak9Yc09NVWtsd1oKU25nL1dXTy9zTE5XRG9rMzF3Z3A4ditVVWZ6b25SRGtGRzRJK3RYNXpwYUF6TXlsZndmWWc2aUZ1RmkzaWRkKwpQRlpod0d1alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUStpcXZQYVQxRW5qZVA0SlhqWkxSYWd1NnRzVEFLQmdncWhrak9QUVFEQWdOSEFEQkUKQWlCMVFtQ2NyRHZGSUxVMUl3K01laURkZERMQkhoQVdhOUJ1T3NCRFZLU0F5Z0lnSEgyOVF5UDg1aEZQUkd6dQpQZENjdjdVN01NL2lpOG5zbGQrTy8ySW8yYnc9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFReXM3c3JZWEFFczBPa2lqWkt0R1hEZk1HWlhzMGJySGx4T1dwRGZ0d2cKK2xFMGRaNFJ4U1hYVWhCNEo0ZjB0ZUhXRk5NVmU3c1pjN2kyNTAwbWVoUUVvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVVBvcXJ6Mms5Uko0M2orQ1Y0MlMwCldvTHVyYkV3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUxjQlllRGFEMTc0YVpaUU1CQm53NHAvNmY5S1hVb2YKM2tpRFFXNUNLTWgzQWlCdWFPR252Yml2ajRDeHJPckgxWEZSUS9VR2tXYmtGWEUweExWc1VJZmprQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUZ6TDY2TDZMWGkvM3IzUEdFYTRMUmxlUXoybGUwU0R4cFdPV1dMRzZIamhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFSzlwNk01ZXc0eFNTWEJsS2VEOVpZNyt3czFZT2lUZlhDQ255LzVSUi9PaWRFT1FVYmdqNgoxZm5PbG9ETXpLVi9COWlEcUlXNFdMZUoxMzQ4Vm1IQWF3PT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo="
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
                # 集群的 API SERVER URL，使用 https://$hostcluster-ip:$api-server-port 格式替换参数，
                # 其中 $hostcluster-ip 指宿主集群的IP，$api-server-port 指虚拟集群的 API Server 端口
                "api_server": $api-server,
                # 集群种类：目前只支持 kubernetes
                "cluster_kind": "kubernetes",
                # 集群类型：virtual 或 physical
                "cluster_type": $cluster-type,
                # 集群用途：host 或 worker
                "usage": $usage,
                # 运行时类型：pipeline（流水线运行时）或者 deployment（部署运行时）
                "worker_type": $worker_type,
                # 所属宿主集群：virtual 类型集群才有此属性，使用宿主集群的名称替换参数
                "host_cluster": $host-cluster,
                # 主域名，使用宿主集群的 IP 替换变量 $cluster-ip
                "primary_domain": "$cluster-ip.nip.io",
                # tekton 域名：当 worker_type 是 pipeline 时才需要填写该属性，使用物理集群的 IP 替换变量 $cluster-ip
                "tekton_host": "tekton.$cluster-name.$cluster-ip.nip.io",
                # argocd 域名：使用物理集群的 IP 替换变量 $cluster-ip
                "argocd_host": "argocd.$cluster-name.$cluster-ip.nip.io",
                # 虚拟集群配置：virtual 类型集群才有此属性
                "vcluster": {
                  # API SERVER 端口号
                  "https_node_port": $api-server-port,
                }
            }'
```

替换变量后的流水线运行时集群的请求示例如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/virtual-worker-pipeline' \
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
                "teoken_host": "tekton.virtual-worker-pipeline.8.217.50.114.nip.io",
                "argocd_host": "argocd.virtual-worker-pipeline.8.217.50.114.nip.io",
                "vcluster": {
                  "https_node_port": "31456"
                }
            }'
```

替换变量后的部署运行时集群的请求示例如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/virtual-worker-deployment' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:31456",
                "cluster_kind": "kubernetes",
                "cluster_type": "virtual",
                "usage": "worker",
                "worker_type": "deployment",
                "host_cluster": "cluster-host",
                "primary_domain": "8.217.50.114.nip.io",
                "argocd_host": "argocd.virtual-worker-deployment.8.217.50.114.nip.io",
                "vcluster": {
                  "https_node_port": "31456"
                }
            }'
```

### 执行注册虚拟集群的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以注册虚拟集群。

请求成功后，将向租户配置库写入虚拟集群的资源文件，并根据资源文件向租户管理集群注册虚拟集群作为运行时集群。注册成功后，将在虚拟集群中安装 ArgoCD、ArgoRollouts、Tekton、ExternalSecret、HNC、Vault-agent 等组件。

> 只有当您的账号是租户配置库的成员，并且具备 main 分支的写入权限，才可以注册运行时集群。

## 删除物理集群（API）

> 请确保已成功注册物理集群。
>
> 在删除集群之前请先删除产品配置清单。详情参考 [删除运行时(命令行)](clean-environment.md#删除运行时)，或者参考[删除部署运行时](deployment-runtime.md#删除部署运行时api)、[删除流水线运行时](project-pipeline-runtime.md#删除流水线运行时api)、[删除环境](environment.md#删除环境api)、[删除代码库](code-repo.md#删除代码库api)、[删除项目](project.md#删除项目api)、[删除产品](product.md#删除产品api)等 API 接口。

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
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/physical-worker-deployment' \
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
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/virtual-worker-pipeline' \
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
