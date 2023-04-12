(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{287:function(a,e,t){"use strict";t.r(e);var s=t(14),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"清理环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理环境"}},[a._v("#")]),a._v(" 清理环境")]),a._v(" "),e("p",[a._v("本文档将描述一个用户应用的部署运行环境的清理过程。包括以下步骤：")]),a._v(" "),e("p",[e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83"}},[a._v("销毁运行环境")]),e("br"),a._v(" "),e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E9%9B%86%E7%BE%A4"}},[a._v("销毁集群")]),e("br"),a._v(" "),e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E7%8E%AF%E5%A2%83"}},[a._v("销毁环境")])]),a._v(" "),e("blockquote",[e("p",[a._v("开始本文档的操作之前，请确保运行集群中成功部署了应用的部署运行环境。")])]),a._v(" "),e("h2",{attrs:{id:"销毁运行环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁运行环境"}},[a._v("#")]),a._v(" 销毁运行环境")]),a._v(" "),e("p",[a._v("下文将描述使用命令行销毁产品运行环境相关的 Kubernetes 资源文件。")]),a._v(" "),e("ol",[e("li",[a._v("将命令行程序的代码库克隆到本地。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/nautes-labs/cli.git\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("替换位于相对路径 "),e("code",[a._v("examples/demo-product.yaml")]),a._v(" 下配置运行环境模板的变量，包括 "),e("code",[a._v("$suffix")]),a._v("，"),e("code",[a._v("$runtime-cluster")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[a._v("运行环境模板及其注释，详情参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#准备运行环境"}},[a._v("准备运行环境")]),a._v("。")],1)]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("下载 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),e("OutboundLink")],1),a._v("，执行以下命令，将删除 GitLab 代码库中的 Kubernetes 资源文件。您可以执行 "),e("code",[a._v("nautes -h")]),a._v("、"),e("code",[a._v("nautes apply -h")]),a._v(" 等命令来查看帮助说明。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除用于部署产品的运行环境")]),a._v("\nnautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-product.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("blockquote",[e("p",[a._v("GitLab 账号的注意事项，与 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#准备运行环境"}},[a._v("准备运行环境")]),a._v(" 的注意事项相同。"),e("br"),a._v("\n命令执行成功后，将根据 Kubernetes 资源文件删除GitLab 中和产品有映射关系的 group 及其代码库，并在运行集群上销毁部署产品的运行环境。")],1)]),a._v(" "),e("h2",{attrs:{id:"销毁集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁集群"}},[a._v("#")]),a._v(" 销毁集群")]),a._v(" "),e("p",[a._v("您需要根据在 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册集群"}},[a._v("部署一个应用")]),a._v(" 中注册的集群形态，决定销毁哪种形态的集群。")],1),a._v(" "),e("h3",{attrs:{id:"销毁物理集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁物理集群"}},[a._v("#")]),a._v(" 销毁物理集群")]),a._v(" "),e("blockquote",[e("p",[a._v("请确保已成功注册物理集群。")])]),a._v(" "),e("ol",[e("li",[a._v("将命令行程序的代码库克隆到本地。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/nautes-labs/cli.git\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("替换位于相对路径 "),e("code",[a._v("examples/demo-cluster-physical-worker.yaml")]),a._v(" 下注册物理集群的模板的变量，包括 "),e("code",[a._v("$suffix")]),a._v("、"),e("code",[a._v("$api-server")]),a._v(" 和 "),e("code",[a._v("$kubeconfig")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[a._v("注册物理集群的模板及其注释，详情参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册物理集群"}},[a._v("注册物理集群")]),a._v("。")],1)]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("下载 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),e("OutboundLink")],1),a._v("，执行以下命令，以销毁物理集群。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 销毁物理集群")]),a._v("\nnautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-physical-worker.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("blockquote",[e("p",[a._v("GitLab 账号、API Server 的注意事项，与 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册物理集群"}},[a._v("注册物理集群")]),a._v(" 的注意事项相同。"),e("br"),a._v("\n命令执行成功后，将会销毁物理集群。")],1)]),a._v(" "),e("h3",{attrs:{id:"销毁虚拟集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁虚拟集群"}},[a._v("#")]),a._v(" 销毁虚拟集群")]),a._v(" "),e("blockquote",[e("p",[a._v("请确保已成功注册虚拟集群。")])]),a._v(" "),e("ol",[e("li",[a._v("将命令行程序的代码库克隆到本地。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/nautes-labs/cli.git\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("替换位于相对路径 "),e("code",[a._v("examples/demo-cluster-virtual-worker.yaml")]),a._v(" 下的注册虚拟集群的模板的变量，包括 "),e("code",[a._v("$suffix")]),a._v("、"),e("code",[a._v("$api-server")]),a._v("、"),e("code",[a._v("$host-cluster")]),a._v(" 和 "),e("code",[a._v("$api-server-port")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[a._v("注册虚拟集群的模板及其注释，详情参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册虚拟集群"}},[a._v("注册虚拟集群")]),a._v("。")],1)]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("下载 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),e("OutboundLink")],1),a._v("，执行以下命令，将销毁虚拟集群。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 销毁虚拟集群")]),a._v("\nnautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-virtual-worker.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("替换位于相对路径 "),e("code",[a._v("examples/demo-cluster-host.yaml")]),a._v(" 下的注册宿主集群的模板的变量，包括 "),e("code",[a._v("$suffix")]),a._v("、"),e("code",[a._v("$api-server")]),a._v(" 和 "),e("code",[a._v("$kubeconfig")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[a._v("注册宿主集群的模板及其注释，详情参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册虚拟集群"}},[a._v("注册宿主集群")]),a._v("。")],1)]),a._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[a._v("执行以下命令，以销毁虚拟集群所属的宿主集群。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 销毁宿主集群")]),a._v("\nnautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-host.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("blockquote",[e("p",[a._v("命令执行成功后，将会销毁虚拟集群及所属的宿主集群。")])]),a._v(" "),e("h2",{attrs:{id:"销毁环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁环境"}},[a._v("#")]),a._v(" 销毁环境")]),a._v(" "),e("p",[a._v("销毁环境，详情参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/installation.html#销毁环境"}},[a._v("销毁")]),a._v("。")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);