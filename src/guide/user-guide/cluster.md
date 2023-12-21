---
footerLink: /guide/user-guide/cluster
title: 注册运行时集群
---
# 注册运行时集群

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解执行流水线和部署应用的主体流程和相关术语。

运行时集群用于承载应用的运行时。集群形态支持物理集群和虚拟集群。
结合多个分类维度，将集群细分为：`物理的部署运行时集群`、`物理的流水线运行时集群`、`宿主集群`、`虚拟的部署运行时集群`、`虚拟的流水线运行时集群`。对于不同类别的集群，需要安装对应组件类别的一系列组件，才能让集群具备相关能力。
每种组件类别至少包括一个组件，同时有且只有一个默认组件。例如，pipeline 组件类别包括了 Tekton Pipeline 和 Argo Workflows 组件（Argo Workflows 组件仅为示例），而 Tekton Pipeline 是默认组件。
注册集群时，Nautes 将根据集群类别查找组件类别，进一步安装所需组件。如果没有特别指定参数，将安装指定组件类别的默认组件。
此外，Nautes 还支持扩展其他组件以适应特定的业务需求。例如，对于 pipeline 类别扩展 Jenkins 组件，注册集群时指定 Jenkins 为所选组件，将注册安装了 Jenkins 的运行时集群（Jenkins 组件仅为示例）。

