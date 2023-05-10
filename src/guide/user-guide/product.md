---
footerLink: /guide/user-guide/product
title: 维护产品
---
# 维护产品

请确保您已阅读 [主体流程](main-process.md) 章节，了解部署应用的主体流程和相关术语。

产品对应一个软件系统，包含团队、项目、环境、代码库、制品库、及运行时。产品可以被租户管理员授权使用指定的 Kubernetes 集群。

当您使用 GitLab 作为产品提供者时，产品唯一对应一个 GitLab Group，Nautes 会在该 Group 下维护一个用于存储产品元数据的固定名称的代码库（默认为 `default.project`），同时，Nautes 会利用 GitLab 权限模型来管理用户对不同产品数据的权限。

支持通过 [命令行](deploy-an-application.md#准备运行环境) 和 API 两种方式维护产品。

## 前提条件

### 创建 access token

GitLab 安装完成后，您需要注册一个账号，并创建  [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)，其中 access token 的权限范围包括：api、read_api、read_repository 和 write_repository。

access token 将作为请求 API 的请求头。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，请[导入证书](deploy-an-application.md#导入证书)。

## 创建产品（API）

### 生成创建产品的 API 请求

通过接口定义 `Product_SaveProduct` 生成 API 请求示例，并添加 access token 作为请求头。
  
```Shell
   # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
   # 替换变量 $gitlab-access-token 为 GitLab access token
   # 替换变量 $product_name 为产品名称
   curl -X 'POST' \
       'HTTP://$api-server-address/api/v1/products/$product_name' \
       -H 'accept: application/json' \
       -H 'Content-Type: application/json' \
       -H 'Authorization: Bearer $gitlab-access-token' \
       -d '{
       "git": {
           "gitlab": {	
               # group 的名称
               "name": $product_name,
               # group 的路径
               "path": $product_name,
               # group 的可见性，例如：private、public
               "visibility": $product_visibility,
               "description": $product_desc
               }
           }
       }'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' \
        -d '{
        "git": {
            "gitlab": {
            "name": "nautes-labs",
            "path": "nautes-labs",
            "visibility": "private",
            "description": "Nautes-Labs is an open-source, one-stop developer platform based on Kubernetes."
            }
        }
      }'
```

### 执行创建产品的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以新增产品。

请求成功后，将在 GitLab 中创建与产品同名的 group，并在这个 group 中创建名称为 `default.project` 的代码库，用于存储该产品的配置清单。每个 group 有且只有一个 `default.project` 代码库。

> GitLab 中的任何账号都可以创建产品。

## 删除产品（API）

> 在删除产品之前，请先删除与产品关联的所有实体和资源，例如：部署运行时、环境、代码库和项目等，否则将不能执行删除。

### 生成删除产品的 API 请求

通过接口定义 `Product_DeleteProduct` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
        'HTTP://$api-server-address/api/v1/products/$product_name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' 
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除产品的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以删除产品。

请求成功后，将删除该产品及其相关资源：GitLab 中的 group 和 `default.project` 代码库。
> 只有当您的账号对于 GitLab 的 group 有删除权限时，才可以删除产品。

## 查询产品列表（API）

### 生成查询产品列表的 API 请求

通过接口定义 `Product_ListProducts` ，生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
        'HTTP://$api-server-address/api/v1/products' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' 
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查询产品列表的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询产品列表。产品列表的返回值示例如下：

```json
  {
    "items": [
        {
            "name": "nautes-labs",
            "git": {
                "gitlab": {
                    "path": "nautes-labs",
                    "visibility": "private",
                    "description": "Nautes-Labs is an open-source, one-stop developer platform based on Kubernetes."
                }
            }
        },
        {
            "name": "tenant1",
            "git": {
                "gitlab": {
                    "path": "tenant1",
                    "visibility": "private",
                    "description": "The tenant configuration repository of the Nautes-Labs."
                }
            }
        },
        ......
    ]
  }
```

> 只有当您的账号对于 GitLab 的 group 有查询权限时，才可以查询产品列表。

## 查看产品详情（API）

### 生成查看产品详情的 API 请求

通过接口定义 `Product_GetProduct` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
        'HTTP://$api-server-address/api/v1/products/$product_name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' 
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

### 执行查看产品详情的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询产品详情。产品详情的返回值示例与[查看产品列表](#查询产品列表api)类似。

> 只有当您的账号对于 GitLab 的 group 有查询权限时，才可以查看产品详情。
