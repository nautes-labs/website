---
footerLink: /guide/user-guide/project
title: 维护项目
---
# 维护项目

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解执行流水线和部署应用的主体流程和相关术语。

通过维护[产品](product.md)和项目，您可以构建和产品的微服务架构一致的管理单元。

项目对应一个微服务，每个项目有自己的代码库。您可以使用集群进行项目的集成和部署，也可以使用产品的制品库对项目的制品进行存储和版本管理。 一个产品下可以包含多个项目。

支持通过 [命令行](run-a-pipeline.md#初始化产品) 和 API 两种方式维护项目。

## 前提条件

### 创建 access token

GitLab 安装完成后，您需要注册一个账号，并创建 [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)，其中 access token 的权限范围包括：api、read_api、read_repository 和 write_repository。

access token 将作为请求 API 的请求头。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，请[导入证书](run-a-pipeline.md#导入证书)。

### 创建产品

项目归属于产品，您需要创建至少一个[产品](product.md#创建产品api)。

## 创建和更新项目（API）

### 生成创建/更新项目的 API 请求

通过接口定义 `Project_SaveProject` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab 访问令牌
    # 替换变量 $product-name 为项目所属产品的名称
    # 替换变量 $project-name 为项目名称
    curl -X 'POST' \
        'HTTP://$api-server-address/api/v1/products/$product-name/projects/$project-name' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' \
        -d '{
                # 项目的开发语言
                "language": $project-language
            }'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'\
        -d '{
                "language": "Go"
            }'
```

### 执行创建/更新项目的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以新增项目。

请求成功后，将在指定产品的 `default.project` 代码库中生成项目的资源文件。项目的资源文件示例如下：

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: Project
    metadata:
        name: nautes-labs
        namespace: nautes
    spec:
        language: "Go"
        product: "nautes-labs"
```

> 请求 API 更新项目时也将更新项目的资源文件。
>
> 只有当您的账号是 GitLab 的 group 成员，并具备对 `default.project` 代码库的 main 分支的写入权限，才可以创建或者更新项目。

## 删除项目（API）

> 在删除项目之前，请先删除与项目关联的所有实体和资源，例如：代码库、流水线运行时和部署运行时等，否则将不能执行删除。

### 生成删除项目的 API 请求

通过接口定义 `Project_DeleteProject` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
        'HTTP://$api-server-address/api/v1/products/$product-name/projects/$project-name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除项目的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以删除项目。

请求成功后，将删除在指定产品的 `default.project` 代码库中的项目资源文件。

> 只有当您的账号是 GitLab 的 group 成员，并具备对 `default.project` 代码库的 main 分支的写入权限，才可以删除项目。

## 查询项目列表（API）

### 生成查询项目列表的 API 请求

通过接口定义 `Project_ListProjects` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
        'HTTP://$api-server-address/api/v1/products/$product-name/projects' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查询项目列表的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询项目列表。项目列表的返回值示例如下：

```yaml
{
    "items": [
        {
            "product": "nautes-labs",
            "name": "api-server",
            "language": "GO"
        },
        {
            "product": "nautes-labs",
            "name": "cluster-operator",
            "language": "GO"
        }
    ]
}
```

> 只有当您的账号是 GitLab 的 group 成员，并具备对 `default.project` 代码库的读取权限，才可以查询到产品的项目列表。

## 查询项目详情（API）

### 生成查看项目详情的 API 请求

通过接口定义 `Project_GetProject` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
        'HTTP://$api-server-address/api/v1/products/$product-name/projects/$project-name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查看项目详情的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询项目详情。项目详情的返回值示例与[查询项目列表](#查询项目列表api)类似。

> 只有当您的账号是 GitLab 的 group 成员，并具备对 `default.project` 代码库的读取权限，才可以查询到产品的项目详情。

## 强制创建/更新/删除项目（API ）

适用于需要跳过 API 校验的特殊场景，详情参见[初始化产品](main-process.md#初始化产品)。

以创建项目为例，当项目所属产品中存在不合规资源（如环境关联的集群被销毁），启用 `insecure_skip_check` 查询参数并设置其值为 true，可以跳过校验方法并强制提交项目的资源文件。请求示例如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/cluster-operator?insecure_skip_check=true ' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'\
        -d '{
                "language": "Go"
            }'
```
