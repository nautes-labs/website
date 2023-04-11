(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{277:function(t,a,s){t.exports=s.p+"assets/img/quickstart-argocd-2.eb62cc93.png"},278:function(t,a,s){t.exports=s.p+"assets/img/quickstart-dex-1.d7a4cd0f.png"},298:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"查看部署结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看部署结果"}},[t._v("#")]),t._v(" 查看部署结果")]),t._v(" "),a("p",[t._v("在开始本节之前，请确保您已阅读 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/user-guide-00.html"}},[t._v("概述")]),t._v(" 章节，了解创建运行时环境的主流程和相关术语，并且已经创建了至少一个部署运行时，详情参见 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/user-guide-05.html"}},[t._v("维护部署运行时")]),t._v("。")],1),t._v(" "),a("p",[t._v("您可以通过 ArgoCD 控制台和 Kubectl 命令行两种方式查看项目的部署情况。您只能查看和管理授权产品的项目的相关资源。")]),t._v(" "),a("h2",{attrs:{id:"查看-argocd-中的资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-argocd-中的资源"}},[t._v("#")]),t._v(" 查看 ArgoCD 中的资源")]),t._v(" "),a("p",[t._v("访问安装在部署运行时集群中的 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/quickstart-03.html#查看组件信息"}},[t._v("ArgoCD 控制台")]),t._v(" ，并点击右上角的“LOG IN VIA DEX”按钮进行统一认证。如果您在当前浏览器会话中未登录过认证服务器（如 Gitlab），那么您需要先使用账号和密码进行登录，登录成功后页面会自动跳转至 ArgoCD 控制台。在 ArgoCD 控制台中您可以查看和管理被授权产品相关的 ArgoCD Applications，您也可以通过访问“设置/项目”页面来查看被授权产品相关的 ArgoCD Projects。")],1),t._v(" "),a("p",[a("img",{attrs:{src:s(277),alt:"directive syntax graph"}})]),t._v(" "),a("p",[t._v("您可以通过点击某个 ArgoCD Application 卡片来查看此应用所管理的资源清单，您也可以查看某个资源的YAML、事件、日志等，并对该资源执行同步、重启、删除等操作。")]),t._v(" "),a("h2",{attrs:{id:"查看-kubernetes-中的资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-kubernetes-中的资源"}},[t._v("#")]),t._v(" 查看 Kubernetes 中的资源")]),t._v(" "),a("p",[t._v("您可以通过一个标准的 OICD 客户端进行统一认证以获取 ID Token，并将该 ID Token 作为 Kubectl 的认证凭证，再使用 Kubectl 以认证服务器上的身份访问 Kubernetes。下文描述了如何通过 DEX 官方提供的一个示例客户端进行统一认证并获取 ID Token。")]),t._v(" "),a("p",[t._v("您可以从"),a("a",{attrs:{href:"https://github.com/dexidp/dex/tree/master/examples/example-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("获取该客户端的源码，并将源码编译为二进制文件。然后您可以通过以下指令启动这个客户端，客户端启动后会提供一个简单的 WEB UI 进行统一认证并返回认证结果。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("./example-app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n --client-id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client_id")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n --client-secret "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client_secret")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--issuer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dex_url")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n --issuer-root-ca "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dex_ca")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://0.0.0.0:5555"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n --redirect-uri "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ip")]),t._v(':5555/callback"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /tmp/dex-client.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("p",[t._v("指令中的 $client_id 和 $client_secret 是 DEX 颁发的客户端密钥，$dex_url 是 DEX 的服务地址，$dex_ca 是 DEX 服务的 HTTPS 证书，$ip 是运行客户端的服务器IP。")]),t._v(" "),a("p",[t._v("当服务启动后，您可以5555端口访问客户端，填写 Extra scopes 属性值为 groups，并点击 Login 进行统一认证。\n"),a("img",{attrs:{src:s(278),alt:"directive syntax graph"}})]),t._v(" "),a("p",[t._v("认证成功后会生成如下的 ID Token：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2OGUyODFmN2FkYTk2NjNmMWI0MTc0NGFhYTUzZDRmYjk0N2Q1YjMifQ.eyJpc3MiOiJodHRwczovL2RleC5ibHV6aW4uaW86OTA4MCIsInN1YiI6IkNnSXhNaElHWjJsMGJHRmkiLCJhdWQiOiJwbGF0Zm9ybSIsImV4cCI6MTY4MDg3Mjc2MiwiaWF0IjoxNjgwNzg2MzYyLCJhdF9oYXNoIjoiWTNNbnRHLTE3SERaWjNVb0hiNWdmUSIsImNfaGFzaCI6IlBGUXNEM1hPSkhNZ1B3RW1LNXl5bEEiLCJlbWFpbCI6ImxpdWp1bmhvbmdAdmlzcHJhY3RpY2UuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdyb3VwcyI6WyJ5dW50aSIsIm5hdXRlcy1sYWJzIiwidGVrdG9uY2QiLCJkZXYtdGVuYW50IiwieXVudGkvc3ViZ3JvdXAiLCJ5dW50aS9zdWJncm91cC9zdWJzdWJncm91cCJdLCJuYW1lIjoibGl1anVuaG9uZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImxpdWp1bmhvbmcifQ.AYiLwJMcVaJdVdF-j_RZnHCPpg1psF3CJlzlBzvBYcuI_t7slgRaumRmGJEYXHYn2QFxjEZCNnBiOpJDDJoitVTxi1qoZ2nNoxhB3Wtxc1MoqkiPR5wy49yHw5roTnqIuEBy5BMpN_embxB9vK1bwxf414PsYKm1Dhbj8dynpURjpTsLrN5k7zVC7RQxVvglNX4cgYEucvSLqMEdtHNlmtnRsl6DJuItxC0MYwXlp4C9FNWswUjSpargdX4wgqfYy91l66GiI2Xj_zdba0NHLcPean-nmBMObLNhxex4hj8IVcGyiEu9in87y8eisrCBoLEWP9SJ_ZxWiOPoTFr54A\n")])])]),a("p",[t._v("您可以使用这个 ID Token 替换 Kubeconfig 中的认证信息：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 ID-Token 替换 kubeconfig 文件中的 users 的配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Config\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("preferences")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("users")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Token\n")])])]),a("p",[t._v("如果您的运行时集群是一个虚拟集群，可以通过下面的命令行获取 Kubeconfig 文件。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用虚拟集群名称替换 $VCLUSTER 变量")]),t._v("\nkubectl get secret vc-"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VCLUSTER")]),t._v("-vcluster "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VCLUSTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".data.config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])])]),a("p",[t._v("应用 Kubeconfig 文件后，您可以通过 Kubectl 命令行查看与部署运行时相同名称的 Namespace 中的资源，您拥有该 Namespace 下所有资源的管理权限。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用 Kubeconfig")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KUBECONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/vcluster/kubeconfig-dex.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 kubectl 命令行管理命名空间下的资源，以下命令行仅为示例")]),t._v("\nkubectl get deployment "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" deployment-runtime-1\nkubectl delete deployment deployment-test "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" deployment-runtime-1\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);