(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{432:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("Nautes 支持基于公有云、私有云、主机、及 Kubernets 集群进行安装，本文档以阿里云为例描述了在公有云安装 Nautes 的过程。")]),t._v(" "),a("h2",{attrs:{id:"准备环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[t._v("#")]),t._v(" 准备环境")]),t._v(" "),a("ul",[a("li",[t._v("安装机：AMD64 架构的 Linux 服务器，需要预先安装 Docker、Git、Bash，并确保 /opt/nautes 目录没有被占用。")]),t._v(" "),a("li",[t._v("公有云密钥：一个阿里云账号的访问密钥，如果您使用的是 RAM 用户，请确保 RAM 用户有 AliyunECSFullAccess 和 AliyunVPCFullAccess 权限。详情参考 "),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/116401.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建 AccessKey"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("blockquote",[a("p",[t._v("安装程序会调用阿里云的 API 申请资源，这个过程会产生一定的费用（请参考"),a("a",{attrs:{href:"#%E9%98%BF%E9%87%8C%E4%BA%91%E8%B4%B9%E7%94%A8%E8%AF%B4%E6%98%8E"}},[t._v("阿里云费用说明")]),t._v("）。")]),t._v(" "),a("p",[t._v("受阿里云的计费规则限制，请确保上述阿里云账号内的余额大于100元人民币，否则安装程序无法调用阿里云的 API 申请资源。")])]),t._v(" "),a("h2",{attrs:{id:"执行安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行安装"}},[t._v("#")]),t._v(" 执行安装")]),t._v(" "),a("ol",[a("li",[t._v("在安装机上克隆安装程序的项目：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/nautes-labs/installer.git\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("根据 vars.yaml.sample 编写 vars.yaml，其中 access_key 和 secret_key 必须填写为阿里云账号的 AccessKey，其他配置可采用默认值。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOT"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" vars.yaml")]),t._v("\naccess_key: < your alicloud access key >\nsecret_key: < your alicloud secret key >\nEOT")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("执行 "),a("code",[t._v("start.sh")]),t._v(" 脚本开始安装：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" start.sh\n")])])]),a("blockquote",[a("p",[t._v("由于需要安装的组件较多，整个安装过程预计耗时40~50分钟，安装成功后，您可以在 /opt/nautes 目录下找到安装后的组件信息。如果安装失败，您可以通过 /opt/nautes/out/logs 目录下的日志排查问题。")])]),t._v(" "),a("h2",{attrs:{id:"查看安装结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看安装结果"}},[t._v("#")]),t._v(" 查看安装结果")]),t._v(" "),a("p",[t._v("/opt/nautes/management 是租户配置库的本地副本。")]),t._v(" "),a("p",[t._v("/opt/nautes/terraform 是 terraform 的状态文件，记录了安装程序在阿里云上申请的资源清单。")]),t._v(" "),a("p",[t._v("/opt/nautes/out 中存储了已安装组件的相关信息：")]),t._v(" "),a("ul",[a("li",[t._v("GitLab 用于托管租户的配置库，用户应用的源代码、部署清单和流水线配置等。GitLab 的管理员密码，以及租户配置库的访问信息等存储在 gitlab 子目录下。")]),t._v(" "),a("li",[t._v("Vault 用于存储和管理租户的密钥数据。Vault 的 unseal key 和 root token 存储在 vault 子目录下。")]),t._v(" "),a("li",[t._v("Kubernetes 集群用于承载所有的租户管理组件。集群的 kubeconfig 存储在 kubernetes 子目录下。")]),t._v(" "),a("li",[t._v("ArgoCD 用于监听租户配置库，并根据仓库中的配置声明向 Kubernetes 集群同步租户配置。ArgoCD 的管理员密码存储在 argocd 子目录下。")]),t._v(" "),a("li",[t._v("Dex 用于提供基于 OIDC 协议的统一认证服务。dex 的客户端密钥存储在 kubernetes 子目录下。")])]),t._v(" "),a("p",[t._v("除此之外，/opt/nautes/out 下其他子目录的相关信息：")]),t._v(" "),a("ul",[a("li",[t._v("hosts：云服务器的 IP 地址和访问密钥。")]),t._v(" "),a("li",[t._v("pki：访问组件需要使用的证书和签发证书的 CA。")]),t._v(" "),a("li",[t._v("service：租户管理集群、Dex、ArgoCD、Vault、GitLab、Nautes API Server 的访问地址。")]),t._v(" "),a("li",[t._v("logs：安装程序的日志。")])]),t._v(" "),a("blockquote",[a("p",[t._v("Nautes API Server 的 Swagger UI 实例的相对路径为：/q/swagger-ui。")])]),t._v(" "),a("h2",{attrs:{id:"销毁环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁环境"}},[t._v("#")]),t._v(" 销毁环境")]),t._v(" "),a("blockquote",[a("p",[t._v("请确保已成功执行安装，未删除安装机上的 /opt/nautes 目录。")]),t._v(" "),a("p",[t._v("销毁程序将删除所有从云服务中申请的资源，暂不支持单独对组件执行卸载。")])]),t._v(" "),a("ol",[a("li",[t._v("在安装机上克隆安装程序的项目：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/nautes-labs/installer.git\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("修改项目根目录下的 vars.yaml 文件，填写 access_key 和 secret_key。")]),t._v(" "),a("li",[t._v("执行 "),a("code",[t._v("destroy.sh")]),t._v(" 脚本开始销毁环境：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" destroy.sh\n")])])]),a("h2",{attrs:{id:"阿里云费用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云费用说明"}},[t._v("#")]),t._v(" 阿里云费用说明")]),t._v(" "),a("p",[t._v("安装程序所申请的云服务器的默认规格如下：")]),t._v(" "),a("ul",[a("li",[t._v("区域：中国香港-可用区B")]),t._v(" "),a("li",[t._v("镜像：Ubuntu 22.04 64位")]),t._v(" "),a("li",[t._v("实例规格：ecs.c6.large(2C4G)")]),t._v(" "),a("li",[t._v("系统盘：ESSD云盘 PL0 40G")]),t._v(" "),a("li",[t._v("网络：实例公网IP")])]),t._v(" "),a("p",[t._v("安装程序默认使用"),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/52088.html?spm=5176.ecsbuyv3.0.0.2a2736756P0dh1",target:"_blank",rel:"noopener noreferrer"}},[t._v("抢占式实例模式"),a("OutboundLink")],1),t._v("创建云服务器，该模式存在实例被自动释放的风险。如果您希望体验更稳定的环境，请在 vars.yaml 增加以下配置，让安装程序切换至"),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/40653.html?spm=5176.ecsbuyv3.0.0.2a2736756P0dh1",target:"_blank",rel:"noopener noreferrer"}},[t._v("按量付费模式"),a("OutboundLink")],1),t._v("申请资源。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alicloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("save_money")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),a("p",[t._v("两种付费模式的费用预估如下（不包含流量费）：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("按量付费：88.32￥/天")])]),t._v(" "),a("li",[a("p",[t._v("抢占式实例：24￥/天")])])]),t._v(" "),a("blockquote",[a("p",[t._v("实际产生的费用会受到市场价格波动的影响，以上预估值仅供参考")])])])}),[],!1,null,null,null);a.default=r.exports}}]);