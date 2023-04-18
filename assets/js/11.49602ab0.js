(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{280:function(t,e,r){t.exports=r.p+"assets/img/user-guide-overview-1.1cfbb4e9.png"},434:function(t,e,r){"use strict";r.r(e);var a=r(14),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"主体流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主体流程"}},[t._v("#")]),t._v(" 主体流程")]),t._v(" "),e("p",[t._v("下文将描述部署一个应用的主体流程。包括以下步骤:"),e("br"),t._v(" "),e("a",{attrs:{href:"#%E5%AE%89%E8%A3%85"}},[t._v("安装")]),e("br"),t._v(" "),e("a",{attrs:{href:"#%E6%B3%A8%E5%86%8C%E8%BF%90%E8%A1%8C%E6%97%B6%E9%9B%86%E7%BE%A4"}},[t._v("注册运行时集群")]),e("br"),t._v(" "),e("a",{attrs:{href:"#%E5%87%86%E5%A4%87%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83"}},[t._v("准备运行环境")]),e("br"),t._v(" "),e("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2"}},[t._v("部署")]),e("br"),t._v(" "),e("a",{attrs:{href:"#%E6%9F%A5%E7%9C%8B%E9%83%A8%E7%BD%B2%E7%BB%93%E6%9E%9C"}},[t._v("查看部署结果")])]),t._v(" "),e("p",[t._v("主体流程成功执行之后的效果，如下图所示：\n"),e("img",{attrs:{src:r(280),alt:"directive syntax graph"}})]),t._v(" "),e("p",[t._v("在 Nautes 中，租户管理集群和部署运行时集群是必不可少的组成部分。每个租户只有一个租户管理集群，负责初始化该租户的所有部署运行时集群，并协调各种组件，以向部署运行时集群实施自动化部署。每个租户只有一个存储在 GitLab 中的租户配置库，租户管理集群通过监听租户配置库，向其自动更新相关组件和资源。"),e("br"),t._v("\n每个租户可以拥有多个部署运行时集群，这些部署运行时集群是承载IT系统运行时环境的真正载体，可以是虚拟集群或者物理集群。")]),t._v(" "),e("p",[t._v("根据IT系统的生命周期，不同阶段需要有配套的运行时环境，用于验证或使用IT系统的功能和非功能特性。通常根据生命周期的不同阶段划分为不同类型的环境，例如开发、测试、预生产和生产环境，这里的环境是一个逻辑概念，作为IT系统部署运行时的管理单元。"),e("br"),t._v("\n环境需要在部署运行时集群上运行，因此必须将环境与部署运行时集群相关联，以便IT系统部署到正确的运行时环境中。")]),t._v(" "),e("p",[t._v("在Nautes中，对于微服务架构的IT系统，“产品”表示一个IT系统，“项目”表示一个微服务。因此，一个产品包含多个项目，每个项目有独立的代码库。"),e("br"),t._v("\n产品进行到一定阶段时需要验证或使用其特性，通常会根据部署配置向环境关联的部署运行时集群进行部署，以生成部署运行时环境。每个产品可以包含多个部署运行时环境，例如，使用相同部署配置在不同集群所创建出来的功能测试和客户演示环境。同时，在相同集群上也可以承载多个产品的部署运行时环境。")]),t._v(" "),e("p",[t._v("Nautes 通过 Kubernetes 资源文件来定义环境、项目、代码库和部署运行时，并将这些资源文件存储到产品的 GitLab 代码库，资源文件的集合称为“产品配置清单”。Nautes 监听产品配置清单向部署运行时集群实施自动部署，创建或更新产品的部署运行时环境。")]),t._v(" "),e("p",[t._v("当用户向部署运行时集群监听的 GitLab 代码库提交 Kubernetes 资源清单，产品的部署运行时环境监听 Kubernetes 资源清单并向部署运行时集群实施自动部署，直到部署运行时集群中的实际状态与 GitLab 代码库中的预期状态一致为止。")]),t._v(" "),e("p",[t._v("为了保护敏感信息不被泄露，Nautes 中的敏感信息均通过 Vault 存取。")]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("详情参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/installation.html"}},[t._v("安装")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"注册运行时集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册运行时集群"}},[t._v("#")]),t._v(" 注册运行时集群")]),t._v(" "),e("p",[t._v("支持 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#注册运行时集群"}},[t._v("命令行")]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/guide/user-guide/cluster.html"}},[t._v("API")]),t._v(" 两种方式注册运行时集群。")],1),t._v(" "),e("h2",{attrs:{id:"准备运行环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备运行环境"}},[t._v("#")]),t._v(" 准备运行环境")]),t._v(" "),e("p",[t._v("提交产品配置清单支持 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#准备运行环境"}},[t._v("命令行")]),t._v(" 和 API 两种方式。使用 API 接口的详细参见 "),e("RouterLink",{attrs:{to:"/guide/user-guide/product.html"}},[t._v("维护产品")]),t._v("、"),e("RouterLink",{attrs:{to:"/guide/user-guide/project.html"}},[t._v("维护项目")]),t._v("、"),e("RouterLink",{attrs:{to:"/guide/user-guide/code-repo.html"}},[t._v("维护代码库")]),t._v("、"),e("RouterLink",{attrs:{to:"/guide/user-guide/environment.html"}},[t._v("维护环境")]),t._v("、"),e("RouterLink",{attrs:{to:"/guide/user-guide/deployment-runtime.html"}},[t._v("维护部署运行时")]),t._v(" 章节。"),e("br"),t._v("\n提交产品配置清单有先后顺序。正向新增的顺序是：创建产品、创建环境、创建项目、创建代码库、创建部署运行时。反向销毁的顺序是：删除部署运行时、删除代码库、删除项目、删除环境、删除产品。")],1),t._v(" "),e("p",[t._v("产品创建成功后，将在 GitLab 中创建与产品同名的 group，并在这个 group 中创建名称为 default.project 的代码库，用于存储该产品的配置清单，包括环境、项目、代码库和部署运行时的资源文件。每个 group 有且只有一个 default.project 代码库。")]),t._v(" "),e("p",[t._v("产品配置清单创建成功后，根据产品配置清单将在部署运行时集群中自动安装相关资源，使得部署运行时集群具备监听产品的 GitLab 代码库、并向该集群自动部署的能力。")]),t._v(" "),e("h2",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),e("p",[t._v("使用 Git CLI 向产品的 GitLab 代码库提交 Kubernetes 资源清单，例如：deployment、service 等资源。提交成功后，将向指定的部署运行时集群部署产品。详情参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deploy-an-application.html#部署"}},[t._v("部署")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"查看部署结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看部署结果"}},[t._v("#")]),t._v(" 查看部署结果")]),t._v(" "),e("p",[t._v("部署成功后，可以通过 ArgoCD 控制台或者 kubectl 命令行查看产品的部署结果，并且只能查看和管理被授权产品的相关资源。详细参考 "),e("RouterLink",{attrs:{to:"/guide/user-guide/deployment-results.html"}},[t._v("查看部署结果")]),t._v("。")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);