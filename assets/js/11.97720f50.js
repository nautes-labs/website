(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{289:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"创建运行时环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建运行时环境"}},[a._v("#")]),a._v(" 创建运行时环境")]),a._v(" "),t("p",[a._v("本文档将描述创建部署运行时环境的执行过程。包括以下步骤："),t("br"),a._v(" "),t("a",{attrs:{href:"#%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2"}},[a._v("安装部署")]),t("br"),a._v(" "),t("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E9%83%A8%E7%BD%B2%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4"}},[a._v("注册部署运行时集群")]),t("br"),a._v(" "),t("a",{attrs:{href:"#%E6%8F%90%E4%BA%A4%E4%BA%A7%E5%93%81%E9%85%8D%E7%BD%AE%E6%B8%85%E5%8D%95"}},[a._v("提交产品配置清单")]),t("br"),a._v(" "),t("a",{attrs:{href:"#%E6%8F%90%E4%BA%A4%E9%83%A8%E7%BD%B2%E9%85%8D%E7%BD%AE%E6%B8%85%E5%8D%95"}},[a._v("提交部署配置清单")]),t("br"),a._v(" "),t("a",{attrs:{href:"#%E6%9F%A5%E7%9C%8B%E9%83%A8%E7%BD%B2%E7%BB%93%E6%9E%9C"}},[a._v("查看部署结果")])]),a._v(" "),t("h2",{attrs:{id:"安装部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[a._v("#")]),a._v(" 安装部署")]),a._v(" "),t("p",[a._v("详情参考 "),t("RouterLink",{attrs:{to:"/src/guide/user-guide/quickstart-03.html"}},[a._v("安装部署")]),a._v("。")],1),a._v(" "),t("h2",{attrs:{id:"注册基于物理集群的运行时集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册基于物理集群的运行时集群"}},[a._v("#")]),a._v(" 注册基于物理集群的运行时集群")]),a._v(" "),t("p",[a._v("下文将描述如何在物理集群中安装相关配置，将其作为部署运行时集群使用。【待替换模板】")]),a._v(" "),t("p",[a._v("先克隆 "),t("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("注册集群模板"),t("OutboundLink")],1),a._v(" 的代码库到本地，并替换“examples/demo-cluster-physical-worker.yaml”模板文件的相关变量。然后下载 "),t("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),t("OutboundLink")],1),a._v("，并执行以下命令。命令执行成功后，会向物理集群中安装相关配置，并将物理集群向租户管理集群进行注册。这时该物理集群可以作为部署运行时集群使用。")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# examples/demo-cluster-host.yaml 是在模板代码库中模板文件的相对路径")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gitlab-access-token 是 GitLab 访问令牌")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# api-server-address 是 API Server 的访问地址")]),a._v("\nnautes apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-physical-worker.yaml "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),t("h2",{attrs:{id:"注册基于虚拟集群的运行时集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册基于虚拟集群的运行时集群"}},[a._v("#")]),a._v(" 注册基于虚拟集群的运行时集群")]),a._v(" "),t("p",[a._v("下文将描述如何在宿主集群中安装虚拟集群，并将虚拟集群作为部署运行时集群使用。")]),a._v(" "),t("p",[a._v("先克隆 "),t("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("注册集群模板"),t("OutboundLink")],1),a._v(" 的代码库到本地，并替换“examples/demo-cluster-host.yaml”模板文件的相关变量。然后下载 "),t("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),t("OutboundLink")],1),a._v("，并执行以下命令。命令执行成功后，会向宿主集群中安装相关配置，并将宿主集群向租户管理集群进行注册。")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("nautes apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-host.yaml "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),t("p",[a._v("宿主集群注册成功后，即可在宿主集群上进一步安装虚拟集群。与前面的步骤类似，模板代码库中模板文件的相对路径是“examples/demo-cluster-virtual-worker.yaml”，当替换变量、执行命令等步骤执行成功之后，会向虚拟集群中安装相关配置，并将虚拟集群向租户管理集群注册，这时该虚拟集群可以作为部署运行时集群使用。")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("nautes apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-virtual-worker.yaml "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),t("h2",{attrs:{id:"提交产品配置清单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交产品配置清单"}},[a._v("#")]),a._v(" 提交产品配置清单")]),a._v(" "),t("p",[a._v("支持通过 Nautes CLI 提交产品、环境、项目、代码库、部署运行时等资源文件，这些资源文件组成了“产品配置清单”。提交成功后，将根据产品配置清单向部署运行时集群实施部署，以安装产品的部署运行时环境。")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("克隆 "),t("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("产品配置库模板"),t("OutboundLink")],1),a._v(" 的代码库到本地，批量替换产品配置库模板中的变量 suffix。")])]),a._v(" "),t("li",[t("p",[a._v("下载 "),t("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),t("OutboundLink")],1),a._v("，执行以下命令。其中，“examples/demo.yaml” 指存储产品配置库模板的代码库的相对路径，gitlab-access-token 是您的 GitLab 访问令牌，api-server-address 是 "),t("RouterLink",{attrs:{to:"/src/guide/user-guide/quickstart-03.html#查看组件信息"}},[a._v("Nautes API Server 的访问地址")]),a._v("。执行成功后，将生成产品配置清单，并安装产品的部署运行时环境。")],1)])]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("nautes apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo.yaml "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),t("h2",{attrs:{id:"提交部署配置清单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交部署配置清单"}},[a._v("#")]),a._v(" 提交部署配置清单")]),a._v(" "),t("p",[a._v("部署产品的资源清单，简称为“部署配置清单”，例如 deployment、service 等资源。通过 Git CLI 提交部署配置清单到产品的代码库，产品的部署运行时环境将监听这个代码库以实施产品部署。")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("克隆 "),t("a",{attrs:{href:"https://github.com/liujunhong5891/demo-user-deployments",target:"_blank",rel:"noopener noreferrer"}},[a._v("部署示例"),t("OutboundLink")],1),a._v(" 代码库到本地。")])]),a._v(" "),t("li",[t("p",[a._v("修改本地代码库中 ingress 资源的域名。本示例代码库中 ingress 的相对路径为 /deployment/test/devops-sample-svc.yaml。")])])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" networking.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Ingress\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("sample"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dev\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("rules")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 根据部署运行时集群的IP地址，替换host的域名。这里将“119-8-58-20”替换为部署运行时集群的访问IP即可")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" devops"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("sample.119"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("58"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("20.nip.io\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("http")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("修改本地 Git 客户端配置，将产品的 GitLab 代码库设置为远程仓库。")])]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 以下为产品的 GitLab 代码库，用于存储产品的部署配置清单")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote set-url origin xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("提交部署配置清单到产品的代码库。Git CLI 详情参考 "),t("a",{attrs:{href:"https://docs.gitlab.com/ee/tutorials/make_your_first_git_commit.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitLab"),t("OutboundLink")],1),a._v("。")])]),a._v(" "),t("h2",{attrs:{id:"查看部署结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看部署结果"}},[a._v("#")]),a._v(" 查看部署结果")]),a._v(" "),t("p",[a._v("在部署产品的过程中或者部署完成后，可以通过 ArgoCD 控制台或者 kubectl 命令行来查看部署结果。这两种方式均支持单点登录，方便用户管理被授权的产品资源。"),t("br"),a._v("\n下文主要描述如何通过 ArgoCD 查看部署结果。")]),a._v(" "),t("p",[a._v("查看产品的相关资源：")]),a._v(" "),t("ol",[t("li",[a._v("访问部署运行时集群中的 "),t("RouterLink",{attrs:{to:"/src/guide/user-guide/quickstart-03.html#查看组件信息"}},[a._v("ArgoCD UI")]),a._v("。以 https://argocd.deployment1.119-8-58-20.nip.io:30443 为例，只需将“119-8-58-20”替换为部署运行时集群的访问IP即可。")],1),a._v(" "),t("li",[a._v("点击 log in via dex，将跳转到 GitLab UI 地址；填写您的 GitLab 账号密码并点击登录，将单点录入到 ArgoCD、并在 ArgoCD UI 呈现被授权产品相关的 ArgoCD applications。ArgoCD applications 与产品的部署运行时对应。")]),a._v(" "),t("li",[a._v("点击 ArgoCD UI 左侧菜单栏的“设置”，将跳转到 ArgoCD 的设置功能界面；点击 projects，可以查看被授权产品相关的 ArgoCD projects。ArgoCD projects 与产品对应。")])]),a._v(" "),t("p",[a._v("查看产品的部署运行时环境：")]),a._v(" "),t("ol",[t("li",[a._v("选择某个 ArgoCD application，将跳转到 application 的详情界面，并呈现部署运行时环境中的资源，例如 deployment、service 等。可以查看资源的类型、名称、运行状态、健康状态、运行时长、运行实例数等。")]),a._v(" "),t("li",[a._v("选择某个资源，可以查看资源的资源清单、事件、日志等，并对该资源执行同步、重启、删除等操作。由于 ArgoCD 监听了产品的代码库，因此无论在 ArgoCD 中怎么操作，最终都将与代码库中的部署配置清单保持一致。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);