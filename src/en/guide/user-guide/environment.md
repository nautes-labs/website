---
footerLink: /guide/user-guide/environment
title: Maintain Environment
---
# Maintain Environment

Before starting this section, please ensure that you have read the [Main Process](main-process.md) section to understand the main process and related terminology for deploying applications in Nautes.

The environment is a management unit that uses a cluster to host the integration and deployment of various microservices in the product. Currently, we only support the Kubernetes cluster type. A product contains multiple environments, such as development, testing, pre-production, and production environments.

Support both [Command Line](deploy-an-application.md#initialize-a-product) and API for maintaining environments.

## Prerequisites

### Create Access Token

You need to create an access token to use as a request header for requesting APIs. For more information, refer to [Create Access Token](product.md#create-access-token).

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol, you need to [import certificates](deploy-an-application.md#import-certificates).

### Create Product

Environments belong to products, so you need to create at least one [product](product.md#create-product-api).

### Register Runtime Cluster

An environment needs to be related to a runtime cluster in order to host the product's runtime environment, so you need to register at least one [physical runtime cluster](cluster.md#register-physical-clusterapi) or one [virtual runtime cluster](cluster.md#register-virtual-clusterapi).

## Create and Update Environment (API)

### Compose Create and Update Environment Request

Compose an API request example by API definition `Environment_SaveEnvironment` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server.
    # Replace the variable $gitlab-access-token with the GitLab access token.
    # Replace the variable $product_name with the name of the product to which the environment belongs.
    # Replace the variable $environment_name with the environment name.
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/products/$product_name/environments/$environment_name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
      # Runtime cluster related to the environment
      "cluster": $cluster_name,
      # Environment type
      "env_type": $env_type
    }'
```

The request example after replacing the variables is shown below:

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

### Execute Create and Update Environment Request

Use the curl command or other tools to execute the API request to create a environment.

After the request is successful, the resource file for the environment will be generated in the `default.project` repository of the specified product. The example of a resource file for a repository is shown below:

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: Environment
    metadata:
        name: env-dev
        namespace: nautes
    spec:
        cluster: "cluster-dev"
        envType: "development"
        product: "nautes-labs"
```

> Within the same product, the same runtime cluster cannot be related to different environments.
>
> If the environment has already hosted the deployment runtime environment of a product, it is not currently supported to change the related cluster of the environment.
>
> When requesting the API to update a environment, the resource file for the environment will also be updated.
>
> If your account is a member of the GitLab group and has write permission to the `main` branch of the `default.project` repository, you can create or update environments.

## Delete Environment (API)

> Before deleting an environment, please delete all entities and resources related to the environment, such as deployment runtimes, otherwise the deletion cannot be performed.

### Compose Delete Environment Request

Compose an API request example by API definition `Environment_DeleteEnvironment` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/products/$product_name/environments/$environment_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute Delete Environment Request

Use the curl command or other tools to execute the API request to delete a environment.

After the request is successful, the resource file for the environment will be deleted in the `default.project` repository of the specified product.

> If your account is a member of the GitLab group and has write permission to the `main` branch of the `default.project` repository, you can delete environments.

## List Environments (API)

### Compose List Environments Request

Compose an API request example by API definition `Environment_ListEnvironments` and add the access token as a request header.

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/environments' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments' \
      -H 'accept: application/json'
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute List Environments Request

Use the curl command or other tools to execute the API request to list environments. The response example for the environment list is shown below:

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

> If your account is a member of the GitLab group and has read permission to `default.project` repository, you can list environments.

## View Environment Details (API)

### Compose View Environment Details Request

Compose an API request example by API definition `Environment_GetEnvironment` and add the access token as a request header.

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/environments/$enviroment_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/environments/env-dev' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute View Environment Details Request

Use the curl command or other tools to execute the API request to view the environment details. The response example for viewing the environment details is similar to that of [listing environments](#execute-list-environments-request).

> If your account is a member of the GitLab group and has read permission to the `default.project` repository, you can view the details of environments.

## Force Create/Update/Delete Environment (API)

For special scenarios in which API verification needs to be skipped, refer to the [Initialize a Product](main-process.md#initialize-a-product) section.

Taking creating an environment as an example, if the value of the `cluster` property is set to a non-existent cluster, you can forcibly submit a request by adding the `insecure_skip_check` query parameter with its value set to `true`, to submit the environment resource file. The request example is shown below:

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
