(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{336:function(a,t,s){"use strict";s.r(t);var r=s(14),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"维护产品"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#维护产品"}},[a._v("#")]),a._v(" 维护产品")]),a._v(" "),t("p",[a._v("请确保您已阅读 "),t("RouterLink",{attrs:{to:"/guide/user-guide/main-process.html"}},[a._v("主体流程")]),a._v(" 章节，了解部署应用的主体流程和相关术语。")],1),a._v(" "),t("p",[a._v("产品对应一个软件系统，包含团队、项目、环境、代码库、制品库、及运行时。产品可以被租户管理员授权使用指定的 Kubernetes 集群。")]),a._v(" "),t("p",[a._v("当您使用 GitLab 作为产品提供者时，产品唯一对应一个 GitLab Group，Nautes 会在该 Group 下维护一个用于存储产品元数据的固定名称的代码库（默认为 "),t("code",[a._v("default.project")]),a._v("），同时，Nautes 会利用 GitLab 权限模型来管理用户对不同产品数据的权限。")]),a._v(" "),t("p",[a._v("支持通过 "),t("RouterLink",{attrs:{to:"/guide/user-guide/run-a-pipeline.html#初始化产品"}},[a._v("命令行")]),a._v(" 和 API 两种方式维护产品。")],1),a._v(" "),t("h2",{attrs:{id:"前提条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),t("h3",{attrs:{id:"创建-access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-access-token"}},[a._v("#")]),a._v(" 创建 access token")]),a._v(" "),t("p",[a._v("GitLab 安装完成后，您需要注册一个账号，并创建 "),t("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("personal access token"),t("OutboundLink")],1),a._v("，其中 access token 的权限范围包括：api、read_api、read_repository 和 write_repository。")]),a._v(" "),t("p",[a._v("access token 将作为请求 API 的请求头。")]),a._v(" "),t("h3",{attrs:{id:"导入证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入证书"}},[a._v("#")]),a._v(" 导入证书")]),a._v(" "),t("p",[a._v("如果您想使用 https 协议访问 Nautes API Server，请"),t("RouterLink",{attrs:{to:"/guide/user-guide/run-a-pipeline.html#导入证书"}},[a._v("导入证书")]),a._v("。")],1),a._v(" "),t("h2",{attrs:{id:"创建产品-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建产品-api"}},[a._v("#")]),a._v(" 创建产品（API）")]),a._v(" "),t("h3",{attrs:{id:"生成创建产品的-api-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成创建产品的-api-请求"}},[a._v("#")]),a._v(" 生成创建产品的 API 请求")]),a._v(" "),t("p",[a._v("通过接口定义 "),t("code",[a._v("Product_SaveProduct")]),a._v(" 生成 API 请求示例，并添加 access token 作为请求头。")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 替换变量 $api-server-address 为 Nautes API Server 的访问地址")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 替换变量 $gitlab-access-token 为 GitLab access token")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 替换变量 $product-name 为产品名称")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'POST'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n       "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HTTP://$api-server-address/api/v1/products/$product-name'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n       "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n       "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n       "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer $gitlab-access-token'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n       "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n       "git": {\n           "gitlab": {\n               # group 的名称\n               "name": $product-name,\n               # group 的路径\n               "path": $product-name,\n               # group 的可见性，例如：private、public\n               "visibility": $product-visibility,\n               "description": $product-desc\n               }\n           }\n       }\'')]),a._v("\n")])])]),t("p",[a._v("替换变量后的请求示例如下：")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'POST'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n        "git": {\n            "gitlab": {\n            "name": "nautes-labs",\n            "path": "nautes-labs",\n            "visibility": "private",\n            "description": "Nautes-Labs is an open-source, one-stop developer platform based on Kubernetes."\n            }\n        }\n      }\'')]),a._v("\n")])])]),t("h3",{attrs:{id:"执行创建产品的-api-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行创建产品的-api-请求"}},[a._v("#")]),a._v(" 执行创建产品的 API 请求")]),a._v(" "),t("p",[a._v("使用 curl 命令或者其他工具执行 API 请求，以新增产品。")]),a._v(" "),t("p",[a._v("请求成功后，将在 GitLab 中创建与产品同名的 group，并在这个 group 中创建名称为 "),t("code",[a._v("default.project")]),a._v(" 的代码库，用于存储该产品的配置清单。每个 group 有且只有一个 "),t("code",[a._v("default.project")]),a._v(" 代码库。")]),a._v(" "),t("blockquote",[t("p",[a._v("GitLab 中的任何账号都可以创建产品。")])]),a._v(" "),t("h2",{attrs:{id:"删除产品-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除产品-api"}},[a._v("#")]),a._v(" 删除产品（API）")]),a._v(" "),t("blockquote",[t("p",[a._v("在删除产品之前，请先删除与产品关联的所有实体和资源，例如：部署运行时、流水线运行时、环境、代码库和项目等，否则将不能执行删除。")])]),a._v(" "),t("h3",{attrs:{id:"生成删除产品的-api-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成删除产品的-api-请求"}},[a._v("#")]),a._v(" 生成删除产品的 API 请求")]),a._v(" "),t("p",[a._v("通过接口定义 "),t("code",[a._v("Product_DeleteProduct")]),a._v(" 生成 API 请求示例，并添加 access token 作为请求头。")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'DELETE'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HTTP://$api-server-address/api/v1/products/$product-name'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer $gitlab-access-token'")]),a._v(" \n")])])]),t("p",[a._v("替换变量后的请求示例如下：")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'DELETE'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),a._v("\n")])])]),t("h3",{attrs:{id:"执行删除产品的-api-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行删除产品的-api-请求"}},[a._v("#")]),a._v(" 执行删除产品的 API 请求")]),a._v(" "),t("p",[a._v("使用 curl 命令或者其他工具执行 API 请求，以删除产品。")]),a._v(" "),t("p",[a._v("请求成功后，将删除该产品及其相关资源：GitLab 中的 group 和 "),t("code",[a._v("default.project")]),a._v(" 代码库。")]),a._v(" "),t("blockquote",[t("p",[a._v("只有当您的账号对于 GitLab 的 group 有删除权限时，才可以删除产品。")])]),a._v(" "),t("h2",{attrs:{id:"查询产品列表-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询产品列表-api"}},[a._v("#")]),a._v(" 查询产品列表（API）")]),a._v(" "),t("h3",{attrs:{id:"生成查询产品列表的-api-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成查询产品列表的-api-请求"}},[a._v("#")]),a._v(" 生成查询产品列表的 API 请求")]),a._v(" "),t("p",[a._v("通过接口定义 "),t("code",[a._v("Product_ListProducts")]),a._v(" ，生成 API 请求示例，并添加 access token 作为请求头。")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'GET'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HTTP://$api-server-address/api/v1/products'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer $gitlab-access-token'")]),a._v(" \n")])])]),t("p",[a._v("替换变量后的请求示例如下：")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'GET'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),a._v("\n")])])]),t("h3",{attrs:{id:"执行查询产品列表的-api-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行查询产品列表的-api-请求"}},[a._v("#")]),a._v(" 执行查询产品列表的 API 请求")]),a._v(" "),t("p",[a._v("使用 curl 命令或者其他工具执行 API 请求，以查询产品列表。产品列表的返回值示例如下：")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"items"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nautes-labs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"git"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"gitlab"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"path"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nautes-labs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"visibility"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"private"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Nautes-Labs is an open-source, one-stop developer platform based on Kubernetes."')]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tenant1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"git"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"gitlab"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"path"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tenant1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"visibility"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"private"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The tenant configuration repository of the Nautes-Labs."')]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        ......\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("只有当您的账号对于 GitLab 的 group 有查询权限时，才可以查询产品列表。")])]),a._v(" "),t("h2",{attrs:{id:"查看产品详情-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看产品详情-api"}},[a._v("#")]),a._v(" 查看产品详情（API）")]),a._v(" "),t("h3",{attrs:{id:"生成查看产品详情的-api-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成查看产品详情的-api-请求"}},[a._v("#")]),a._v(" 生成查看产品详情的 API 请求")]),a._v(" "),t("p",[a._v("通过接口定义 "),t("code",[a._v("Product_GetProduct")]),a._v(" 生成 API 请求示例，并添加 access token 作为请求头。")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'GET'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HTTP://$api-server-address/api/v1/products/$product-name'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer $gitlab-access-token'")]),a._v(" \n")])])]),t("p",[a._v("替换变量后的请求示例如下：")]),a._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'GET'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: application/json'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),a._v(" \n")])])]),t("h3",{attrs:{id:"执行查看产品详情的-api-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行查看产品详情的-api-请求"}},[a._v("#")]),a._v(" 执行查看产品详情的 API 请求")]),a._v(" "),t("p",[a._v("使用 curl 命令或者其他工具执行 API 请求，以查询产品详情。产品详情的返回值示例与"),t("a",{attrs:{href:"#%E6%9F%A5%E8%AF%A2%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8api"}},[a._v("查看产品列表")]),a._v("类似。")]),a._v(" "),t("blockquote",[t("p",[a._v("只有当您的账号对于 GitLab 的 group 有查询权限时，才可以查看产品详情。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);