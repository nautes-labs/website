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

在使用 HTTPS 协议访问 Nautes API Server 之前，请先[导入证书](run-a-pipeline.md#导入证书)。

## 注册物理集群（API）

### 生成注册物理集群的 API 请求

通过接口定义 `Cluster_SaveCluster` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab access token
    # 替换变量 $cluster-name 为集群名称
    # 替换变量 $product-name 为产品名称，如果没有产品名称可以先设定一个，再接下来创建产品时使用这里设定的产品名称，比如：demo-quickstart
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
                # 可选，集群自定义组件，通过组件的类型选择一个或多个组件安装到集群中
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
                # 可选，集群内的组件也可选，如果需要使用组件的保留命名空间，使用产品名称替换：$product-name
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
                # 可选，集群内的组件也可选，如果需要使用集群级别的权限，使用产品名称替换：$product-name
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
                # 可选，集群自定义组件，通过组件的类型选择一个或多个组件安装到集群中
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
    # 替换变量 $product-name 为产品名称，如果没有产品名称可以先设定一个，再接下来创建产品时使用这里设定的产品名称，比如：demo-quickstart    
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
                # 可选，集群自定义组件，通过组件的类型选择一个或多个组件安装到集群中
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
                  "progressive_delivery": {
                    "name": "argo-rollouts",
                    "namespace": "argo-rollouts"
                  },                  
                  "pipeline": {
                    "name": "tekton",
                    "namespace": "tekton-pipelines"
                  }
                }, 
                # 可选，集群内的组件也可选，如果需要使用组件的保留命名空间，使用产品名称替换：$product-name
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
                # 可选，如果需要使用集群级别的权限，使用产品名称替换：$product-name
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
