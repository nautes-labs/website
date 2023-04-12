(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"部署一个应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署一个应用"}},[t._v("#")]),t._v(" 部署一个应用")]),t._v(" "),a("p",[t._v("本文档将描述一个用户应用的部署过程。包括以下步骤："),a("br"),t._v(" "),a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85"}},[t._v("安装")]),a("br"),t._v(" "),a("a",{attrs:{href:"#%E5%87%86%E5%A4%87%E6%9C%8D%E5%8A%A1%E5%99%A8"}},[t._v("准备服务器")]),a("br"),t._v(" "),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E9%9B%86%E7%BE%A4"}},[t._v("注册集群")]),a("br"),t._v(" "),a("a",{attrs:{href:"#%E5%87%86%E5%A4%87%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83"}},[t._v("准备运行环境")]),a("br"),t._v(" "),a("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2"}},[t._v("部署")]),a("br"),t._v(" "),a("a",{attrs:{href:"#%E6%9F%A5%E7%9C%8B%E9%83%A8%E7%BD%B2%E7%BB%93%E6%9E%9C"}},[t._v("查看部署结果")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("以阿里云为例描述在公有云部署 Nautes 的过程，详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/installation.html"}},[t._v("安装")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"准备服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备服务器"}},[t._v("#")]),t._v(" 准备服务器")]),t._v(" "),a("p",[t._v("您需要准备一台用于安装 Kubernetes 集群的服务器。如果您已经有一套 Kubernetes 集群（需要公网 IP），可以省略该步骤。")]),t._v(" "),a("p",[t._v("下文将以阿里云为例描述如何准备服务器并安装一个 K3s 集群。")]),t._v(" "),a("p",[t._v("先创建 ECS 云服务器，详情参考 "),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/25422.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云服务器 ECS"),a("OutboundLink")],1),t._v("。服务器安装成功后，在服务器上安装 K3s，命令如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据实际情况，替换 $PUBLIC_IP 为服务器的公网 IP")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sfL")]),t._v(" https://get.k3s.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("INSTALL_K3S_VERSION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v1.21.14+k3s1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("INSTALL_K3S_EXEC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--tls-san '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PUBLIC_IP")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" - server "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--disable")]),t._v(" servicelb "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--disable")]),t._v(" traefik "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--disable")]),t._v(" metrics-server\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/.kube\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /etc/rancher/k3s/k3s.yaml "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/.kube/k3s-config\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /etc/rancher/k3s/k3s.yaml "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/.kube/config\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KUBECONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/.kube/config\n")])])]),a("h2",{attrs:{id:"注册集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册集群"}},[t._v("#")]),t._v(" 注册集群")]),t._v(" "),a("p",[t._v("注册集群用于将准备好的 Kubernets 集群托管到租户管理集群，并由租户管理集群初始化集群的相关配置，初始化完成后的集群可以作为承载应用的运行时环境。")]),t._v(" "),a("p",[t._v("注册集群支持的集群形态包括物理集群和虚拟集群。")]),t._v(" "),a("p",[t._v("当您的应用的运行时环境需要更高的性能、隔离性和可靠性，建议使用"),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4"}},[t._v("物理集群")]),t._v("，而其他环境，例如开发测试环境、试用环境等可以使用"),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E8%99%9A%E6%8B%9F%E9%9B%86%E7%BE%A4"}},[t._v("虚拟集群")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"注册物理集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册物理集群"}},[t._v("#")]),t._v(" 注册物理集群")]),t._v(" "),a("ol",[a("li",[t._v("克隆命令行程序的代码库到本地。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/nautes-labs/cli.git\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("替换相对路径为“examples/demo-cluster-physical-worker.yaml”的模板文件中的变量值，包括 $suffix、$api-server 和 $kubeconfig。")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#集群")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nautes.resource.nautes.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cluster\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cluster-demo-$suffix"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群的 API SERVER URL")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$api-server"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群种类：目前只支持 kubernetes")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterKind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kubernetes"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群类型：virtual或physical")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"physical"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群用途：host或worker")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("usage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"worker"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# traefik 配置：物理集群才有此属性")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("traefik")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpNodePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30080"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpsNodePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30443"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群的 kubeconfig 文件内容：物理集群才有此属性")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubeconfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    "$kubeconfig"')]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("下载 "),a("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("命令行工具"),a("OutboundLink")],1),t._v("，执行以下命令。 【截止至此】")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# examples/demo-cluster-host.yaml 指在模板代码库中模板文件的相对路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitlab-access-token 指 GitLab 访问令牌")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# api-server-address 指 API Server 的访问地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模板文件中的 apiServer、kubeconfig，指安装在服务器上的集群信息。更多参数说明，参见模板文件的注释")]),t._v("\nnautes apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" examples/demo-cluster-physical-worker.yaml "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gitlab")]),t._v("-access-token "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),t._v("-server-address\n")])])]),a("blockquote",[a("p",[t._v("GitLab 安装完成后，请先注册账号，再创建 personal access token。由于注册集群的账号必须拥有租户配置库的写入权限，同时 main 分支默认是保护分支，因此建议设置账号角色为租户配置库的 Maintainer。personal access token，详情参考 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Personal access tokens"),a("OutboundLink")],1),t._v("。租户配置库的访问地址，详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/installation.html#查看部署结果"}},[t._v("查看部署结果")]),t._v("。"),a("br"),t._v("\nAPI Server 支持 http 和 https 协议。如果使用 https，需要导入 pki.crt 证书到执行 API 的服务器。以 Windows 操作系统的本地 PC 机为例，需要导入证书到“受信任的根证书颁发机构”证书目录才能使用 https 协议的 API Server。关于 API Server 的访问地址和 pki.crt 的下载地址，详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/installation.html#查看部署结果"}},[t._v("安装部署")]),t._v("。"),a("br"),t._v("\n命令执行成功后，会向服务器的集群中安装相关配置，并将该集群托管于管理集群。这时在服务器上的集群作为部署应用的运行集群使用。")],1)]),t._v(" "),a("h3",{attrs:{id:"注册虚拟集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册虚拟集群"}},[t._v("#")]),t._v(" 注册虚拟集群")]),t._v(" "),a("p",[t._v("先克隆 "),a("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册集群模板"),a("OutboundLink")],1),t._v(" 的代码库到本地，并替换“examples/demo-cluster-host.yaml”模板文件的相关变量。下载 "),a("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("命令行工具"),a("OutboundLink")],1),t._v("，并执行以下命令。命令执行成功后，会向服务器中的集群安装相关配置，并将该集群托管于管理集群。这时在服务器上的集群作为虚拟集群的宿主集群。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模板文件中的 apiServer、kubeconfig，指安装在服务器上的集群信息。更多参数说明，参见模板文件的注释")]),t._v("\nnautes apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" examples/demo-cluster-host.yaml "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gitlab")]),t._v("-access-token "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),t._v("-server-address\n")])])]),a("p",[t._v("然后在宿主集群上进一步安装虚拟集群。与前面的步骤类似，模板代码库中模板文件的相对路径是“examples/demo-cluster-virtual-worker.yaml”，当替换变量、执行命令等步骤执行成功之后，会向宿主集群中安装一套虚拟集群，并将虚拟集群托管于管理集群。这时该虚拟集群作为部署应用的运行集群使用。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("nautes apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" examples/demo-cluster-virtual-worker.yaml "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gitlab")]),t._v("-access-token "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),t._v("-server-address\n")])])]),a("blockquote",[a("p",[t._v("GitLab 账号、API Server 的注意事项，与 "),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E9%83%A8%E7%BD%B2%E5%BA%94%E7%94%A8%E7%9A%84%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4"}},[t._v("注册部署应用的物理集群")]),t._v(" 相同。")])]),t._v(" "),a("h2",{attrs:{id:"准备运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备运行环境"}},[t._v("#")]),t._v(" 准备运行环境")]),t._v(" "),a("p",[t._v("对于微服务架构的 IT 系统准备部署应用的运行环境。在 Nautes 中，通过 Kubernetes 资源文件定义部署应用的运行环境配置，包括IT系统、微服务、微服务的代码库、IT系统的环境、负载IT系统的运行时环境等。")]),t._v(" "),a("p",[t._v("下文将描述通过命令行提交部署应用的 Kubernetes 资源文件。")]),t._v(" "),a("p",[t._v("先克隆 "),a("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置模板库"),a("OutboundLink")],1),t._v(" 的代码库到本地，批量替换“examples/demo-product.yaml”中的变量 suffix，并更新 Environment 资源的 cluster 值为运行集群的名称。下载 "),a("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("命令行工具"),a("OutboundLink")],1),t._v("，执行以下命令。命令执行成功后，将向 GitLab 代码库中生成 Kubernetes 资源文件，并基于这些文件在 GitLab 生成与IT系统相关的群组和代码库、在指定运行集群上安装 IT 系统的部署运行时环境。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# “examples/demo-product.yaml” 指配置模板库中模板文件的相对路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitlab-access-token 是 GitLab 访问令牌")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# api-server-address 是 API Server 的访问地址")]),t._v("\nnautes apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" examples/demo-product.yaml "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gitlab")]),t._v("-access-token "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),t._v("-server-address\n")])])]),a("blockquote",[a("p",[t._v("在 GitLab 中，一个 IT 系统映射一个 group ，每个 group 有一个名称为 default.project 的默认代码库，用于存储 IT 系统运行环境的资源文件。"),a("br"),t._v("\nGitLab 账号需要拥有 default.project 代码库的写入权限，由于 main 分支默认是保护分支，因此建议设置账号角色为 group 成员的 Maintainer。关于 personal access token，详情参考 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Personal access tokens"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("p",[t._v("部署 IT 系统的资源清单，简称为“部署配置清单”，例如 deployment、service 等资源。下文将描述通过 Git CLI 提交部署配置清单到IT系统的代码库，IT 系统的部署运行时环境将监听这个代码库以部署应用。")]),t._v(" "),a("p",[t._v("先克隆 "),a("a",{attrs:{href:"https://github.com/liujunhong5891/demo-user-deployments",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署示例"),a("OutboundLink")],1),t._v(" 代码库到本地，修改本地代码库中 ingress 资源的域名。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本示例代码库中 ingress 的相对路径为 /deployment/test/devops-sample-svc.yaml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sample"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据运行集群的IP地址，替换host的域名，即将“119-8-58-20”替换为运行集群的IP")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" devops"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sample.119"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("58"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("20.nip.io\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("修改本地 Git 客户端配置，将 IT 系统的 GitLab 代码库设置为远程仓库，再 push 部署配置清单到 IT 系统的代码库。推送成功后，将向 IT 系统的部署运行时环境部署应用。Git CLI 详情参考 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/tutorials/make_your_first_git_commit.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下为产品的 GitLab 代码库，用于存储产品的部署配置清单")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])])]),a("blockquote",[a("p",[t._v("推送部署配置清单的 GitLab 账号需要拥有存储部署配置清单代码库的写入权限。")])]),t._v(" "),a("h2",{attrs:{id:"查看部署结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看部署结果"}},[t._v("#")]),t._v(" 查看部署结果")]),t._v(" "),a("p",[t._v("可以通过 ArgoCD 控制台或者 kubectl 命令行来查看 IT 系统的部署结果，并且只能查看和管理被授权 IT 系统的相关资源。下文将描述如何通过 ArgoCD 查看部署结果。")]),t._v(" "),a("p",[t._v("访问安装在运行集群中的 "),a("RouterLink",{attrs:{to:"/guide/user-guide/installation.html#查看部署结果"}},[t._v("ArgoCD 控制台")]),t._v("，点击 LOG IN VIA DEX 进行统一认证，如果在当前浏览器会话中未登录过 GitLab，那么需要填写 GitLab 账号密码进行登录。登录成功后页面会自动跳转到 ArgoCD 控制台。在 ArgoCD 控制台中将呈现被授权 IT 系统相关的 ArgoCD applications，可以查看和管理相关资源。点击某个 ArgoCD application 卡片，将呈现该 application 的资源清单，可以查看资源的 YAML、事件、日志等，并对该资源执行同步、重启、删除等操作。\n点击 ArgoCD 控制台左侧菜单栏的“设置”，可以查看被授权IT 系统相关的 ArgoCD projects。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);