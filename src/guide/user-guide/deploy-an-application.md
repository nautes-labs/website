---
footerLink: /guide/user-guide/deploy-an-application
title: 部署一个应用
---
# 部署一个应用

本文档描述了将一个全新的 Kubernetes 集群注册到 Nautes 中，并在此集群上部署一个应用的过程。

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

替换位于相对路径 `examples/demo-cluster-physical-worker-deployment.yaml` 下物理集群属性模板的变量，包括 `$cluster-name`、`$api-server`、`$cluster-ip`、`$product-name` 和 `$kubeconfig`。

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
  # 运行时类型：部署运行时
  workerType: "deployment"
  # 主域名，使用物理集群的 IP 替换变量 $cluster-ip
  primaryDomain: "$cluster-ip.nip.io"
  # argocd 域名，使用物理集群的 IP 替换变量 $cluster-ip
  argocdHost: "argocd.$cluster-name.$cluster-ip.nip.io",
  # traefik 配置
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  # reservedNamespacesAllowedProducts 可选，如果需要使用组件的保留命名空间，使用产品名称替换：$product-name
  # 如果没有产品名称可以先设定一个，再接下来创建产品时使用这里设定的产品名称，比如：demo-quickstart
  reservedNamespacesAllowedProducts:
    argo-rollouts:
      - $product-name
    argocd:
      - $product-name
    traefik:
      - $product-name
    external-secrets:
      - $product-name
    vault:
      - $product-name
    cert-manager:
      - $product-name
    hnc:
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
  workerType: "deployment"
  primaryDomain: "8.217.50.114.nip.io"
  argocdHost: "argocd.physical-worker-aliyun.8.217.50.114.nip.io"
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  reservedNamespacesAllowedProducts:
    argo-rollouts:
      - demo-quickstart
    argocd:
      - demo-quickstart
    traefik:
      - demo-quickstart
    external-secrets:
      - demo-quickstart
    vault:
      - demo-quickstart
    cert-manager:
      - demo-quickstart
    hnc:
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

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.3.8)，执行以下命令以注册物理集群。

```Shell
# examples/demo-cluster-physical-worker-deployment.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes apply -f examples/demo-cluster-physical-worker-deployment.yaml -t $gitlab-access-token -s $api-server-address
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
# 宿主集群
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
  # traefik 配置
  traefik:
    httpNodePort: "30080"
    httpsNodePort: "30443"
  # 集群的 kubeconfig 文件内容，使用宿主集群的 kubeconfig 替换该变量
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

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.3.8)，执行以下命令，将注册宿主集群。

```Shell
# examples/demo-cluster-host.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes apply -f examples/demo-cluster-host.yaml -t $gitlab-access-token -s $api-server-address
```

替换位于相对路径 `examples/demo-cluster-virtual-worker-deployment.yaml` 下的虚拟集群属性模板的变量，包括 `$cluster-name`、`$api-server`、`$host-cluster`、`$product-name` 和 `$api-server-port`。

```yaml
# 虚拟集群
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Cluster
spec:
  # 集群名称
  name: "$cluster-name"
  # 集群的 API SERVER URL，使用 https://$hostcluster-ip:$api-server-port 格式替换参数，其中 $hostcluster-ip 指宿主集群的 IP，$api-server-port 指虚拟集群的 API Server 端口
  apiServer: "$api-server"
  # 集群种类：目前只支持 kubernetes
  clusterKind: "kubernetes"
  # 集群类型：virtual或physical
  clusterType: "virtual"
  # 集群用途：host或worker
  usage: "worker"
  # 运行时类型：部署运行时
  workerType: "deployment"
  # 所属宿主集群：virtual类型集群才有此属性，使用宿主集群的名称替换参数
  hostCluster: "$host-cluster"
  # 主域名，使用宿主集群的 IP 替换变量 $cluster-ip
  primaryDomain: "$cluster-ip.nip.io"
  # argocd 域名，使用宿主集群的 IP 替换变量 $cluster-ip
  argocdHost: "argocd.$cluster-name.$cluster-ip.nip.io",
  # 虚拟集群配置：virtual类型集群才有此属性
  vcluster: 
    # API SERVER 端口号
    httpsNodePort: "$api-server-port"
  # reservedNamespacesAllowedProducts 可选，如果需要使用组件的保留命名空间，使用产品名称替换：$product-name
  # 如果没有产品名称可以先设定一个，再接下来创建产品时使用这里设定的产品名称，比如：demo-101
  reservedNamespacesAllowedProducts:
    argo-rollouts:
      - $product-name
    argocd:
      - $product-name
    external-secrets:
      - $product-name
    vault:
      - $product-name
    cert-manager:
      - $product-name
    hnc:
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
  workerType: "deployment"
  hostCluster: "host-aliyun"
  primaryDomain: "8.217.50.114.nip.io"
  argocdHost: "argocd.vcluster-aliyun.8.217.50.114.nip.io"
  vcluster: 
    httpsNodePort: "31456"
  reservedNamespacesAllowedProducts:
    argo-rollouts:
      - demo-quickstart
    argocd:
      - demo-quickstart
    external-secrets:
      - demo-quickstart
    vault:
      - demo-quickstart
    cert-manager:
      - demo-quickstart
    hnc:
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
# examples/demo-cluster-virtual-worker-deployment.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes apply -f examples/demo-cluster-virtual-worker-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

## 初始化产品

初始化产品是指创建 Nautes 产品模型中的各个实体，并在运行时集群中初始化一套用于执行自动化部署的资源，包括 namespace、serviceaccount、secret、以及 ArgoCD 相关资源等。

