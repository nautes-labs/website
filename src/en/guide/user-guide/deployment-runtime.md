---
footerLink: /guide/user-guide/deployment-runtime
title: Maintain Deployment-Runtime
---
# Maintain Deployment-Runtime

Before starting this section, please ensure that you have read the [Main Process](main-process.md) section to understand the main process and related terminology for running pipelines and deploying applications in Nautes.

A deployment runtime defines the configuration declaration used to deploy projects, such as the storage location of deployment manifests and the target environment to deploy to, etc.

Support both [Command Line](run-a-pipeline.md#initialize-a-product) and API for maintaining deployment runtimes.

## Prerequisites

### Create Access Token

You need to create an access token to use as a request header for requesting APIs. For more information, refer to [Create Access Token](product.md#create-access-token).

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol, you need to [import certificates](run-a-pipeline.md#import-certificates).

### Create Product

Deployment runtimes belong to products, so you need to create at least one [product](product.md#create-product-api).

### Create Repository

Deployment runtimes need to watch code repositories that store the Kubernetes manifests, so you need to create at least one [code repository](code-repo.md#create-and-update-repositoryapi) related to the specified [product](product.md#create-product-api).

### Create Environment

Deployment runtimes need to deploy to environments related to runtime clusters, so you need to create at least one [environment](environment.md#create-and-update-environment-api) related to the specified [product](product.md#create-product-api).

## Create and Update Deployment-Runtime (API)

### Compose Create and Update Deployment-Runtime Request

Compose an API request example by API definition `Deploymentruntime_SaveDeploymentRuntime` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server.
    # Replace the variable $gitlab-access-token with the GitLab access token.
    # Replace the variable $product-name with the name of the product to which the deployment runtime belongs.
    # Replace the variable $deploymentruntime-name with the deployment runtime name.
    curl -X 'POST' \
        'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' \
        -d '{
                # The project to which the deployment runtime belongs
                "projects_ref": [
                    $project
                ],
                "manifest_source": {
                    # The name of the code repository watched by the deployment runtime
                    "code_repo": $coderepo-name,
                    # The revision or branch of the code repository watched by the deployment runtime
                    "target_revision": $coderepo-target-revision,
                    # The relative path of the code repository watched by the deployment runtime
                    "path": $coderepo-path
                },
                # The target environment of the deployment runtime
                "destination": $destination
            }'
```

The request example after replacing the variables is shown below:

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

### Execute Create and Update Deployment-Runtime Request

Use the curl command or other tools to execute the API request to create a deployment runtime.

After the request is successful, the resource file for the deployment runtime will be generated in the `default.project` repository of the specified product. An example of a resource file for a deployment runtime is shown below:

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

> If the deployment runtime is deployed to a runtime cluster, changing the `destination` of the deployment runtime is not supported.
>
> When requesting the API to update a deployment runtime, the resource file for the deployment runtime will also be updated.
>
> If your account is a member of the GitLab group and has write permission to the `main` branch of the `default.project` repository, you can create or update deployment runtimes.

## Delete Deployment-Runtime (API)

### Compose Delete Deployment-Runtime Request

1. Compose an API request example by API definition `Deploymentruntime_DeleteDeploymentRuntime` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
        'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'DELETE' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-dev' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute Delete Deployment-Runtime Request

Use the curl command or other tools to execute the API request to delete a deployment runtime.

After the request is successful, the resource file for the deployment runtime will be deleted in the `default.project` repository of the specified product, and the deployment runtime will be destroyed in the runtime cluster.

> If your account is a member of the GitLab group and has write permission to the `main` branch of the `default.project` repository, you can delete deployment runtimes.

## List Deployment-Runtimes (API)

### Compose List Deployment-Runtimes Request

Compose an API request example by API definition `Deploymentruntime_ListDeploymentRuntimes` and add the access token as a request header.

```Shell
    curl -X 'GET' \
        'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute List Deployment-Runtimes Request

Use the curl command or other tools to execute the API request to list deployment runtimes. The response example for the deployment runtime list is shown below:

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

> If your account is a member of the GitLab group and has read permission to the `default.project` repository, you can list deployment runtimes.

## View Deployment-Runtime Details (API)

### Compose View Deployment-Runtime Details Request

Compose an API request example by API definition `Deploymentruntime_GetDeploymentRuntime` and add the access token as a request header.

```Shell
    curl -X 'GET' \
        'HTTP://$api-server-address/api/v1/products/$product-name/deploymentruntimes/$deploymentruntime-name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/deploymentruntimes/dr-dev' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute View Deployment-Runtime Details Request

Use the curl command or other tools to execute the API request to view the deployment runtime details. The response example for viewing the deployment runtime details is similar to that of [listing deployment runtimes](#execute-list-deployment-runtimes-request).

> If your account is a member of the GitLab group and has read permission to the `default.project` repository, you can view the details of deployment runtimes.

## Force Create/Update/Delete Deployment-Runtime (API)

For special scenarios in which API verification needs to be skipped, refer to the [Initialize a Product](main-process.md#initialize-a-product) section.

Taking creating a deployment runtime as an example, if the value of the `destination` property is set to an invalid environment whose related cluster has been destroyed, you can forcibly submit a request by adding the `insecure_skip_check` query parameter with its value set to `true` , to submit the deployment runtime resource file. The request example is shown below:

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
