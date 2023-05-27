(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{301:function(t,s,e){"use strict";e.r(s);var r=e(14),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cluster-api"}},[t._v("Cluster API v0.3.0")]),t._v(" "),s("p",[t._v("License: "),s("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0"}},[t._v("Apache License 2.0")])]),t._v(" "),s("h1",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("ul",[s("li",[t._v("HTTP Authentication, scheme: Bearer")])]),t._v(" "),s("h1",{attrs:{id:"cluster-api-cluster"}},[t._v("Cluster")]),t._v(" "),s("h2",{attrs:{id:"savecluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#savecluster"}},[t._v("#")]),t._v(" SaveCluster")]),t._v(" "),s("p",[s("a",{attrs:{id:"opIdSaveCluster"}})]),t._v(" "),s("p",[s("code",[t._v("POST /api/v1/clusters/{cluster_name}")])]),t._v(" "),s("blockquote",[s("p",[t._v("Body parameter")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api_server"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_kind"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host_cluster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"argocd_host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vcluster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"traefik"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kubeconfig"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"worker_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primary_domain"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tekton_host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"savecluster-parameters"}},[t._v("Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("In")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("cluster_name")]),t._v(" "),s("td",[t._v("path")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("clusterName specifies the name of the cluster.")])]),t._v(" "),s("tr",[s("td",[t._v("insecure_skip_check")]),t._v(" "),s("td",[t._v("query")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("insecureSkipCheck specifies whether to skip the certificate check when connecting to the API server.")])]),t._v(" "),s("tr",[s("td",[t._v("body")]),t._v(" "),s("td",[t._v("body")]),t._v(" "),s("td",[s("a",{attrs:{href:"#schemaapi.cluster.v1.saverequest_body"}},[t._v("api.cluster.v1.SaveRequest_Body")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("none")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("Example responses")])]),t._v(" "),s("blockquote",[s("p",[t._v("200 Response")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"savecluster-responses"}},[t._v("Responses")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Meaning")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Schema")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("200")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("OK"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("OK")]),t._v(" "),s("td",[s("a",{attrs:{href:"#schemaapi.cluster.v1.savereply"}},[t._v("api.cluster.v1.SaveReply")])])])])]),t._v(" "),s("aside",{staticClass:"warning"},[t._v("\nTo perform this operation, you must be authenticated by means of one of the following methods:\nBearerAuth\n")]),t._v(" "),s("h2",{attrs:{id:"deletecluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deletecluster"}},[t._v("#")]),t._v(" DeleteCluster")]),t._v(" "),s("p",[s("a",{attrs:{id:"opIdDeleteCluster"}})]),t._v(" "),s("p",[s("code",[t._v("DELETE /api/v1/clusters/{cluster_name}")])]),t._v(" "),s("h3",{attrs:{id:"deletecluster-parameters"}},[t._v("Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("In")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("cluster_name")]),t._v(" "),s("td",[t._v("path")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("ClusterName is the name of the cluster.")])]),t._v(" "),s("tr",[s("td",[t._v("product_name")]),t._v(" "),s("td",[t._v("query")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("ProductName is the name of the product.")])]),t._v(" "),s("tr",[s("td",[t._v("insecure_skip_check")]),t._v(" "),s("td",[t._v("query")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("InsecureSkipCheck specifies whether to skip security checks.")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("Example responses")])]),t._v(" "),s("blockquote",[s("p",[t._v("200 Response")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"deletecluster-responses"}},[t._v("Responses")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Meaning")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Schema")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("200")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("OK"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("OK")]),t._v(" "),s("td",[s("a",{attrs:{href:"#schemaapi.cluster.v1.deletereply"}},[t._v("api.cluster.v1.DeleteReply")])])])])]),t._v(" "),s("aside",{staticClass:"warning"},[t._v("\nTo perform this operation, you must be authenticated by means of one of the following methods:\nBearerAuth\n")]),t._v(" "),s("h1",{attrs:{id:"schemas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schemas"}},[t._v("#")]),t._v(" Schemas")]),t._v(" "),s("h2",{attrs:{id:"tocS_api.cluster.v1.DeleteReply"}},[t._v("api.cluster.v1.DeleteReply")]),t._v(" "),s("a",{attrs:{id:"schemaapi.cluster.v1.deletereply"}}),t._v(" "),s("a",{attrs:{id:"schema_api.cluster.v1.DeleteReply"}}),t._v(" "),s("a",{attrs:{id:"tocSapi.cluster.v1.deletereply"}}),t._v(" "),s("a",{attrs:{id:"tocsapi.cluster.v1.deletereply"}}),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Represents a response to a DeleteRequest message.")]),t._v(" "),s("h3",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Restrictions")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("msg specifies the message of the delete response.")])])])]),t._v(" "),s("h2",{attrs:{id:"tocS_api.cluster.v1.SaveReply"}},[t._v("api.cluster.v1.SaveReply")]),t._v(" "),s("a",{attrs:{id:"schemaapi.cluster.v1.savereply"}}),t._v(" "),s("a",{attrs:{id:"schema_api.cluster.v1.SaveReply"}}),t._v(" "),s("a",{attrs:{id:"tocSapi.cluster.v1.savereply"}}),t._v(" "),s("a",{attrs:{id:"tocsapi.cluster.v1.savereply"}}),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("SaveReply represents a response to a save request.")]),t._v(" "),s("h3",{attrs:{id:"properties-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties-2"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Restrictions")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("msg specifies the message of the save response.")])])])]),t._v(" "),s("h2",{attrs:{id:"tocS_api.cluster.v1.SaveRequest_Body"}},[t._v("api.cluster.v1.SaveRequest_Body")]),t._v(" "),s("a",{attrs:{id:"schemaapi.cluster.v1.saverequest_body"}}),t._v(" "),s("a",{attrs:{id:"schema_api.cluster.v1.SaveRequest_Body"}}),t._v(" "),s("a",{attrs:{id:"tocSapi.cluster.v1.saverequest_body"}}),t._v(" "),s("a",{attrs:{id:"tocsapi.cluster.v1.saverequest_body"}}),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api_server"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_kind"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host_cluster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"argocd_host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vcluster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"traefik"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kubeconfig"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"worker_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primary_domain"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tekton_host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Body represents the body of the save request.")]),t._v(" "),s("h3",{attrs:{id:"properties-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties-3"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Restrictions")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("api_server")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("apiServer specifies the API server address of the cluster.")])]),t._v(" "),s("tr",[s("td",[t._v("cluster_kind")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("clusterKind specifies the kind of the cluster.")])]),t._v(" "),s("tr",[s("td",[t._v("cluster_type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v('clusterType specifies the type of the cluster. It can be "physical" or "virtual".')])]),t._v(" "),s("tr",[s("td",[t._v("usage")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v('usage specifies the usage of the cluster. It can be "host" or "worker".')])]),t._v(" "),s("tr",[s("td",[t._v("host_cluster")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("hostCluster specifies the host cluster name if the cluster is a virtual cluster.")])]),t._v(" "),s("tr",[s("td",[t._v("argocd_host")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("argocdHost specifies the ArgoCD host name.")])]),t._v(" "),s("tr",[s("td",[t._v("vcluster")]),t._v(" "),s("td",[s("a",{attrs:{href:"#schemaapi.cluster.v1.vcluster"}},[t._v("api.cluster.v1.Vcluster")])]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("Vcluster represents the configuration for the virtual cluster.")])]),t._v(" "),s("tr",[s("td",[t._v("traefik")]),t._v(" "),s("td",[s("a",{attrs:{href:"#schemaapi.cluster.v1.traefik"}},[t._v("api.cluster.v1.Traefik")])]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("Traefik represents the configuration for the Traefik ingress controller.")])]),t._v(" "),s("tr",[s("td",[t._v("kubeconfig")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("kubeconfig specifies the Kubeconfig file of the cluster.")])]),t._v(" "),s("tr",[s("td",[t._v("worker_type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("pipeline or deployment, when the cluster usage is 'worker', the WorkType is required.")])]),t._v(" "),s("tr",[s("td",[t._v("primary_domain")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("PrimaryDomain is used to build the domain of components within the cluster.")])]),t._v(" "),s("tr",[s("td",[t._v("tekton_host")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("TektonHost is the domain for the tekton dashboard, and it must be a subdomain of the PrimaryDomain")])])])]),t._v(" "),s("h2",{attrs:{id:"tocS_api.cluster.v1.Traefik"}},[t._v("api.cluster.v1.Traefik")]),t._v(" "),s("a",{attrs:{id:"schemaapi.cluster.v1.traefik"}}),t._v(" "),s("a",{attrs:{id:"schema_api.cluster.v1.Traefik"}}),t._v(" "),s("a",{attrs:{id:"tocSapi.cluster.v1.traefik"}}),t._v(" "),s("a",{attrs:{id:"tocsapi.cluster.v1.traefik"}}),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Traefik represents the configuration for the Traefik ingress controller.")]),t._v(" "),s("h3",{attrs:{id:"properties-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties-4"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Restrictions")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("http_node_port")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("httpNodePort specifies the NodePort for the HTTP port of the Traefik ingress controller.")])]),t._v(" "),s("tr",[s("td",[t._v("https_node_port")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("httpsNodePort specifies the NodePort for the HTTPS port of the Traefik ingress controller.")])])])]),t._v(" "),s("h2",{attrs:{id:"tocS_api.cluster.v1.Vcluster"}},[t._v("api.cluster.v1.Vcluster")]),t._v(" "),s("a",{attrs:{id:"schemaapi.cluster.v1.vcluster"}}),t._v(" "),s("a",{attrs:{id:"schema_api.cluster.v1.Vcluster"}}),t._v(" "),s("a",{attrs:{id:"tocSapi.cluster.v1.vcluster"}}),t._v(" "),s("a",{attrs:{id:"tocsapi.cluster.v1.vcluster"}}),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https_node_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Vcluster represents the configuration for the virtual cluster.")]),t._v(" "),s("h3",{attrs:{id:"properties-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties-5"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Restrictions")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("https_node_port")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("none")]),t._v(" "),s("td",[t._v("httpsNodePort specifies the NodePort for the HTTPS port of the virtual cluster.")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);