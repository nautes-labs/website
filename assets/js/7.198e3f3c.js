(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{275:function(t,s,e){t.exports=e.p+"assets/img/brief-architecture.c7e7ba90.png"},356:function(t,s,e){"use strict";e.r(s);var r=e(14),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Nautes 是 Kubernetes 原生的开源一站式开发者平台，融合了 DevOps 和 GitOps 的理念和最佳实践，以可插拔的方式集成了业界最优秀的云原生开源项目。")]),t._v(" "),s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[t._v("覆盖敏捷开发、CI/CD、自动化测试、安全、运维等全流程的一站式开发者平台。")]),t._v(" "),s("li",[t._v("遵循 GitOps 最佳实践，以版本库作为唯一可信数据源。当版本库中的数据有变更时，由 Operator 自动识别变更并向 Kubernetes 集群做增量更新。")]),t._v(" "),s("li",[t._v("全分布式的多租户架构，租户作为分布式的计算单元和存储单元支持水平扩展，租户所管理的资源同样支持水平扩展。")]),t._v(" "),s("li",[t._v("良好的适配性，除了底座 Kubernetes 以及 Git 外，其他组件均可被替换。")]),t._v(" "),s("li",[t._v("所有功能均提供声明式的REST API，支持二次开发。")]),t._v(" "),s("li",[t._v("对所集成的开源项目，均保持其原生特性，无裁剪式封装，对受管应用不产生二次绑定。")]),t._v(" "),s("li",[t._v("通过构建上层数据模型，实现对所集成的开源项目的统一认证、统一授权。")]),t._v(" "),s("li",[t._v("支持私有云、混合云的部署模式。")])]),t._v(" "),s("h2",{attrs:{id:"架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),s("p",[s("img",{attrs:{src:e(275),alt:""}})]),t._v(" "),s("p",[t._v("Nautes 采用全分布式的多租户架构，平台管理集群负责租户的分配和回收，每个租户独占一套资源（包括代码库、密钥库、制品库、认证服务器、集群等），租户内的资源由租户管理集群进行管理。")]),t._v(" "),s("p",[t._v("租户作为资源的管理单元，可由用户根据自身组织特性进行划分，常见的划分方式有：按产品团队、按部门、按子公司等。")]),t._v(" "),s("p",[t._v("租户内的资源也支持多实例部署，例如：可以在一个租户内部署多个 Harbor 实例，用于隔离不同产品的容器镜像数据。")])])}),[],!1,null,null,null);s.default=a.exports}}]);