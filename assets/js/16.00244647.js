(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{289:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"注册和销毁集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册和销毁集群"}},[t._v("#")]),t._v(" 注册和销毁集群")]),t._v(" "),a("p",[t._v("在开始本节之前，请确保您已阅读 "),a("RouterLink",{attrs:{to:"/guide/user-guide/main-process.html"}},[t._v("主体流程")]),t._v(" 章节，了解部署应用的主体流程 和相关术语。同时，确保 Nautes 安装部署成功，详情参见 "),a("a",{attrs:{href:"installation"}},[t._v("安装部署")]),t._v("。")],1),t._v(" "),a("p",[t._v("下文将详细介绍如何注册和销毁基于物理集群的运行时集群、注册和销毁基于虚拟集群的运行时集群。支持通过 API 接口和命令行的方式来注册、销毁集群。")]),t._v(" "),a("h2",{attrs:{id:"注册集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册集群"}},[t._v("#")]),t._v(" 注册集群")]),t._v(" "),a("h3",{attrs:{id:"注册基于物理集群的运行时集群-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册基于物理集群的运行时集群-api"}},[t._v("#")]),t._v(" 注册基于物理集群的运行时集群（API）")]),t._v(" "),a("ol",[a("li",[t._v("访问 "),a("RouterLink",{attrs:{to:"/guide/user-guide/installation.html#查看部署结果"}},[t._v("Swagger UI")]),t._v("，选择右上角 select a definition 下拉框中的 api.cluster.v1.Cluster。选择 POST 接口，点击 try it out，在 cluster_name 参数中输入集群名称，点击 execute，将生成 API 请求的代码示例。")],1),t._v(" "),a("li",[t._v("访问 "),a("RouterLink",{attrs:{to:"/guide/user-guide/installation.html#查看部署结果"}},[t._v("GitLab UI")]),t._v("，获取请求 API 的 access token，作为 API 的请求头参数。详情参考 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Personal access tokens"),a("OutboundLink")],1),t._v("。")],1),t._v(" "),a("li",[t._v("将前置步骤获取的 access token 作为 API 的请求头参数，通过 curl 命令，或者 Postman、JMeter 等工具执行 API 请求以注册基于物理集群的运行时集群。请求体的参数注释，详情参考 "),a("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册集群模板"),a("OutboundLink")],1),t._v(" 代码库中“examples/demo-cluster-physical-worker.yaml”的文件注释。更新后的 API 请求的代码示例："),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实操过程中根据实际情况替换 URL 地址和相关参数")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://10.204.118.221:32159/api/v1/clusters/cluster-physical-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n   "api_server": "https://xxx.xxx.xxx.xxx:xxxxx",\n   "cluster_kind": "kubernetes",\n   "cluster_type": "physical",\n   "usage": "worker",\n   "argocd_host": "https://argocd.cluster-demo.xxx.xxx.xxx.xxx.nip.io",\n   "traefik": {\n     "http_node_port": "xxxxx",\n     "https_node_port": "xxxxx"\n   },\n   "kubeconfig": |\n     apiVersion: v1\n       clusters:\n       - cluster:\n           certificate-authority-data:\n     ...\n }\'')]),t._v("   \n")])])])])]),t._v(" "),a("p",[t._v("请求成功后，将向租户管理集群注册指定参数的物理集群作为部署运行时集群，并在物理集群中安装ArgoCD、ArgoRollouts、ExternalSecret、HNC、Vault-agent等组件。")]),t._v(" "),a("h3",{attrs:{id:"注册基于虚拟集群的运行时集群-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册基于虚拟集群的运行时集群-api"}},[t._v("#")]),t._v(" 注册基于虚拟集群的运行时集群（API）")]),t._v(" "),a("p",[t._v("注册基于虚拟集群的运行时集群分为两步：注册虚拟集群所属的宿主集群、注册虚拟集群。")]),t._v(" "),a("ol",[a("li",[t._v("通过 API 注册宿主集群，步骤与 "),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E5%9F%BA%E4%BA%8E%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4api"}},[t._v("注册基于物理集群的运行时集群（API）")]),t._v("类似，请求体不同。请求体的参数注释，详情参考 "),a("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册集群模板"),a("OutboundLink")],1),t._v(" 代码库中“examples/demo-cluster-host.yaml”的文件注释。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://10.204.118.221:32159/api/v1/clusters/cluster-host-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "api_server": "https://xxx.xxx.xxx.xxx:xxxxx",\n    "cluster_kind": "kubernetes",\n    "cluster_type": "physical",\n    "usage": "host",\n    "traefik": {\n      "http_node_port": "xxxxx",\n      "https_node_port": "xxxxx"\n    },\n    "kubeconfig": |\n      apiVersion: v1\n        clusters:\n        - cluster:\n            certificate-authority-data:\n      ...\n  }\'')]),t._v("   \n")])])]),a("p",[t._v("请求成功后，将向租户管理集群注册指定参数的宿主集群，并向宿主集群中安装 traefik 等组件。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("通过 API 注册基于虚拟集群的运行时集群，步骤与 "),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E5%9F%BA%E4%BA%8E%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4api"}},[t._v("注册基于物理集群的运行时集群（API）")]),t._v("类似，请求体不同。请求体的参数注释，详情参考 "),a("a",{attrs:{href:"https://gitlab.bluzin.io/nautes-labs/cli.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册集群模板"),a("OutboundLink")],1),t._v(" 代码库中“examples/demo-cluster-virtual-worker.yaml”的文件注释。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实操过程中根据实际情况替换 URL 地址和相关参数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://10.204.118.221:32159/api/v1/clusters/cluster-virtual-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "api_server": "https://xxx.xxx.xxx.xxx:xxxxx",\n    "cluster_kind": "kubernetes",\n    "cluster_type": "virtual",\n    "usage": "worker",\n    "hostCluster": "cluster-host",\n    "argocd_host": "https://argocd.cluster-demo.xxx.xxx.xxx.xxx.nip.io",\n    "vcluster": \n      {\n        httpsNodePort: "xxxxx"\n      }\n  }\'')]),t._v("   \n")])])]),a("p",[t._v("请求成功后，将向租户管理集群注册指定参数的虚拟集群作为部署运行时集群，并在虚拟集群中安装ArgoCD、ArgoRollouts、ExternalSecret、HNC、Vault-agent等组件。")]),t._v(" "),a("h3",{attrs:{id:"注册基于物理集群的运行时集群-命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册基于物理集群的运行时集群-命令行"}},[t._v("#")]),t._v(" 注册基于物理集群的运行时集群（命令行）")]),t._v(" "),a("p",[t._v("详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册部署应用的物理集群"}},[t._v("注册基于物理集群的运行时集群")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"注册基于虚拟集群的运行时集群-命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册基于虚拟集群的运行时集群-命令行"}},[t._v("#")]),t._v(" 注册基于虚拟集群的运行时集群（命令行）")]),t._v(" "),a("p",[t._v("详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册部署应用的虚拟集群"}},[t._v("注册基于虚拟集群的运行时集群")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"销毁集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁集群"}},[t._v("#")]),t._v(" 销毁集群")]),t._v(" "),a("h3",{attrs:{id:"销毁基于物理集群的运行时集群-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁基于物理集群的运行时集群-api"}},[t._v("#")]),t._v(" 销毁基于物理集群的运行时集群（API）")]),t._v(" "),a("p",[t._v("由于集群可能负载了产品的运行时环境，在销毁集群之前请先销毁产品配置清单，详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/clean-environment.html#销毁部署应用的运行环境"}},[t._v("删除产品配置清单")]),t._v("。当基于物理集群的运行时集群注册成功后，可以通过 API 销毁集群。")],1),t._v(" "),a("ol",[a("li",[t._v("访问 "),a("RouterLink",{attrs:{to:"/guide/user-guide/installation.html#查看部署结果"}},[t._v("Swagger UI")]),t._v("，选择右上角 select a definition 下拉框中的 api.cluster.v1.Cluster。选择 DELETE 接口，点击 try it out，在 cluster_name 参数中输入集群名称，点击 execute，生成 API 请求的代码示例。与 "),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E5%9F%BA%E4%BA%8E%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4api"}},[t._v("注册基于物理集群的运行时集群（API）")]),t._v(" 的步骤1类似。")],1),t._v(" "),a("li",[t._v("获取请求 API 的 access token，作为 API 请求的请求头参数。详情参考 "),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E5%9F%BA%E4%BA%8E%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4api"}},[t._v("注册基于物理集群的运行时集群（API）")]),t._v(" 的步骤2。")]),t._v(" "),a("li",[t._v("将前置步骤获取的 access token 作为 API 请求的请求头参数，通过 curl 命令，或者 Postman、JMeter 等工具执行 API 来销毁集群。请求成功后，该集群将被销毁。")])]),t._v(" "),a("h3",{attrs:{id:"销毁基于虚拟集群的运行时集群-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁基于虚拟集群的运行时集群-api"}},[t._v("#")]),t._v(" 销毁基于虚拟集群的运行时集群（API）")]),t._v(" "),a("p",[t._v("销毁集群之前请先销毁产品配置清单，详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/clean-environment.html#销毁部署应用的运行环境"}},[t._v("删除产品配置清单")]),t._v("。\n当基于虚拟集群的运行时集群注册成功后，可以通过 API 销毁集群。与注册虚拟集群的步骤相反，包括两步：销毁虚拟集群、销毁虚拟集群所属的宿主集群。")],1),t._v(" "),a("ol",[a("li",[t._v("通过 API 销毁虚拟集群。步骤与 "),a("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E5%9F%BA%E4%BA%8E%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4api"}},[t._v("销毁基于物理集群的运行时集群（API）")]),t._v("类似，请求体与 "),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E5%9F%BA%E4%BA%8E%E8%99%9A%E6%8B%9F%E9%9B%86%E7%BE%A4%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4api"}},[t._v("注册基于虚拟集群的运行时集群（API）")]),t._v("的步骤2相同。")]),t._v(" "),a("li",[t._v("通过 API 销毁虚拟集群所属的宿主集群。步骤与 "),a("a",{attrs:{href:"#%E9%94%80%E6%AF%81%E5%9F%BA%E4%BA%8E%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4api"}},[t._v("销毁基于物理集群的运行时集群（API）")]),t._v("类似，请求体与 "),a("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E5%9F%BA%E4%BA%8E%E8%99%9A%E6%8B%9F%E9%9B%86%E7%BE%A4%E7%9A%84%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4api"}},[t._v("注册基于虚拟集群的运行时集群（API）")]),t._v("的步骤1相同。\n请求成功后，虚拟集群及其宿主集群将被销毁。")])]),t._v(" "),a("h3",{attrs:{id:"销毁基于物理集群的运行时集群-命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁基于物理集群的运行时集群-命令行"}},[t._v("#")]),t._v(" 销毁基于物理集群的运行时集群（命令行）")]),t._v(" "),a("p",[t._v("详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/clean-environment.html#销毁部署应用的物理集群"}},[t._v("销毁基于物理集群的运行时集群")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"销毁基于虚拟集群的运行时集群-命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁基于虚拟集群的运行时集群-命令行"}},[t._v("#")]),t._v(" 销毁基于虚拟集群的运行时集群（命令行）")]),t._v(" "),a("p",[t._v("详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/clean-environment.html#销毁部署应用的虚拟集群"}},[t._v("销毁基于虚拟集群的运行时集群")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);