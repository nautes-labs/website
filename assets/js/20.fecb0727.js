(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{296:function(t,e,s){"use strict";s.r(e);var a=s(14),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"deployment-runtime-api"}},[t._v("Deployment Runtime API v0.3.1")]),t._v(" "),e("p",[t._v("License: "),e("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0"}},[t._v("Apache License 2.0")])]),t._v(" "),e("h1",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),e("ul",[e("li",[t._v("HTTP Authentication, scheme: Bearer")])]),t._v(" "),e("h1",{attrs:{id:"deployment-runtime-api-deploymentruntime"}},[t._v("Deploymentruntime")]),t._v(" "),e("h2",{attrs:{id:"listdeploymentruntimes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listdeploymentruntimes"}},[t._v("#")]),t._v(" ListDeploymentRuntimes")]),t._v(" "),e("p",[e("a",{attrs:{id:"opIdListDeploymentRuntimes"}})]),t._v(" "),e("p",[e("code",[t._v("GET /api/v1/products/{product_name}/deploymentruntimes")])]),t._v(" "),e("h3",{attrs:{id:"listdeploymentruntimes-parameters"}},[t._v("Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("In")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("product_name")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("To list the product name of the repository.")])]),t._v(" "),e("tr",[e("td",[t._v("field_selector")]),t._v(" "),e("td",[t._v("query")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Filter the list by field. eg: field_selector=projects_ref.in=project1,manifestSource.codeRepo=codeRepo1,destination=env1 Field Support: projects_ref: fuzzy match  manifestSource.codeRepo: fuzzy match destination: fuzzy match")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Example responses")])]),t._v(" "),e("blockquote",[e("p",[t._v("200 Response")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"product"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"projects_ref"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_repo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target_revision"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destination"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"listdeploymentruntimes-responses"}},[t._v("Responses")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Meaning")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Schema")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("200")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("OK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("OK")]),t._v(" "),e("td",[e("a",{attrs:{href:"#schemaapi.deploymentruntime.v1.listsreply"}},[t._v("api.deploymentruntime.v1.ListsReply")])])])])]),t._v(" "),e("aside",{staticClass:"warning"},[t._v("\nTo perform this operation, you must be authenticated by means of one of the following methods:\nBearerAuth\n")]),t._v(" "),e("h2",{attrs:{id:"getdeploymentruntime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getdeploymentruntime"}},[t._v("#")]),t._v(" GetDeploymentRuntime")]),t._v(" "),e("p",[e("a",{attrs:{id:"opIdGetDeploymentRuntime"}})]),t._v(" "),e("p",[e("code",[t._v("GET /api/v1/products/{product_name}/deploymentruntimes/{deploymentruntime_name}")])]),t._v(" "),e("h3",{attrs:{id:"getdeploymentruntime-parameters"}},[t._v("Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("In")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("product_name")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("ProductName is the name of the product.")])]),t._v(" "),e("tr",[e("td",[t._v("deploymentruntime_name")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("DeploymentRuntimeName is the name of the Deployment Runtime.")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Example responses")])]),t._v(" "),e("blockquote",[e("p",[t._v("200 Response")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"product"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"projects_ref"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_repo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target_revision"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destination"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"getdeploymentruntime-responses"}},[t._v("Responses")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Meaning")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Schema")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("200")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("OK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("OK")]),t._v(" "),e("td",[e("a",{attrs:{href:"#schemaapi.deploymentruntime.v1.getreply"}},[t._v("api.deploymentruntime.v1.GetReply")])])])])]),t._v(" "),e("aside",{staticClass:"warning"},[t._v("\nTo perform this operation, you must be authenticated by means of one of the following methods:\nBearerAuth\n")]),t._v(" "),e("h2",{attrs:{id:"savedeploymentruntime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#savedeploymentruntime"}},[t._v("#")]),t._v(" SaveDeploymentRuntime")]),t._v(" "),e("p",[e("a",{attrs:{id:"opIdSaveDeploymentRuntime"}})]),t._v(" "),e("p",[e("code",[t._v("POST /api/v1/products/{product_name}/deploymentruntimes/{deploymentruntime_name}")])]),t._v(" "),e("blockquote",[e("p",[t._v("Body parameter")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"projects_ref"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_repo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target_revision"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destination"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"savedeploymentruntime-parameters"}},[t._v("Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("In")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("product_name")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("ProductName is the name of the product.")])]),t._v(" "),e("tr",[e("td",[t._v("deploymentruntime_name")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("DeploymentRuntimeName is the name of the Deployment Runtime.")])]),t._v(" "),e("tr",[e("td",[t._v("insecure_skip_check")]),t._v(" "),e("td",[t._v("query")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("InsecureSkipCheck specifies whether to skip security checks.")])]),t._v(" "),e("tr",[e("td",[t._v("body")]),t._v(" "),e("td",[t._v("body")]),t._v(" "),e("td",[e("a",{attrs:{href:"#schemaapi.deploymentruntime.v1.saverequest_body"}},[t._v("api.deploymentruntime.v1.SaveRequest_Body")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("none")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Example responses")])]),t._v(" "),e("blockquote",[e("p",[t._v("200 Response")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"savedeploymentruntime-responses"}},[t._v("Responses")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Meaning")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Schema")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("200")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("OK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("OK")]),t._v(" "),e("td",[e("a",{attrs:{href:"#schemaapi.deploymentruntime.v1.savereply"}},[t._v("api.deploymentruntime.v1.SaveReply")])])])])]),t._v(" "),e("aside",{staticClass:"warning"},[t._v("\nTo perform this operation, you must be authenticated by means of one of the following methods:\nBearerAuth\n")]),t._v(" "),e("h2",{attrs:{id:"deletedeploymentruntime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deletedeploymentruntime"}},[t._v("#")]),t._v(" DeleteDeploymentRuntime")]),t._v(" "),e("p",[e("a",{attrs:{id:"opIdDeleteDeploymentRuntime"}})]),t._v(" "),e("p",[e("code",[t._v("DELETE /api/v1/products/{product_name}/deploymentruntimes/{deploymentruntime_name}")])]),t._v(" "),e("h3",{attrs:{id:"deletedeploymentruntime-parameters"}},[t._v("Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("In")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("product_name")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("ProductName is the name of the product.")])]),t._v(" "),e("tr",[e("td",[t._v("deploymentruntime_name")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("DeploymentRuntimeName is the name of the Deployment Runtime.")])]),t._v(" "),e("tr",[e("td",[t._v("insecure_skip_check")]),t._v(" "),e("td",[t._v("query")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("InsecureSkipCheck specifies whether to skip security checks.")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Example responses")])]),t._v(" "),e("blockquote",[e("p",[t._v("200 Response")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"deletedeploymentruntime-responses"}},[t._v("Responses")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Meaning")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Schema")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("200")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("OK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("OK")]),t._v(" "),e("td",[e("a",{attrs:{href:"#schemaapi.deploymentruntime.v1.deletereply"}},[t._v("api.deploymentruntime.v1.DeleteReply")])])])])]),t._v(" "),e("aside",{staticClass:"warning"},[t._v("\nTo perform this operation, you must be authenticated by means of one of the following methods:\nBearerAuth\n")]),t._v(" "),e("h1",{attrs:{id:"schemas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schemas"}},[t._v("#")]),t._v(" Schemas")]),t._v(" "),e("h2",{attrs:{id:"tocS_api.deploymentruntime.v1.DeleteReply"}},[t._v("api.deploymentruntime.v1.DeleteReply")]),t._v(" "),e("a",{attrs:{id:"schemaapi.deploymentruntime.v1.deletereply"}}),t._v(" "),e("a",{attrs:{id:"schema_api.deploymentruntime.v1.DeleteReply"}}),t._v(" "),e("a",{attrs:{id:"tocSapi.deploymentruntime.v1.deletereply"}}),t._v(" "),e("a",{attrs:{id:"tocsapi.deploymentruntime.v1.deletereply"}}),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("Represents a response to a DeleteRequest message.")]),t._v(" "),e("h3",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Restrictions")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("Msg is a message confirming the delete.")])])])]),t._v(" "),e("h2",{attrs:{id:"tocS_api.deploymentruntime.v1.GetReply"}},[t._v("api.deploymentruntime.v1.GetReply")]),t._v(" "),e("a",{attrs:{id:"schemaapi.deploymentruntime.v1.getreply"}}),t._v(" "),e("a",{attrs:{id:"schema_api.deploymentruntime.v1.GetReply"}}),t._v(" "),e("a",{attrs:{id:"tocSapi.deploymentruntime.v1.getreply"}}),t._v(" "),e("a",{attrs:{id:"tocsapi.deploymentruntime.v1.getreply"}}),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"product"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"projects_ref"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_repo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target_revision"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destination"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("GetReply is a message that returns a Deployment Runtime.")]),t._v(" "),e("h3",{attrs:{id:"properties-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-2"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Restrictions")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("product")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("Product is the name of the product.")])]),t._v(" "),e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("Name is the name of the Deployment Runtime.")])]),t._v(" "),e("tr",[e("td",[t._v("projects_ref")]),t._v(" "),e("td",[t._v("[string]")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("ProjectsRef is a list of project references.")])]),t._v(" "),e("tr",[e("td",[t._v("manifest_source")]),t._v(" "),e("td",[e("a",{attrs:{href:"#schemaapi.deploymentruntime.v1.manifestsource"}},[t._v("api.deploymentruntime.v1.ManifestSource")])]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("ManifestSource is a message representing the source of the deployment manifest.")])]),t._v(" "),e("tr",[e("td",[t._v("destination")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("Destination is the destination for the deployment.")])])])]),t._v(" "),e("h2",{attrs:{id:"tocS_api.deploymentruntime.v1.ListsReply"}},[t._v("api.deploymentruntime.v1.ListsReply")]),t._v(" "),e("a",{attrs:{id:"schemaapi.deploymentruntime.v1.listsreply"}}),t._v(" "),e("a",{attrs:{id:"schema_api.deploymentruntime.v1.ListsReply"}}),t._v(" "),e("a",{attrs:{id:"tocSapi.deploymentruntime.v1.listsreply"}}),t._v(" "),e("a",{attrs:{id:"tocsapi.deploymentruntime.v1.listsreply"}}),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"product"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"projects_ref"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_repo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target_revision"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destination"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("ListsReply is a message that returns a list of Deployment Runtimes.")]),t._v(" "),e("h3",{attrs:{id:"properties-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-3"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Restrictions")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("items")]),t._v(" "),e("td",[t._v("["),e("a",{attrs:{href:"#schemaapi.deploymentruntime.v1.getreply"}},[t._v("api.deploymentruntime.v1.GetReply")]),t._v("]")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("Items is a list of Deployment Runtimes.")])])])]),t._v(" "),e("h2",{attrs:{id:"tocS_api.deploymentruntime.v1.ManifestSource"}},[t._v("api.deploymentruntime.v1.ManifestSource")]),t._v(" "),e("a",{attrs:{id:"schemaapi.deploymentruntime.v1.manifestsource"}}),t._v(" "),e("a",{attrs:{id:"schema_api.deploymentruntime.v1.ManifestSource"}}),t._v(" "),e("a",{attrs:{id:"tocSapi.deploymentruntime.v1.manifestsource"}}),t._v(" "),e("a",{attrs:{id:"tocsapi.deploymentruntime.v1.manifestsource"}}),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_repo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target_revision"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("ManifestSource is a message representing the source of the deployment manifest.")]),t._v(" "),e("h3",{attrs:{id:"properties-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-4"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Restrictions")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("code_repo")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("CodeRepo specifies the code repository of the git platform.")])]),t._v(" "),e("tr",[e("td",[t._v("target_revision")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("TargetRevision is the corresponding code repository revision, eg: main.")])]),t._v(" "),e("tr",[e("td",[t._v("path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("Path is the deploy the specified path.")])])])]),t._v(" "),e("h2",{attrs:{id:"tocS_api.deploymentruntime.v1.SaveReply"}},[t._v("api.deploymentruntime.v1.SaveReply")]),t._v(" "),e("a",{attrs:{id:"schemaapi.deploymentruntime.v1.savereply"}}),t._v(" "),e("a",{attrs:{id:"schema_api.deploymentruntime.v1.SaveReply"}}),t._v(" "),e("a",{attrs:{id:"tocSapi.deploymentruntime.v1.savereply"}}),t._v(" "),e("a",{attrs:{id:"tocsapi.deploymentruntime.v1.savereply"}}),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("SaveReply is a message that confirms a Deployment Runtime has been saved.")]),t._v(" "),e("h3",{attrs:{id:"properties-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-5"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Restrictions")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("Msg is a message confirming the save.")])])])]),t._v(" "),e("h2",{attrs:{id:"tocS_api.deploymentruntime.v1.SaveRequest_Body"}},[t._v("api.deploymentruntime.v1.SaveRequest_Body")]),t._v(" "),e("a",{attrs:{id:"schemaapi.deploymentruntime.v1.saverequest_body"}}),t._v(" "),e("a",{attrs:{id:"schema_api.deploymentruntime.v1.SaveRequest_Body"}}),t._v(" "),e("a",{attrs:{id:"tocSapi.deploymentruntime.v1.saverequest_body"}}),t._v(" "),e("a",{attrs:{id:"tocsapi.deploymentruntime.v1.saverequest_body"}}),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"projects_ref"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_repo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target_revision"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destination"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("Body is the message body.")]),t._v(" "),e("h3",{attrs:{id:"properties-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-6"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Restrictions")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("projects_ref")]),t._v(" "),e("td",[t._v("[string]")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("ProjectsRef is a list of project references.")])]),t._v(" "),e("tr",[e("td",[t._v("manifest_source")]),t._v(" "),e("td",[e("a",{attrs:{href:"#schemaapi.deploymentruntime.v1.manifestsource"}},[t._v("api.deploymentruntime.v1.ManifestSource")])]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("ManifestSource is a message representing the source of the deployment manifest.")])]),t._v(" "),e("tr",[e("td",[t._v("destination")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",[t._v("Destination is the destination for the deployment.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);