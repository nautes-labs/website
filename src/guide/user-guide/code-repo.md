---
footerLink: /guide/user-guide/code-repo
title: 维护代码库
---
# 维护代码库
在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解部署应用的主体流程和相关术语。

代码库是用于存储项目的源代码、流水线配置、部署清单的版本库。只支持 Git。

在软件开发过程中，一个代码库往往无法独立完成预期功能，它可能需要依赖其他代码库来完成特定特性，这些被依赖的代码库通常称为“依赖库”。通过“授权代码库”功能，可以将依赖库授权给产品或项目，表示该产品或项目的代码库能够使用授权代码库进行项目集成。

支持通过 [命令行](deploy-an-application.md#初始化产品) 和 API 两种方式维护代码库和代码库授权。

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

适用于需要跳过 API 校验的特殊场景，详情参见[初始化产品](main-process.md#初始化产品)。

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

## 创建和更新代码库授权（API）

### 生成创建/更新代码库授权 API 请求

通过接口定义 `CodeRepoBinding_SaveCodeRepoBinding` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab 访问令牌
    # 替换变量 $product_name 为代码库授权所属产品的名称
    # 替换变量 $coderepo_binding_name 为代码库授权的名称
    curl -X 'POST' \
    'HTTP://$api-server-addresss/api/v1/products/$product_name/coderepobindings/$coderepo_binding_name' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' \
    -d '{
    "product": "$product_name",
    # 授权项目：如果为空，将代码库授权给产品； 如果不为空，将代码库授权给产品内的指定项目
    "projects": [
        "$project_name"
    ],
    # 权限：readwrite 或 readonly
    "permissions": "$permissions",
    # 授权代码库的名称
    "coderepo": "$coderepo_name"
    }'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'POST' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepobindings/coderepo-binding-vault-proxy' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -d '{
    "product": "nautes-labs",
    "projects": [
        "argo-operator"
    ],
    "permissions": "readonly",
    "coderepo": "vault-proxy"
    }'
```

### 执行创建/更新代码库授权 API 请求

使用 curl 命令或者其他工具执行 API 请求，以新增代码库授权。

请求成功后，将在指定产品的 default.project 代码库中生成代码库授权的资源文件，并在授权代码库的 deploy key 列表中添加被授权产品或项目的关联代码库的 deploy key。代码库授权的资源文件示例如下：

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: CodeRepoBinding
    metadata:
    creationTimestamp: null
    name: coderepo-binding-vault-proxy
    spec:
    coderepo: vault-proxy
    permissions: readonly
    product: nautes-labs
    projects:
    - argo-operator
```

> 请求 API 更新代码库授权也将更新代码库授权的资源文件。
>
> 只有当您的账号是 GitLab 的 group 成员且拥有 Maintainer 或更高级别的角色，并具备对 `default.project` 代码库的 main 分支的写入权限，才可以创建或者更新代码库授权。
>
> 您可以为一个代码库创建多个代码库授权的资源文件，例如：将一个代码库同时授权给产品和项目，或者将一个代码库授权给多个项目。代码库的授权范围将由产品和项目授权的并集决定。
>
> 代码库授权成功后，如果您需要更新授权产品或项目相关联的代码库，例如：新增或删除关联的代码库，授权代码库的 deploy key 列表将自动增减以反映相应代码库的变更。
>
> 代码库授权的资源文件创建成功后，不能变更 `coderepo` 的属性值，如果您需要变更授权的代码库，请先[删除代码库授权](#删除代码库授权api)再重新授权。
>
> 一个项目内的代码库之间默认具备互相读写的权限。

## 删除代码库授权（API）

### 生成删除代码库授权 API 请求

通过接口定义 `CodeRepoBinding_DeleteCodeRepoBinding` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepobindings/$coderepo_binding_name' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepobindings/coderepo-binding-vault-proxy' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除代码库授权 API 请求

使用 curl 命令或者其他工具执行 API 请求，以删除代码库授权。

请求成功后，将在指定产品的 `default.project`代码库中删除相应的代码库授权资源文件，并重新计算代码库的授权范围，根据计算结果进一步更新代码库的 deploy key 列表。

> 只有当您的账号是 GitLab 的 group 成员且拥有 Maintainer 或更高级别的角色，并具备对 `default.project` 代码库的 main 分支的写入权限，才可以删除代码库授权。

## 查询代码库授权列表（API）

### 生成查询代码库授权列表 API 请求

通过接口定义 `CodeRepoBinding_ListCodeRepoBindings` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepobindings' \
    -H 'accept: application/json'  \
    -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepobindings' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查询代码库授权列表 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询代码库授权列表。代码库列表的返回值示例如下：

```yaml
    {
        "items": [
            {
                "product": "nautes-labs",
                "name": "coderepo-binding-vault-proxy",
                "projects": [
                    "argo-operator"
                ],
                "permissions": "readonly",
                "coderepo": "vault-proxy"
            }
        ]
    }
```

> 只有当您的账号是 GitLab 的 group 成员，并具备对 `default.project` 代码库的读取权限，才可以查询代码库授权列表。

## 查看代码库授权详情（API）

### 生成查看代码库授权详情 API 请求

通过接口定义 `CodeRepoBinding_GetCodeRepoBinding` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/coderepobindings/$coderepo_binding_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepobindings/coderepo-binding-vault-proxy' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查看代码库授权详情 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询代码库授权详情。代码库授权详情的返回值示例与[查询代码库授权列表](#查询代码库授权列表api)类似。

> 只有当您的账号是 GitLab 的 group 成员，并具备对 `default.project` 代码库的读取权限，才可以查看代码库授权详情。
