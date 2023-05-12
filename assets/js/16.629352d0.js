(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{290:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("h2",{attrs:{id:"版本库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本库"}},[t._v("#")]),t._v(" 版本库")]),t._v(" "),a("p",[t._v("Nautes 遵循 GitOps 最佳实践，以版本库作为唯一可信数据源，将管理数据以声明的形式存入版本库。Nautes 使用三类版本库存储自身的数据，包括：平台配置库（暂未实现）、租户配置库、用户产品库，同时提供相应的 REST API 作为版本库的操作入口。三类版本库均由 Git 库和密钥仓库两部分组成。")]),t._v(" "),a("h3",{attrs:{id:"平台配置库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平台配置库"}},[t._v("#")]),t._v(" 平台配置库")]),t._v(" "),a("p",[t._v("平台配置库是用于存储平台管理集群的配置声明，包括管理组件的配置、租户集群的定义、以及密钥数据。")]),t._v(" "),a("p",[t._v("平台配置库使用独立的 Git 库和密钥仓库存储自身的数据，全局唯一。")]),t._v(" "),a("p",[t._v("平台 API 作为平台配置库的操作入口，提供租户的注册、查询、注销、以及度量等接口。")]),t._v(" "),a("h3",{attrs:{id:"租户配置库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#租户配置库"}},[t._v("#")]),t._v(" 租户配置库")]),t._v(" "),a("p",[t._v("租户配置库是用于存储租户管理集群和用户运行时集群的配置声明，包括管理组件的配置、运行时集群的定义、以及密钥数据。")]),t._v(" "),a("p",[t._v("租户配置库使用独立的 Git 库和密钥仓库存储自身的数据，租户内唯一。")]),t._v(" "),a("p",[t._v("租户 API 作为租户配置库的操作入口，提供运行时集群的注册、查询、注销、授权、以及度量等接口。")]),t._v(" "),a("h3",{attrs:{id:"用户产品库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户产品库"}},[t._v("#")]),t._v(" 用户产品库")]),t._v(" "),a("p",[t._v("用户产品库是用于存储用户产品定义的配置声明，包括产品、项目、环境、制品库、代码库、权限数据、运行时、以及密钥数据。")]),t._v(" "),a("p",[t._v("用户产品库与租户配置库共享一个密钥仓库，用于存储密钥数据，其他数据则使用独立的 Git 库进行存储，产品内唯一。")]),t._v(" "),a("p",[t._v("产品 API 作为产品配置库的操作入口，提供产品、项目、环境、代码库、制品库、授权、运行时等数据的管理接口。")]),t._v(" "),a("h2",{attrs:{id:"认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证"}},[t._v("#")]),t._v(" 认证")]),t._v(" "),a("p",[t._v("当您使用 API 时，需要在 HTTP Request Header 中传递一个有效的 "),a("code",[t._v("Bearer Token")]),t._v("，后端的 Git 库需要用这个 Token 对 API Server 的请求进行认证，例如：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://API-SERVER/api/v1/products'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer TOKEN'")]),t._v(" \n")])])]),a("p",[t._v("以下是不同 Git 库（暂时只支持 GitLab）的 Token 的获取方法。")]),t._v(" "),a("h3",{attrs:{id:"gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[t._v("#")]),t._v(" GitLab")]),t._v(" "),a("p",[t._v("您可以使用 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("personal access token"),a("OutboundLink")],1),t._v("，Token 需要包含 api、read_user、write_repository 的权限。")]),t._v(" "),a("p",[t._v("您也可以使用 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/api/oauth2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("oauth2 access token"),a("OutboundLink")],1),t._v("，GitLab Application 需要包含 api、read_user、write_repository 的权限。")])])}),[],!1,null,null,null);a.default=r.exports}}]);