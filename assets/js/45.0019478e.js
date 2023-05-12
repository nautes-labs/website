(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{322:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"maintain-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintain-project"}},[e._v("#")]),e._v(" Maintain Project")]),e._v(" "),t("p",[e._v("Before starting this section, please ensure that you have read the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html"}},[e._v("Main Process")]),e._v(" section to understand the main process and related terminology for deploying applications in Nautes.")],1),e._v(" "),t("p",[e._v("By maintaining "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html"}},[e._v("products")]),e._v(" and projects, you can build management units consistent with the microservice architecture of your products.")],1),e._v(" "),t("p",[e._v("A project corresponds to a microservice, and each project has its own code repositories. You can integrate and deploy projects using Kubernetes clusters, and store versioned artifacts in artifact repositories. A product can contain multiple projects.")]),e._v(" "),t("p",[e._v("Support both "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#prepare-runtime-environment"}},[e._v("Command Line")]),e._v(" and API for maintaining projects.")],1),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("h3",{attrs:{id:"create-access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-access-token"}},[e._v("#")]),e._v(" Create Access Token")]),e._v(" "),t("p",[e._v("You need to create an access token to use as a request header for requesting APIs. For more information, refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html#create-access-token"}},[e._v("Create Access Token")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"import-certificates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-certificates"}},[e._v("#")]),e._v(" Import Certificates")]),e._v(" "),t("p",[e._v("If you want to access Nautes API Server using the HTTPS protocol, you need to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#import-certificates"}},[e._v("import certificates")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"create-product"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-product"}},[e._v("#")]),e._v(" Create Product")]),e._v(" "),t("p",[e._v("Projects belong to products, so you need to create at least one "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html#create-product-api"}},[e._v("product")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"create-and-update-project-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-and-update-project-api"}},[e._v("#")]),e._v(" Create and Update Project (API)")]),e._v(" "),t("h3",{attrs:{id:"compose-create-and-update-project-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-create-and-update-project-request"}},[e._v("#")]),e._v(" Compose Create and Update Project Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Project_SaveProject")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $api-server-address with the access address of the Nautes API Server.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $gitlab-access-token with the GitLab access token.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $product_name with the name of the product to which the project belongs.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $project_name with the project name.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/projects/$project_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{\n            # The programming language of the project\n            \"language\": $project_language\n        }'")]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n          "language": "Go"\n        }\'')]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-create-and-update-project-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-create-and-update-project-request"}},[e._v("#")]),e._v(" Execute Create and Update Project Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to create a project.")]),e._v(" "),t("p",[e._v("After the request is successful, the resource file for the project will be generated in the "),t("code",[e._v("default.project")]),e._v(" repository of the specified product. The example of a resource file for a project is shown below:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nautes.resource.nautes.io/v1alpha1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Project\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nautes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("labs\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nautes\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("language")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Go"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("product")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nautes-labs"')]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("When requesting the API to update a project, the resource file for the project will also be updated.")]),e._v(" "),t("p",[e._v("If your account is a member of the GitLab group and has write permission to the "),t("code",[e._v("main")]),e._v(" branch of the "),t("code",[e._v("default.project")]),e._v(" repository, you can create or update projects.")])]),e._v(" "),t("h2",{attrs:{id:"delete-project-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-project-api"}},[e._v("#")]),e._v(" Delete Project (API)")]),e._v(" "),t("blockquote",[t("p",[e._v("Before deleting a project, please delete all entities and resources related to the project, such as deployment runtimes and code repositories, otherwise the deletion cannot be performed.")])]),e._v(" "),t("h3",{attrs:{id:"compose-delete-project-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-delete-project-request"}},[e._v("#")]),e._v(" Compose Delete Project Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Project_DeleteProject")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/projects/$project_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" \n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-delete-project-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-delete-project-request"}},[e._v("#")]),e._v(" Execute Delete Project Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to delete a project.")]),e._v(" "),t("p",[e._v("After the request is successful, the resource file for the project will be deleted in the "),t("code",[e._v("default.project")]),e._v(" repository of the specified product.")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group and has write permission to the "),t("code",[e._v("main")]),e._v(" branch of the "),t("code",[e._v("default.project")]),e._v(" repository, you can delete projects.")])]),e._v(" "),t("h2",{attrs:{id:"list-projects-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-projects-api"}},[e._v("#")]),e._v(" List Projects (API)")]),e._v(" "),t("h3",{attrs:{id:"compose-list-projects-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-list-projects-request"}},[e._v("#")]),e._v(" Compose List Projects Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Project_ListProjects")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/projects'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" \n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v(" \n")])])]),t("h3",{attrs:{id:"execute-list-projects-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-list-projects-request"}},[e._v("#")]),e._v(" Execute List Projects Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to list projects. The response example for the project list is shown below:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"items"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"product"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nautes-labs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api-server"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"language"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GO"')]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"product"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nautes-labs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cluster-operator"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"language"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GO"')]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group and has read permission to the "),t("code",[e._v("default.project")]),e._v(" repository, you can list projects authorized for you.")])]),e._v(" "),t("h2",{attrs:{id:"view-project-details-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-project-details-api"}},[e._v("#")]),e._v(" View Project Details (API)")]),e._v(" "),t("h3",{attrs:{id:"compose-view-project-details-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-view-project-details-request"}},[e._v("#")]),e._v(" Compose View Project Details Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Project_GetProject")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/projects/$project_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" \n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v(" \n")])])]),t("h3",{attrs:{id:"execute-view-project-details-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-view-project-details-request"}},[e._v("#")]),e._v(" Execute View Project Details Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to view the project details. The response example for viewing the project details is similar to that of "),t("a",{attrs:{href:"#execute-list-projects-request"}},[e._v("listing projects")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group and has read permission to the "),t("code",[e._v("default.project")]),e._v(" repository, you can view the details of projects authorized for you.")])]),e._v(" "),t("h2",{attrs:{id:"force-create-update-delete-project-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-create-update-delete-project-api"}},[e._v("#")]),e._v(" Force Create/Update/Delete Project (API)")]),e._v(" "),t("p",[e._v("For special scenarios in which API verification needs to be skipped, refer to the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html#prepare-runtime-environment"}},[e._v("Prepare Runtime Environment")]),e._v(" section.")],1),e._v(" "),t("p",[e._v("Taking the creation of a project as an example, if there are invalid resources (such as a cluster related to an environment that has been destroyed) in the product to which the project belongs, you can forcibly submit a request by adding the "),t("code",[e._v("insecure_skip_check")]),e._v(" query parameter with its value set to "),t("code",[e._v("true")]),e._v(", to submit the project resource file. The request example is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/cluster-operator?insecure_skip_check=true '")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n          "language": "Go"\n        }\'')]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);