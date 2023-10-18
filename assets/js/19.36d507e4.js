(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{294:function(e,t,a){e.exports=a.p+"assets/img/pipeline-results-1.324ac73a.png"},295:function(e,t,a){e.exports=a.p+"assets/img/quickstart-argocd-2.eb62cc93.png"},296:function(e,t,a){e.exports=a.p+"assets/img/quickstart-dex-1.d7a4cd0f.png"},340:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"view-pipeline-and-deployment-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-pipeline-and-deployment-results"}},[e._v("#")]),e._v(" View Pipeline and Deployment Results")]),e._v(" "),t("p",[e._v("Before starting this section, please ensure that you have read the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html"}},[e._v("Main Process")]),e._v(" section to understand the main process and related terminology for running pipelines and deploying applications in Nautes, and you have created at least one "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/project-pipeline-runtime.html#create-and-update-pipeline-runtime-api"}},[e._v("pipeline runtime")]),e._v(" or "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deployment-runtime.html#create-and-update-deployment-runtime-api"}},[e._v("deployment runtime")]),e._v(".")],1),e._v(" "),t("p",[e._v("You can view the pipeline information using the Tekton Dashboard and the image repository console, and view the deployment information of the applications using the ArgoCD console and the kubectl command line.")]),e._v(" "),t("h2",{attrs:{id:"view-pipeline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-pipeline"}},[e._v("#")]),e._v(" View Pipeline")]),e._v(" "),t("h3",{attrs:{id:"view-resources-in-tekton-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-resources-in-tekton-dashboard"}},[e._v("#")]),e._v(" View Resources in Tekton Dashboard")]),e._v(" "),t("p",[e._v("You can view the pipelines in the Tekton Dashboard installed in the runtime cluster by using a browser to access "),t("code",[e._v("https://$tekonHost:$traefik-httpsNodePort")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Replace the $tekonHost variable with the tekonHost address of the runtime cluster. For more information, refer to "),t("code",[e._v("spec.tekonHost")]),e._v(" in the property template in the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/run-a-pipeline.html#register-physical-cluster"}},[e._v("Register Physical Cluster")]),e._v(" or "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/run-a-pipeline.html#register-virtual-cluster"}},[e._v("Register Virtual Cluster")]),e._v(" section, for example, "),t("code",[e._v("tekton.vcluster-aliyun.8.217.50.114.nip.io")]),e._v(".")],1),e._v(" "),t("p",[e._v("Replace the $traefik-httpsNodePort variable with the traefik port of the runtime cluster. For more information, refer to "),t("code",[e._v("spec.traefik.httpsNodePort")]),e._v(" in the property template in the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/run-a-pipeline.html#register-physical-cluster"}},[e._v("Register Physical Cluster")]),e._v(" or "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/run-a-pipeline.html#register-virtual-cluster"}},[e._v("Register Virtual Cluster")]),e._v(" section, for example, "),t("code",[e._v("30443")]),e._v(".")],1)]),e._v(" "),t("p",[e._v("When you access the Tekton Dashboard, if you haven't logged into the GitLab in the current browser session, the action will trigger unified authentication. During the authentication process, you need to enter your GitLab account and password to log in. After successful login, the page will automatically redirect to the Tekton Dashboard.")]),e._v(" "),t("p",[e._v("The Tekton Dashboard will present the namespaces authorized for you (with the same name as the project pipeline runtimes) and their related resources, including pipelines, pipelineruns, tasks, taskruns, and pipelineresources, etc.")]),e._v(" "),t("p",[e._v("By clicking on a pipeline record, you can view YAML, create pipelineruns, and view related pipelineruns. By clicking on a pipelinerun record, you can view the status, execution time, and running time of the pipelinerun, the parameters, status, logs, and YAML of the taskruns, and perform operations such as rerunning, starting and stopping, and deleting the pipelinerun.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(294),alt:"directive syntax graph"}})]),e._v(" "),t("h3",{attrs:{id:"view-images-in-image-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-images-in-image-repository"}},[e._v("#")]),e._v(" View Images in Image Repository")]),e._v(" "),t("p",[e._v("If the pipelines include tasks to build images and have been successfully executed, you can view the newly added images in the image repository (for example: "),t("code",[e._v("https://github.com/orgs/nautes-labs/packages")]),e._v("). To pull the images, you can use a similar command.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" pull ghcr.io/nautes-labs/devops-sample:0.0.1-bdcdba83f17169db12e95bc9ff0592ace612016b\n")])])]),t("h3",{attrs:{id:"view-image-configuration-in-deployment-manifest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-image-configuration-in-deployment-manifest"}},[e._v("#")]),e._v(" View Image Configuration in Deployment Manifest")]),e._v(" "),t("p",[e._v("If the pipelines include tasks to update Kubernetes manifests and have been successfully executed, you can observe that the container image tags have been automatically updated to the versions containing the latest commit ID in the files within the deployment configuration repository (for example: "),t("code",[e._v("deployments/test/devops-sample.yaml")]),e._v("). The configuration snippet is as follows:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("sample\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ghcr.io/nautes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("labs/devops"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("sample"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("bdcdba83f17169db12e95bc9ff0592ace612016b\n")])])]),t("h2",{attrs:{id:"view-deployment-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-deployment-results"}},[e._v("#")]),e._v(" View Deployment Results")]),e._v(" "),t("h3",{attrs:{id:"view-resources-in-argocd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-resources-in-argocd"}},[e._v("#")]),e._v(" View Resources in ArgoCD")]),e._v(" "),t("p",[e._v("Access the ArgoCD console installed on the runtime cluster by using a browser to access "),t("code",[e._v("https://$argocdHost:$traefik-httpsNodePort")]),e._v(". Click "),t("code",[e._v("LOG IN VIA DEX")]),e._v(" for unified authentication. If you haven't logged into GitLab in the current browser session, you'll need to enter your GitLab account and password to log in. After successful login, the page will automatically redirect to the ArgoCD console.")]),e._v(" "),t("blockquote",[t("p",[e._v("Replace the $argocdHost variable with the argocdHost address of the runtime cluster. For more information, refer to "),t("code",[e._v("spec.argocdHost")]),e._v(" in the property template in the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#register-physical-cluster"}},[e._v("Register Physical Cluster")]),e._v(" or "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#register-virtual-cluster"}},[e._v("Register Virtual Cluster")]),e._v(" section, for example, "),t("code",[e._v("argocd.vcluster-aliyun-0412.8.217.50.114.nip.io")]),e._v(".")],1),e._v(" "),t("p",[e._v("Replace the $traefik-httpsNodePort variable with the traefik port of the runtime cluster. For more information, refer to "),t("code",[e._v("spec.traefik.httpsNodePort")]),e._v(" in the property template in the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#register-physical-cluster"}},[e._v("Register Physical Cluster")]),e._v(" or "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#register-virtual-cluster"}},[e._v("Register Virtual Cluster")]),e._v(" section, for example, "),t("code",[e._v("30443")]),e._v(".")],1)]),e._v(" "),t("p",[e._v('The ArgoCD console lists ArgoCD applications related to products authorized for you, and you will be able to view and manage related resources. By clicking on an ArgoCD application card, you can view the resource manifest, YAML, events, logs, and perform operations such as synchronization, restart, and deletion. By clicking on "Settings" in the left menu bar of the ArgoCD console, you can also view ArgoCD projects related to authorized products.')]),e._v(" "),t("p",[t("img",{attrs:{src:a(295),alt:"directive syntax graph"}})]),e._v(" "),t("h3",{attrs:{id:"view-resources-in-kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-resources-in-kubernetes"}},[e._v("#")]),e._v(" View Resources in Kubernetes")]),e._v(" "),t("p",[e._v("You can perform unified authentication using a standard OIDC client and obtain an ID Token, and use the ID Token as an authentication credential for kubectl to access Kubernetes as an authenticated user on the server.\nThe section describes how to perform unified authentication and obtain an ID Token using an example client provided by DEX.")]),e._v(" "),t("p",[e._v("You can obtain "),t("a",{attrs:{href:"https://github.com/dexidp/dex/tree/master/examples/example-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("the source code of the client"),t("OutboundLink")],1),e._v(", and compile the source code into a binary file. You can start the client using the following command, and the client will provide a WEB UI for unified authentication and return the authentication result.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("./example-app "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n --client-id "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$client_id")]),e._v('"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n --client-secret "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$client_secret")]),e._v('"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--issuer")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$dex_url")]),e._v('"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n --issuer-root-ca "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$dex_ca")]),e._v('"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--listen")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://0.0.0.0:5555"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n --redirect-uri "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ip")]),e._v(':5555/callback"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /tmp/dex-client.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("&1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),t("p",[e._v("The variables "),t("code",[e._v("$client_id")]),e._v(" and "),t("code",[e._v("$client_secret")]),e._v(" are the client secrets issued by DEX, "),t("code",[e._v("$dex_url")]),e._v(" is the service address of DEX, "),t("code",[e._v("$dex_ca")]),e._v(" is the HTTPS certificate of DEX, and "),t("code",[e._v("$ip")]),e._v(" is the IP address of the server where the client is running.")]),e._v(" "),t("p",[e._v("In order to access the client WEB UI, you also need to add an inbound rule for port "),t("code",[e._v("5555")]),e._v(". Visit the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/installation.html#check-the-installation-results"}},[e._v("ArgoCD of the Tenant Management Cluster")]),e._v(" and add the redirect URI of the client under the "),t("code",[e._v("data.staticClients.id[0].redirectURIs")]),e._v(" path in the "),t("code",[e._v("dex")]),e._v(" ConfigMap of the "),t("code",[e._v("nautes")]),e._v(" Application.")],1),e._v(" "),t("p",[e._v("After the service is started, you can access the client on port "),t("code",[e._v("5555")]),e._v(", fill in the "),t("code",[e._v("Extra scopes")]),e._v(" with "),t("code",[e._v("groups")]),e._v(", and click "),t("code",[e._v("Login")]),e._v(" for unified authentication.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(296),alt:"directive syntax graph"}})]),e._v(" "),t("p",[e._v("If authentication is successful, an ID Token will be generated, and the example is as shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2OGUyODFmN2FkYTk2NjNmMWI0MTc0NGFhYTUzZDRmYjk0N2Q1YjMifQ.eyJpc3MiOiJodHRwczovL2RleC5ibHV6aW4uaW86OTA4MCIsInN1YiI6IkNnSXhNaElHWjJsMGJHRmkiLCJhdWQiOiJwbGF0Zm9ybSIsImV4cCI6MTY4MDg3Mjc2MiwiaWF0IjoxNjgwNzg2MzYyLCJhdF9oYXNoIjoiWTNNbnRHLTE3SERaWjNVb0hiNWdmUSIsImNfaGFzaCI6IlBGUXNEM1hPSkhNZ1B3RW1LNXl5bEEiLCJlbWFpbCI6ImxpdWp1bmhvbmdAdmlzcHJhY3RpY2UuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdyb3VwcyI6WyJ5dW50aSIsIm5hdXRlcy1sYWJzIiwidGVrdG9uY2QiLCJkZXYtdGVuYW50IiwieXVudGkvc3ViZ3JvdXAiLCJ5dW50aS9zdWJncm91cC9zdWJzdWJncm91cCJdLCJuYW1lIjoibGl1anVuaG9uZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImxpdWp1bmhvbmcifQ.AYiLwJMcVaJdVdF-j_RZnHCPpg1psF3CJlzlBzvBYcuI_t7slgRaumRmGJEYXHYn2QFxjEZCNnBiOpJDDJoitVTxi1qoZ2nNoxhB3Wtxc1MoqkiPR5wy49yHw5roTnqIuEBy5BMpN_embxB9vK1bwxf414PsYKm1Dhbj8dynpURjpTsLrN5k7zVC7RQxVvglNX4cgYEucvSLqMEdtHNlmtnRsl6DJuItxC0MYwXlp4C9FNWswUjSpargdX4wgqfYy91l66GiI2Xj_zdba0NHLcPean-nmBMObLNhxex4hj8IVcGyiEu9in87y8eisrCBoLEWP9SJ_ZxWiOPoTFr54A\n")])])]),t("p",[e._v("You can use the ID Token to replace the authentication information in kubeconfig:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the configuration of users in the kubeconfig file with the ID Token.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("clusters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Config\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("preferences")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("users")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" user\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("token")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("Token\n")])])]),t("p",[e._v("If your runtime cluster type is virtual, you can obtain the kubeconfig file using the command line:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the $VCLUSTER variable with the name of the virtual cluster.")]),e._v("\nkubectl get secret vc-"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$VCLUSTER")]),e._v("-vcluster "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$VCLUSTER")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(".data.config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v("\n")])])]),t("p",[e._v("After applying the kubeconfig file, you can use the kubectl command line to view the resources in the namespace with the same name as the deployment runtime, and you have management permissions for all resources in the namespace.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Apply the kubeconfig.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KUBECONFIG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/opt/vcluster/kubeconfig-dex.yaml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Use the kubectl command line to manage resources in the namespace. The following command lines are only examples.")]),e._v("\nkubectl get deployment "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" deployment-runtime-1\nkubectl delete deployment deployment-test "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" deployment-runtime-1\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);