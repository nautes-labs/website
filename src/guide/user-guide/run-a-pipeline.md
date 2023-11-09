---
footerLink: /guide/user-guide/run-a-pipeline
title: 执行一条流水线
---
# 执行一条流水线

本文档描述了将一个全新的 Kubernetes 集群注册到 Nautes 中，并在此集群上执行一条 CI 流水线的过程。

## 前提条件

### 注册 GitLab 账号

GitLab 安装完成后，您需要注册一个账号，并创建 [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) ，设置 access token 的权限范围：api、read_api、read_repository 和 write_repository。

此账号需要调用[管理集群](#注册运行时集群)的 API，您需要将账号加入到租户配置库的成员列表，并保证此账号可以向 main 分支推送代码。

另外，您还需在 GitLab 中[添加 SSH key](https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account)，以便通过 SSH 协议向代码库推送代码。

### 导入证书

在使用 HTTPS 协议访问 Nautes API Server 之前，请先从[安装结果](installation.md#查看安装结果)下载 `ca.crt` 证书，并将 `ca.crt` 添加到执行 API 的服务器的授信证书列表。

### 准备服务器

您需要准备一台用于安装 Kubernetes 集群的服务器。如果您已经有一套 Kubernetes 集群（需要公网 IP），可以省略该步骤。

下文将以阿里云为例描述如何准备服务器并安装一个 K3s 集群。

创建 ECS 云服务器，详情参考 [云服务器 ECS](https://help.aliyun.com/document_detail/25422.html)。服务器安装成功后，在服务器上安装 K3s，命令如下：

```Shell
# 替换 $PUBLIC_IP 为服务器的公网 IP
# 替换 $DEX_SERVER 为安装机 /opt/nautes/out/service 目录下的 oauth_url
# 下载安装机 /opt/nautes/out/pki 目录下的 ca.crt 证书，并存储到服务器的 /etc/ssl/certs/ 目录
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.21.14+k3s1 INSTALL_K3S_EXEC="--tls-san $PUBLIC_IP" sh -s - server --disable servicelb --disable traefik --disable metrics-server --kube-apiserver-arg=oidc-issuer-url=$DEX_SERVER --kube-apiserver-arg=oidc-client-id=nautes --kube-apiserver-arg=oidc-ca-file=/etc/ssl/certs/ca.crt --kube-apiserver-arg=oidc-groups-claim=groups -p ${HOME}/.kube
mkdir -p ${HOME}/.kube
/bin/cp -f /etc/rancher/k3s/k3s.yaml ${HOME}/.kube/k3s-config
/bin/cp -f /etc/rancher/k3s/k3s.yaml ${HOME}/.kube/config
export KUBECONFIG=${HOME}/.kube/config
```

K3s安装完成后，需要开放入方向`6443`端口。详情参考 [安全组规则](https://help.aliyun.com/document_detail/25471.htm?spm=a2c4g.353191.0.0.557a235djwgvC9#concept-sm5-2wz-xdb)。

## 安装

以阿里云为例描述在公有云部署 Nautes 的过程，详情参考 [安装](installation.md)。

## 注册运行时集群

注册运行时集群用于把已准备好的 Kubernetes 集群托管给租户管理集群，并由租户管理集群初始化集群的相关配置。初始化完成后的集群可以承载应用的运行时。

注册运行时集群支持的集群形态包括物理集群和虚拟集群。

当您的应用的运行时需要更高的性能、隔离性和可靠性时，建议使用[物理集群](#注册物理集群)。而对于其他环境，例如开发测试环境和试用环境等，可以使用[虚拟集群](#注册虚拟集群)。

### 注册物理集群

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-cluster-physical-worker-pipeline.yaml` 下物理集群属性模板的变量，包括 `$cluster-name`、`$api-server`、`$cluster-ip`、`$product-name` 和 `$kubeconfig`。

```Shell
# 查看物理集群的 kubeconfig
cat ${HOME}/.kube/config
```

```yaml
# 物理集群属性模板
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  # 集群名称
  name: "$cluster-name"
  # 集群的 API SERVER URL。使用物理集群的 server 地址替换该变量
  apiServer: "$api-server"
  # 集群种类：目前只支持 kubernetes
  clusterKind: "kubernetes"
  # 集群类型：virtual或physical
  clusterType: "physical"
  # 集群用途：host或worker
  usage: "worker"
  # 运行时类型：流水线运行时
  workerType: "pipeline"
  # 主域名，使用物理集群的 IP 替换变量 $cluster-ip
  primaryDomain: "$cluster-ip.nip.io"
  # componentsList 可选，集群自定义组件，通过组件的类型选择一个或多个组件安装到集群中
  componentsList:
    multiTenant:
      name: hnc
      namespace: hnc-system
    secretSync:
      name: external-secrets
      namespace: external-secrets
    gateway:
      name: traefik
      namespace: traefik
      # 可选，组件属性
      additions:
        httpNodePort: "30080"
        httpsNodePort: "30443"
    deployment:
      name: argocd
      namespace: argocd
    eventListener:
      name: argo-events
      namespace: argo-events
    pipeline:
      name: tekton
      namespace: tekton-pipelines    
  # reservedNamespacesAllowedProducts 可选，如果需要使用组件的保留命名空间，使用产品名称替换：$product-name
  # 如果没有产品名称可以先设定一个，再接下来创建产品时使用这里设定的产品名称，比如：demo-quickstart  
  reservedNamespacesAllowedProducts:
    tekton-pipelines :
      - $product-name
    argo-events:
      - $product-name
    argocd:
      - $product-name
    traefik:
      - $product-name
    external-secrets:
      - $product-name
    hnc-system:
      - $product-name   
  # productAllowedClusterResources 可选，如果需要使用集群级别的权限，使用产品名称替换：$product-name
  productAllowedClusterResources:
    $product-name:
      - kind: ClusterRole
        group: authorization.k8s.io
      - kind: ClusterRoleBinding
        group: authorization.k8s.io    
  # 集群的 kubeconfig 文件内容：使用物理集群的 kubeconfig 替换该变量
  kubeconfig: |
    $kubeconfig
```

替换变量后的物理集群属性示例如下：

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
  componentsList:
    multiTenant:
      name: hnc
      namespace: hnc-system
    secretSync:
      name: external-secrets
      namespace: external-secrets
    gateway:
      name: traefik
      namespace: traefik
      additions:
        httpNodePort: "30080"
        httpsNodePort: "30443"
    deployment:
      name: argocd
      namespace: argocd
    eventListener:
      name: argo-events
      namespace: argo-events
    pipeline:
      name: tekton
      namespace: tekton-pipelines    
  reservedNamespacesAllowedProducts:
    tekton-pipelines:
      - demo-quickstart
    argo-events:
      - demo-quickstart
    argocd:
      - demo-quickstart
    traefik:
      - demo-quickstart
    external-secrets:
      - demo-quickstart
    hnc-system:
      - demo-quickstart    
  productAllowedClusterResources:
    demo-quickstart:
      - kind: ClusterRole
        group: authorization.k8s.io
      - kind: ClusterRoleBinding
        group: authorization.k8s.io
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

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.4.0)，执行以下命令以注册物理集群。

```Shell
# examples/demo-cluster-physical-worker-pipeline.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes apply -f examples/demo-cluster-physical-worker-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

### 注册虚拟集群

注册虚拟集群时需要先将物理集群注册为宿主集群，再在宿主集群上注册虚拟集群。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-cluster-host.yaml` 下的宿主集群属性模板的变量，包括 `$cluster-name`、`$api-server` 和 `$kubeconfig`。

```Shell
# 查看宿主集群的 kubeconfig
cat ${HOME}/.kube/config
```

```yaml
# 宿主集群属性模板
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  # 集群名称
  name: "$cluster-name"
  # 集群的 API SERVER URL，使用宿主集群的 server 地址替换该变量
  apiServer: "$api-server"
  # 集群种类：目前只支持 kubernetes
  clusterKind: "kubernetes"
  # 集群类型：virtual或physical
  clusterType: "physical"
  # 集群用途：host或worker
  usage: "host"
  # 主域名，使用物理集群的 IP 替换变量 $cluster-ip
  primaryDomain: "$cluster-ip.nip.io"
  # componentsList 可选，集群自定义组件，通过组件的类型选择一个或多个组件安装到集群中
  componentsList:
    gateway:
      name: traefik
      namespace: traefik
      additions:
        httpNodePort: "30080"
        httpsNodePort: "30443"
  # 集群的 kubeconfig 文件内容：使用宿主集群的 kubeconfig 替换该变量
  kubeconfig: |
    $kubeconfig
```

替换变量后的宿主集群属性示例如下：

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
  componentsList:
    gateway:
      name: traefik
      namespace: traefik
      additions:
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

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.4.0)，执行以下命令，将注册宿主集群。

```Shell
# examples/demo-cluster-host.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes apply -f examples/demo-cluster-host.yaml -t $gitlab-access-token -s $api-server-address
```

替换位于相对路径 `examples/demo-cluster-virtual-worker-pipeline.yaml` 下的虚拟集群属性模板的变量，包括 `$cluster-name`、`$api-server`、`$cluster-ip`、`$host-cluster`、`$product-name` 和 `$api-server-port`。

```yaml
# 虚拟集群属性模板
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  # 集群名称
  name: "$cluster-name"
  # 集群的 API SERVER URL，使用 https://$hostcluster-ip:$api-server-port 格式替换参数，其中 $hostcluster-ip 指宿主集群的IP，$api-server-port 指虚拟集群的 API Server 端口
  apiServer: "$api-server"
  # 集群种类：目前只支持 kubernetes
  clusterKind: "kubernetes"
  # 集群类型：virtual或physical
  clusterType: "virtual"
  # 集群用途：host或worker
  usage: "worker"
  # 运行时类型：流水线运行时
  workerType: "pipeline"
  # 所属宿主集群：virtual类型集群才有此属性，使用宿主集群的名称替换参数
  hostCluster: "$host-cluster"
  # 主域名，使用宿主集群的 IP 替换变量 $cluster-ip
  primaryDomain: "$cluster-ip.nip.io"
  # 虚拟集群配置：virtual类型集群才有此属性
  vcluster: 
    # API SERVER 端口号
    httpsNodePort: "$api-server-port"
  # componentsList 可选，集群自定义组件，通过组件的类型选择一个或多个组件安装到集群中
  componentsList:
    multiTenant:
      name: hnc
      namespace: hnc-system
      additions:
        ProductResourcePathPipeline: templates/pipelines
        ProductResourceRevision: main
        SyncResourceTypes: tekton.dev/Pipeline
    secretSync:
      name: external-secrets
      namespace: external-secrets
    gateway:
      name: traefik
      namespace: traefik
      # 可选，组件属性
      additions:
        httpNodePort: "30080"
        httpsNodePort: "30443"
    deployment:
      name: argocd
      namespace: argocd
    eventListener:
      name: argo-events
      namespace: argo-events
    pipeline:
      name: tekton
      namespace: tekton-pipelines    
  # reservedNamespacesAllowedProducts 可选，如果需要使用组件的保留命名空间，使用产品名称替换：$product-name
  reservedNamespacesAllowedProducts:
    tekton-pipelines:
      - $product-name
    argo-events:
      - $product-name
    argocd:
      - $product-name
    traefik:
      - $product-name
    external-secrets:
      - $product-name
    hnc-system:
      - $product-name
    oauth2-proxy:
      - $product-name       
  # productAllowedClusterResources 可选，如果需要使用集群级别的权限，使用产品名称替换：$product-name
  productAllowedClusterResources:
    $product-name:
      - kind: ClusterRole
        group: authorization.k8s.io
      - kind: ClusterRoleBinding
        group: authorization.k8s.io
```

替换变量后的虚拟集群属性示例如下：

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
  vcluster: 
    httpsNodePort: "31456"
  componentsList:
    multiTenant:
      name: hnc
      namespace: hnc-system
      additions:
        ProductResourcePathPipeline: templates/pipelines
        ProductResourceRevision: main
        SyncResourceTypes: tekton.dev/Pipeline
    secretSync:
      name: external-secrets
      namespace: external-secrets
    gateway:
      name: traefik
      namespace: traefik
      additions:
        httpNodePort: "30080"
        httpsNodePort: "30443"
    deployment:
      name: argocd
      namespace: argocd
    eventListener:
      name: argo-events
      namespace: argo-events
    pipeline:
      name: tekton
      namespace: tekton-pipelines    
  reservedNamespacesAllowedProducts:
    tekton-pipelines:
      - demo-quickstart    
    argo-rollouts:
      - demo-quickstart
    argocd:
      - demo-quickstart
    traefik:
      - demo-quickstart
    external-secrets:
      - demo-quickstart
    hnc-system:
      - demo-quickstart
  productAllowedClusterResources:
    demo-quickstart:
      - kind: ClusterRole
        group: authorization.k8s.io
      - kind: ClusterRoleBinding
        group: authorization.k8s.io
```

执行以下命令，将注册该虚拟集群。

```Shell
# examples/demo-cluster-virtual-worker-pipeline.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes apply -f examples/demo-cluster-virtual-worker-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

## 初始化产品

初始化产品是指创建 Nautes 产品模型中的各个实体，并在运行时集群中初始化一套用于执行流水线的资源，包括 namespace、serviceaccount、secret、以及 argoevents 和 tekton 相关资源等。

下文将描述通过命令行初始化产品的相关实体，包括产品、项目、代码库、代码库权限、环境以及流水线运行时等。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-product.yaml` 下模板的变量，包括 `$suffix`。

> 这里创建了两个代码库：“源码库”是用于存储项目源码和流水线配置文件，“部署配置库”是用于存储项目的部署清单文件。

```yaml
# 产品
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Product
spec:
  name: demo-$suffix
  git:
    gitlab:
      # 产品名称
      name: demo-$suffix
      # 产品路径
      path: demo-$suffix
      visibility: private
      description: demo-$suffix
      parentID: 0
---
# 项目
apiVersion: "nautes.resource.nautes.io/v1alpha1"
kind: Project
spec:
  # 项目名称
  name: project-demo-$suffix
  # 项目的所属产品
  product: demo-$suffix
  language: golang
---
# 源码库
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  # 代码库名称
  name: coderepo-sc-demo-$suffix
  codeRepoProvider: gitlab
  deploymentRuntime: false
  pipelineRuntime: true
  # 代码库的所属产品
  product: demo-$suffix
  # 代码库的所属项目
  project: project-demo-$suffix
  webhook:
    events: ["push_events"]
  git:
    gitlab:
      # 代码库的名称
      name: coderepo-sc-demo-$suffix
      # 代码库的路径
      path: coderepo-sc-demo-$suffix 
      # 代码库的可见性，例如：private、public
      visibility: private
      description: coderepo-sc-demo-$suffix
---
# 部署配置库
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  # 代码库名称
  name: coderepo-deploy-demo-$suffix
  codeRepoProvider: gitlab
  deploymentRuntime: true
  pipelineRuntime: false
  # 代码库的所属产品
  product: demo-$suffix
  webhook:
    events: ["push_events"]
  git:
    gitlab:
      # 代码库的名称
      name: coderepo-deploy-demo-$suffix
      # 代码库的路径
      path: coderepo-deploy-demo-$suffix 
      # 代码库的可见性，例如：private、public
      visibility: private
      description: coderepo-deploy-demo-$suffix
---      
# 流水线仓库
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  # 代码库名称
  name: coderepo-pipeline-demo-$suffix
  codeRepoProvider: gitlab
  deploymentRuntime: false
  pipelineRuntime: true
  # 代码库的所属产品
  product: demo-$suffix
  # 代码库的所属项目
  project: project-demo-$suffix  
  webhook:
    events: ["push_events"]
  git:
    gitlab:
      # 代码库的名称
      name: coderepo-pipeline-demo-$suffix
      # 代码库的路径
      path: coderepo-pipeline-demo-$suffix
      # 代码库的可见性，例如：private、public
      visibility: private
      description: coderepo-pipeline-demo-$suffix
```

替换变量后的文件示例如下：

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
---
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepo
spec:
  name: coderepo-pipeline-demo-quickstart
  codeRepoProvider: gitlab
  deploymentRuntime: false
  pipelineRuntime: true
  product: demo-quickstart
  project: project-demo-quickstart
  webhook:
    events: ["push_events"]
  git:
    gitlab:
      name: coderepo-pipeline-demo-quickstart
      path: coderepo-pipeline-demo-quickstart
      visibility: private
      description: coderepo-pipeline-demo-quickstart
```

替换位于相对路径 `examples/demo-pipeline.yaml` 下模板的变量，包括 `$suffix`、`$pipeline-runtime-cluster`。

```yaml
---
# 开发环境
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Environment
spec:
  # 环镜名称
  name: env-dev-demo-$suffix
  # 环境的所属产品
  product: demo-$suffix
  # 环境关联的运行时集群
  cluster: $pipeline-runtime-cluster
  # 环境类型
  envType: dev
---
# 部署配置库授权给流水线
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepoBinding
spec:
  # 代码库的所属产品
  productName: demo-$suffix
  name: coderepobinding-deploy-pipeline-demo-$suffix
  # 被授权的代码库
  coderepo: coderepo-deploy-demo-$suffix
  # 授权给产品
  product: demo-$suffix
  # 授权给项目
  projects: 
    - project-demo-$suffix
  # 授予的权限：readonly, readwrite
  permissions: readwrite
---
# 流水线运行时
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: ProjectPipelineRuntime
spec:
  # 流水线运行时的名称
  name: pr-demo-$suffix
  # 流水线运行时的所属产品
  product: demo-$suffix
  # 流水线运行时的所属项目
  project: project-demo-$suffix
  # 流水线配置的源码库
  pipelineSource: coderepo-pipeline-demo-$suffix
  # 流水线的定义
  pipelines:
    # 流水线名称
  - name: pipeline-dev-demo-$suffix
    # 流水线资源的标签
    label: main
    # 流水线配置文件的路径
    path: pipelines/main.yaml
  destination:
    # 指执行流水线的目标环境
    environment: env-dev-demo-$suffix
    # 指执行流水线目标环境的命名空间
    namespace: pr-demo-$suffix
  # 可选项，流水线运行时的自定义资源，比如需要额外部署 PVC.
  additionalResources:
    git:
      # 指自定义资源的代码仓库的名称，也可以和流水线仓库的名称相同
      codeRepo: coderepo-sc-demo-$suffix
      # 指自定义资源仓库的分支
      revision: main
      # 指自定义资源仓库的路径
      path: test
  # 触发流水线的事件源
  eventSources:
    # 事件源名称
  - name: webhook
    # gitlab 事件源
    gitlab:
      # 代码库名称
      repoName: coderepo-sc-demo-$suffix
      # 产生事件的代码库分支，"*"表示该事件源接收所有分支的事件
      revision: main
      # 该事件源接收的代码库的事件类型
      events:
      - push_events
  # 流水线相关资源的隔离性定义，shared（默认）或 exclusive
  isolation: exclusive
  # 关联流水线和事件源
  pipelineTriggers:
    # 关联的事件源
  - eventSource: webhook
    # 关联的流水线
    pipeline: pipeline-dev-demo-$suffix
```

替换变量后的文件示例如下：

> 您需要根据在上一章节选择的集群类型，将 Environment 资源的 `spec.cluster` 设置为的[物理集群名称](#注册物理集群)或[虚拟集群名称](#注册虚拟集群)。

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
  pipelineSource: coderepo-pipeline-demo-quickstart
  pipelines:
  - name: pipeline-dev-demo-quickstart
    label: main
    path: pipelines/main.yaml
  destination:
    environment: env-dev-demo-quickstart
    namespace: pr-demo-quickstart
  additionalResources:
    git:
      codeRepo: coderepo-pipeline-demo-quickstart
      revision: main
      path: test  
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

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.4.0)，执行以下命令，以初始化产品。

```Shell
# examples/demo-product.yaml 和 examples/demo-pipeline.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes apply -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
nautes apply -f examples/demo-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

在执行流水线之前，您需要先准备一个镜像仓库，用于存储流水线产生的容器镜像，下面将以 Github 的  `ghcr.io` 为例。

您需要在 Github 上准备一个[账号或组织](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts)，例如：`https://github.com/nautes-labs`，并在对此有权限的账号下生成一个具有 `write:packages` 权限的 [personal access token](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)。

当运行时集群中与流水线运行时同名的命名空间就绪后，您需要在此命名空间下创建一个 ConfigMap 资源，流水线中的 `image-build` 任务在推送容器镜像时可以使用此 ConfigMap 通过镜像仓库的认证。

ConfigMap 资源的模板位于相对路径 `examples/config.json` 下，您需要用以下命令生成的字符串替换其中的 `$auth` 变量：

```shell
# github-user 指您在 github 中的账号
# github-token 指上述账号的 personal access token
echo -n '$github-user:$github-token' | base64
```

替换变量后使用 `kubectl` 命令在运行时集群上创建 ConfigMap：

```shell
# pipeline-runtime-name 指流水线运行时名称，如：pr-demo-quickstart
kubectl create configmap registry-auth --from-file=config.json -n $pipeline-runtime-name
```

## 执行流水线

将示例项目的源码和流水线配置文件推送到“源码库”，将示例项目的 Kubernetes 资源清单（例如：deployment、service 等）提交至“部署配置库”。

### 提交部署清单

克隆部署示例的代码库到本地。

```Shell
git clone https://github.com/nautes-examples/user-deployment.git
```

修改本地代码库中 Ingress 资源的域名：deployments/test/devops-sample-svc.yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ks-sample-dev
spec:
  rules:
  # 将 $cluster-ip 替换为运行时集群的公网 IP
  - host: devops-sample.$cluster-ip.nip.io
    http:
      paths:
      ...
```

访问 [GitLab](installation.md#查看安装结果)，并设置 GitLab 账号具备[部署配置库](#初始化产品) main 分支的强制推送权限。详情参考[保护分支启用强制推送](https://docs.gitlab.com/ee/user/project/protected_branches.html#allow-force-push-on-a-protected-branch)。

推送 Kubernetes 资源清单至部署配置库。

```Shell
# 更改 origin 远程仓库为部署配置库，以下仓库地址仅为示例，需要将 $gitlab-url 替换为 Gitlab 的 IP 或域名
git remote set-url origin git@$gitlab-url:demo-quickstart/coderepo-deploy-demo-quickstart.git
git add .
git commit -m '提交 Kubernetes 资源清单'
git push origin main -f
```

### 提交流水线配置

克隆流水线示例的代码库到本地。

```shell
git clone https://github.com/nautes-examples/user-pipeline.git
```

替换本代码库中流水线配置文件 `pipelines/main.yaml` 中变量，包括：

**$pipeline-runtime-name** 替换为流水线运行时名称，如：`pr-demo-quickstart`。

**$sc-repo-id** 替换为源码库 ID，您可以从 Gitlab 控制台的 Project 首页中找到这个 ID。

**$sc-repo-url** 替换为源码库的 SSH URL，你可以 Gitlab 控制台的 Project 首页中找到这个 URL，如：`git@$gitlab-url:demo-quickstart/coderepo-sc-demo-quickstart.git`。

**$deploy-repo-url** 替换为部署配置库的 SSH URL，来源同上。

**$registry-url** 替换为容器镜像仓库的 URL，如：ghcr.io/nautes-labs。

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
    taskServiceAccountName: $pipeline-runtime-name
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
    taskServiceAccountName: $pipeline-runtime-name
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
    taskServiceAccountName: $pipeline-runtime-name
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

访问 [GitLab](installation.md#查看安装结果)，并设置 GitLab 账号具备[源码库](#初始化产品) main 分支的强制推送权限。详情参考[保护分支启用强制推送](https://docs.gitlab.com/ee/user/project/protected_branches.html#allow-force-push-on-a-protected-branch)。

推送流水线配置至源码库。

```Shell
# 更改 origin 远程仓库为源码库，以下仓库地址仅为示例，需要将 $gitlab-url 替换为 Gitlab 的 IP 或域名
git remote set-url origin git@$gitlab-url:demo-quickstart/coderepo-sc-demo-quickstart.git
git add .
git commit -m '提交流水线配置'
git push origin main -f
```

## 查看流水线结果

### 流水线

当您提交流水线配置到源码库后，Nautes 会响应代码库的 Webhook 回调，并在流水线运行时中声明的集群中触发流水线的执行。您可以使用浏览器访问 Tekton Dashboard 来查看流水线的执行情况，地址例如：`https://tekton.vcluster-aliyun.8.217.50.114.nip.io:30443`。

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.4.0)，执行以下命令，查看 Tekton Dashboard 的访问地址。
```shell
./nautes get cluster -oyaml
```
当您访问 Tekton Dashboard 时，如果在当前浏览器会话中未登录过 GitLab，访问动作会触发统一认证，认证过程中需要使用您的 GitLab 账号密码进行登录，登录成功后页面会自动跳转到 Tekton Dashboard。

### 镜像库

如果流水线已正常执行完成，您可以在镜像仓库（如：`https://github.com/orgs/nautes-labs/packages`）中看到新增的镜像信息，并可以通过类似下面的命令拉取镜像：

```shell
docker pull ghcr.io/nautes-labs/devops-sample:0.0.1-bdcdba83f17169db12e95bc9ff0592ace612016b
```

### 部署清单

如果流水线已正常执行完成，您可以在部署配置库的 `deployments/test/devops-sample.yaml` 文件中看到容器的镜像标签已被自动修改为包含最新的 commitid，配置片段如下：

```yaml
spec:
  template:
    spec:
      containers:
        - name: ks-sample
          image: ghcr.io/nautes-labs/devops-sample:0.0.1-bdcdba83f17169db12e95bc9ff0592ace612016b
```

## 常见问题

**创建 ProjectPipelineRuntime 资源后，为什么 `argo-events` 命名空间中的某些 pods 状态为 `CrashLoopBackOff`，pods 日志显示 `too many open files` ？**

当您创建了 ProjectPipelineRuntime 资源，并提交了流水线配置，如果您在访问 Tekton Dashboard 时发现流水线并未执行，同时，您在流水线运行时集群中，发现 `argo-events` 命名空间中的 pods 状态为 `CrashLoopBackOff`，pods 日志显示 `too many open files`。

这是 Argo Events 的已知问题，您可以在 [这里](https://github.com/argoproj/argo-events/issues/1791) 查看更多详情。

为了解决该问题，您需要在运行时集群所在的服务器上修改 `/etc/sysctl.conf` 文件中的 `fs.inotify.max_user_instances` 值为 `65535`，然后重启服务器。
