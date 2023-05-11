---
footerLink: /api/introduction
title: 简介
---

# 简介

## 版本库

Nautes 遵循 GitOps 最佳实践，以版本库作为唯一可信数据源，将管理数据以声明的形式存入版本库。Nautes 使用三类版本库存储自身的数据，包括：平台配置库（暂未实现）、租户配置库、用户产品库，同时提供相应的 REST API 作为版本库的操作入口。三类版本库均由 Git 库和密钥仓库两部分组成。

### 平台配置库

平台配置库是用于存储平台管理集群的配置声明，包括管理组件的配置、租户集群的定义、以及密钥数据。

平台配置库使用独立的 Git 库和密钥仓库存储自身的数据，全局唯一。

平台 API 作为平台配置库的操作入口，提供租户的注册、查询、注销、以及度量等接口。

### 租户配置库

租户配置库是用于存储租户管理集群和用户运行时集群的配置声明，包括管理组件的配置、运行时集群的定义、以及密钥数据。

租户配置库使用独立的 Git 库和密钥仓库存储自身的数据，租户内唯一。

租户 API 作为租户配置库的操作入口，提供运行时集群的注册、查询、注销、授权、以及度量等接口。

### 用户产品库

用户产品库是用于存储用户产品定义的配置声明，包括产品、项目、环境、制品库、代码库、权限数据、运行时、以及密钥数据。

用户产品库与租户配置库共享一个密钥仓库，用于存储密钥数据，其他数据则使用独立的 Git 库进行存储吗，产品内唯一。

产品 API 作为产品配置库的操作入口，提供产品、项目、环境、代码库、制品库、授权、运行时等数据的管理接口。

## 认证

当您使用 API 时，需要在 HTTP Request Header 中传递一个有效的 `Bearer Token`，后端的 Git 库需要用这个 Token 对 API Server 的请求进行认证，例如：

```shell
 curl -X 'GET' \
        'HTTP://API-SERVER/api/v1/products' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer TOKEN' 
```

以下是不同 Git 库（暂时只支持 GitLab）的 Token 的获取方法。

### GitLab

您可以使用 [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)，Token 需要包含 api、read_user、write_repository 的权限。

您也可以使用 [oauth2 access token](https://docs.gitlab.com/ee/api/oauth2.html)，GitLab Application 需要包含 api、read_user、write_repository 的权限。
