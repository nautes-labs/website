(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{288:function(a,e,t){"use strict";t.r(e);var r=t(14),s=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"清理环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理环境"}},[a._v("#")]),a._v(" 清理环境")]),a._v(" "),e("p",[a._v("本文档将描述清理 IT 系统部署运行环境的执行过程。包括以下步骤：")]),a._v(" "),e("p",[e("a",{attrs:{href:"#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6"}},[a._v("前提条件")]),e("br"),a._v(" "),e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E9%83%A8%E7%BD%B2%E5%BA%94%E7%94%A8%E7%9A%84%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83"}},[a._v("销毁部署应用的运行环境")]),e("br"),a._v(" "),e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E9%83%A8%E7%BD%B2%E5%BA%94%E7%94%A8%E7%9A%84%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4"}},[a._v("销毁部署应用的物理集群")]),e("br"),a._v(" "),e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E9%83%A8%E7%BD%B2%E5%BA%94%E7%94%A8%E7%9A%84%E8%99%9A%E6%8B%9F%E9%9B%86%E7%BE%A4"}},[a._v("销毁部署应用的虚拟集群")]),e("br"),a._v(" "),e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E7%8E%AF%E5%A2%83"}},[a._v("销毁环境")])]),a._v(" "),e("blockquote",[e("p",[a._v("根据 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html"}},[a._v("部署一个应用")]),a._v(" 过程中注册的集群类型，决定是否执行“销毁部署应用的物理集群、销毁部署应用的虚拟集群”步骤以销毁集群。")],1)]),a._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),e("p",[a._v("在指定集群中成功安装 IT 系统的部署运行时环境，并且在运行时环境中成功部署应用。")]),a._v(" "),e("h2",{attrs:{id:"销毁部署应用的运行环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁部署应用的运行环境"}},[a._v("#")]),a._v(" 销毁部署应用的运行环境")]),a._v(" "),e("p",[a._v("下文将描述通过命令行销毁 IT 系统运行环境的 Kubernetes 资源文件。")]),a._v(" "),e("p",[a._v("先克隆 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("配置模板库"),e("OutboundLink")],1),a._v(" 的代码库到本地，批量替换“examples/demo-product.yaml”中的变量 suffix，并更新 Environment 资源的 cluster 值为运行集群的名称。下载 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),e("OutboundLink")],1),a._v("，执行以下命令。命令执行成功后，将删除 GitLab 代码库中对应的 Kubernetes 资源文件，并基于这些文件在 GitLab 中删除与IT系统相关的群组和代码库、以及在指定运行集群上销毁 IT 系统的部署运行时环境。")]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# “examples/demo-product.yaml” 指配置模板库中模板文件的相对路径")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gitlab-access-token 是 GitLab 访问令牌")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# api-server-address 是 API Server 的访问地址")]),a._v("\nnautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-product.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("blockquote",[e("p",[a._v("GitLab 账号的注意事项，与 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#准备部署应用的运行环境"}},[a._v("注册部署应用的运行环境")]),a._v(" 相同。")],1)]),a._v(" "),e("h2",{attrs:{id:"销毁部署应用的物理集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁部署应用的物理集群"}},[a._v("#")]),a._v(" 销毁部署应用的物理集群")]),a._v(" "),e("blockquote",[e("p",[a._v("请确保已成功安装用于部署应用的物理集群。")])]),a._v(" "),e("p",[a._v("下文将描述如何销毁部署应用的物理集群。")]),a._v(" "),e("p",[a._v("先克隆 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("注册集群模板"),e("OutboundLink")],1),a._v(" 代码库到本地，并替换“examples/demo-cluster-physical-worker.yaml”模板文件的相关变量。下载 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令行工具"),e("OutboundLink")],1),a._v("，并执行以下命令。命令执行成功后，将会销毁物理集群。")]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# examples/demo-cluster-host.yaml 是在模板代码库中模板文件的相对路径")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gitlab-access-token 是 GitLab 访问令牌")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# api-server-address 是 API Server 的访问地址")]),a._v("\nnautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-physical-worker.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("blockquote",[e("p",[a._v("GitLab 账号、API Server 的注意事项，与 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册部署应用的物理集群"}},[a._v("注册部署应用的物理集群")]),a._v(" 相同。")],1)]),a._v(" "),e("h2",{attrs:{id:"销毁部署应用的虚拟集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁部署应用的虚拟集群"}},[a._v("#")]),a._v(" 销毁部署应用的虚拟集群")]),a._v(" "),e("blockquote",[e("p",[a._v("请确保已成功安装用于部署应用的虚拟集群。")])]),a._v(" "),e("p",[a._v("下文将描述如何销毁部署应用的虚拟集群。")]),a._v(" "),e("ol",[e("li",[a._v("执行命令行销毁虚拟集群。步骤与 "),e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E9%83%A8%E7%BD%B2%E5%BA%94%E7%94%A8%E7%9A%84%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4"}},[a._v("销毁部署应用的物理集群")]),a._v(" 类似，使用 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("注册集群模板"),e("OutboundLink")],1),a._v(" 代码库中“examples/demo-cluster-virtual-worker.yaml”模板文件。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("nautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-virtual-worker.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("执行命令行销毁虚拟集群所属的宿主集群，步骤与 "),e("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E9%83%A8%E7%BD%B2%E5%BA%94%E7%94%A8%E7%9A%84%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4"}},[a._v("销毁部署应用的物理集群")]),a._v(" 类似，使用 "),e("a",{attrs:{href:"https://github.com/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[a._v("注册集群模板"),e("OutboundLink")],1),a._v(" 代码库中“examples/demo-cluster-host.yaml”模板文件。")])]),a._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("nautes remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" examples/demo-cluster-host.yaml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gitlab")]),a._v("-access-token "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$api")]),a._v("-server-address\n")])])]),e("p",[a._v("命令执行成功后，将会销毁虚拟集群及所属的宿主集群。")]),a._v(" "),e("h2",{attrs:{id:"销毁环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#销毁环境"}},[a._v("#")]),a._v(" 销毁环境")]),a._v(" "),e("p",[a._v("详情参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/installation.html#销毁环境"}},[a._v("安装部署")]),a._v("。")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);