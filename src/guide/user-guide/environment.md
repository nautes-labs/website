---
footerLink: /guide/user-guide/environment
title: 维护环境
---
# 维护环境

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解部署应用的主体流程和相关术语。

环境是使用集群（目前只支持 Kubernetes集群）来承载产品中各个项目的集成和部署的管理单元。一个产品包含多个环境，如：开发环境、测试环境、预生产环境和生产环境等。

支持通过 [命令行](deploy-an-application.md#初始化产品) 和 API 两种方式维护环境。

## 前提条件

### 创建 access token

您需要创建一个 access token，作为请求 API 的请求头。详情参考 [创建 access token](product.md#创建-access-token)。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，请[导入证书](deploy-an-application.md#导入证书)。

### 创建产品

环境归属于产品，您需要创建至少一个[产品](product.md#创建产品api)。

### 注册运行时集群

环境需要与运行时集群关联，您需要注册至少一个[物理运行时集群](cluster.md#注册物理集群api)或者一个[虚拟运行时集群](cluster.md#注册虚拟集群api)。

## 创建和更新环境（API）

### 生成创建/更新环境的 API 请求

通过接口定义 `Environment_SaveEnvironment` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab access token
    # 替换变量 $product-name 为环境所属产品的名称
    # 替换变量 $environment-name 为环境名称
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/products/$product-name/environments/$environment-name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
      # 环境关联的运行时集群
      "cluster": $cluster-name,
      # 环境类型
      "env_type": $env-type
    }'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' \
      -d '{
      "cluster": "cluster-dev",
      "env_type": "development"
    }'
```

### 执行创建/更新环境的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以新增环境。
请求成功后，将在指定产品的 `default.project` 代码库中生成环境的资源文件。环境的资源文件示例如下：

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: Environment
    metadata:
        name: env-dev
    spec:
        cluster: cluster-dev
        envType: development
        product: product-xxxx
```

> 相同产品内，相同的运行时集群不能重复关联不同的环境。
>
> 当环境已经承载了产品的运行时，暂不支持变更环境的关联集群。
>
> 请求 API 更新环境也将更新环境的资源文件。
>
> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的 main 分支的写入权限，才可以创建或者更新环境。

## 删除环境（API）

> 在删除环境之前，请先删除与环境关联的所有相关实体和资源，例如：流水线运行时和部署运行时，否则将不能执行删除。

### 生成删除环境的 API 请求

通过接口定义 `Environment_DeleteEnvironment` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/products/$product-name/environments/$environment-name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除环境的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以删除环境。

请求成功后，将删除在指定产品的 `default.project` 代码库中的环境资源文件。

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的 main 分支的写入权限，才可以删除环境。

## 查询环境列表（API）

### 生成查询环境列表的 API 请求

通过接口定义 `Environment_ListEnvironments` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product-name/environments' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments' \
      -H 'accept: application/json'
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查询环境列表的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询环境列表。环境列表的返回值示例如下：

```yaml
{
    "items": [
        {
            "product": "nautes-labs",
            "name": "env-dev",
            "cluster": "cluster-dev",
            "env_type": "development"
        }
    ]
}
```

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的读取权限，才可以查询环境列表。

## 查询环境详情（API）

### 生成查看环境详情的 API 请求

通过接口定义 `Environment_GetEnvironment` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product-name/environments/$enviroment-name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查看环境详情的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询环境详情。环境详情的返回值示例与[查询环境列表](#执行查询环境列表的-api-请求)类似。

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的读取权限，才可以查看环境详情。

## 强制创建/更新/删除环境（API）

适用于需要跳过 API 校验的特殊场景，详情参见[初始化产品](main-process.md#初始化产品)。

以创建环境为例，将 cluster 属性设置为不存在的 cluster，启用 `insecure_skip_check` 查询参数并设置其值为 `true`，可以强制提交环境的资源文件。 请求示例如下：

```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-demo?insecure_skip_check=true' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -d '{
      "cluster": "cluster-invalid",
      "env_type": "development"
    }'
```
