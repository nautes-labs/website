(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{420:function(t,e,a){"use strict";a.r(e);var s=a(14),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"maintain-product"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maintain-product"}},[t._v("#")]),t._v(" Maintain Product")]),t._v(" "),e("p",[t._v("Before starting this section, please ensure that you have read the "),e("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html"}},[t._v("Main Process")]),t._v(" section to understand the main process and related terminology for deploying applications in Nautes.")],1),t._v(" "),e("p",[t._v("A product corresponds to a software system, which includes teams, projects, environments, code repositories, artifact repositories, and runtimes. The tenant manager can authorize the product to use designated Kubernetes clusters.")]),t._v(" "),e("p",[t._v("When using GitLab as a product provider, each product corresponds to a single GitLab Group. Nautes will maintain a repository with a fixed name (defaulted to "),e("code",[t._v("default.project")]),t._v(") under that Group to store the product metadata. Nautes will leverage the GitLab permission model to manage user access to different product data.")]),t._v(" "),e("p",[t._v("Support both "),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#prepare-runtime-environment"}},[t._v("Command Line")]),t._v(" and API for maintaining products.")],1),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("h3",{attrs:{id:"create-access-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-access-token"}},[t._v("#")]),t._v(" Create Access Token")]),t._v(" "),e("p",[t._v("After GitLab installation, you need to register an account and create a "),e("a",{attrs:{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("personal access token"),e("OutboundLink")],1),t._v(" with the scopes: api, read_api, read_repository, and write_repository.")]),t._v(" "),e("p",[t._v("The access token will be used as a request header for requesting APIs.")]),t._v(" "),e("h3",{attrs:{id:"import-certificates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-certificates"}},[t._v("#")]),t._v(" Import Certificates")]),t._v(" "),e("p",[t._v("If you want to access Nautes API Server using the HTTPS protocol, you need to "),e("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#import-certificates"}},[t._v("import certificates")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"create-product-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-product-api"}},[t._v("#")]),t._v(" Create Product (API)")]),t._v(" "),e("h3",{attrs:{id:"compose-create-product-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compose-create-product-request"}},[t._v("#")]),t._v(" Compose Create Product Request")]),t._v(" "),e("p",[t._v("Compose an API request example by API definition "),e("code",[t._v("Product_SaveProduct")]),t._v(" and add the access token as a request header.")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace the variable $api-server-address with the access address of the Nautes API Server")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace the variable $gitlab-access-token with the GitLab access token")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace the variable $product_name with the product name")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product_name'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n        "git": {\n            "gitlab": {\n                # group name\n                "name": $product_name,\n                # group path\n                "path": $product_name,\n                # group visibility：private or public\n                "visibility": $product_visibility,\n                "description": $product_desc\n                }\n           }\n       }\'')]),t._v("\n")])])]),e("p",[t._v("The request example after replacing the variables is shown below:")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n        "git": {\n            "gitlab": {\n            "name": "nautes-labs",\n            "path": "nautes-labs",\n            "visibility": "private",\n            "description": "Nautes-Labs is an open-source, one-stop developer platform based on Kubernetes."\n            }\n        }\n      }\'')]),t._v("\n")])])]),e("h3",{attrs:{id:"execute-create-product-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-create-product-request"}},[t._v("#")]),t._v(" Execute Create Product Request")]),t._v(" "),e("p",[t._v("Use the curl command or other tools to execute the API request to create a product.")]),t._v(" "),e("p",[t._v("After the request is successful, a group with the same name as the product will be created in GitLab, and a repository named "),e("code",[t._v("default.project")]),t._v(" will be created in this group to store the product configuration manifest . Each group has only one "),e("code",[t._v("default.project")]),t._v(" repository.")]),t._v(" "),e("blockquote",[e("p",[t._v("Any account in GitLab can create products.")])]),t._v(" "),e("h2",{attrs:{id:"delete-product-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-product-api"}},[t._v("#")]),t._v(" Delete Product (API)")]),t._v(" "),e("blockquote",[e("p",[t._v("Before deleting a product, please delete all entities and resources related to the product, such as deployment runtimes, environments, code repositories, and projects, otherwise the deletion cannot be performed.")])]),t._v(" "),e("h3",{attrs:{id:"compose-delete-product-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compose-delete-product-request"}},[t._v("#")]),t._v(" Compose Delete Product Request")]),t._v(" "),e("p",[t._v("Compose an API request example by API definition "),e("code",[t._v("Product_DeleteProduct")]),t._v(" and add the access token as a request header.")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product_name'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" \n")])])]),e("p",[t._v("The request example after replacing the variables is shown below:")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),e("h3",{attrs:{id:"execute-delete-product-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-delete-product-request"}},[t._v("#")]),t._v(" Execute Delete Product Request")]),t._v(" "),e("p",[t._v("Use the curl command or other tools to execute the API request to delete a product.")]),t._v(" "),e("p",[t._v("After the request is successful, the product and its related resources will be deleted, including the group and the "),e("code",[t._v("default.project")]),t._v(" repository in GitLab.")]),t._v(" "),e("blockquote",[e("p",[t._v("If your account has deletion permission for the GitLab group, you can delete the product.")])]),t._v(" "),e("h2",{attrs:{id:"list-products-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-products-api"}},[t._v("#")]),t._v(" List Products (API)")]),t._v(" "),e("h3",{attrs:{id:"compose-list-products-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compose-list-products-request"}},[t._v("#")]),t._v(" Compose List Products Request")]),t._v(" "),e("p",[t._v("Compose an API request example by API definition "),e("code",[t._v("Product_ListProducts")]),t._v(" and add the access token as a request header.")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" \n")])])]),e("p",[t._v("The request example after replacing the variables is shown below:")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),e("h3",{attrs:{id:"execute-list-products-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-list-products-request"}},[t._v("#")]),t._v(" Execute List Products Request")]),t._v(" "),e("p",[t._v("Use the curl command or other tools to execute the API request to list products. The response example for the product list is shown below:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nautes-labs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"git"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gitlab"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nautes-labs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"visibility"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Nautes-Labs is an open-source, one-stop developer platform based on Kubernetes."')]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tenant1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"git"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gitlab"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tenant1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"visibility"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The tenant configuration repository of the Nautes-Labs."')]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ......\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("If your account has read permission for the GitLab group, you can list products authorized for you.")])]),t._v(" "),e("h2",{attrs:{id:"view-product-details-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-product-details-api"}},[t._v("#")]),t._v(" View Product Details (API)")]),t._v(" "),e("h3",{attrs:{id:"compose-view-product-details-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compose-view-product-details-request"}},[t._v("#")]),t._v(" Compose View Product Details Request")]),t._v(" "),e("p",[t._v("Compose an API request example by API definition "),e("code",[t._v("Product_GetProduct")]),t._v(" and add the access token as a request header.")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/products/$product_name'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" \n")])])]),e("p",[t._v("The request example after replacing the variables is shown below:")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v(" \n")])])]),e("h3",{attrs:{id:"execute-view-product-details-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-view-product-details-request"}},[t._v("#")]),t._v(" Execute View Product Details Request")]),t._v(" "),e("p",[t._v("Use the curl command or other tools to execute the API request to view the product details. The response example for viewing the product details is similar to that of "),e("a",{attrs:{href:"#list-products-api"}},[t._v("listing products")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("If your account has read permission for the GitLab group, you can view the details of products authorized for you.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);