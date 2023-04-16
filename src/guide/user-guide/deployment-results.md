---
footerLink: /guide/user-guide/deployment-results
title: 查看部署结果
---
# 查看部署结果

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解部署应用的主体流程和相关术语，并且已经创建了至少一个部署运行时，详情参见 [维护部署运行时](deployment-runtime.md)。

您可以通过 ArgoCD 控制台和 Kubectl 命令行两种方式查看项目的部署情况。您只能查看和管理授权产品的项目的相关资源。

## 查看 ArgoCD 中的资源

访问安装在部署运行时集群中的 [ArgoCD 控制台](installation.md#查看组件信息) ，并点击右上角的“LOG IN VIA DEX”按钮进行统一认证。如果您在当前浏览器会话中未登录过认证服务器（如 Gitlab），那么您需要先使用账号和密码进行登录，登录成功后页面会自动跳转至 ArgoCD 控制台。在 ArgoCD 控制台中您可以查看和管理被授权产品相关的 ArgoCD Applications，您也可以通过访问“设置/项目”页面来查看被授权产品相关的 ArgoCD Projects。

![directive syntax graph](./../images/quickstart-argocd-2.png) 

您可以通过点击某个 ArgoCD Application 卡片来查看此应用所管理的资源清单，您也可以查看某个资源的YAML、事件、日志等，并对该资源执行同步、重启、删除等操作。


## 查看 Kubernetes 中的资源
您可以通过一个标准的 OICD 客户端进行统一认证以获取 ID Token，并将该 ID Token 作为 Kubectl 的认证凭证，再使用 Kubectl 以认证服务器上的身份访问 Kubernetes。下文描述了如何通过 DEX 官方提供的一个示例客户端进行统一认证并获取 ID Token。

您可以从[这里](https://github.com/dexidp/dex/tree/master/examples/example-app)获取该客户端的源码，并将源码编译为二进制文件。然后您可以通过以下指令启动这个客户端，客户端启动后会提供一个简单的 WEB UI 进行统一认证并返回认证结果。

```shell
./example-app \
 --client-id "$client_id" \
 --client-secret "$client_secret" \
 --issuer "$dex_url" \
 --issuer-root-ca "$dex_ca" \
 --listen "http://0.0.0.0:5555" \
 --redirect-uri "http://$ip:5555/callback" > /tmp/dex-client.log 2>&1 &
```

指令中的 $client_id 和 $client_secret 是 DEX 颁发的客户端密钥，$dex_url 是 DEX 的服务地址，$dex_ca 是 DEX 服务的 HTTPS 证书，$ip 是运行客户端的服务器IP。

当服务启动后，您可以5555端口访问客户端，填写 Extra scopes 属性值为 groups，并点击 Login 进行统一认证。
![directive syntax graph](./../images/quickstart-dex-1.png)

认证成功后会生成如下的 ID Token：

```Shell
eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2OGUyODFmN2FkYTk2NjNmMWI0MTc0NGFhYTUzZDRmYjk0N2Q1YjMifQ.eyJpc3MiOiJodHRwczovL2RleC5ibHV6aW4uaW86OTA4MCIsInN1YiI6IkNnSXhNaElHWjJsMGJHRmkiLCJhdWQiOiJwbGF0Zm9ybSIsImV4cCI6MTY4MDg3Mjc2MiwiaWF0IjoxNjgwNzg2MzYyLCJhdF9oYXNoIjoiWTNNbnRHLTE3SERaWjNVb0hiNWdmUSIsImNfaGFzaCI6IlBGUXNEM1hPSkhNZ1B3RW1LNXl5bEEiLCJlbWFpbCI6ImxpdWp1bmhvbmdAdmlzcHJhY3RpY2UuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdyb3VwcyI6WyJ5dW50aSIsIm5hdXRlcy1sYWJzIiwidGVrdG9uY2QiLCJkZXYtdGVuYW50IiwieXVudGkvc3ViZ3JvdXAiLCJ5dW50aS9zdWJncm91cC9zdWJzdWJncm91cCJdLCJuYW1lIjoibGl1anVuaG9uZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImxpdWp1bmhvbmcifQ.AYiLwJMcVaJdVdF-j_RZnHCPpg1psF3CJlzlBzvBYcuI_t7slgRaumRmGJEYXHYn2QFxjEZCNnBiOpJDDJoitVTxi1qoZ2nNoxhB3Wtxc1MoqkiPR5wy49yHw5roTnqIuEBy5BMpN_embxB9vK1bwxf414PsYKm1Dhbj8dynpURjpTsLrN5k7zVC7RQxVvglNX4cgYEucvSLqMEdtHNlmtnRsl6DJuItxC0MYwXlp4C9FNWswUjSpargdX4wgqfYy91l66GiI2Xj_zdba0NHLcPean-nmBMObLNhxex4hj8IVcGyiEu9in87y8eisrCBoLEWP9SJ_ZxWiOPoTFr54A
```

您可以使用这个 ID Token 替换 Kubeconfig 中的认证信息：

```yaml
# 将 ID-Token 替换 kubeconfig 文件中的 users 的配置
apiVersion: v1
clusters:
......
kind: Config
preferences: {}
users:
- name: user
  user:
    token: $ID-Token
```

如果您的运行时集群是一个虚拟集群，可以通过下面的命令行获取 Kubeconfig 文件。

```Shell
# 使用虚拟集群名称替换 $VCLUSTER 变量
kubectl get secret vc-$VCLUSTER-vcluster -n $VCLUSTER --template={{.data.config}} | base64 -d
```

应用 Kubeconfig 文件后，您可以通过 Kubectl 命令行查看与部署运行时相同名称的 Namespace 中的资源，您拥有该 Namespace 下所有资源的管理权限。

```Shell
# 应用 Kubeconfig
export KUBECONFIG=/opt/vcluster/kubeconfig-dex.yaml
# 使用 kubectl 命令行管理命名空间下的资源，以下命令行仅为示例
kubectl get deployment -n deployment-runtime-1
kubectl delete deployment deployment-test -n deployment-runtime-1
```