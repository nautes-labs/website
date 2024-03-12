(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{357:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"维护部署运行时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#维护部署运行时"}},[t._v("#")]),t._v(" 维护部署运行时")]),t._v(" "),a("p",[t._v("在开始本节之前，请确保您已阅读 "),a("RouterLink",{attrs:{to:"/guide/user-guide/main-process.html"}},[t._v("主体流程")]),t._v(" 章节，了解执行流水线和部署应用的主体流程和相关术语。")],1),t._v(" "),a("p",[t._v("部署运行时定义了用于部署项目的配置声明，如：部署清单的存储位置、部署到的目标环境等。")]),t._v(" "),a("p",[t._v("支持通过 "),a("RouterLink",{attrs:{to:"/guide/user-guide/run-a-pipeline.html#初始化产品"}},[t._v("命令行")]),t._v(" 和 API 两种方式维护部署运行时。")],1),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("h3",{attrs:{id:"创建-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-access-token"}},[t._v("#")]),t._v(" 创建 access token")]),t._v(" "),a("p",[t._v("您需要创建一个 access token，作为请求 API 的请求头。详情参考 "),a("RouterLink",{attrs:{to:"/guide/user-guide/product.html#创建-access-token"}},[t._v("创建 access token")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"导入证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入证书"}},[t._v("#")]),t._v(" 导入证书")]),t._v(" "),a("p",[t._v("在使用 HTTPS 协议访问 Nautes API Server 之前，请先"),a("RouterLink",{attrs:{to:"/guide/user-guide/run-a-pipeline.html#导入证书"}},[t._v("导入证书")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"创建产品"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建产品"}},[t._v("#")]),t._v(" 创建产品")]),t._v(" "),a("p",[t._v("部署运行时归属于产品，您需要创建至少一个"),a("RouterLink",{attrs:{to:"/guide/user-guide/product.html#创建产品api"}},[t._v("产品")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"创建代码库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建代码库"}},[t._v("#")]),t._v(" 创建代码库")]),t._v(" "),a("p",[t._v("部署运行时需要监听存储 Kubernetes 资源清单的代码库，您需要创建至少一个属于指定产品的"),a("RouterLink",{attrs:{to:"/guide/user-guide/code-repo.html#创建和更新代码库api"}},[t._v("代码库")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"创建环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建环境"}},[t._v("#")]),t._v(" 创建环境")]),t._v(" "),a("p",[t._v("部署运行时需要向关联运行时集群的环境下发部署，您需要创建至少一个属于指定产品的"),a("RouterLink",{attrs:{to:"/guide/user-guide/environment.html#创建和更新环境api"}},[t._v("环境")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"创建和更新部署运行时-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建和更新部署运行时-api"}},[t._v("#")]),t._v(" 创建和更新部署运行时（API）")]),t._v(" "),a("h3",{attrs:{id:"生成创建-更新部署运行时的-api-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成创建-更新部署运行时的-api-请求"}},[t._v("#")]),t._v(" 生成创建/更新部署运行时的 API 请求")]),t._v(" "),a("p",[t._v("通过接口定义 "),a("code",[t._v("Deploymentruntime_SaveDeploymentRuntime")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $api-server-address 为 Nautes API Server 的访问地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $gitlab-access-token 为 GitLab access token")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $product-name 为部署运行时所属产品的名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $deploymentruntime-name 为部署运行时的名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $project 为部署运行时关联的项目")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $coderepo-name 部署运行时监听的代码库名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $coderepo-target-revision 部署运行时监听的代码库版本")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $coderepo-path 为部署运行时监听的代码库路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $destination 为部署运行时下发部署的目标环境")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $namespace-101 可选，为部署运行时下发部署的目标环境的命名空间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $namespace-102 可选，为部署运行时下发部署的目标环境的命名空间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n                # 部署运行时关联的项目\n                "projects_ref": [\n                    "$project"\n                ],\n                "manifest_source": {\n                    # 部署运行时监听的代码库名称\n                    "code_repo": "$coderepo-name",\n                    # 部署运行时监听的代码库版本\n                    "target_revision": "$coderepo-target-revision",\n                    # 部署运行时监听的代码库路径\n                    "path": "$coderepo-path"\n                },\n                # 部署运行时下发部署的目标环境\n                "destination": {\n                  "environment": "$destination",\n                  # 部署运行时支持部署不同的 Deployment 到不同的命名空间，比如 A Deployment 部署到 $namespace-101, B Deployment 部署到 $namespace-102。\n                  "namespaces": [\n                    "$namespace-101"\n                    "$namespace-102"\n                  ]\n                }\n            }\'')]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-dev'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n                "projects_ref": [\n                    "api-server"\n                ],\n                "manifest_source": {\n                    "code_repo": "api-server",\n                    "target_revision": "HEAD",\n                    "path": "manifests/development"\n                },\n                "destination": {\n                  "environment": "env-dev",\n                  "namespaces": [\n                    "dr-dev"\n                  ]\n                }\n            }\'')]),t._v("\n")])])]),a("h3",{attrs:{id:"执行创建-更新部署运行时的-api-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行创建-更新部署运行时的-api-请求"}},[t._v("#")]),t._v(" 执行创建/更新部署运行时的 API 请求")]),t._v(" "),a("p",[t._v("使用 curl 命令或者其他工具执行 API 请求，以新增部署运行时。")]),t._v(" "),a("p",[t._v("请求成功后，将在指定产品的 "),a("code",[t._v("default.project")]),t._v(" 代码库中生成部署运行时的资源文件。部署运行时的资源文件示例如下：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nautes.resource.nautes.io/v1alpha1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DeploymentRuntime\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespaces")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("manifestSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("codeRepo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xxxx\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" manifests/development\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetRevision")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HEAD\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("product")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xxxx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projectsRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n")])])]),a("blockquote",[a("p",[t._v("当部署运行时已经部署到某个运行时集群，暂不支持变更部署运行时的 "),a("code",[t._v("destination")]),t._v(" 。")]),t._v(" "),a("p",[t._v("请求 API 更新部署运行时也将更新部署运行时的资源文件。")]),t._v(" "),a("p",[t._v("只有当您的账号是 GitLab 的 group 成员，并且具备对 "),a("code",[t._v("default.project")]),t._v(" 代码库的 main 分支的写入权限，才可以创建或者更新部署运行时。")])]),t._v(" "),a("h2",{attrs:{id:"删除部署运行时-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除部署运行时-api"}},[t._v("#")]),t._v(" 删除部署运行时（API）")]),t._v(" "),a("h3",{attrs:{id:"生成删除部署运行时的-api-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成删除部署运行时的-api-请求"}},[t._v("#")]),t._v(" 生成删除部署运行时的 API 请求")]),t._v(" "),a("p",[t._v("通过接口定义 "),a("code",[t._v("Deploymentruntime_DeleteDeploymentRuntime")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-dev'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("h3",{attrs:{id:"执行删除部署运行时的-api-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行删除部署运行时的-api-请求"}},[t._v("#")]),t._v(" 执行删除部署运行时的 API 请求")]),t._v(" "),a("p",[t._v("使用 curl 命令或者其他工具执行 API 请求，以删除部署运行时。")]),t._v(" "),a("p",[t._v("请求成功后，将删除在指定产品的 "),a("code",[t._v("default.project")]),t._v(" 代码库中的部署运行时的资源文件，并且销毁运行时集群中的部署运行时。")]),t._v(" "),a("blockquote",[a("p",[t._v("只有当您的账号是 GitLab 的 group 成员，并且具备对 "),a("code",[t._v("default.project")]),t._v(" 代码库的 main 分支的写入权限，才可以删除部署运行时。")])]),t._v(" "),a("h2",{attrs:{id:"查询部署运行时列表-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询部署运行时列表-api"}},[t._v("#")]),t._v(" 查询部署运行时列表（API）")]),t._v(" "),a("h3",{attrs:{id:"生成查询部署运行时列表的-api-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成查询部署运行时列表的-api-请求"}},[t._v("#")]),t._v(" 生成查询部署运行时列表的 API 请求")]),t._v(" "),a("p",[t._v("通过接口定义 "),a("code",[t._v("Deploymentruntime_ListDeploymentRuntimes")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("h3",{attrs:{id:"执行查询部署运行时列表的-api-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行查询部署运行时列表的-api-请求"}},[t._v("#")]),t._v(" 执行查询部署运行时列表的 API 请求")]),t._v(" "),a("p",[t._v("使用 curl 命令或者其他工具执行 API 请求，以查询部署运行时列表。部署运行时列表的返回值示例如下：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"items"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"product"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nautes-labs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dr-dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"projects_ref"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api-server"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"manifest_source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"code_repo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api-server"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"target_revision"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HEAD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"manifests/development"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"destination"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"environment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env-dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"namespaces"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dr-dev"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("只有当您的账号是 GitLab 的 group 成员，并且具备对 "),a("code",[t._v("default.project")]),t._v(" 代码库的读取权限，才可以查询部署运行时列表。")])]),t._v(" "),a("h2",{attrs:{id:"查看部署运行时详情-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看部署运行时详情-api"}},[t._v("#")]),t._v(" 查看部署运行时详情（API）")]),t._v(" "),a("h3",{attrs:{id:"生成查看部署运行时详情的-api-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成查看部署运行时详情的-api-请求"}},[t._v("#")]),t._v(" 生成查看部署运行时详情的 API 请求")]),t._v(" "),a("p",[t._v("通过接口定义 "),a("code",[t._v("Deploymentruntime_GetDeploymentRuntime")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-dev'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("h3",{attrs:{id:"执行查看部署运行时详情的-api-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行查看部署运行时详情的-api-请求"}},[t._v("#")]),t._v(" 执行查看部署运行时详情的 API 请求")]),t._v(" "),a("p",[t._v("使用 curl 命令或者其他工具执行 API 请求，以查看部署运行时详情。部署运行时详情的返回值示例与"),a("a",{attrs:{href:"#%E6%89%A7%E8%A1%8C%E6%9F%A5%E8%AF%A2%E9%83%A8%E7%BD%B2%E8%BF%90%E8%A1%8C%E6%97%B6%E5%88%97%E8%A1%A8%E7%9A%84-api-%E8%AF%B7%E6%B1%82"}},[t._v("查询部署运行时列表")]),t._v("类似。")]),t._v(" "),a("blockquote",[a("p",[t._v("只有当您的账号是 GitLab 的 group 成员，并且具备对 "),a("code",[t._v("default.project")]),t._v(" 代码库的读取权限，才可以查看部署运行时详情。")])]),t._v(" "),a("h2",{attrs:{id:"强制创建-更新-删除部署运行时-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制创建-更新-删除部署运行时-api"}},[t._v("#")]),t._v(" 强制创建/更新/删除部署运行时（API）")]),t._v(" "),a("p",[t._v("适用于需要跳过 API 校验的特殊场景，详情参见"),a("RouterLink",{attrs:{to:"/guide/user-guide/main-process.html#初始化产品"}},[t._v("初始化产品")]),t._v("。")],1),t._v(" "),a("p",[t._v("以创建部署运行时为例，将 "),a("code",[t._v("destination")]),t._v(" 属性设置为不合规的 environment，启用 "),a("code",[t._v("insecure_skip_check")]),t._v(" 查询参数并设置其值为 "),a("code",[t._v("true")]),t._v("，可以强制提交部署运行时的资源文件。请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-demo?insecure_skip_check=true'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n                "projects_ref": [\n                    "api-server"\n                ],\n                "manifest_source": {\n                    "code_repo": "api-server",\n                    "target_revision": "HEAD",\n                    "path": "manifests/development"\n                },\n                "destination": {\n                  "environment": "env-dev",\n                  "namespaces": [\n                    "dr-dev"\n                  ]\n                }\n            }\'')]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);