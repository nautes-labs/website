(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{298:function(e,t,i){e.exports=i.p+"assets/img/user-guide-overview-1.3c3ef50a.png"},345:function(e,t,i){"use strict";i.r(t);var n=i(14),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"main-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-process"}},[e._v("#")]),e._v(" Main Process")]),e._v(" "),t("p",[e._v("This document describes the main process of deploying an application, including the following steps:")]),e._v(" "),t("p",[t("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),e._v(" "),t("p",[t("a",{attrs:{href:"#register-runtime-cluster"}},[e._v("Register Runtime Cluster")])]),e._v(" "),t("p",[t("a",{attrs:{href:"#initialize-a-product"}},[e._v("Initialize a Product")])]),e._v(" "),t("p",[t("a",{attrs:{href:"#run-pipelines"}},[e._v("Run Pipelines")])]),e._v(" "),t("p",[t("a",{attrs:{href:"#view-pipeline-results"}},[e._v("View Pipeline Results")])]),e._v(" "),t("p",[t("a",{attrs:{href:"#deployment"}},[e._v("Deployment")])]),e._v(" "),t("p",[t("a",{attrs:{href:"#view-deployment-results"}},[e._v("View Deployment Results")])]),e._v(" "),t("p",[e._v("The main process is shown in the following diagram:")]),e._v(" "),t("p",[t("img",{attrs:{src:i(298),alt:"directive syntax graph"}})]),e._v(" "),t("p",[e._v("In Nautes, a tenant management cluster and runtime clusters are indispensable components. Each tenant has only one tenant management cluster, which is responsible for initializing all runtime clusters for the tenant and coordinating various components to integrate and deploy using the runtime cluster. Each tenant has only one Git-based configuration repository, and the tenant management cluster updates its components and resources automatically by watching the tenant configuration repository.")]),e._v(" "),t("p",[e._v("Each tenant can have multiple runtime clusters, which serve as the actual infrastructures for hosting IT system integration and running. These clusters can be either virtual or physical.")]),e._v(" "),t("p",[e._v("The environment refers to the collection of all infrastructure, software, and configurations that support the operation of IT systems at specific stages (such as development, testing, production, etc.). The runtime cluster can provide the computing power required by the environment. Therefore, it is necessary to relate the environment to the runtime cluster so that IT systems can use corresponding runtime clusters according to different stages.")]),e._v(" "),t("p",[e._v('In Nautes, for IT systems adopting a microservices architecture, a "Product" refers to an IT system, while a "Project" refers to a microservice. Therefore, each product contains multiple projects, and each project has its own code repositories.')]),e._v(" "),t("p",[e._v("When a product reaches a certain stage and needs to be integrated, tested, or to provide business functionality to the end users, the product team can use a declarative method to describe the expected state of the product in different environments.")]),e._v(" "),t("p",[e._v("When a product is ready for integration or testing, the product team can use the specified pipeline runtime clusters for integration and testing by defining the pipeline runtimes. Each project can have one or multiple exclusive pipeline runtimes, for example, code from different branches of a code repository can be integrated through different pipeline runtimes, while multiple pipeline runtimes can be hosted on the same cluster.")]),e._v(" "),t("p",[e._v("When a product is ready for deployment, the product team can deploy the product using the specified deployment runtime clusters by defining the deployment runtimes. Each product can have multiple deployment runtimes, for example, you can manage functional testing and customer demonstration environments through two deployment runtimes in a product, while the deployment runtimes for multiple products can be hosted on the same cluster.")]),e._v(" "),t("p",[e._v('Nautes uses Kubernetes manifests to define environments, projects, code repositories, authorizations, pipeline runtimes, deployment runtimes and stores these manifests in a product configuration repository, collectively referred to as the "product configuration manifest". Nautes synchronizes the pipeline or deployment runtime to the runtime cluster by watching changes in the product configuration manifest.')]),e._v(" "),t("p",[e._v("When users push code to the code repository declared in the pipeline runtime, Nautes will watch the webhook callbacks from the code repository and trigger a pipeline in the cluster declared in the pipeline runtime.")]),e._v(" "),t("p",[e._v("When users push Kubernetes manifests to the code repository declared in the deployment runtime, Nautes watches for changes in the Kubernetes manifests and synchronizes to the deployment runtime cluster until the actual state in the deployment runtime cluster is consistent with the expected state in the code repository.")]),e._v(" "),t("p",[e._v("To prevent the leakage of sensitive information, it is managed by Vault in Nautes.")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("For more information, please refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/installation.html"}},[e._v("Installation")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"register-runtime-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-runtime-cluster"}},[e._v("#")]),e._v(" Register Runtime Cluster")]),e._v(" "),t("p",[e._v("You can register runtime clusters through the Command-Line or API.")]),e._v(" "),t("p",[e._v("If you choose to use the command-line, please refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/run-a-pipeline.html#register-runtime-cluster"}},[e._v("Register Pipeline Runtime Cluster")]),e._v(" or "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#register-runtime-cluster"}},[e._v("Register Deployment Runtime Cluster")]),e._v(" according to the type of runtime cluster you want to register.")],1),e._v(" "),t("p",[e._v("If you choose to use the API, please refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/cluster.html"}},[e._v("API")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"initialize-a-product"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialize-a-product"}},[e._v("#")]),e._v(" Initialize a Product")]),e._v(" "),t("p",[e._v("Submitting product configuration manifests supports both Command-Line and API. For more information about the API, please refer to the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html"}},[e._v("Maintain Product")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/project.html"}},[e._v("Maintain Project")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/code-repo.html"}},[e._v("Maintain Code Repository")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/environment.html"}},[e._v("Maintain Environment")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/pipeline-runtime.html"}},[e._v("Maintain Pipeline Runtime")]),e._v(", and "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deployment-runtime.html"}},[e._v("Maintain Deployment Runtime")]),e._v(" sections. For more information about the command-line, please refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/run-a-pipeline.html#initialize-a-product"}},[e._v("Pipeline")]),e._v(" or "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#initialize-a-product"}},[e._v("Deployment")]),e._v(".")],1),e._v(" "),t("p",[e._v("When submitting product configuration manifests via the command-line, it sorts the contents of the manifest before executing. The order for adding is: creating products, creating environments, creating projects, creating code repositories, creating authorizations, creating pipeline runtimes, and creating deployment runtimes. The order for destroying is: deleting the deployment runtimes, deleting the pipeline runtimes, deleting the authorizations, deleting the code repositories, deleting the projects, deleting the environments, and deleting the products.")]),e._v(" "),t("p",[e._v("After the product is created successfully, a group with the same name as the product will be created in GitLab, and a repository named "),t("code",[e._v("default.project")]),e._v(" will be created in this group to store the product configuration manifests, including resource files for environments, projects, code repositories, authorizations, pipeline runtimes and deployment runtimes. Each group has only single "),t("code",[e._v("default.project")]),e._v(" repository.")]),e._v(" "),t("p",[e._v("Nautes will automatically install related resources in the corresponding runtime cluster according to the product configuration manifests, enabling the pipeline runtime cluster to have the ability to watch webhook callbacks from GitLab and trigger the pipeline, as well as enabling the deployment runtime cluster to have the ability to watch the GitLab repository of the product and automatic deployment.")]),e._v(" "),t("blockquote",[t("p",[e._v("In order to ensure that Nautes can automatically synchronize the runtimes of the product based on the product configuration manifests, the product configuration manifests must conform to the predefined rules. Therefore, when submitting a request, the Nautes API Server will perform validation on the product configuration manifests by default. If the validation fails, the request will be rejected.")]),e._v(" "),t("p",[e._v("In certain scenarios, users may need to submit resource files failing to conform to the predefined rules, and subsequently submit the related resources later. In order to satisfy similar scenarios, you can force the submission of requests by adding the query parameter 'insecure_skip_check=true' to the API of POST and DELETE types.")])]),e._v(" "),t("h2",{attrs:{id:"run-pipelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-pipelines"}},[e._v("#")]),e._v(" Run Pipelines")]),e._v(" "),t("p",[e._v("Use Git CLI to submit source code and pipeline configuration files to a project source code repository. After a successful submission, the pipeline will be triggered in the specified pipeline runtime cluster. For more information, please refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/run-a-pipeline.html#run-pipelines"}},[e._v("Run Pipelines")])],1),e._v(" "),t("h2",{attrs:{id:"view-pipeline-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-pipeline-results"}},[e._v("#")]),e._v(" View Pipeline Results")]),e._v(" "),t("p",[e._v("You can view the execution results of the pipeline through Tekton Dashboard, GitLab console, and image repository console. For more information, please refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/pipeline-results.html"}},[e._v("View Pipeline Results")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),t("p",[e._v("After automatically updating (or manually updating using Git CLI) the Kubernetes manifests in the deployment configuration repository, Kubernetes manifests will be deployed to the specified deployment runtime cluster. For more information, please refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#deployment"}},[e._v("Deployment")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"view-deployment-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-deployment-results"}},[e._v("#")]),e._v(" View Deployment Results")]),e._v(" "),t("p",[e._v("Through the ArgoCD console or the kubectl command-line, you will be able to view the deployment results of the product and manage resources related to authorized products only. For more information, please refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deployment-results.html"}},[e._v("View Deployment Results")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);