> 集群与组件类别的对应关系：
> 物理的部署运行时集群：指用于部署应用的物理集群。需安装 multi_tenant、secret_sync、gateway、deployment、progressive_delivery 等组件类别的一系列组件。
> 物理的流水线运行时集群：指用于运行流水线的物理集群。需安装 multi_tenant、secret_sync、gateway、deployment、event_listener、pipeline 等组件类别的一系列组件。
> 宿主集群：是负载虚拟集群的物理集群。需安装 gateway 组件类别的组件。
> 虚拟的部署运行时集群：指托管给宿主集群、用于部署应用的虚拟集群。需安装 multi_tenant、secret_sync、deployment、progressive_delivery 等组件类别的一系列组件。
> 虚拟的流水线运行时集群：指托管给宿主集群、用于运行流水线的虚拟集群。需安装 multi_tenant、secret_sync、deployment、event_listener、pipeline 等组件类别的一系列组件。
>
> 组件类别详情：
> multi_tenant：多租户，默认组件为 [HNC](https://github.com/kubernetes-sigs/hierarchical-namespaces)。
> secret_sync：密钥同步，默认组件为 [External Secrets](https://github.com/external-secrets/external-secrets)。
> gateway：网关，默认组件为 [Traefik](https://github.com/traefik/traefik)。
> deployment：部署，默认组件为 [Argo CD](https://github.com/argoproj/argo-cd)。
> progressive_delivery：渐进式发布，默认组件为 [Argo Rollouts](https://github.com/argoproj/argo-rollouts)。
> event_listener：事件监听，默认组件为 [Argo Events](https://github.com/argoproj/argo-events)。
> pipeline：流水线，默认组件为 [Tekton Pipeline](https://github.com/tektoncd/pipeline)。

支持通过 [命令行](run-a-pipeline.md#注册运行时集群) 和 API 两种方式注册运行时集群。

## 前提条件

### 创建 access token

您需要创建一个 access token，作为请求 API 的请求头。详情参考 [注册 GitLab 账号](run-a-pipeline.md#注册-gitlab-账号)。

### 导入证书

在使用 HTTPS 协议访问 Nautes API Server 之前，请先[导入证书](run-a-pipeline.md#导入证书)。

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
                # 选填项
                # 如果不填，将根据集群类型、集群用途和运行时类型安装对应组件类别的默认组件
                "components_list": {
                  # 组件类别
                  "multi_tenant": {
                    # 组件名称
                    "name": "hnc",
                    # 组件的命名空间
                    "namespace": "hnc-system"
                  },
                  "secret_sync": {
                    "name": "external-secrets",
                    "namespace": "external-secrets"
                  },
                  "gateway": {
                    "name": "traefik",
                    "namespace": "traefik",
                    # 选填项
                    # 组件的自定义参数，支持 key value 格式
                    "additions": {
                      # traefik 的内置参数，表示 HTTP、HTTPS 的自定义端口
                      "httpNodePort": "30080",
                      "httpsNodePort": "30443"
                    }
                  },
                  "deployment": {
                    "name": "argocd",
                    "namespace": "argocd"
                  },
                  "event_listener": {
                    "name": "argo-events",
                    "namespace": "argo-events"
                  },
                  "progressive_delivery": {
                    "name": "argo-rollouts",
                    "namespace": "argo-rollouts"
                  },                  
                  "pipeline": {
                    "name": "tekton",
                    "namespace": "tekton-pipelines"
                  }
                }, 
                # 选填项
                # 产品使用保留命名空间的配置：保留命名空间指集群内组件的安装空间，默认只有集群内组件有权限向保留命名空间部署资源
                # 例如默认只有 Argo CD 才能在 argocd 命名空间中部署资源
                # 使用产品名称替换变量 $product-name，表示该产品可以在指定的保留命名空间中部署资源，以满足部分特殊场景
                # 例如 Nautes 自安装时需要向 argocd 命名空间部署资源
                "reserved_namespaces_allowed_products": {
                  "tekton-pipelines": [
                    "$product-name"
                  ],
                  "argo-events": [
                    "$product-name"
                  ],
                  "argocd": [
                    "$product-name"
                  ],
                  "traefik": [
                    "$product-name"
                  ],
                  "external-secrets": [
                    "$product-name"
                  ],
                  "hnc-system": [
                    "$product-name"
                  ]
                },
                # 选填项
                # 产品部署集群级别资源（cluster-scoped）的配置：
                # 当资源范围超出某个命名空间时，需要使用集群级别资源
                # 例如，存储卷（PersistentVolume）、整个集群通用的角色和权限（ClusterRole 和 ClusterRoleBinding）、自定义资源定义（CRDs）等
                # 更多信息，参见 https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-uris
                # 使用产品名称替换变量 $product-name，表示该产品可以向当前集群部署指定的集群级别资源，下文代码段的资源仅为示例
                "product_allowed_cluster_resources": {
                  "$product-name": [
                    {
                      "kind": "ClusterRole",
                      "group": "authorization.k8s.io"
                    },
                    {
                      "kind": "ClusterRoleBinding",
                      "group": "authorization.k8s.io"
                    }
                  ]
                },
                # 集群的 kubeconfig 文件内容：使用物理集群的 kubeconfig 替换该变量，并且需要对 kubeconfig 以 Base64 方式编码。
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
                "components_list": {
                  "multi_tenant": {
                    "name": "hnc",
                    "namespace": "hnc-system"
                    "additions": {
                      "productResourceKustomizeFileFolder": "templates/pipelines",
                      "productResourceRevision": "main"
                      "syncResourceTypes": "tekton.dev/Pipeline"
                    }
                  },
                  "secret_sync": {
                    "name": "external-secrets",
                    "namespace": "external-secrets"
                  },
                  "gateway": {
                    "name": "traefik",
                    "namespace": "traefik",
                    "additions": {
                      "httpNodePort": "30080",
                      "httpsNodePort": "30443"
                    }
                  },
                  "deployment": {
                    "name": "argocd",
                    "namespace": "argocd"
                  },
                  "event_listener": {
                    "name": "argo-events",
                    "namespace": "argo-events"
                  },
                  "pipeline": {
                    "name": "tekton",
                    "namespace": "tekton-pipelines"
                  }
                },
                "reserved_namespaces_allowed_products": {
                  "tekton-pipelines": [
                    "demo-quickstart"
                  ],
                  "argo-events": [
                    "demo-quickstart"
                  ],
                  "argocd": [
                    "demo-quickstart"
                  ],
                  "traefik": [
                    "demo-quickstart"
                  ],
                  "external-secrets": [
                    "demo-quickstart"
                  ],
                  "hnc-system": [
                    "demo-quickstart"
                  ]
                },
                "product_allowed_cluster_resources": {
                  "demo-quickstart": [
                    {
                      "kind": "ClusterRole",
                      "group": "authorization.k8s.io"
                    },
                    {
                      "kind": "ClusterRoleBinding",
                      "group": "authorization.k8s.io"
                    }
                  ]
                },
                "kubeconfig": "YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2FrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRHTXlWbmtLWkcxV2VVeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJqTWxaNVpHMVdlVXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZG5Sa1JUZFNWVzFCU0hZeE9IZEVXREYyTDJwdWNXRkZVM05tY2pkdVVtNXdiVFZpWWpaME5tRUtSRFptWkhnME5uVlJZaXREWVdGalZYSlVNVlZ5Y1RWT1NUSk5USGhIU0M4eVMweEJMMlkwVDJWNFdqUnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVzEzTDFGSFNYYzFOMlZ0UWpobmFEaHdRVnBHQ21kclZHMXNRekIzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRkozUVhkU1FVbG5VMEZDWkRkTWRFVnhZblkzUTBwcVEyVkhhMWxqTDFacVVraDNObk5UU2tVS01ISkZWM1p5VkZGb1NGbERTVUpvWlhwUE9YUlRWVnB4VjNkbFZHazFTRlpUVUVoWU5uUm1SMkUwU2twa1RsTnVOMDFtYTBSTVpuTUtMUzB0TFMxRlRrUWdRMFZTVkVsR1NVTkJWRVV0TFMwdExRbz0KICAgIHNlcnZlcjogaHR0cHM6Ly8xMC4yMDQuMTE4LjIzOjY0NDMKICBuYW1lOiBkZWZhdWx0CmNvbnRleHRzOgotIGNvbnRleHQ6CiAgICBjbHVzdGVyOiBkZWZhdWx0CiAgICB1c2VyOiBkZWZhdWx0CiAgbmFtZTogZGVmYXVsdApjdXJyZW50LWNvbnRleHQ6IGRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBkZWZhdWx0CiAgdXNlcjoKICAgIGNsaWVudC1jZXJ0aWZpY2F0ZS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKclJFTkRRVlJsWjBGM1NVSkJaMGxKVDBNdlRVWm9kekZWU1hkM1EyZFpTVXR2V2tsNmFqQkZRWGRKZDBsNlJXaE5RamhIUVRGVlJVRjNkMWtLWVhwT2VreFhUbk5oVjFaMVpFTXhhbGxWUVhoT2FtY3lUVlJSZDA1RVl6Qk5RalJZUkZSSmVrMUVXWGRPZWtWNVRXcEZlRTVHYjFoRVZFa3dUVVJaZHdwT2FrVjVUV3BGZUU1R2IzZE5SRVZZVFVKVlIwRXhWVVZEYUUxUFl6TnNlbVJIVm5SUGJURm9Zek5TYkdOdVRYaEdWRUZVUW1kT1ZrSkJUVlJFU0U0MUNtTXpVbXhpVkhCb1drY3hjR0pxUWxwTlFrMUhRbmx4UjFOTk5EbEJaMFZIUTBOeFIxTk5ORGxCZDBWSVFUQkpRVUpEZG1GbGFrOVljMDlOVld0c2Qxb0tVMjVuTDFkWFR5OXpURTVYUkc5ck16RjNaM0E0ZGl0VlZXWjZiMjVTUkd0R1J6UkpLM1JZTlhwd1lVRjZUWGxzWm5kbVdXYzJhVVoxUm1remFXUmtLd3BRUmxwb2QwZDFhbE5FUWtkTlFUUkhRVEZWWkVSM1JVSXZkMUZGUVhkSlJtOUVRVlJDWjA1V1NGTlZSVVJFUVV0Q1oyZHlRbWRGUmtKUlkwUkJha0ZtQ2tKblRsWklVMDFGUjBSQlYyZENVU3RwY1haUVlWUXhSVzVxWlZBMFNsaHFXa3hTWVdkMU5uUnpWRUZMUW1kbmNXaHJhazlRVVZGRVFXZE9TRUZFUWtVS1FXbENNVkZ0UTJOeVJIWkdTVXhWTVVsM0swMWxhVVJrWkVSTVFraG9RVmRoT1VKMVQzTkNSRlpMVTBGNVowbG5TRWd5T1ZGNVVEZzFhRVpRVWtkNmRRcFFaRU5qZGpkVk4wMU5MMmxwT0c1emJHUXJUeTh5U1c4eVluYzlDaTB0TFMwdFJVNUVJRU5GVWxSSlJrbERRVlJGTFMwdExTMEtMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2VrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRGa3llSEFLV2xjMU1FeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJaTW5od1dsYzFNRXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZVhNM2MzSlpXRUZGY3pCUGEybHFXa3QwUjFoRVprMUhXbGh6TUdKeVNHeDRUMWR3UkdaMGQyY0tLMnhGTUdSYU5GSjRVMWhZVldoQ05FbzBaakIwWlVoWFJrNU5WbVUzYzFwak4ya3lOVEF3YldWb1VVVnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVkJ2Y1hKNk1tczVVa28wTTJvclExWTBNbE13Q2xkdlRIVnlZa1YzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRk5CUVhkU1VVbG9RVXhqUWxsbFJHRkVNVGMwWVZwYVVVMUNRbTUzTkhBdk5tWTVTMWhWYjJZS00ydHBSRkZYTlVOTFRXZ3pRV2xDZFdGUFIyNTJZbWwyYWpSRGVISlBja2d4V0VaU1VTOVZSMnRYWW10R1dFVXdlRXhXYzFWSlptcHJRVDA5Q2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBjbGllbnQta2V5LWRhdGE6IExTMHRMUzFDUlVkSlRpQkZReUJRVWtsV1FWUkZJRXRGV1MwdExTMHRDazFJWTBOQlVVVkZTVVo2VERZMlREWk1XR2t2TTNJelVFZEZZVFJNVW14bFVYb3liR1V3VTBSNGNGZFBWMWRNUnpaSWFtaHZRVzlIUTBOeFIxTk5ORGtLUVhkRlNHOVZVVVJSWjBGRlN6bHdOazAxWlhjMGVGTlRXRUpzUzJWRU9WcFpOeXQzY3pGWlQybFVabGhEUTI1NUx6VlNVaTlQYVdSRlQxRlZZbWRxTmdveFptNVBiRzlFVFhwTFZpOUNPV2xFY1VsWE5GZE1aVW94TXpRNFZtMUlRV0YzUFQwS0xTMHRMUzFGVGtRZ1JVTWdVRkpKVmtGVVJTQkxSVmt0TFMwdExRbz0="
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
                "components_list": {
                  "multi_tenant": {
                    "name": "hnc",
                    "namespace": "hnc-system"
                  },
                  "secret_sync": {
                    "name": "external-secrets",
                    "namespace": "external-secrets"
                  },
                  "gateway": {
                    "name": "traefik",
                    "namespace": "traefik",
                    "additions": {
                      "httpNodePort": "30080",
                      "httpsNodePort": "30443"
                    }
                  },
                  "deployment": {
                    "name": "argocd",
                    "namespace": "argocd"
                  },
                  "progressive_delivery": {
                    "name": "argo-rollouts",
                    "namespace": "argo-rollouts"
                  }
                },
                "reserved_namespaces_allowed_products": {
                  "argo-rollouts": [
                    "demo-quickstart"
                  ],
                  "argocd": [
                    "demo-quickstart"
                  ],
                  "traefik": [
                    "demo-quickstart"
                  ],
                  "external-secrets": [
                    "demo-quickstart"
                  ],
                  "hnc-system": [
                    "demo-quickstart"
                  ]
                },
                "product_allowed_cluster_resources": {
                  "demo-quickstart": [
                    {
                      "kind": "ClusterRole",
                      "group": "authorization.k8s.io"
                    },
                    {
                      "kind": "ClusterRoleBinding",
                      "group": "authorization.k8s.io"
                    }
                  ]
                },
                "kubeconfig": "YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2FrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRHTXlWbmtLWkcxV2VVeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJqTWxaNVpHMVdlVXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZG5Sa1JUZFNWVzFCU0hZeE9IZEVXREYyTDJwdWNXRkZVM05tY2pkdVVtNXdiVFZpWWpaME5tRUtSRFptWkhnME5uVlJZaXREWVdGalZYSlVNVlZ5Y1RWT1NUSk5USGhIU0M4eVMweEJMMlkwVDJWNFdqUnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVzEzTDFGSFNYYzFOMlZ0UWpobmFEaHdRVnBHQ21kclZHMXNRekIzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRkozUVhkU1FVbG5VMEZDWkRkTWRFVnhZblkzUTBwcVEyVkhhMWxqTDFacVVraDNObk5UU2tVS01ISkZWM1p5VkZGb1NGbERTVUpvWlhwUE9YUlRWVnB4VjNkbFZHazFTRlpUVUVoWU5uUm1SMkUwU2twa1RsTnVOMDFtYTBSTVpuTUtMUzB0TFMxRlRrUWdRMFZTVkVsR1NVTkJWRVV0TFMwdExRbz0KICAgIHNlcnZlcjogaHR0cHM6Ly8xMC4yMDQuMTE4LjIzOjY0NDMKICBuYW1lOiBkZWZhdWx0CmNvbnRleHRzOgotIGNvbnRleHQ6CiAgICBjbHVzdGVyOiBkZWZhdWx0CiAgICB1c2VyOiBkZWZhdWx0CiAgbmFtZTogZGVmYXVsdApjdXJyZW50LWNvbnRleHQ6IGRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBkZWZhdWx0CiAgdXNlcjoKICAgIGNsaWVudC1jZXJ0aWZpY2F0ZS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKclJFTkRRVlJsWjBGM1NVSkJaMGxKVDBNdlRVWm9kekZWU1hkM1EyZFpTVXR2V2tsNmFqQkZRWGRKZDBsNlJXaE5RamhIUVRGVlJVRjNkMWtLWVhwT2VreFhUbk5oVjFaMVpFTXhhbGxWUVhoT2FtY3lUVlJSZDA1RVl6Qk5RalJZUkZSSmVrMUVXWGRPZWtWNVRXcEZlRTVHYjFoRVZFa3dUVVJaZHdwT2FrVjVUV3BGZUU1R2IzZE5SRVZZVFVKVlIwRXhWVVZEYUUxUFl6TnNlbVJIVm5SUGJURm9Zek5TYkdOdVRYaEdWRUZVUW1kT1ZrSkJUVlJFU0U0MUNtTXpVbXhpVkhCb1drY3hjR0pxUWxwTlFrMUhRbmx4UjFOTk5EbEJaMFZIUTBOeFIxTk5ORGxCZDBWSVFUQkpRVUpEZG1GbGFrOVljMDlOVld0c2Qxb0tVMjVuTDFkWFR5OXpURTVYUkc5ck16RjNaM0E0ZGl0VlZXWjZiMjVTUkd0R1J6UkpLM1JZTlhwd1lVRjZUWGxzWm5kbVdXYzJhVVoxUm1remFXUmtLd3BRUmxwb2QwZDFhbE5FUWtkTlFUUkhRVEZWWkVSM1JVSXZkMUZGUVhkSlJtOUVRVlJDWjA1V1NGTlZSVVJFUVV0Q1oyZHlRbWRGUmtKUlkwUkJha0ZtQ2tKblRsWklVMDFGUjBSQlYyZENVU3RwY1haUVlWUXhSVzVxWlZBMFNsaHFXa3hTWVdkMU5uUnpWRUZMUW1kbmNXaHJhazlRVVZGRVFXZE9TRUZFUWtVS1FXbENNVkZ0UTJOeVJIWkdTVXhWTVVsM0swMWxhVVJrWkVSTVFraG9RVmRoT1VKMVQzTkNSRlpMVTBGNVowbG5TRWd5T1ZGNVVEZzFhRVpRVWtkNmRRcFFaRU5qZGpkVk4wMU5MMmxwT0c1emJHUXJUeTh5U1c4eVluYzlDaTB0TFMwdFJVNUVJRU5GVWxSSlJrbERRVlJGTFMwdExTMEtMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2VrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRGa3llSEFLV2xjMU1FeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJaTW5od1dsYzFNRXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZVhNM2MzSlpXRUZGY3pCUGEybHFXa3QwUjFoRVprMUhXbGh6TUdKeVNHeDRUMWR3UkdaMGQyY0tLMnhGTUdSYU5GSjRVMWhZVldoQ05FbzBaakIwWlVoWFJrNU5WbVUzYzFwak4ya3lOVEF3YldWb1VVVnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVkJ2Y1hKNk1tczVVa28wTTJvclExWTBNbE13Q2xkdlRIVnlZa1YzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRk5CUVhkU1VVbG9RVXhqUWxsbFJHRkVNVGMwWVZwYVVVMUNRbTUzTkhBdk5tWTVTMWhWYjJZS00ydHBSRkZYTlVOTFRXZ3pRV2xDZFdGUFIyNTJZbWwyYWpSRGVISlBja2d4V0VaU1VTOVZSMnRYWW10R1dFVXdlRXhXYzFWSlptcHJRVDA5Q2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBjbGllbnQta2V5LWRhdGE6IExTMHRMUzFDUlVkSlRpQkZReUJRVWtsV1FWUkZJRXRGV1MwdExTMHRDazFJWTBOQlVVVkZTVVo2VERZMlREWk1XR2t2TTNJelVFZEZZVFJNVW14bFVYb3liR1V3VTBSNGNGZFBWMWRNUnpaSWFtaHZRVzlIUTBOeFIxTk5ORGtLUVhkRlNHOVZVVVJSWjBGRlN6bHdOazAxWlhjMGVGTlRXRUpzUzJWRU9WcFpOeXQzY3pGWlQybFVabGhEUTI1NUx6VlNVaTlQYVdSRlQxRlZZbWRxTmdveFptNVBiRzlFVFhwTFZpOUNPV2xFY1VsWE5GZE1aVW94TXpRNFZtMUlRV0YzUFQwS0xTMHRMUzFGVGtRZ1JVTWdVRkpKVmtGVVJTQkxSVmt0TFMwdExRbz0="
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
                # 选填项
                # 如果不填，将根据集群类型、集群用途和运行时类型安装对应组件类别的默认组件
                "components_list": {
                  "gateway": {
                    "name": "traefik",
                    "namespace": "traefik",
                    "additions": {
                      "httpNodePort": "30080",
                      "httpsNodePort": "30443"
                    }
                  }
                },
                # 集群的 kubeconfig 文件内容：使用宿主集群的 kubeconfig 替换该变量，并且需要对 kubeconfig 以 Base64 方式编码。
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
                "components_list": {
                  "gateway": {
                    "name": "traefik",
                    "namespace": "traefik",
                    "additions": {
                      "httpNodePort": "30080",
                      "httpsNodePort": "30443"
                    }
                  }
                },
                "kubeconfig": "YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2FrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRHTXlWbmtLWkcxV2VVeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJqTWxaNVpHMVdlVXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZG5Sa1JUZFNWVzFCU0hZeE9IZEVXREYyTDJwdWNXRkZVM05tY2pkdVVtNXdiVFZpWWpaME5tRUtSRFptWkhnME5uVlJZaXREWVdGalZYSlVNVlZ5Y1RWT1NUSk5USGhIU0M4eVMweEJMMlkwVDJWNFdqUnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVzEzTDFGSFNYYzFOMlZ0UWpobmFEaHdRVnBHQ21kclZHMXNRekIzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRkozUVhkU1FVbG5VMEZDWkRkTWRFVnhZblkzUTBwcVEyVkhhMWxqTDFacVVraDNObk5UU2tVS01ISkZWM1p5VkZGb1NGbERTVUpvWlhwUE9YUlRWVnB4VjNkbFZHazFTRlpUVUVoWU5uUm1SMkUwU2twa1RsTnVOMDFtYTBSTVpuTUtMUzB0TFMxRlRrUWdRMFZTVkVsR1NVTkJWRVV0TFMwdExRbz0KICAgIHNlcnZlcjogaHR0cHM6Ly8xMC4yMDQuMTE4LjIzOjY0NDMKICBuYW1lOiBkZWZhdWx0CmNvbnRleHRzOgotIGNvbnRleHQ6CiAgICBjbHVzdGVyOiBkZWZhdWx0CiAgICB1c2VyOiBkZWZhdWx0CiAgbmFtZTogZGVmYXVsdApjdXJyZW50LWNvbnRleHQ6IGRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBkZWZhdWx0CiAgdXNlcjoKICAgIGNsaWVudC1jZXJ0aWZpY2F0ZS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKclJFTkRRVlJsWjBGM1NVSkJaMGxKVDBNdlRVWm9kekZWU1hkM1EyZFpTVXR2V2tsNmFqQkZRWGRKZDBsNlJXaE5RamhIUVRGVlJVRjNkMWtLWVhwT2VreFhUbk5oVjFaMVpFTXhhbGxWUVhoT2FtY3lUVlJSZDA1RVl6Qk5RalJZUkZSSmVrMUVXWGRPZWtWNVRXcEZlRTVHYjFoRVZFa3dUVVJaZHdwT2FrVjVUV3BGZUU1R2IzZE5SRVZZVFVKVlIwRXhWVVZEYUUxUFl6TnNlbVJIVm5SUGJURm9Zek5TYkdOdVRYaEdWRUZVUW1kT1ZrSkJUVlJFU0U0MUNtTXpVbXhpVkhCb1drY3hjR0pxUWxwTlFrMUhRbmx4UjFOTk5EbEJaMFZIUTBOeFIxTk5ORGxCZDBWSVFUQkpRVUpEZG1GbGFrOVljMDlOVld0c2Qxb0tVMjVuTDFkWFR5OXpURTVYUkc5ck16RjNaM0E0ZGl0VlZXWjZiMjVTUkd0R1J6UkpLM1JZTlhwd1lVRjZUWGxzWm5kbVdXYzJhVVoxUm1remFXUmtLd3BRUmxwb2QwZDFhbE5FUWtkTlFUUkhRVEZWWkVSM1JVSXZkMUZGUVhkSlJtOUVRVlJDWjA1V1NGTlZSVVJFUVV0Q1oyZHlRbWRGUmtKUlkwUkJha0ZtQ2tKblRsWklVMDFGUjBSQlYyZENVU3RwY1haUVlWUXhSVzVxWlZBMFNsaHFXa3hTWVdkMU5uUnpWRUZMUW1kbmNXaHJhazlRVVZGRVFXZE9TRUZFUWtVS1FXbENNVkZ0UTJOeVJIWkdTVXhWTVVsM0swMWxhVVJrWkVSTVFraG9RVmRoT1VKMVQzTkNSRlpMVTBGNVowbG5TRWd5T1ZGNVVEZzFhRVpRVWtkNmRRcFFaRU5qZGpkVk4wMU5MMmxwT0c1emJHUXJUeTh5U1c4eVluYzlDaTB0TFMwdFJVNUVJRU5GVWxSSlJrbERRVlJGTFMwdExTMEtMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2VrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRGa3llSEFLV2xjMU1FeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJaTW5od1dsYzFNRXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZVhNM2MzSlpXRUZGY3pCUGEybHFXa3QwUjFoRVprMUhXbGh6TUdKeVNHeDRUMWR3UkdaMGQyY0tLMnhGTUdSYU5GSjRVMWhZVldoQ05FbzBaakIwWlVoWFJrNU5WbVUzYzFwak4ya3lOVEF3YldWb1VVVnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVkJ2Y1hKNk1tczVVa28wTTJvclExWTBNbE13Q2xkdlRIVnlZa1YzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRk5CUVhkU1VVbG9RVXhqUWxsbFJHRkVNVGMwWVZwYVVVMUNRbTUzTkhBdk5tWTVTMWhWYjJZS00ydHBSRkZYTlVOTFRXZ3pRV2xDZFdGUFIyNTJZbWwyYWpSRGVISlBja2d4V0VaU1VTOVZSMnRYWW10R1dFVXdlRXhXYzFWSlptcHJRVDA5Q2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBjbGllbnQta2V5LWRhdGE6IExTMHRMUzFDUlVkSlRpQkZReUJRVWtsV1FWUkZJRXRGV1MwdExTMHRDazFJWTBOQlVVVkZTVVo2VERZMlREWk1XR2t2TTNJelVFZEZZVFJNVW14bFVYb3liR1V3VTBSNGNGZFBWMWRNUnpaSWFtaHZRVzlIUTBOeFIxTk5ORGtLUVhkRlNHOVZVVVJSWjBGRlN6bHdOazAxWlhjMGVGTlRXRUpzUzJWRU9WcFpOeXQzY3pGWlQybFVabGhEUTI1NUx6VlNVaTlQYVdSRlQxRlZZbWRxTmdveFptNVBiRzlFVFhwTFZpOUNPV2xFY1VsWE5GZE1aVW94TXpRNFZtMUlRV0YzUFQwS0xTMHRMUzFGVGtRZ1JVTWdVRkpKVmtGVVJTQkxSVmt0TFMwdExRbz0="
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
                # 虚拟集群配置：virtual 类型集群才有此属性
                "vcluster": {
                  # API SERVER 端口号
                  "https_node_port": $api-server-port,
                },
                # 选填项
                # 如果不填，将根据集群类型、集群用途和运行时类型安装对应组件类别的默认组件
                "components_list": {
                  # 组件类别
                  "multi_tenant": {
                    # 组件名称
                    "name": "hnc",
                    # 组件的命名空间
                    "namespace": "hnc-system"
                    # 选填项
                    # 组件的自定义参数，支持 key value 格式
                    # 以 hnc 为例，通过定义参数，将从产品的 default.project 代码库（即产品配置库）同步指定类型的资源到运行时集群
                    # 例如，当运行时集群安装了 Tekton Pipeline 组件，并从产品的 default.project 代码库同步了 pipeline 资源到该集群，表示该产品可以在该集群中运行基于 pipeline 资源的一系列 task
                    "additions": {
                      # 在 default.project 代码库中的 kustomization 文件路径
                      # 使用 kustomization 文件路径替换变量 $kustomization-path
                      "productResourceKustomizeFileFolder": "$kustomization-path",
                      # 在 default.project 代码库中获取 kustomization 文件的分支，默认值为 main
                      # 使用 kustomization 文件的所属分支替换变量 $kustomization-revison
                      "productResourceRevision": "$kustomization-revison"
                      # 需要同步的资源类型
                      # 格式为："group/resouceType1,group/resourceType02"，多种资源类型用逗号分隔
                      # 使用遵循格式要求的资源类型替换变量 $resource-types
                      "syncResourceTypes": "$resource-types"
                    }
                  },
                  "secret_sync": {
                    "name": "external-secrets",
                    "namespace": "external-secrets"
                  },
                  "deployment": {
                    "name": "argocd",
                    "namespace": "argocd"
                  },
                  "event_listener": {
                    "name": "argo-events",
                    "namespace": "argo-events"
                  },
                  "progressive_delivery": {
                    "name": "argo-rollouts",
                    "namespace": "argo-rollouts"
                  },                  
                  "pipeline": {
                    "name": "tekton",
                    "namespace": "tekton-pipelines"
                  }
                }, 
                # 选填项
                # 集群保留命名空间的配置：保留命名空间指集群内组件的安装空间，使用产品名称替换变量 $product-name，表示该产品可以向指定命名空间部署资源
                # 例如 Nautes 自安装时需要向 argocd 命名空间部署资源
                "reserved_namespaces_allowed_products": {
                  "tekton-pipelines": [
                    "$product-name"
                  ],
                  "argo-events": [
                    "$product-name"
                  ],
                  "argo-rollouts": [
                    "$product-name"
                  ],
                  "argocd": [
                    "$product-name"
                  ],
                  "traefik": [
                    "$product-name"
                  ],
                  "external-secrets": [
                    "$product-name"
                  ],
                  "hnc-system": [
                    "$product-name"
                  ]
                },
                # 选填项
                # 集群级别资源的产品配置：使用产品名称替换变量 $product-name，表示该产品可以向集群部署指定的集群级别资源
                "product_allowed_cluster_resources": {
                  "$product-name": [
                    {
                      "kind": "ClusterRole",
                      "group": "authorization.k8s.io"
                    },
                    {
                      "kind": "ClusterRoleBinding",
                      "group": "authorization.k8s.io"
                    }
                  ]
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
                "vcluster": {
                  "https_node_port": "31456"
                },
                "components_list": {
                  "multi_tenant": {
                    "name": "hnc",
                    "namespace": "hnc-system"
                    "additions": {
                      "productResourceKustomizeFileFolder": "templates/pipelines",
                      "productResourceRevision": "main"
                      "syncResourceTypes": "tekton.dev/Pipeline"
                    }
                  },
                  "secret_sync": {
                    "name": "external-secrets",
                    "namespace": "external-secrets"
                  },
                  "deployment": {
                    "name": "argocd",
                    "namespace": "argocd"
                  },
                  "event_listener": {
                    "name": "argo-events",
                    "namespace": "argo-events"
                  },
                  "pipeline": {
                    "name": "tekton",
                    "namespace": "tekton-pipelines"
                  }
                },
                "reserved_namespaces_allowed_products": {
                  "tekton-pipelines": [
                    "demo-quickstart"
                  ],
                  "argo-events": [
                    "demo-quickstart"
                  ],
                  "argocd": [
                    "demo-quickstart"
                  ],
                  "traefik": [
                    "demo-quickstart"
                  ],
                  "external-secrets": [
                    "demo-quickstart"
                  ],
                  "hnc-system": [
                    "demo-quickstart"
                  ]
                },
                "product_allowed_cluster_resources": {
                  "demo-quickstart": [
                    {
                      "kind": "ClusterRole",
                      "group": "authorization.k8s.io"
                    },
                    {
                      "kind": "ClusterRoleBinding",
                      "group": "authorization.k8s.io"
                    }
                  ]
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
                "vcluster": {
                  "https_node_port": "31456"
                },
                "components_list": {
                  "multi_tenant": {
                    "name": "hnc",
                    "namespace": "hnc-system"
                  },
                  "secret_sync": {
                    "name": "external-secrets",
                    "namespace": "external-secrets"
                  },
                  "deployment": {
                    "name": "argocd",
                    "namespace": "argocd"
                  },
                  "progressive_delivery": {
                    "name": "argo-rollouts",
                    "namespace": "argo-rollouts"
                  },  
                },
                "reserved_namespaces_allowed_products": {
                  "argo-rollouts": [
                    "demo-quickstart"
                  ],
                  "argocd": [
                    "demo-quickstart"
                  ],
                  "external-secrets": [
                    "demo-quickstart"
                  ],
                  "hnc-system": [
                    "demo-quickstart"
                  ]
                },
                "product_allowed_cluster_resources": {
                  "demo-quickstart": [
                    {
                      "kind": "ClusterRole",
                      "group": "authorization.k8s.io"
                    },
                    {
                      "kind": "ClusterRoleBinding",
                      "group": "authorization.k8s.io"
                    }
                  ]
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
