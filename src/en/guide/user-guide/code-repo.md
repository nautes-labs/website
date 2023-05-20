---
footerLink: /guide/user-guide/code-repo
title: Maintain Code Repository
---

# Maintain Code Repository

Before starting this section, please ensure that you have read the [Main Process](main-process.md) section to understand the main process and related terminology for deploying applications in Nautes.

A code repository used for storing a project's source code, pipeline configurations, or deployment manifests. Only Git is supported.

In the software development process, a single code repository often cannot independently complete expected functions. It may need to depend on other code repositories to complete specific features, and these code repositories are usually referred to as "dependency libraries." The "Code Repository Authorization" feature grants authorization to a code repository for products or projects. This enables the code repository of the products or projects to use the authorized code repository for project integration.

Support both [Command Line](deploy-an-application.md#initialize-a-product) and API for maintaining repositories and maintaining repository authorizations.

## Prerequisites

### Create Access Token

You need to create an access token to use as a request header for requesting APIs. For more information, refer to [Create Access Token](product.md#create-access-token).

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol, you need to [import certificates](deploy-an-application.md#import-certificates).

### Create Product

Projects belong to products, so you need to create at least one [product](product.md#create-product-api).

## Create and Update Repository(API)

### Compose Create and Update Repository Request

Compose an API request example by API definition `CodeRepo_SaveCodeRepo` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server.
    # Replace the variable $gitlab-access-token with the GitLab access token.
    # Replace the variable $product_name with the name of the product to which the repository belongs.
    # Replace the variable $coderepo_name with the repository name.
    curl -X 'POST' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' \
    -d '{
        # The project to which the repository belongs.
        "project": $project,
        # Webhook events
        "webhook": {
            "events": ["push_events"]
        },
        # Whether the repository is used for deploying runtime.
        "deployment_runtime": true,
        "pipeline_runtime": false,
        "git": {
            "gitlab": {
                # repository name
                "name": $coderepo_name,
                # repository path
                "path": $coderepo_name,
                # repository visibility：private or public 
                "visibility": $coderepo_visibility,
                "description": $coderepo_desc
                }
            }
    }'
```

The request example after replacing the variables is shown below:

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

### Execute Create and Update Repository Request

Use the curl command or other tools to execute the API request to create a repository.

After the request is successful, the resource file for the repository will be generated in the `default.project` repository of the specified product and the repository will be created in GitLab. The example of a resource file for a repository is shown below:

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

> When requesting the API to update a repository, the resource file for the repository will also be updated.
>
> If your account is a member of the GitLab group, has permission to create repositories, and has write permission to the `main` branch of the `default.project` repository, you can create or update repositories.

## Delete Repository (API)

> Before deleting a repository, please delete all entities and resources related to the repository, such as deployment runtimes, otherwise the deletion cannot be performed.

### Compose Delete Repository Request

Compose an API request example by API definition `CodeRepo_DeleteCodeRepo` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' 
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'DELETE' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/api-server' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

### Execute Delete Repository Request

Use the curl command or other tools to execute the API request to delete a repository.

After the request is successful, the resource file for the repository will be deleted in the `default.project` repository of the specified product and the repository will be deleted in GitLab.

> If your account is a member of the GitLab group, has permission to delete repositories, and has write permission to the `main` branch of the `default.project` repository, you can delete repositories.

## List Repositories（API）

### Compose List Repositories Request

Compose an API request example by API definition `CodeRepo_ListCodeRepos` and add the access token as a request header.

```Shell
    curl -X 'GET' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepos' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' 
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

### Execute List Repositories Request

Use the curl command or other tools to execute the API request to list repositories. The response example for the repository list is shown below:

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

> If your account is a member of the GitLab group, has permission to list repositories, and has read permission to the `default.project` repository, you can list repositories authorized for you.

## View Repository Details (API)

### Compose View Repository Details Request

Compose an API request example by API definition `CodeRepo_GetCodeRepo` and add the access token as a request header.

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/coderepos/$coderepo_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' 
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepos/api-server' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

### Execute View Repository Details Request

Use the curl command or other tools to execute the API request to view the repository details. The response example for viewing the repository details is similar to that of [listing repositories](#execute-list-repositories-request).

> If your account is a member of the GitLab group, has permission to list repositories, and has read permission to the `default.project` repository, you can view the details of repositories authorized for you.

## Force Create/Update/Delete Repository (API)

For special scenarios in which API verification needs to be skipped, refer to the [Initialize a Product](main-process.md#initialize-a-product) section.

Taking the creation of a repository as an example, if the value of the `project` property is set to a non-existent project, you can forcibly submit a request by adding the `insecure_skip_check` query parameter with its value set to `true`, to submit the repository resource file. The request example is shown below:

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

## Create and Update Repository Authorization(API)

### Compose Create and Update Repository Authorization Request

Compose an API request example by API definition `CodeRepoBinding_SaveCodeRepoBinding` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server.
    # Replace the variable $gitlab-access-token with the GitLab access token.
    # Replace the variable $product_name with the name of the product to which the authorization belongs.
    # Replace the variable $coderepo_binding_name with the authorization name.
    curl -X 'POST' \
    'HTTP://$api-server-addresss/api/v1/products/$product_name/coderepobindings/$coderepo_binding_name' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' \
    -d '{
    "product": "$product_name",
    # Granted Project: If empty, the code repository grants authorization to the product. If not empty, the code repository grants authorization to the specified projects within the product.
    "projects": [
        "$project_name"
    ],
    # Permission: readwrite or readonly
    "permissions": "$permissions",
    # Name of the authorized code repository
    "coderepo": "$coderepo_name"
    }'
```

The request example after replacing the variables is shown below:

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

### Execute Create and Update Repository Authorization Request

Use the curl command or other tools to execute the API request to create a repository authorization.

After the request is successful, the resource file for the repository authorization will be generated in the `default.project` repository of the specified product, and the deploy keys of the related code repositories of the granted products or projects will be added to the deploy key list of the authorized code repository. The example of a resource file for a repository authorization is shown below:

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

> When requesting the API to update a repository authorization, the resource file for the repository authorization will also be updated.
>
> If your account is a member of the GitLab group, and has a `Maintainer` or higher-level role, and has write permission to the `main` branch of the `default.project` repository, you can create or update repository authorization.
>
> You can create multiple resource files of repository authorizations for a code repository, such as authorizing a code repository to both products and projects, or multiple projects. The scope of the repository authorization will be determined by the union of product and project authorizations.
>
> After the repository authorization is successful, if you need to update the related code repositories of the granted product or project, such as adding or deleting related code repositories, the deploy key list of the authorized code repository will automatically increase or decrease to reflect the changes of the corresponding code repository.
>
> If the resource file of the repository authorization is successfully created, the value of the `coderepo` cannot be changed. If you need to change the authorized code repository, please [Delete Repository Authorization](#delete-repository-api) and re-authorize it.
>
> The code repositories within a project have read and write permissions for each other by default.

## Delete Repository Authorization (API)

### Compose Delete Repository Authorization Request

Compose an API request example by API definition `CodeRepoBinding_DeleteCodeRepoBinding` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepobindings/$coderepo_binding_name' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'DELETE' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepobindings/coderepo-binding-vault-proxy' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute Delete Repository Authorization Request

Use the curl command or other tools to execute the API request to delete a repository authorization.

After the request is successful, the resource file for the repository authorization will be deleted from the `default.project` repository of the specified product. The authorization scope of the code repository will then be recalculated, and the deploy key list of the authorized code repository will be updated based on the recalculated results.

> If your account is a member of the GitLab group, and has a `Maintainer` or higher-level role, and has write permission to the `main` branch of the `default.project` repository, you can delete repository authorization.

## List Repository Authorizations（API）

### Compose List Repository Authorizations Request

Compose an API request example by API definition `CodeRepoBinding_ListCodeRepoBindings` and add the access token as a request header.

```Shell
    curl -X 'GET' \
    'HTTP://$api-server-address/api/v1/products/$product_name/coderepobindings' \
    -H 'accept: application/json'  \
    -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepobindings' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute List Repository Authorizations Request

Use the curl command or other tools to execute the API request to list repository authorizations. The response example for the repository authorizations list is shown below:

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

> If your account is a member of the GitLab group, and has read permission to the `default.project` repository, you can list repository authorizations.

## View Repository Authorization Details (API)

### Compose View Repository Authorization Details Request

Compose an API request example by API definition `CodeRepoBinding_GetCodeRepoBinding` and add the access token as a request header.

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/coderepobindings/$coderepo_binding_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/coderepobindings/coderepo-binding-vault-proxy' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute View Repository Authorization Details Request

Use the curl command or other tools to execute the API request to view the repository authorization details. The response example for viewing the repository details is similar to that of [listing repository authorizations](#execute-list-repositories-request).

> If your account is a member of the GitLab group, and has read permission to the `default.project` repository, you can view the details of repository authorization.
