(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{412:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"注册运行时集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册运行时集群"}},[t._v("#")]),t._v(" 注册运行时集群")]),t._v(" "),a("p",[t._v("在开始本节之前，请确保您已阅读 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html"}},[t._v("主体流程")]),t._v(" 章节，了解部署应用的主体流程和相关术语。")],1),t._v(" "),a("p",[t._v("运行时集群用于承载应用的运行时环境。集群形态支持物理集群和虚拟集群。")]),t._v(" "),a("p",[t._v("支持通过 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册运行时集群"}},[t._v("命令行")]),t._v(" 和 API 两种方式注册运行时集群。")],1),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("h3",{attrs:{id:"创建-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-access-token"}},[t._v("#")]),t._v(" 创建 access token")]),t._v(" "),a("p",[t._v("您需要创建一个 access token，作为请求 API 的请求头。详情参考"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册-gitlab-账号"}},[t._v("注册 GitLab 账号")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"导入证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入证书"}},[t._v("#")]),t._v(" 导入证书")]),t._v(" "),a("p",[t._v("如果您想使用 https 协议访问 Nautes API Server，请"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#导入证书"}},[t._v("导入证书")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"注册物理集群-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册物理集群-api"}},[t._v("#")]),t._v(" 注册物理集群（API）")]),t._v(" "),a("ol",[a("li",[t._v("通过接口定义 "),a("code",[t._v("Cluster_SaveCluster")]),t._v("  生成 API 请求示例，并添加 access token 作为请求头。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $api-server-address 为 Nautes API Server 的访问地址")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换变量 $gitlab-access-token 为 GitLab 访问令牌")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $cluster_name，集群名称    ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/clusters/$cluster_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n      # 集群的 API SERVER URL\n      "api_server": $api_server,\n      # 集群种类：目前只支持 kubernetes\n      "cluster_kind": "kubernetes",\n      # 集群类型：virtual或physical\n      "cluster_type": $cluster_type,\n      # 集群用途：host或worker\n      "usage": $usage,\n      # argocd 域名：$cluster_name 替换为集群名称,$cluster_ip 替换为集群IP\n      "argocd_host": "argocd.$cluster_name.$cluster_ip.nip.io",\n      # traefik 配置\n      "traefik": {\n        "http_node_port": "30080",\n        "https_node_port": "30443"\n      },\n      # 集群的 kubeconfig 文件内容：$kubeconfig 替换为物理集群的 kubeconfig\n      "kubeconfig": $kubeconfig\n    }\'')]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-physical'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n      "api_server": "https://8.217.50.114:6443",\n      "cluster_kind": "kubernetes",\n      "cluster_type": "physical",\n      "usage": "worker",\n      "argocd_host": "argocd.host-worker-aliyun-0412.8.217.50.114.nip.io",\n      "traefik": {\n        "http_node_port": "30080",\n        "https_node_port": "30443"\n      },\n      "kubeconfig": |\n         apiVersion: v1\n         clusters:\n         - cluster:\n             certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSMzRuTjVPWWhxb3MrekV1YXZsVDRleXE4ZFRVZ2pxcUdoN2Z6NkpMZEMKem1FN0cwZjE5K0hLcEw5cU1tSXVBaStRelBZZFNzWGJpR20rNjR0R0NuVkRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVUp0WVUxbkNvTXNNYWpVeUJGN3RVCndjZWJ6TW93Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQU9hR2pWNlRpK2o1Yy9kWlV5a1pERml0OU9DdkFmZjEKWjJSVUJ6TkJTOUlhQWlFQTB1bzM2YUVGRnkvdWQ0eHREZnNkWmhYWmZOaXQ3c2N4SXREa1k5STlQUkU9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n             server: https://127.0.0.1:6443\n           name: default\n         contexts:\n         - context:\n             cluster: default\n             user: default\n           name: default\n         current-context: default\n         kind: Config\n         preferences: {}\n         users:\n         - name: default\n           user:\n             client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJSjYyRGdFT3JiM3d3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamd4TWprd01EazFNQjRYRFRJek1EUXhNakE1TURFek5Wb1hEVEkwTURReApNVEE1TURFek5Wb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJJNnlLRlBKNENmS25BUFkKQ0Q5ZFVtZlZ5ekR2aFpEQUdhU1lYODVoWWRYZ0NKdmxHRmlad3dGN2ExKzEzdlQ5ZjE2MUJwSGhKTm9mYi9oeAozUVo1MWs2alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCVHhiVTM2eC9iMnl3WU14SmpuUjF5L2w2cHZCREFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlFQS9rZ3FCOGJLZnNLSGNmaDBUSFQ2bTZNLzdrMzlNWmFGYlVCaE9GTzVDSW9DSURiRWNaeUxkc055R3lVVQpSTDl5K0hHcVJ3b1FTWGhOa1NrQjhlbkpsQTEzCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTbnNEVkxLTU4xTWl4cHAwclRMRTBOVGdjamFRWFhmUmZmOThiOTRqd1gKYjRPNVh1aCtFclZwZ3BjamxRYjVZKzM0T1NwaG03TnVXWlA2OHBkUWhMTW5vMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVThXMU4rc2YyOXNzR0RNU1k1MGRjCnY1ZXFid1F3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUtXSStXQ2wwRFlJME5oVDBzbDkwSVRHRW05V2EyaE0KQXV4UXkrcDVUcGpzQWlBdWxFd0NkK2lWYXNVY2VHa2I4WU81dlduQitaTVJmSU1rYWRHSGhpSmlrdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n             client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU5ZZFVkaER2SlFXcVNSRzR0d3gzQ2I4amhnck1HZlVOMG1uajV5dTRWZ1RvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFanJJb1U4bmdKOHFjQTlnSVAxMVNaOVhMTU8rRmtNQVpwSmhmem1GaDFlQUltK1VZV0puRApBWHRyWDdYZTlQMS9YclVHa2VFazJoOXYrSEhkQm5uV1RnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=\n    }\'')]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用 curl 命令或者其他工具执行 API 请求，以注册物理集群。"),a("br"),t._v("\n请求成功后，将向租户管理集群注册物理集群作为部署运行时集群，并在物理集群中安装 ArgoCD、ArgoRollouts、ExternalSecret、HNC、Vault-agent 等组件。物理集群的资源文件示例参见 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册物理集群"}},[t._v("注册物理集群")]),t._v("。")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("只有当您的账号是租户配置库的成员，并且有 main 分支的写入权限，才可以注册运行时集群。")])]),t._v(" "),a("h2",{attrs:{id:"注册虚拟集群-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册虚拟集群-api"}},[t._v("#")]),t._v(" 注册虚拟集群（API）")]),t._v(" "),a("ol",[a("li",[t._v("通过接口定义 "),a("code",[t._v("Cluster_SaveCluster")]),t._v("  生成 API 请求示例，并添加 access token 作为请求头。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/clusters/$cluster_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  # 集群的 API SERVER URL\n  "api_server": $api_server,\n  # 集群种类：目前只支持 kubernetes\n  "cluster_kind": "kubernetes",\n  # 集群类型：virtual或physical\n  "cluster_type": $cluster_type,\n  # 集群用途：host或worker\n  "usage": $usage,\n  # traefik 配置\n  "traefik": {\n    "http_node_port": "30080",\n    "https_node_port": "30443"\n  },\n  # 集群的 kubeconfig 文件内容：$kubeconfig 替换为宿主集群的 kubeconfig \n  "kubeconfig": $kubeconfig\n}\'')]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "api_server": "https://8.217.50.114:6443",\n  "cluster_kind": "kubernetes",\n  "cluster_type": "physical",\n  "usage": "host",\n  "traefik": {\n    "http_node_port": "30080",\n    "https_node_port": "30443"\n  },\n  "kubeconfig": | \n    apiVersion: v1\n    clusters:\n    - cluster:\n        certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSMzRuTjVPWWhxb3MrekV1YXZsVDRleXE4ZFRVZ2pxcUdoN2Z6NkpMZEMKem1FN0cwZjE5K0hLcEw5cU1tSXVBaStRelBZZFNzWGJpR20rNjR0R0NuVkRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVUp0WVUxbkNvTXNNYWpVeUJGN3RVCndjZWJ6TW93Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQU9hR2pWNlRpK2o1Yy9kWlV5a1pERml0OU9DdkFmZjEKWjJSVUJ6TkJTOUlhQWlFQTB1bzM2YUVGRnkvdWQ0eHREZnNkWmhYWmZOaXQ3c2N4SXREa1k5STlQUkU9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n        server: https://127.0.0.1:6443\n      name: default\n    contexts:\n    - context:\n        cluster: default\n        user: default\n      name: default\n    current-context: default\n    kind: Config\n    preferences: {}\n    users:\n    - name: default\n      user:\n        client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJSjYyRGdFT3JiM3d3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamd4TWprd01EazFNQjRYRFRJek1EUXhNakE1TURFek5Wb1hEVEkwTURReApNVEE1TURFek5Wb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJJNnlLRlBKNENmS25BUFkKQ0Q5ZFVtZlZ5ekR2aFpEQUdhU1lYODVoWWRYZ0NKdmxHRmlad3dGN2ExKzEzdlQ5ZjE2MUJwSGhKTm9mYi9oeAozUVo1MWs2alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCVHhiVTM2eC9iMnl3WU14SmpuUjF5L2w2cHZCREFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlFQS9rZ3FCOGJLZnNLSGNmaDBUSFQ2bTZNLzdrMzlNWmFGYlVCaE9GTzVDSW9DSURiRWNaeUxkc055R3lVVQpSTDl5K0hHcVJ3b1FTWGhOa1NrQjhlbkpsQTEzCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTbnNEVkxLTU4xTWl4cHAwclRMRTBOVGdjamFRWFhmUmZmOThiOTRqd1gKYjRPNVh1aCtFclZwZ3BjamxRYjVZKzM0T1NwaG03TnVXWlA2OHBkUWhMTW5vMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVThXMU4rc2YyOXNzR0RNU1k1MGRjCnY1ZXFid1F3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUtXSStXQ2wwRFlJME5oVDBzbDkwSVRHRW05V2EyaE0KQXV4UXkrcDVUcGpzQWlBdWxFd0NkK2lWYXNVY2VHa2I4WU81dlduQitaTVJmSU1rYWRHSGhpSmlrdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n        client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU5ZZFVkaER2SlFXcVNSRzR0d3gzQ2I4amhnck1HZlVOMG1uajV5dTRWZ1RvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFanJJb1U4bmdKOHFjQTlnSVAxMVNaOVhMTU8rRmtNQVpwSmhmem1GaDFlQUltK1VZV0puRApBWHRyWDdYZTlQMS9YclVHa2VFazJoOXYrSEhkQm5uV1RnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=\n}\'')]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("使用 curl 命令或者其他工具执行 API 请求，以注册宿主集群。"),a("br"),t._v("\n请求成功后，将向租户管理集群注册宿主集群，并向宿主集群中安装 traefik 等组件。宿主集群的资源文件示例参见 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册虚拟集群"}},[t._v("注册虚拟集群")]),t._v(" 的步骤2。")],1)]),t._v(" "),a("li",[a("p",[t._v("通过接口定义 "),a("code",[t._v("Cluster_SaveCluster")]),t._v("  生成 API 请求示例，并添加 access token 作为请求头。")])])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/clusters/$cluster_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  # 集群的 API SERVER URL\n  "api_server": $api_server,\n  # 集群种类：目前只支持 kubernetes\n  "cluster_kind": "kubernetes",\n  # 集群类型：virtual或physical\n  "cluster_type": $cluster_type,\n  # 集群用途：host或worker\n  "usage": $usage,\n  # 所属宿主集群：virtual类型集群才有此属性，替换 $host_cluster 为宿主集群的名称\n  "host_cluster": $host_cluster,\n  # argocd 域名：替换 $cluster_name 为集群名称,替换 $cluster_ip 为集群IP\n  "argocd_host": "argocd.$cluster_name.$cluster_ip.nip.io",\n  # 虚拟集群配置：virtual类型集群才有此属性\n  "vcluster": {\n     # API SERVER 端口号\n    "https_node_port": $api_server_port,\n  }\n}\'')]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-virtual'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "api_server": "https://8.217.50.114:31456",\n  "cluster_kind": "kubernetes",\n  "cluster_type": "virtual",\n  "usage": "worker",\n  "host_cluster": "cluster-host",\n  "argocd_host": "argocd.cluster-virtual.8.217.50.114.nip.io",\n  "vcluster": {\n    "https_node_port": "31456"\n  }\n}\'')]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("使用 curl 命令或者其他工具执行 API 请求，以注册虚拟集群。"),a("br"),t._v("\n请求成功后，将向租户管理集群注册虚拟集群作为部署运行时集群，并在虚拟集群中安装 ArgoCD、ArgoRollouts、ExternalSecret、HNC、Vault-agent 等组件。虚拟集群的资源文件示例参见 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#注册虚拟集群"}},[t._v("注册虚拟集群")]),t._v(" 的步骤4 。")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("只有当您的账号是租户配置库的成员，并且有 main 分支的写入权限，才可以注册运行时集群。")])]),t._v(" "),a("h2",{attrs:{id:"删除物理集群-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除物理集群-api"}},[t._v("#")]),t._v(" 删除物理集群（API）")]),t._v(" "),a("blockquote",[a("p",[t._v("请确保物理集群注册成功。")]),t._v(" "),a("p",[t._v("在删除集群之前请先删除产品配置清单。详情参考 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/clean-environment.html#删除运行环境"}},[t._v("删除产品配置清单（命令行）")]),t._v(" ，或者 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/deployment-runtime.html"}},[t._v("维护部署运行时")]),t._v(" 、"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/environment.html"}},[t._v("维护环境")]),t._v("、 "),a("RouterLink",{attrs:{to:"/en/guide/user-guide/code-repo.html"}},[t._v("维护代码库")]),t._v("、"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/project.html"}},[t._v("维护项目")]),t._v("、"),a("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html"}},[t._v("维护产品 ")]),t._v("中的删除章节（API）。")],1)]),t._v(" "),a("ol",[a("li",[t._v("通过接口定义 "),a("code",[t._v("Cluster_DeleteCluster")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://$api-server-address/api/v1/clusters/$cluster_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer $gitlab-access-token'")]),t._v("\n")])])]),a("p",[t._v("替换变量后的请求示例如下：")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-physical'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用 curl 命令或者其他工具执行 API 请求。"),a("br"),t._v("\n请求成功后，将删除物理集群，以及在租户配置库的集群资源文件。")])]),t._v(" "),a("blockquote",[a("p",[t._v("只有当您的账号是租户配置库的成员，并且有 main 分支的写入权限，才可以删除运行时集群。")])]),t._v(" "),a("h2",{attrs:{id:"删除虚拟集群-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除虚拟集群-api"}},[t._v("#")]),t._v(" 删除虚拟集群（API）")]),t._v(" "),a("blockquote",[a("p",[t._v("请确保虚拟集群注册成功。")]),t._v(" "),a("p",[t._v("在删除集群之前请先删除产品配置清单。")])]),t._v(" "),a("ol",[a("li",[t._v("通过接口定义 "),a("code",[t._v("Cluster_DeleteCluster")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。API请求的格式与"),a("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4api"}},[t._v("删除物理集群")]),t._v("相同。\n请求示例如下：")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-virtual'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("使用 curl 命令或者其他工具执行 API 请求。请求成功后，将删除虚拟集群。")])]),t._v(" "),a("li",[a("p",[t._v("通过接口定义 "),a("code",[t._v("Cluster_DeleteCluster")]),t._v(" 生成 API 请求示例，并添加 access token 作为请求头。API请求的格式与"),a("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E7%89%A9%E7%90%86%E9%9B%86%E7%BE%A4api"}},[t._v("删除物理集群")]),t._v("相同。\n请求示例如下：")])])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("使用 curl 命令或者其他工具执行 API 请求。请求成功后，将删除宿主集群。")])]),t._v(" "),a("blockquote",[a("p",[t._v("只有当您的账号是租户配置库的成员，并且有 main 分支的写入权限，才可以删除运行时集群。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);