下文将描述通过命令行初始化产品的相关实体，包括产品、项目、代码库、权限、环境以及部署运行时等。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-product.yaml` 下产品属性模板的变量，包括 `$suffix`，`$runtime-cluster`。

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
  deploymentRuntime: false
  pipelineRuntime: true
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
  deploymentRuntime: false
  pipelineRuntime: true
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

替换位于相对路径 `examples/demo-deployment.yaml` 下模板的变量，包括 `$suffix`、`$deployment-runtime-cluster`。

```yaml
---
# 测试环境
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: Environment
spec:
  # 环镜名称
  name: env-test-demo-$suffix
  # 环境的所属产品
  product: demo-$suffix
  # 环境关联的运行时集群
  cluster: $deployment-runtime-cluster
  # 环境类型
  envType: test
---
# 部署配置库授权给部署运行时
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: CodeRepoBinding
spec:
  # 代码库的所属产品
  productName: demo-$suffix
  name: coderepobinding-deploy-dr-demo-$suffix
  # 被授权的代码库
  coderepo: coderepo-deploy-demo-$suffix
  # 授权给产品
  product: demo-$suffix
  # 授予的权限：readonly, readwrite
  permissions: readonly
---
# 部署运行时
apiVersion: nautes.resource.nautes.io/v1alpha1
kind: DeploymentRuntime
spec:
  # 部署运行时的名称
  name: dr-demo-$suffix
  # 承载部署运行时的环境
  destination:
    environment: env-test-demo-$suffix
    namespaces:
      - dr-demo-$suffix
  manifestsource:
    # 部署运行时监听的代码库
    codeRepo: coderepo-deploy-demo-$suffix
    # 部署运行时监听的代码库的相对路径
    path: deployments/test
    # 部署运行时监听的代码库版本或代码库分支
    targetRevision: main
  # 部署运行时的所属产品
  product: demo-$suffix
  # 部署运行时关联的项目
  projectsRef:
    - project-demo-$suffix
```

替换变量后的文件示例如下：

> 您需要根据在上一章节选择的集群类型，将 Environment 资源的 `spec.cluster` 设置为的[物理集群名称](#注册物理集群)或[虚拟集群名称](#注册虚拟集群)。

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
  destination:
    environment: env-test-demo-quickstart
    namespaces:
      - dr-demo-quickstart  
  manifestsource:
    codeRepo: coderepo-deploy-demo-quickstart
    path: deployments/test
    targetRevision: main
  product: demo-quickstart
  projectsRef:
    - project-demo-quickstart
```

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.3.8)，执行以下命令，以初始化产品。

```Shell
# examples/demo-product.yaml 和 examples/demo-deployment.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes apply -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
nautes apply -f examples/demo-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

## 部署

将 Kubernetes 资源清单提交至产品的代码库，例如：deployment、service 等资源。

克隆部署示例的代码库到本地。

```Shell
git clone https://github.com/nautes-examples/user-deployment.git
```

修改本地代码库中 Ingress 资源的域名：deployment/test/devops-sample-svc.yaml

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

访问 [GitLab](installation.md#查看安装结果)，并设置 GitLab 账号具备[部署配置库](#初始化产品) main 分支的强制推送权限，该代码库用于存储 Kubernetes 资源清单。详情参考[保护分支启用强制推送](https://docs.gitlab.com/ee/user/project/protected_branches.html#allow-force-push-on-a-protected-branch)。

推送 Kubernetes 资源清单至产品的代码库。

```Shell
# 更改 origin 远程仓库为部署配置库，以下仓库地址仅为示例，需要将 $gitlab-url 替换为 Gitlab 的 IP 或域名
git remote set-url origin git@$gitlab-url:demo-quickstart/coderepo-deploy-demo-quickstart.git
git add .
git commit -m '提交 Kubernetes 资源清单'
git push origin main -f
```

## 查看部署结果

部署成功后，使用浏览器访问地址 `http://devops-sample.$cluster-ip.nip.io:$traefik-httpnodeport` ，可以访问示例应用的 Web 界面。

>替换变量 $cluster-ip 为运行时集群的公网 IP。
>
>替换变量 $traefik-httpnodeport 为运行时集群的 traefik 端口，详情参考[注册物理集群](#注册物理集群)或者[注册虚拟集群](#注册虚拟集群)章节中属性模板的 `spec.traefik.httpNodePort`，例如：`30080`。

您也可以通过 ArgoCD 控制台查看应用的部署结果，并且只能查看和管理被授权产品的相关资源。

使用浏览器访问地址 `https://$argocdHost:$traefik-httpsNodePort`，可以访问安装在运行时集群中的 ArgoCD 控制台 ，点击 LOG IN VIA DEX 进行统一认证，如果在当前浏览器会话中未登录过 GitLab，那么需要填写您的 GitLab 账号密码进行登录。登录成功后页面会自动跳转到 ArgoCD 控制台。

> 替换变量 $argocdHost 为运行时集群的 argocdHost 地址，详情参考[注册物理集群](#注册物理集群)或者[注册虚拟集群](#注册虚拟集群)章节中属性模板的 `spec.argocdHost`，例如：`argocd.vcluster-aliyun-0412.8.217.50.114.nip.io`。
>
> 替换变量 $traefik-httpsNodePort 为运行时集群的 traefik 端口，详情参考[注册物理集群](#注册物理集群)或者[注册虚拟集群](#注册虚拟集群)章节中属性模板的 `spec.traefik.httpsNodePort`，例如：`30443`。

在 ArgoCD 控制台中将呈现被授权产品相关的 ArgoCD applications，您可以查看和管理相关资源。点击某个 ArgoCD application 卡片，将呈现该 application 的资源清单，您可以查看资源的 YAML、事件、日志等，并对资源执行同步、重启、删除等操作。点击 ArgoCD 控制台左侧菜单栏的“设置”，还可以查看被授权产品相关的 ArgoCD projects。
