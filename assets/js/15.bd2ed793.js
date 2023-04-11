(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{294:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"维护项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#维护项目"}},[t._v("#")]),t._v(" 维护项目")]),t._v(" "),a("p",[t._v("在开始本节之前，请确保您已阅读 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/user-guide-00.html"}},[t._v("概述")]),t._v(" 章节，了解创建运行时环境的主流程和相关术语；并且已经创建了至少一个产品，详情参考 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/user-guide-01.html"}},[t._v("维护产品")]),t._v("。")],1),t._v(" "),a("p",[t._v("由于一个IT系统由多个微服务组成，因此，一个产品可以包含多个项目。此外，维护项目的用户即可以是产品成员，也可以是项目成员。")]),t._v(" "),a("p",[t._v("下面将详细介绍如何维护项目以及相关规则。维护项目有多种方式，包括命令行、API 接口等，下文将描述通过 API 接口的方式维护项目。")]),t._v(" "),a("h2",{attrs:{id:"维护项目-api-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#维护项目-api-接口"}},[t._v("#")]),t._v(" 维护项目（API 接口）")]),t._v(" "),a("h3",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("p",[t._v("产品创建成功之后，使用项目表示产品的微服务组件。步骤如下：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("访问 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/quickstart-03.html"}},[t._v("Swagger UI")]),t._v("，选择右上角 select a definition 下拉框中的 api.project.v1.Projet；选择 POST 接口，点击 try it out，在 product_name 参数中输入产品名称，在 project_name 参数中输入项目名称，点击 execute，生成 API 请求的代码示例。")],1)]),t._v(" "),a("li",[a("p",[t._v("获取请求 API 的 access token，作为 API 请求的请求头参数。详情参考 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Personal access tokens"),a("OutboundLink")],1),t._v("。只有产品成员才可以创建特定产品的项目。")])]),t._v(" "),a("li",[a("p",[t._v("将前置步骤获取的 access token 作为 API 请求的请求头参数，通过 curl 命令，或者 Postman、JMeter 等工具执行 API 请求以新增项目。更新后的 API 请求的代码示例：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实操过程中根据实际情况替换 URL 地址和相关参数； ")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/product-demo/projects/project-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n     "language": "Go"\n     }\'')]),t._v("\n")])])]),a("p",[t._v("请求成功后，将在产品对应的 default.project 代码库中生成关联产品的项目资源文件。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nautes.resource.nautes.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Project\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("namespace\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Go"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("product")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"product-demo"')]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"更新项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新项目"}},[t._v("#")]),t._v(" 更新项目")]),t._v(" "),a("p",[t._v("项目创建成功后，可以修改项目。详情参考 "),a("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE"}},[t._v("创建项目")]),t._v("。只有产品成员才可以更新对应产品的项目资源。"),a("br"),t._v("\n请求成功后，将变更存储在产品对应的 default.project 代码库中的项目资源文件。")]),t._v(" "),a("h3",{attrs:{id:"删除项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除项目"}},[t._v("#")]),t._v(" 删除项目")]),t._v(" "),a("p",[t._v("由于项目可能关联多个资源，在删除项目之前，需要先删除关联该项目的所有相关资源，例如代码库等。步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("访问 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/quickstart-03.html"}},[t._v("Swagger UI")]),t._v("，选择右上角 select a definition 下拉框中的 api.project.v1.Projet；选择 DELETE 接口，点击 try it out，在 product_name 参数中输入产品名称，在 project_name 参数中输入项目名称，点击 execute，生成 API 请求的代码示例。详情参考 "),a("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE"}},[t._v("创建项目的步骤1")]),t._v(" 。")],1),t._v(" "),a("li",[t._v("获取请求 API 的 access token，作为 API 请求的请求头参数。详情参考 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Personal access tokens"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[t._v("将前置步骤获取的 access token 作为 API 请求的请求头参数，通过 curl 命令，或者 Postman、JMeter 等工具执行 API 来删除项目。请求成功后，项目的资源文件将被删除。")])]),t._v(" "),a("h3",{attrs:{id:"查询项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询项目"}},[t._v("#")]),t._v(" 查询项目")]),t._v(" "),a("p",[t._v("查询项目有两个 API 接口，分别是查询项目列表、查询项目详情。"),a("br"),t._v("\n查询项目列表的步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("访问 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/quickstart-03.html"}},[t._v("Swagger UI")]),t._v("，选择右上角 select a definition 下拉框中的 api.project.v1.Projet；选择相对路径是 /api/v1/products/{products_name}/projects 的 GET 接口，点击 try it out，在 product_name 参数中输入产品名称，点击 execute，生成 API 请求的代码示例。详情参考 "),a("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE"}},[t._v("创建项目的步骤1")]),t._v("。")],1),t._v(" "),a("li",[t._v("获取请求 API 的 access token，作为 API 请求的请求头参数。详情参考 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Personal access tokens"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[t._v("将前置步骤获取的 access token 作为 API 请求的请求头参数，通过 curl 命令，或者 Postman、JMeter 等工具执行 API 以查询项目。请求成功后，如果用户是某些项目的成员，将返回项目信息。")])]),t._v(" "),a("p",[t._v("查询项目详情的步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("访问 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/quickstart-03.html"}},[t._v("Swagger UI")]),t._v("，选择右上角 select a definition 下拉框中的 api.project.v1.Projet；选择相对路径是 /api/v1/products/{products_name}/projects/{project_name} 的 GET 接口，点击 try it out，在 product_name 参数中输入产品名称，在 project_name 参数中输入项目名称，点击 execute，生成 API 请求的代码示例。详情参考 "),a("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE"}},[t._v("创建项目的步骤1")]),t._v(" 。")],1),t._v(" "),a("li",[t._v("其余步骤与“查询项目列表”相同，不再赘述。")])]),t._v(" "),a("h2",{attrs:{id:"强制提交项目-api-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制提交项目-api-接口"}},[t._v("#")]),t._v(" 强制提交项目（API 接口）")]),t._v(" "),a("p",[t._v("详情规则参见 "),a("RouterLink",{attrs:{to:"/src/guide/user-guide/user-guide-03.html#强制提交代码库api-接口"}},[t._v("强制提交资源文件（API 接口）")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下示例为创建项目时，当产品中存在不合规的environment时，启用 insecure_skip_check 参数以强制提交项目的资源文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/product-demo/projects/project-demo?insecure_skip_check=true'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "language": "Go"\n}\'')]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);