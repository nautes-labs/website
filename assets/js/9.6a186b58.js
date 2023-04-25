(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{276:function(e,t,n){e.exports=n.p+"assets/img/user-guide-overview-1.97a6d023.png"},417:function(e,t,n){"use strict";n.r(t);var r=n(14),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"main-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-process"}},[e._v("#")]),e._v(" Main Process")]),e._v(" "),t("p",[e._v("This document describes the main process of deploying an application, including the following steps:"),t("br"),e._v(" "),t("a",{attrs:{href:"#installation"}},[e._v("Installation")]),t("br"),e._v(" "),t("a",{attrs:{href:"#register-runtime-cluster"}},[e._v("Register Runtime Cluster")]),t("br"),e._v(" "),t("a",{attrs:{href:"#prepare-runtime-environment"}},[e._v("Prepare Runtime Environment")]),t("br"),e._v(" "),t("a",{attrs:{href:"#deployment"}},[e._v("Deployment")]),t("br"),e._v(" "),t("a",{attrs:{href:"#view-deployment-results"}},[e._v("View Deployment Results")])]),e._v(" "),t("p",[e._v("The main process is shown in the following diagram:")]),e._v(" "),t("p",[t("img",{attrs:{src:n(276),alt:"directive syntax graph"}})]),e._v(" "),t("p",[e._v("In Nautes, a tenant management cluster and deployment runtime clusters are essential components. Each tenant has only one tenant management cluster, which is responsible for initializing all deployment runtime clusters for the tenant and coordinating various components to implement automated deployment to deployment runtime clusters. Each tenant has only one tenant configuration repository stored in GitLab, and the tenant management cluster updates its components and resources automatically by watching the tenant configuration repository.")]),e._v(" "),t("p",[e._v("Each tenant can have multiple deployment runtime clusters, which serve as the actual infrastructures for hosting IT system runtime environments. These clusters can be either virtual or physical.")]),e._v(" "),t("p",[e._v("Different stages of the IT system lifecycle require corresponding environments, such as: development, testing, pre-production, and production environments.\nEnvironments need to run on deployment runtime clusters, it is essential to associate the environment with the deployment runtime cluster to ensure that the IT system is deployed to the correct runtime environment.")]),e._v(" "),t("p",[e._v('In Nautes, for IT systems adopting a microservices architecture, a "Product" refers to an IT system, while a "Project" refers to a microservice. Therefore, each Product contains multiple Projects, each with its own independent code repository.')]),e._v(" "),t("p",[e._v("When a product is ready for testing or utilization, it is typically deployed to the deployment runtime cluster associated with the corresponding environment based on the deployment configuration, resulting in a deployment runtime environment. Each product can have multiple deployment runtime environments, such as functional testing or customer demonstration environments created in different clusters with the same deployment configuration. Additionally, multiple products' deployment runtime environments can be hosted on the same cluster.")]),e._v(" "),t("p",[e._v("Nautes uses Kubernetes resource files to define environments, projects, code repositories, and deployment runtimes and stores these resource files in the product's GitLab repository, collectively referred to as the \"product configuration manifest.\" Nautes watches the product configuration manifest and implements automated deployment to the deployment runtime cluster, creating or updating the product's deployment runtime environment.")]),e._v(" "),t("p",[e._v("When users submit Kubernetes Manifests to the GitLab repository watched by the deployment runtime cluster, the product's deployment runtime environment watches the Kubernetes Manifests and implements automated deployment to the deployment runtime cluster until the actual state in the deployment runtime cluster is consistent with the expected state in the GitLab repository.")]),e._v(" "),t("p",[e._v("In order to prevent sensitive information from being leaked, sensitive information is managed by Vault in Nautes.")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("For more information, refer to the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/installation.html"}},[e._v("Installation")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"register-runtime-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-runtime-cluster"}},[e._v("#")]),e._v(" Register Runtime Cluster")]),e._v(" "),t("p",[e._v("Support both "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#register-runtime-cluster"}},[e._v("Command Line")]),e._v("  and  "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/cluster.html"}},[e._v("API")]),e._v(" for registering runtime clusters.")],1),e._v(" "),t("h2",{attrs:{id:"prepare-runtime-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-runtime-environment"}},[e._v("#")]),e._v(" Prepare Runtime Environment")]),e._v(" "),t("p",[e._v("Submitting product configuration manifests supports both "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#prepare-runtime-environment"}},[e._v("Command Line")]),e._v(" and API methods. For more information about the API interfaces, refer to the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html"}},[e._v("Maintain Product")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/project.html"}},[e._v("Maintain Project")]),e._v(","),t("RouterLink",{attrs:{to:"/en/guide/user-guide/code-repo.html"}},[e._v("Maintain Code Repository")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/environment.html"}},[e._v("Maintain Environment")]),e._v(", and "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deployment-runtime.html"}},[e._v("Maintain Deployment Runtime")]),e._v(" sections.")],1),e._v(" "),t("p",[e._v("There is an order for submitting product configuration manifests. The forward order for adding is: create a product, create an environment, create a project, create a repository, and create a deployment runtime. The reverse order for destroying is: delete deployment runtime, delete code repository, delete project, delete environment, and delete product.")]),e._v(" "),t("p",[e._v("After the product is created successfully, a group with the same name as the product will be created in GitLab, and a repository named "),t("code",[e._v("default.project")]),e._v(" will be created in this group to store the product configuration manifest , including resource files for environments, projects, repositories, and deployment runtimes. Each group has only one "),t("code",[e._v("default.project")]),e._v(" repository.")]),e._v(" "),t("p",[e._v("After the product configuration manifest is created successfully, relevant resources will be automatically installed in the deployment runtime cluster according to the product configuration manifest, enabling the deployment runtime cluster to watch the GitLab repository of the product and automatically deploy to the cluster.")]),e._v(" "),t("h2",{attrs:{id:"deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),t("p",[e._v("Use the Git CLI to submit Kubernetes Manifests to the product's GitLab repository, such as deployment, service, etc. After successful submission , the product will be deployed to the specified deployment runtime cluster. For more information, refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#deployment"}},[e._v("Deployment")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"view-deployment-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-deployment-results"}},[e._v("#")]),e._v(" View Deployment Results")]),e._v(" "),t("p",[e._v("Through the ArgoCD console or the kubectl command-line tool, you will be able to view the deployment results of the product and manage resources related to authorized products only.  For more information, refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deployment-results.html"}},[e._v("View Deployment Results")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);