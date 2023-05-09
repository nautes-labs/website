---
footerLink: /guide/user-guide/code-repo
title: 维护代码库
---
# 维护代码库
在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解部署应用的主体流程和相关术语。

代码库是用于存储项目的源代码、流水线配置、部署清单的版本库。只支持 Git。

支持通过 [命令行](deploy-an-application.md#准备运行环境) 和 API 两种方式维护代码库。

## 前提条件

### 创建 access token

您需要创建一个 access token，作为请求 API 的请求头。详情参考 [创建 access token](product.md#创建-access-token)。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，请[导入证书](deploy-an-application.md#导入证书)。

### 创建产品

由于代码库归属于产品，您需要创建至少一个[产品](product.md#创建产品api)。

## 创建和更新代码库（API）

### 生成创建/更新代码库 API 请求

通过接口定义 `CodeRepo_SaveCodeRepo` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab 访问令牌
    # 替换变量 $product_name 为代码库所属产品的名称
    # 替换变量 $coderepo_name 为代码库名称
    curl -X 'POST' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' \
    -d '{
        # 代码库关联的项目
        "project": $project,
        # 代码库的 webhook 事件
        "webhook": {
            "events": ["push_events"]
        },
        # 是否用于部署运行时
        "deployment_runtime": true,
        "pipeline_runtime": false,
        "git": {
            "gitlab": {
                # 代码库的名称
                "name": $coderepo_name,
                # 代码库的路径
                "path": $coderepo_name,
                # 代码库的可见性，例如：private、public 
                "visibility": $coderepo_visibility,
                "description": $coderepo_desc
                }
            }
    }'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'POST' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/api-server' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' \
    -d '{
        "project": "api-server",
        "webhook": {
            "events": ["push_events"]
        },
        "deployment_runtime": true,
        "pipeline_runtime": false,
        "git": {
            "gitlab": {
                "name": "api-server",
                "path": "api-server",
                "visibility": "private",
                "description": "Providing REST APIs for creating configuration declarations of environments."
                }
            }
    }'
```

### 执行创建/更新代码库的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以新增代码库。

请求成功后，将在指定产品的 `default.project` 代码库中生成代码库的资源文件，并创建代码库。代码库的资源文件示例如下：

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: CodeRepo
    metadata:
        name: api-server
        namespace: nautes
    spec:
        codeRepoProvider: "gitlab"
        deploymentRuntime: true
        pipelineRuntime: false
        product: "nautes-labs"
        project: "api-server"
        repoName: "api-server"
        url: "https://github.com/nautes-labs/api-server.git"
        webhook:
            events:
            - "push_events"
            isolation: "default"
```

> 请求 API 更新代码库也将更新代码库资源文件。
>
> 只有当您的账号是 GitLab 的 group 成员、有创建代码库的权限、有 `default.project` 代码库的 main 分支的写入权限，才可以创建或者更新代码库。

## 删除代码库（API）

> 在删除代码库之前，请先删除与代码库关联的所有实体和资源，例如：部署运行时等，否则将不能执行删除。

### 生成删除代码库的 API 请求

通过接口定义 `CodeRepo_DeleteCodeRepo` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' 
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/api-server' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

### 执行删除代码库的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以删除代码库。

请求成功后，将删除代码库，以及在指定产品的 `default.project`代码库中的代码库资源文件。

> 只有当您的账号是 GitLab 的 group 成员、有删除代码库的权限、有 `default.project` 代码库的 main 分支的写入权限，才可以删除代码库。

## 查询代码库列表（API）

### 生成查询代码库列表的 API 请求

通过接口定义 `CodeRepo_ListCodeRepos` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepos' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' 
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

### 执行查询代码库列表的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询代码库列表。代码库列表的返回值示例如下：

```yaml
    {
    "items": [
        {
            "product": "nautes-labs",
            "name": "api-server",
            "project": "api-server",
            "webhook": {
                "events": [
                    "push_events"
                ]
            },
            "deployment_runtime": true,
            "pipeline_runtime": false,
            "git": {
                "gitlab": {
                    "name": "api-server",
                    "path": "api-server",
                    "visibility": "private",
                    "description": "Providing REST APIs for creating configuration declarations of environments.",
                    "ssh_url_to_repo": "ssh://git@github.com:nautes-labs/api-server.git",
                    "http_url_to_repo": "https://github.com/nautes-labs/api-server.git"
                }
            }
        }
    ]
}
```

> 只有当您的账号是 GitLab 的 group 成员、有查询代码库的权限、有 `default.project` 代码库的读取权限，才可以查询代码库列表。

## 查询代码库详情（API）

### 生成查看代码库详情的 API 请求

通过接口定义 `CodeRepo_GetCodeRepo` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' 
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/api-server' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

### 执行查看代码库详情的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询代码库详情。代码库详情的返回值示例与[查询代码库列表](#查询代码库列表api)类似。

> 只有当您的账号是 GitLab 的 group 成员、有查询代码库的权限、有 `default.project` 代码库的读取权限，才可以查看代码库详情。

## 强制创建/更新/删除代码库（API）

适用于需要跳过 API 校验的特殊场景，详情参见[准备运行环境](main-process.md#准备运行环境)。

以创建代码库为例，将 project 属性设置为不存在的 project，启用 `insecure_skip_check` 查询参数，可以强制提交代码库的资源文件。 请求示例如下：

```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/coderepo-demo?insecure_skip_check=true' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -d '{
      "project": "project-demo-invalid",
      "webhook": {
        "events": [
          "push_events"
        ]
      },
      "deployment_runtime": true,
      "pipeline_runtime": false,
      "git": {
        "gitlab": {
          "name": "coderepo-demo",
          "path": "coderepo-demo",
          "visibility": "private",
          "description": "This is a code repository for testing purposes."
        }
      }
    }'
```
[xx](#创建和更新代码库api)