(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{359:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"maintain-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintain-environment"}},[e._v("#")]),e._v(" Maintain Environment")]),e._v(" "),t("p",[e._v("Before starting this section, please ensure that you have read the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html"}},[e._v("Main Process")]),e._v(" section to understand the main process and related terminology for deploying applications in Nautes.")],1),e._v(" "),t("p",[e._v("The environment is a management unit that uses a cluster to host the integration and deployment of various microservices in the product. Currently, we only support the Kubernetes cluster type. A product contains multiple environments, such as development, testing, pre-production, and production environments.")]),e._v(" "),t("p",[e._v("Support both "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#prepare-runtime-environment"}},[e._v("Command Line")]),e._v(" and API for maintaining environments.")],1),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("h3",{attrs:{id:"create-access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-access-token"}},[e._v("#")]),e._v(" Create Access Token")]),e._v(" "),t("p",[e._v("You need to create an access token to use as a request header for requesting APIs. For more information, refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html#create-access-token"}},[e._v("Create Access Token")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"import-certificates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-certificates"}},[e._v("#")]),e._v(" Import Certificates")]),e._v(" "),t("p",[e._v("If you want to access Nautes API Server using the HTTPS protocol, you need to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#import-certificates"}},[e._v("import certificates")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"create-product"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-product"}},[e._v("#")]),e._v(" Create Product")]),e._v(" "),t("p",[e._v("Environments belong to products, so you need to create at least one "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html#create-product-api"}},[e._v("product")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"register-runtime-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-runtime-cluster"}},[e._v("#")]),e._v(" Register Runtime Cluster")]),e._v(" "),t("p",[e._v("An environment needs to be related to a runtime cluster in order to host the product's runtime environment, so you need to register at least one "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/cluster.html#register-physical-clusterapi"}},[e._v("physical runtime cluster")]),e._v(" or one "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/cluster.html#register-virtual-clusterapi"}},[e._v("virtual runtime cluster")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"create-and-update-environment-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-and-update-environment-api"}},[e._v("#")]),e._v(" Create and Update Environment (API)")]),e._v(" "),t("h3",{attrs:{id:"compose-create-and-update-environment-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-create-and-update-environment-request"}},[e._v("#")]),e._v(" Compose Create and Update Environment Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Environment_SaveEnvironment")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $api-server-address with the access address of the Nautes API Server.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $gitlab-access-token with the GitLab access token.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $product_name with the name of the product to which the environment belongs.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $environment_name with the environment name.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/environments/$environment_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n      # Runtime cluster related to the environment\n      "cluster": $cluster_name,\n      # Environment type\n      "env_type": $env_type\n    }\'')]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n      "cluster": "cluster-dev",\n      "env_type": "development"\n    }\'')]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-create-and-update-environment-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-create-and-update-environment-request"}},[e._v("#")]),e._v(" Execute Create and Update Environment Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to create a environment.")]),e._v(" "),t("p",[e._v("After the request is successful, the resource file for the environment will be generated in the "),t("code",[e._v("default.project")]),e._v(" repository of the specified product. The example of a resource file for a repository is shown below:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nautes.resource.nautes.io/v1alpha1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Environment\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dev\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nautes\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cluster")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cluster-dev"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("envType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"development"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("product")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nautes-labs"')]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("Within the same product, the same runtime cluster cannot be related to different environments.")]),e._v(" "),t("p",[e._v("If the environment has already hosted the deployment runtime environment of a product, it is not currently supported to change the related cluster of the environment.")]),e._v(" "),t("p",[e._v("When requesting the API to update a environment, the resource file for the environment will also be updated.")]),e._v(" "),t("p",[e._v("If your account is a member of the GitLab group and has write permission to the "),t("code",[e._v("main")]),e._v(" branch of the "),t("code",[e._v("default.project")]),e._v(" repository, you can create or update environments.")])]),e._v(" "),t("h2",{attrs:{id:"delete-environment-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-environment-api"}},[e._v("#")]),e._v(" Delete Environment (API)")]),e._v(" "),t("blockquote",[t("p",[e._v("Before deleting an environment, please delete all entities and resources related to the environment, such as deployment runtimes, otherwise the deletion cannot be performed.")])]),e._v(" "),t("h3",{attrs:{id:"compose-delete-environment-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-delete-environment-request"}},[e._v("#")]),e._v(" Compose Delete Environment Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Environment_DeleteEnvironment")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/environments/$environment_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-delete-environment-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-delete-environment-request"}},[e._v("#")]),e._v(" Execute Delete Environment Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to delete a environment.")]),e._v(" "),t("p",[e._v("After the request is successful, the resource file for the environment will be deleted in the "),t("code",[e._v("default.project")]),e._v(" repository of the specified product.")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group and has write permission to the "),t("code",[e._v("main")]),e._v(" branch of the "),t("code",[e._v("default.project")]),e._v(" repository, you can delete environments.")])]),e._v(" "),t("h2",{attrs:{id:"list-environments-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-environments-api"}},[e._v("#")]),e._v(" List Environments (API)")]),e._v(" "),t("h3",{attrs:{id:"compose-list-environments-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-list-environments-request"}},[e._v("#")]),e._v(" Compose List Environments Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Environment_ListEnvironments")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/environments'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-list-environments-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-list-environments-request"}},[e._v("#")]),e._v(" Execute List Environments Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to list environments. The response example for the environment list is shown below:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"items"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"product"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nautes-labs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"env-dev"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"cluster"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cluster-dev"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"env_type"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"development"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group and has read permission to "),t("code",[e._v("default.project")]),e._v(" repository, you can list environments.")])]),e._v(" "),t("h2",{attrs:{id:"view-environment-details-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-environment-details-api"}},[e._v("#")]),e._v(" View Environment Details (API)")]),e._v(" "),t("h3",{attrs:{id:"compose-view-environment-details-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-view-environment-details-request"}},[e._v("#")]),e._v(" Compose View Environment Details Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Environment_GetEnvironment")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/products/$product_name/environments/$enviroment_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-view-environment-details-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-view-environment-details-request"}},[e._v("#")]),e._v(" Execute View Environment Details Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to view the environment details. The response example for viewing the environment details is similar to that of "),t("a",{attrs:{href:"#execute-list-environments-request"}},[e._v("listing environments")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the GitLab group and has read permission to the "),t("code",[e._v("default.project")]),e._v(" repository, you can view the details of environments.")])]),e._v(" "),t("h2",{attrs:{id:"force-create-update-delete-environment-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-create-update-delete-environment-api"}},[e._v("#")]),e._v(" Force Create/Update/Delete Environment (API)")]),e._v(" "),t("p",[e._v("For special scenarios in which API verification needs to be skipped, refer to the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html#prepare-runtime-environment"}},[e._v("Prepare Runtime Environment")]),e._v(" section.")],1),e._v(" "),t("p",[e._v("Taking creating an environment as an example, if the value of the "),t("code",[e._v("cluster")]),e._v(" property is set to a non-existent cluster, you can forcibly submit a request by adding the "),t("code",[e._v("insecure_skip_check")]),e._v(" query parameter with its value set to "),t("code",[e._v("true")]),e._v(", to submit the environment resource file. The request example is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-demo?insecure_skip_check=true'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n      "cluster": "cluster-invalid",\n      "env_type": "development"\n    }\'')]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);