(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{411:function(e,t,s){"use strict";s.r(t);var a=s(14),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"register-runtime-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-runtime-cluster"}},[e._v("#")]),e._v(" Register Runtime Cluster")]),e._v(" "),t("p",[e._v("Before starting this section, please ensure that you have read the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/main-process.html"}},[e._v("Main Process")]),e._v(" section to understand the main process and related terminology for deploying applications in Nautes.")],1),e._v(" "),t("p",[e._v("Runtime clusters are used to host the runtime environment for applications. The supported cluster types include physical clusters and virtual clusters.")]),e._v(" "),t("p",[e._v("Support both "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#register-runtime-cluster"}},[e._v("Command Line")]),e._v(" and API for registering runtime clusters.")],1),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("h3",{attrs:{id:"create-access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-access-token"}},[e._v("#")]),e._v(" Create Access Token")]),e._v(" "),t("p",[e._v("You need to create an access token as a request header for requesting APIs. For more information, refer to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#register-a-gitlab-account"}},[e._v("Register a GitLab Account")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"import-certificates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-certificates"}},[e._v("#")]),e._v(" Import Certificates")]),e._v(" "),t("p",[e._v("If you want to access Nautes API Server using the HTTPS protocol, you need to "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deploy-an-application.html#import-certificates"}},[e._v("import certificates")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"register-physical-cluster-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-physical-cluster-api"}},[e._v("#")]),e._v(" Register Physical Cluster（API）")]),e._v(" "),t("h3",{attrs:{id:"compose-physical-cluster-registration-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-physical-cluster-registration-request"}},[e._v("#")]),e._v(" Compose Physical Cluster Registration Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Cluster_SaveCluster")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $api-server-address with the access address of the Nautes API Server")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $gitlab-access-token with the GitLab access token")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $cluster_name with the cluster name")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/clusters/$cluster_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n      # Cluster API SERVER URL. Replace the variable with the address of the physical cluster.\n      "api_server": $api_server,\n      # Cluster kind. Currently only supports Kubernetes.\n      "cluster_kind": "kubernetes",\n      # Cluster type: virtual or physical\n      "cluster_type": $cluster_type,\n      # Cluster usage: host or worker\n      "usage": $usage,\n      # ArgoCD domain. Replace $cluster_name with the cluster name, $cluster_ip with the cluster IP.\n      "argocd_host": "argocd.$cluster_name.$cluster_ip.nip.io",\n      # Traefik configuration\n      "traefik": {\n        "http_node_port": "30080",\n        "https_node_port": "30443"\n      },\n      # Content of the kubeconfig file of the cluster. Replace the variable with the kubeconfig of the physical cluster.\n      "kubeconfig": $kubeconfig\n    }\'')]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-physical'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n      "api_server": "https://8.217.50.114:6443",\n      "cluster_kind": "kubernetes",\n      "cluster_type": "physical",\n      "usage": "worker",\n      "argocd_host": "argocd.host-worker-aliyun-0412.8.217.50.114.nip.io",\n      "traefik": {\n        "http_node_port": "30080",\n        "https_node_port": "30443"\n      },\n      "kubeconfig": |\n         apiVersion: v1\n         clusters:\n         - cluster:\n             certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSMzRuTjVPWWhxb3MrekV1YXZsVDRleXE4ZFRVZ2pxcUdoN2Z6NkpMZEMKem1FN0cwZjE5K0hLcEw5cU1tSXVBaStRelBZZFNzWGJpR20rNjR0R0NuVkRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVUp0WVUxbkNvTXNNYWpVeUJGN3RVCndjZWJ6TW93Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQU9hR2pWNlRpK2o1Yy9kWlV5a1pERml0OU9DdkFmZjEKWjJSVUJ6TkJTOUlhQWlFQTB1bzM2YUVGRnkvdWQ0eHREZnNkWmhYWmZOaXQ3c2N4SXREa1k5STlQUkU9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n             server: https://127.0.0.1:6443\n           name: default\n         contexts:\n         - context:\n             cluster: default\n             user: default\n           name: default\n         current-context: default\n         kind: Config\n         preferences: {}\n         users:\n         - name: default\n           user:\n             client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJSjYyRGdFT3JiM3d3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamd4TWprd01EazFNQjRYRFRJek1EUXhNakE1TURFek5Wb1hEVEkwTURReApNVEE1TURFek5Wb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJJNnlLRlBKNENmS25BUFkKQ0Q5ZFVtZlZ5ekR2aFpEQUdhU1lYODVoWWRYZ0NKdmxHRmlad3dGN2ExKzEzdlQ5ZjE2MUJwSGhKTm9mYi9oeAozUVo1MWs2alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCVHhiVTM2eC9iMnl3WU14SmpuUjF5L2w2cHZCREFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlFQS9rZ3FCOGJLZnNLSGNmaDBUSFQ2bTZNLzdrMzlNWmFGYlVCaE9GTzVDSW9DSURiRWNaeUxkc055R3lVVQpSTDl5K0hHcVJ3b1FTWGhOa1NrQjhlbkpsQTEzCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTbnNEVkxLTU4xTWl4cHAwclRMRTBOVGdjamFRWFhmUmZmOThiOTRqd1gKYjRPNVh1aCtFclZwZ3BjamxRYjVZKzM0T1NwaG03TnVXWlA2OHBkUWhMTW5vMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVThXMU4rc2YyOXNzR0RNU1k1MGRjCnY1ZXFid1F3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUtXSStXQ2wwRFlJME5oVDBzbDkwSVRHRW05V2EyaE0KQXV4UXkrcDVUcGpzQWlBdWxFd0NkK2lWYXNVY2VHa2I4WU81dlduQitaTVJmSU1rYWRHSGhpSmlrdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n             client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU5ZZFVkaER2SlFXcVNSRzR0d3gzQ2I4amhnck1HZlVOMG1uajV5dTRWZ1RvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFanJJb1U4bmdKOHFjQTlnSVAxMVNaOVhMTU8rRmtNQVpwSmhmem1GaDFlQUltK1VZV0puRApBWHRyWDdYZTlQMS9YclVHa2VFazJoOXYrSEhkQm5uV1RnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=\n    }\'')]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-physical-cluster-registration-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-physical-cluster-registration-request"}},[e._v("#")]),e._v(" Execute Physical Cluster Registration Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to register a physical cluster.")]),e._v(" "),t("p",[e._v("After the request is successful, the physical cluster's resource file will be written to the tenant configuration repository, and the physical cluster will be registered as a deployment runtime cluster in the tenant management cluster based on the resource file. Upon successful registration, components such as ArgoCD, ArgoRollouts, ExternalSecret, HNC, and Vault-agent will be installed in the physical cluster.")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the tenant configuration repository and has write permission to the "),t("code",[e._v("main")]),e._v(" branch, you can register runtime clusters.")])]),e._v(" "),t("h2",{attrs:{id:"register-virtual-cluster-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-virtual-cluster-api"}},[e._v("#")]),e._v(" Register Virtual Cluster（API）")]),e._v(" "),t("p",[e._v("When registering a virtual cluster as a deployment runtime cluster, you need to first register the physical cluster as the host cluster, and then register the virtual cluster to the host cluster.")]),e._v(" "),t("h3",{attrs:{id:"compose-host-cluster-registration-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-host-cluster-registration-request"}},[e._v("#")]),e._v(" Compose Host Cluster Registration Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Cluster_SaveCluster")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $api-server-address with the access address of the Nautes API Server")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $gitlab-access-token with the GitLab access token")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $cluster_name with the cluster name")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/clusters/$cluster_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n      # Cluster API SERVER URL. Replace the variable with the address of the host cluster.\n      "api_server": $api_server,\n      # Cluster kind. Currently only supports Kubernetes.\n      "cluster_kind": "kubernetes",\n      # Cluster type: virtual or physical\n      "cluster_type": $cluster_type,\n      # Cluster usage: host or worker\n      "usage": $usage,\n      # Traefik configuration\n      "traefik": {\n        "http_node_port": "30080",\n        "https_node_port": "30443"\n      },\n      # Content of the kubeconfig file of the cluster. Replace the variable with the kubeconfig of the host cluster.\n      "kubeconfig": $kubeconfig\n    }\'')]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n  "api_server": "https://8.217.50.114:6443",\n  "cluster_kind": "kubernetes",\n  "cluster_type": "physical",\n  "usage": "host",\n  "traefik": {\n    "http_node_port": "30080",\n    "https_node_port": "30443"\n  },\n  "kubeconfig": | \n    apiVersion: v1\n    clusters:\n    - cluster:\n        certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSMzRuTjVPWWhxb3MrekV1YXZsVDRleXE4ZFRVZ2pxcUdoN2Z6NkpMZEMKem1FN0cwZjE5K0hLcEw5cU1tSXVBaStRelBZZFNzWGJpR20rNjR0R0NuVkRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVUp0WVUxbkNvTXNNYWpVeUJGN3RVCndjZWJ6TW93Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQU9hR2pWNlRpK2o1Yy9kWlV5a1pERml0OU9DdkFmZjEKWjJSVUJ6TkJTOUlhQWlFQTB1bzM2YUVGRnkvdWQ0eHREZnNkWmhYWmZOaXQ3c2N4SXREa1k5STlQUkU9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n        server: https://127.0.0.1:6443\n      name: default\n    contexts:\n    - context:\n        cluster: default\n        user: default\n      name: default\n    current-context: default\n    kind: Config\n    preferences: {}\n    users:\n    - name: default\n      user:\n        client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJSjYyRGdFT3JiM3d3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamd4TWprd01EazFNQjRYRFRJek1EUXhNakE1TURFek5Wb1hEVEkwTURReApNVEE1TURFek5Wb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJJNnlLRlBKNENmS25BUFkKQ0Q5ZFVtZlZ5ekR2aFpEQUdhU1lYODVoWWRYZ0NKdmxHRmlad3dGN2ExKzEzdlQ5ZjE2MUJwSGhKTm9mYi9oeAozUVo1MWs2alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCVHhiVTM2eC9iMnl3WU14SmpuUjF5L2w2cHZCREFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlFQS9rZ3FCOGJLZnNLSGNmaDBUSFQ2bTZNLzdrMzlNWmFGYlVCaE9GTzVDSW9DSURiRWNaeUxkc055R3lVVQpSTDl5K0hHcVJ3b1FTWGhOa1NrQjhlbkpsQTEzCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3SGhjTk1qTXdOREV5TURrd01UTTFXaGNOTXpNd05EQTVNRGt3TVRNMQpXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RFeU9UQXdPVFV3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTbnNEVkxLTU4xTWl4cHAwclRMRTBOVGdjamFRWFhmUmZmOThiOTRqd1gKYjRPNVh1aCtFclZwZ3BjamxRYjVZKzM0T1NwaG03TnVXWlA2OHBkUWhMTW5vMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVThXMU4rc2YyOXNzR0RNU1k1MGRjCnY1ZXFid1F3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUtXSStXQ2wwRFlJME5oVDBzbDkwSVRHRW05V2EyaE0KQXV4UXkrcDVUcGpzQWlBdWxFd0NkK2lWYXNVY2VHa2I4WU81dlduQitaTVJmSU1rYWRHSGhpSmlrdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n        client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU5ZZFVkaER2SlFXcVNSRzR0d3gzQ2I4amhnck1HZlVOMG1uajV5dTRWZ1RvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFanJJb1U4bmdKOHFjQTlnSVAxMVNaOVhMTU8rRmtNQVpwSmhmem1GaDFlQUltK1VZV0puRApBWHRyWDdYZTlQMS9YclVHa2VFazJoOXYrSEhkQm5uV1RnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=\n}\'')]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-host-cluster-registration-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-host-cluster-registration-request"}},[e._v("#")]),e._v(" Execute Host Cluster Registration Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to register a host cluster.")]),e._v(" "),t("p",[e._v("After the request is successful, the host cluster's resource file will be written to the tenant configuration repository, and the host cluster will be registered in the tenant management cluster based on the resource file. Upon successful registration, components such as Traefik will be installed in the host cluster.")]),e._v(" "),t("h3",{attrs:{id:"compose-virtual-cluster-registration-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-virtual-cluster-registration-request"}},[e._v("#")]),e._v(" Compose Virtual Cluster Registration Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Cluster_SaveCluster")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $api-server-address with the access address of the Nautes API Server")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $gitlab-access-token with the GitLab access token")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the variable $cluster_name with the cluster name")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/clusters/$cluster_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{\n      # Cluster API SERVER URL. Replace the parameter with the format '")]),e._v("https://"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$hostcluster")]),e._v("-ip:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$api")]),e._v("-server-port"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\', where $hostcluster-ip refers to the IP of the host cluster and $api-server-port refers to the API SERVER port of the virtual cluster.\n      "api_server": $api_server,\n      # Cluster kind: Currently only supports Kubernetes\n      "cluster_kind": "kubernetes",\n      # Cluster type: virtual or physical\n      "cluster_type": $cluster_type,\n      # Cluster usage: host or worker\n      "usage": $usage,\n      # Host cluster: the property is only available for virtual type clusters. Replace the parameter with the name of the host cluster.\n      "host_cluster": $host_cluster,\n      # ArgoCD domain. Replace $cluster_name with the cluster name, $cluster_ip with the host cluster IP.\n      "argocd_host": "argocd.$cluster_name.$cluster_ip.nip.io",\n      # Virtual cluster configuration: the property is only available for virtual type clusters.\n      "vcluster": {\n        # API SERVER port \n        "https_node_port": $api_server_port,\n      }\n    }\'')]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-virtual'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n  "api_server": "https://8.217.50.114:31456",\n  "cluster_kind": "kubernetes",\n  "cluster_type": "virtual",\n  "usage": "worker",\n  "host_cluster": "cluster-host",\n  "argocd_host": "argocd.cluster-virtual.8.217.50.114.nip.io",\n  "vcluster": {\n    "https_node_port": "31456"\n  }\n}\'')]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-virtual-cluster-registration-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-virtual-cluster-registration-request"}},[e._v("#")]),e._v(" Execute Virtual Cluster Registration Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request to register a virtual cluster.")]),e._v(" "),t("p",[e._v("After the request is successful, the virtual cluster's resource file will be written to the tenant configuration repository, and the virtual cluster will be registered as a deployment runtime cluster in the tenant management cluster based on the resource file. Upon successful registration, components such as ArgoCD, ArgoRollouts, ExternalSecret, HNC, and Vault-agent will be installed in the virtual cluster.")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the tenant configuration repository and has write permission to the "),t("code",[e._v("main")]),e._v(" branch, you can register runtime clusters.")])]),e._v(" "),t("h2",{attrs:{id:"delete-physical-cluster-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-physical-cluster-api"}},[e._v("#")]),e._v(" Delete Physical Cluster（API）")]),e._v(" "),t("blockquote",[t("p",[e._v("Please ensure that a physical cluster has been successfully registered.")]),e._v(" "),t("p",[e._v("Before deleting the cluster, please ensure that the product configuration manifest has been successfully deleted. For more information, refer to the "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/clean-environment.html#delete-runtime-environment"}},[e._v("Delete Product Configuration Manifest (Command-Line)")]),e._v(" section or the deletion sections (API) in "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/deployment-runtime.html"}},[e._v("Maintain Deployment Runtime")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/environment.html"}},[e._v("Maintain Environment")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/code-repo.html"}},[e._v("Maintain Code Repository")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/project.html"}},[e._v("Maintain Project")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/guide/user-guide/product.html"}},[e._v("Maintain Product")]),e._v(".")],1)]),e._v(" "),t("h3",{attrs:{id:"compose-physical-cluster-deletion-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-physical-cluster-deletion-request"}},[e._v("#")]),e._v(" Compose Physical Cluster Deletion Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Cluster_DeleteCluster")]),e._v(" and add the access token as a request header.")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://$api-server-address/api/v1/clusters/$cluster_name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer $gitlab-access-token'")]),e._v("\n")])])]),t("p",[e._v("The request example after replacing the variables is shown below:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-physical'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-physical-cluster-deletion-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-physical-cluster-deletion-request"}},[e._v("#")]),e._v(" Execute Physical Cluster Deletion Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request.")]),e._v(" "),t("p",[e._v("After the request is successful, the cluster resource file in the tenant configuration repository will be deleted, and the physical cluster will be cleaned up.")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the tenant configuration repository and has write permission to the "),t("code",[e._v("main")]),e._v(" branch, you can delete runtime clusters.")])]),e._v(" "),t("h2",{attrs:{id:"delete-virtual-cluster-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-virtual-cluster-api"}},[e._v("#")]),e._v(" Delete Virtual Cluster（API）")]),e._v(" "),t("blockquote",[t("p",[e._v("Please ensure that a virtual cluster has been successfully registered.")]),e._v(" "),t("p",[e._v("Before deleting the cluster, please ensure that the product configuration manifest has been successfully deleted.")])]),e._v(" "),t("h3",{attrs:{id:"compose-virtual-cluster-deletion-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-virtual-cluster-deletion-request"}},[e._v("#")]),e._v(" Compose Virtual Cluster Deletion Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Cluster_DeleteCluster")]),e._v(" and add the access token as a request header. The API request example is similar to "),t("a",{attrs:{href:"#delete-physical-clusterapi"}},[e._v("Delete Physical Cluster")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-virtual'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-virtual-cluster-deletion-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-virtual-cluster-deletion-request"}},[e._v("#")]),e._v(" Execute Virtual Cluster Deletion Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request.")]),e._v(" "),t("p",[e._v("After the request is successful, the cluster resource file in the tenant configuration repository will be deleted, and the virtual cluster will be destroyed.")]),e._v(" "),t("h3",{attrs:{id:"compose-host-cluster-deletion-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-host-cluster-deletion-request"}},[e._v("#")]),e._v(" Compose Host Cluster Deletion Request")]),e._v(" "),t("p",[e._v("Compose an API request example by API definition "),t("code",[e._v("Cluster_DeleteCluster")]),e._v(" and add the access token as a request header. The API request example is similar to "),t("a",{attrs:{href:"#delete-physical-clusterapi"}},[e._v("Delete Physical Cluster")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'DELETE'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accept: application/json'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'")]),e._v("\n")])])]),t("h3",{attrs:{id:"execute-host-cluster-deletion-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-host-cluster-deletion-request"}},[e._v("#")]),e._v(" Execute Host Cluster Deletion Request")]),e._v(" "),t("p",[e._v("Use the curl command or other tools to execute the API request.")]),e._v(" "),t("p",[e._v("After the request is successful, the cluster resource file in the tenant configuration repository will be deleted, and the host cluster will be cleaned up.")]),e._v(" "),t("blockquote",[t("p",[e._v("If your account is a member of the tenant configuration repository and has write permission to the "),t("code",[e._v("main")]),e._v(" branch, you can delete runtime clusters.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);