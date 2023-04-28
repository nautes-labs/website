---
footerLink: /guide/user-guide/code-repo
title: Maintain Code Repository
---
# Maintain Code Repository

Before starting this section, please ensure that you have read the  [Main Process](main-process.md) section to understand the main process and related terminology for deploying applications in Nautes.

A repository used for storing a project's source code, pipeline configurations, or deployment manifests. Only Git is supported.

Support both [Command Line](deploy-an-application.md#prepare-runtime-environment) and API for maintaining repositories.

## Prerequisites

### Create Access Token

You need to create an access token to use as a request header for requesting APIs. For more information, refer to [Create Access Token](product.md).

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol,  you need to [import certificates](deploy-an-application.md#import-certificates).

### Create Product

Projects belong to products, so you need to create at least one [product](product.md).

## Create and Update Repository(API)

1. Generate an API request example by API definition `CodeRepo_SaveCodeRepo` and add the access token as a request header.

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
        # Events watched by the webhook
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

2. Use the curl command or other tools to execute the API request to create a repository.  
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

> Before deleting a repository, please delete all entities and resources associated with the repository, such as deployment runtimes, otherwise the deletion cannot be performed.

1. Generate an API request example by API definition `CodeRepo_DeleteCodeRepo` and add the access token as a request header.

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

2. Use the curl command or other tools to execute the API request to delete a repository.   
After the request is successful, the resource file for the repository will be deleted in the `default.project` repository of the specified product and the repository will be deleted in GitLab.

> If your account is a member of the GitLab group, has permission to delete repositories, and has write permission to the `main` branch of the `default.project` repository, you can delete repositories. 

## List Repositories（API）
1. Generate an API request example by API definition `CodeRepo_ListCodeRepos` and add the access token as a request header.

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


2. Use the curl command or other tools to execute the API request to list repositories. The response example for the repository list is shown below: 

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
> If your account is a member of the GitLab group, has permission to list repositories, and has read permission to the `main` branch of the `default.project` repository, you can list repositories. 

## View Repository Details (API)

1. Generate an API request example by API definition `CodeRepo_GetCodeRepo` and add the access token as a request header.

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

2. Use the curl command or other tools to execute the API request to retrieve the repository details. The response example for retrieving the repository details is similar to that of [listing repositories](#list-repositoriesapi).

> If your account is a member of the GitLab group, has permission to list repositories, and has read permission to the `main` branch of the `default.project` repository, you can retrieve the repository details.

## Force Create/Update/Delete Repository (API)

In order to ensure that Nautes can automatically deploy the runtime environment of a product based on the product configuration manifest, the product configuration manifest must adhere to predefined rules.
Therefore, validation of the product configuration manifest is enabled by default when submitting a request, and the request cannot be submitted if the validation fails.

In certain scenarios, users may need to submit resource files failing to adhere to predefined rules, and subsequently submit accompanying resources later. In order to accommodate similar scenarios, the POST and DELETE types of API requests can be forced to submit or delete resource files by adding the `insecure_skip_check` query parameter and setting its value to `true`.

Taking the creation of a repository as an example, if the project's value is set to a non-existent project, you can forcibly submit a request by adding the `insecure_skip_check` query parameter to submit the repository resource file . The request example is shown below:

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