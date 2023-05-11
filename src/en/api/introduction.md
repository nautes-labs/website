---
footerLink: /api/introduction
title: Introduction
---

# Introduction

## Version Repository

Nautes follow the best practices of GitOps, with the version repository as the single trusted data source and storing management data in a declarative form in the version repository. Nautes uses three types of version repositories to store its data, including platform configuration repository (not yet implemented), tenant configuration repository, and user product repository, each providing corresponding REST API as the entry point for repository operations. All three types of repositories consist of Git repositories and secret vaults.

### Platform Configuration Repository

The platform configuration repository is used to store the configuration declarations of the platform management cluster, including the configurations of management components, definitions of tenant clusters, and secret data.

The platform configuration repository uses independent Git repository and secret vault to store its data, which is globally unique.

**The platform API** serves as the entry point for operations on the platform configuration repository, providing interfaces for tenant registration, query, deregistration, and metrics.

### Tenant Configuration Repository

The tenant configuration repository is used to store the configuration declarations of the tenant management cluster and user runtime clusters, including the configurations of management components, definitions of runtime clusters, and secret data.

The tenant configuration repository uses independent Git repository and secret vault to store its data, which is unique within a tenant.

**The tenant API** serves as the entry point for operations on the tenant configuration repository, providing interfaces for runtime cluster registration, query, deregistration, authorization, and metrics.

### User Product Repository

The user product repository is used to store the configuration declarations of user product definitions, including products, projects, environments, artifact repositories, code repositories, permission, runtime, and secret data.

The user product repository shares a secret vault with the tenant configuration repository for storing secret data, while other data is stored in an independent Git repository, which is unique within a product.

**The product API** serves as the entry point for operations on the product configuration repository, providing interfaces for the management of product, project, environment, code repository, artifact repository, permission , and runtime data.

## Authentication

When you use the API, you need to pass a valid `Bearer Token` in the HTTP Request Header. The backend Git repository needs to use this Token to authenticate the requests from the API Server, for example:

```shell
 curl -X 'GET' \
        'HTTP://API-SERVER/api/v1/products' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer TOKEN' 
```

Here are the methods to obtain Tokens for different Git repositories (currently only GitLab is supported).

### GitLab

You can use a [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html). The Token needs to include permissions for api, read_user, and write_repository.

You can also use an [oauth2 access token](https://docs.gitlab.com/ee/api/oauth2.html). The GitLab Application needs to include permissions for api, read_user, and write_repository.