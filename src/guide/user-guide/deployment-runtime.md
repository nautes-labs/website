---
footerLink: /guide/user-guide/deployment-runtime
title: 维护部署运行时
---
# 维护部署运行时

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解部署应用的主体流程和相关术语。

部署运行时定义了用于部署项目的配置声明，如：部署清单的存储位置、部署到的目标环境等。

支持通过 [命令行](run-a-pipeline.md#初始化产品) 和 API 两种方式维护部署运行时。

## 前提条件

### 创建 access token

您需要创建一个 access token，作为请求 API 的请求头。详情参考 [创建 access token](product.md#创建-access-token)。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，请[导入证书](run-a-pipeline.md#导入证书)。

### 创建产品

部署运行时归属于产品，您需要创建至少一个[产品](product.md#创建产品api)。

### 创建代码库

部署运行时需要监听存储 Kubernetes 资源清单的代码库，您需要创建至少一个属于指定产品的[代码库](code-repo.md#创建和更新代码库api)。

### 创建环境

部署运行时需要向关联运行时集群的环境下发部署，您需要创建至少一个属于指定产品的[环境](environment.md#创建和更新环境api)。

## 创建和更新部署运行时（API）

### 生成创建/更新部署运行时的 API 请求

通过接口定义 `Deploymentruntime_SaveDeploymentRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab access token
    # 替换变量 $product-name 为部署运行时所属产品的名称
    # 替换变量 $deploymentruntime-name 为部署运行时的名称
    curl -X 'POST' \
    'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' \
    -d '{
        # 部署运行时关联的项目
        "projects_ref": [
            $project
        ],
        "manifest_source": {
            # 部署运行时监听的代码库名称
            "code_repo": $coderepo-name,
            # 部署运行时监听的代码库版本
            "target_revision": $coderepo-target-revision,
            # 部署运行时监听的代码库路径
            "path": $coderepo-path
        },
        # 部署运行时下发部署的目标环境
        "destination": $destination
    }'    
```

替换变量后的请求示例如下：

```Shell
    curl -X 'POST' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-dev' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
    -d '{
        "projects_ref": [
            "api-server"
        ],
        "manifest_source": {
            "code_repo": "api-server",
            "target_revision": "HEAD",
            "path": "manifests/development"
        },
        "destination": "env-dev"
    }' 
```

### 执行创建/更新部署运行时的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以新增部署运行时。

请求成功后，将在指定产品的 `default.project` 代码库中生成部署运行时的资源文件。部署运行时的资源文件示例如下：

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: DeploymentRuntime
    metadata:
        name: dr-dev
    spec:
        destination: env-dev
        manifestSource:
            codeRepo: repo-xxxx
            path: manifests/development
            targetRevision: HEAD
        product: product-xxxx
        projectsRef:
            - api-server
```

> 当部署运行时已经部署到某个运行时集群，暂不支持变更部署运行时的 `destination` 。
>
> 请求 API 更新部署运行时也将更新部署运行时的资源文件。
>
> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的 main 分支的写入权限，才可以创建或者更新部署运行时。

## 删除部署运行时（API）

### 生成删除部署运行时的 API 请求

通过接口定义 `Deploymentruntime_DeleteDeploymentRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-dev' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除部署运行时的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以删除部署运行时。

请求成功后，将删除在指定产品的 `default.project` 代码库中的部署运行时的资源文件，并且销毁运行时集群中的部署运行时。

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的 main 分支的写入权限，才可以删除部署运行时。

## 查询部署运行时列表（API）

### 生成查询部署运行时列表的 API 请求

通过接口定义 `Deploymentruntime_ListDeploymentRuntimes` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
curl -X 'GET' \
  'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
curl -X 'GET' \
  'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查询部署运行时列表的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询部署运行时列表。部署运行时列表的返回值示例如下：

```yaml
{
    "items": [
        {
            "product": "nautes-labs",
            "name": "dr-dev",
            "projects_ref": ["api-server"],
            "manifest_source": {
                "code_repo": "api-server",
                "target_revision": "HEAD",
                "path": "manifests/development"
            },
            "destination": "env-demo"
        }
    ]
}
```

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的读取权限，才可以查询部署运行时列表。

## 查看部署运行时详情（API）

### 生成查看部署运行时详情的 API 请求

通过接口定义 `Deploymentruntime_GetDeploymentRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
curl -X 'GET' \
  'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
curl -X 'GET' \
  'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-dev' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查看部署运行时详情的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查看部署运行时详情。部署运行时详情的返回值示例与[查询部署运行时列表](#执行查询部署运行时列表的-api-请求)类似。

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的读取权限，才可以查看部署运行时详情。

## 强制创建/更新/删除部署运行时（API）

适用于需要跳过 API 校验的特殊场景，详情参见[初始化产品](main-process.md#初始化产品)。

以创建部署运行时为例，将 `destination` 属性设置为不合规的 environment，启用 `insecure_skip_check` 查询参数并设置其值为 `true`，可以强制提交部署运行时的资源文件。请求示例如下：

```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-demo?insecure_skip_check=true' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -d '{
      "projects_ref": [
        "api-server"
      ],
      "manifest_source": {
        "code_repo": "api-server",
        "target_revision": "HEAD",
        "path": "manifests/development"
      },
      "destination": "env-demo"
    }'
```
