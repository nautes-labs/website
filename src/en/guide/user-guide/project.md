---
footerLink: /guide/user-guide/project
title: Maintain Project
---
# Maintain Project

Before starting this section, please ensure that you have read the  [Main Process](main-process.md) section to understand the main process and related terminology for deploying applications in Nautes.

By maintaining [products](product.md) and projects, you can build management units consistent with the microservice architecture of your products.

A project corresponds to a microservice, and each project has its own code repository. You can use a cluster for project integration and deployment, or use the artifact repository of the product to store and version control the project artifacts. A product can contain multiple projects.

Support both [Command Line](deploy-an-application.md#prepare-runtime-environment) and API for maintaining projects.

## Prerequisites

### Create Access Token

After GitLab installation, you need to register an account and create a  [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) with the scopes: api, read_api, read_repository, and write_repository.

The access token will be used as a request header for requesting APIs.

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol,  you need to [import certificates](deploy-an-application.md#import-certificates).

### Create Product

Projects belong to products, so you need to create at least one [product](product.md).

## Create and Update Project (API)
1. Generate an API request example by API definition `Project_SaveProject` and add the access token as a request header.

```Shell
   # Replace the variable $api-server-address with the access address of the Nautes API Server.
   # Replace the variable $gitlab-access-token with the GitLab access token.
   # Replace the variable $product_name with the name of the product to which the project belongs.
   # Replace the variable $project_name with the project name.
    curl -X 'POST' \
      'HTTP://$api-server-address/api/v1/products/$product_name/projects/$project_name' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token' \
      -d '{
		  # The programming language of the project
          "language": $project_language
        }'
```
The request example after replacing the variables is shown below:  

```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer  xxxxxxxxxxxxxxxxxxxx'\
      -d '{
          "language": "Go"
        }'
```

2. Use the curl command or other tools to execute the API request to create a project.   
After the request is successful, the resource file for the project will be generated in the `default.project` repository of the specified product. The example of a resource file for a project is shown below: 

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
> When requesting the API to update a project, the resource file for the project will also be updated.
>
> If your account is a member of the GitLab group and has write access to the `main` branch of the `default.project` repository, you can create or update projects. 



## Delete Project (API)

> Before deleting a project, please delete all entities and resources associated with the project, such as deployment runtimes and code repositories, otherwise the deletion cannot be performed.
1. Generate an API request example by API definition `Project_DeleteProject` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/products/$product_name/projects/$project_name' \
      -H 'accept: application/json' \
	  -H 'Authorization: Bearer $gitlab-access-token' 
```
The request example after replacing the variables is shown below:  

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

2. Use the curl command or other tools to execute the API request to delete a project.  
After the request is successful, the resource file for the project will be deleted in the `default.project` repository of the specified product. 

> If your account is a member of the GitLab group and has write access to the `main` branch of the `default.project` repository, you can delete projects. 

## List Projects (API)
1. Generate an API request example by API definition `Project_ListProjects` and add the access token as a request header.
```Shell
    curl -X 'GET' \
    'HTTP://$api-server-address/api/v1/products/$product_name/projects' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' 
```
The request example after replacing the variables is shown below:  
```Shell
    curl -X 'GET' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

2. Use the curl command or other tools to execute the API request to list projects. The response example  for the project list is shown below: 

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
> If your account is a member of the GitLab group and has write access to the `main` branch of the `default.project` repository, you can retrieve the list of projects.

## View Project Details (API)
1. Generate an API request example by API definition `Project_GetProject` and add the access token as a request header.

```Shell
    curl -X 'GET' \
    'HTTP://$api-server-address/api/v1/products/$product_name/projects/$project_name' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' 
```
The request example after replacing the variables is shown below:  
```Shell
    curl -X 'GET' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/api-server' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

2. Use the curl command or other tools to execute the API request to retrieve the project details. The response example for retrieving the project details is similar to that of [listing projects](#list-productsapi).

> If your account is a member of the GitLab group and has write access to the `main` branch of the `default.project` repository, you can retrieve the project details.

## Force Create/Update/Delete Project (API)

For special scenarios in which API verification needs to be skipped, refer to the [Force Create/Update/Delete Code Repository](#code-repo.md) section.

Taking the creation of a project as an example, if there are invalid resources (such as a cluster associated with an environment being destroyed) in the product to which the project belongs, you can submit the project's resource file without verification by enabling the `insecure_skip_check` query parameter with its value set to `true`. The request example is shown below:

```Shell
    curl -X 'POST' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projects/cluster-operator?insecure_skip_check=true ' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer  xxxxxxxxxxxxxxxxxxxx'\
      -d '{
          "language": "Go"
        }'
```