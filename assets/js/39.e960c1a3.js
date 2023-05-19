(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{313:function(e,t,s){"use strict";s.r(t);var a=s(14),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"maintain-code-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintain-code-repository"}},[e._v("#")]),e._v(" Maintain Code Repository")]),e._v(" "),t("p",[e._v("Before starting this section, please ensure that you have read the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html"}},[e._v("Main Process")]),e._v(" section to understand the main process and related terminology for deploying applications in Nautes.")],1),e._v(" "),t("p",[e._v("A repository used for storing a project's source code, pipeline configurations, or deployment manifests. Only Git is supported.")]),e._v(" "),t("p",[e._v("Support both "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#initialize-a-product"}},[e._v("Command Line")]),e._v(" and API for maintaining repositories.")],1),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("h3",{attrs:{id:"create-access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-access-token"}},[e._v("#")]),e._v(" Create Access Token")]),e._v(" "),t("p",[e._v("You need to create an access token to use as a request header for requesting APIs. For more information, refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html#create-access-token"}},[e._v("Create Access Token")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"import-certificates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-certificates"}},[e._v("#")]),e._v(" Import Certificates")]),e._v(" "),t("p",[e._v("If you want to access Nautes API Server using the HTTPS protocol, you need to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#import-certificates"}},[e._v("import certificates")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"create-product"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-product"}},[e._v("#")]),e._v(" Create Product")]),e._v(" "),t("p",[e._v("Projects belong to products, so you need to create at least one "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html#create-product-api"}},[e._v("product")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"create-and-update-repository-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-and-update-repository-api"}},[e._v("#")]),e._v(" Create and Update Repository(API)")]),e._v(" "),t("h3",{attrs:{id:"compose-create-and-update-repository-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-create-and-update-repository-request"}},[e._v("#")]),e._v(" Compose Create and Update Repository Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("CodeRepo_SaveCodeRepo")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $api-server-address with the access address of the Nautes API Server.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $gitlab-access-token with the GitLab access token.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $product_name with the name of the product to which the repository belongs.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $coderepo_name with the repository name.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n        # The project to which the repository belongs.\n        "project": $project,\n        # Webhook events\n        "webhook": {\n            "events": ["push_events"]\n        },\n        # Whether the repository is used for deploying runtime.\n        "deployment_runtime": true,\n        "pipeline_runtime": false,\n        "git": {\n            "gitlab": {\n                # repository name\n                "name": $coderepo_name,\n                # repository path\n                "path": $coderepo_name,\n                # repository visibility：private or public \n                "visibility": $coderepo_visibility,\n                "description": $coderepo_desc\n                }\n            }\n    }\'')]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/api-server'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n        "project": "api-server",\n        "webhook": {\n            "events": ["push_events"]\n        },\n        "deployment_runtime": true,\n        "pipeline_runtime": false,\n        "git": {\n            "gitlab": {\n                "name": "api-server",\n                "path": "api-server",\n                "visibility": "private",\n                "description": "Providing REST APIs for creating configuration declarations of environments."\n                }\n            }\n    }\'')]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-create-and-update-repository-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-create-and-update-repository-request"}},[e._v("#")]),e._v(" Execute Create and Update Repository Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to create a repository.")]),e._v(" "),t("p",[e._v("After the request is successful, the resource file for the repository will be generated in the "),t("code",[e._v("default.project")]),e._v(" repository of the specified product and the repository will be created in GitLab. The example of a resource file for a repository is shown below:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nautes.resource.nautes.io/v1alpha1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" CodeRepo\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" api"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("server\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nautes\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("codeRepoProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gitlab"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("deploymentRuntime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pipelineRuntime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("product")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nautes-labs"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("project")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api-server"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("repoName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api-server"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://github.com/nautes-labs/api-server.git"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("webhook")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("events")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"push_events"')]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("isolation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"default"')]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("When requesting the API to update a repository, the resource file for the repository will also be updated.")]),e._v(" "),t("p",[e._v("If your account is a member of the GitLab group, has permission to create repositories, and has write permission to the "),t("code",[e._v("main")]),e._v(" branch of the "),t("code",[e._v("default.project")]),e._v(" repository, you can create or update repositories.")])]),e._v(" "),t("h2",{attrs:{id:"delete-repository-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-repository-api"}},[e._v("#")]),e._v(" Delete Repository (API)")]),e._v(" "),t("blockquote",[t("p",[e._v("Before deleting a repository, please delete all entities and resources related to the repository, such as deployment runtimes, otherwise the deletion cannot be performed.")])]),e._v(" "),t("h3",{attrs:{id:"compose-delete-repository-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-delete-repository-request"}},[e._v("#")]),e._v(" Compose Delete Repository Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("CodeRepo_DeleteCodeRepo")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" \n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/api-server'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v(" \n")])])]),t("h3",{attrs:{id:"execute-delete-repository-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-delete-repository-request"}},[e._v("#")]),e._v(" Execute Delete Repository Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to delete a repository.")]),e._v(" "),t("p",[e._v("After the request is successful, the resource file for the repository will be deleted in the "),t("code",[e._v("default.project")]),e._v(" repository of the specified product and the repository will be deleted in GitLab.")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group, has permission to delete repositories, and has write permission to the "),t("code",[e._v("main")]),e._v(" branch of the "),t("code",[e._v("default.project")]),e._v(" repository, you can delete repositories.")])]),e._v(" "),t("h2",{attrs:{id:"list-repositories-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-repositories-api"}},[e._v("#")]),e._v(" List Repositories（API）")]),e._v(" "),t("h3",{attrs:{id:"compose-list-repositories-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-list-repositories-request"}},[e._v("#")]),e._v(" Compose List Repositories Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("CodeRepo_ListCodeRepos")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/coderepos'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" \n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v(" \n")])])]),t("h3",{attrs:{id:"execute-list-repositories-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-list-repositories-request"}},[e._v("#")]),e._v(" Execute List Repositories Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to list repositories. The response example for the repository list is shown below:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"items"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"product"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nautes-labs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api-server"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"project"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api-server"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"webhook"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"events"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"push_events"')]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"deployment_runtime"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"pipeline_runtime"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"gitlab"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api-server"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"path"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api-server"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"visibility"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"private"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"description"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Providing REST APIs for creating configuration declarations of environments."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"ssh_url_to_repo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ssh://git@github.com:nautes-labs/api-server.git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"http_url_to_repo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://github.com/nautes-labs/api-server.git"')]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group, has permission to list repositories, and has read permission to the "),t("code",[e._v("default.project")]),e._v(" repository, you can list repositories authorized for you.")])]),e._v(" "),t("h2",{attrs:{id:"view-repository-details-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-repository-details-api"}},[e._v("#")]),e._v(" View Repository Details (API)")]),e._v(" "),t("h3",{attrs:{id:"compose-view-repository-details-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-view-repository-details-request"}},[e._v("#")]),e._v(" Compose View Repository Details Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("CodeRepo_GetCodeRepo")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" \n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/api-server'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v(" \n")])])]),t("h3",{attrs:{id:"execute-view-repository-details-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-view-repository-details-request"}},[e._v("#")]),e._v(" Execute View Repository Details Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to view the repository details. The response example for viewing the repository details is similar to that of "),t("a",{attrs:{href:"#execute-list-repositories-request"}},[e._v("listing repositories")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group, has permission to list repositories, and has read permission to the "),t("code",[e._v("default.project")]),e._v(" repository, you can view the details of repositories authorized for you.")])]),e._v(" "),t("h2",{attrs:{id:"force-create-update-delete-repository-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-create-update-delete-repository-api"}},[e._v("#")]),e._v(" Force Create/Update/Delete Repository (API)")]),e._v(" "),t("p",[e._v("For special scenarios in which API verification needs to be skipped, refer to the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html#initialize-a-product"}},[e._v("Initialize a Product")]),e._v(" section.")],1),e._v(" "),t("p",[e._v("Taking the creation of a repository as an example, if the value of the "),t("code",[e._v("project")]),e._v(" property is set to a non-existent project, you can forcibly submit a request by adding the "),t("code",[e._v("insecure_skip_check")]),e._v(" query parameter with its value set to "),t("code",[e._v("true")]),e._v(", to submit the repository resource file. The request example is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/coderepo-demo?insecure_skip_check=true'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n      "project": "project-demo-invalid",\n      "webhook": {\n        "events": [\n          "push_events"\n        ]\n      },\n      "deployment_runtime": true,\n      "pipeline_runtime": false,\n      "git": {\n        "gitlab": {\n          "name": "coderepo-demo",\n          "path": "coderepo-demo",\n          "visibility": "private",\n          "description": "This is a code repository for testing purposes."\n        }\n      }\n    }\'')]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);