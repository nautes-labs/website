---
footerLink: /guide/user-guide/product
title: Maintain Product
---

# Maintain Product 

Before starting this section, please ensure that you have read the  [Main Process](main-process.md) section to understand the main process and related terminology for deploying applications in Nautes.

A product corresponds to a software system, which includes teams, projects, environments, code repositories, artifact repositories, and runtimes. A product can be authorized by the Tenant Manager for use on specified Kubernetes clusters.

When using GitLab as a product provider, each product corresponds to a single GitLab Group. Nautes will maintain a repository with a fixed name (defaulted to `default.project`) under that Group to store the product metadata. At the same time, Nautes will leverage the GitLab permission model to manage user access to different product data.

Support both [Command Line](deploy-an-application.md#prepare-runtime-environment) and API for maintaining products.

## Prerequisites

### Create Access Token

After GitLab installation, you need to register an account and create a  [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) with the scopes: api, read_api, read_repository, and write_repository.

The access token will be used as a request header for requesting APIs.

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol,  you need to [import certificates](deploy-an-application.md#import-certificates).

## Create Product (API)
1. Generate an API request example by API definition `Product_SaveProduct` and add the access token as a request header.

  ```Shell
   # Replace the variable $api-server-address with the access address of the Nautes API Server
   # Replace the variable $gitlab-access-token with the GitLab access token
   # Replace the variable $product_name with the product name
   curl -X 'POST' \
       'HTTP://$api-server-address/api/v1/products/$product_name' \
       -H 'accept: application/json' \
       -H 'Content-Type: application/json' \
       -H 'Authorization: Bearer $gitlab-access-token' \
       -d '{
       "git": {
           "gitlab": {	
               # group name
               "name": $product_name,  
               # group path
               "path": $product_name,
               # group visibility：private or public
               "visibility": $product_visibility,
               "description": $product_desc
               }
           }
       }'
  ```
The request example after replacing the variables is shown below:  

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

2. Use the curl command or other tools to execute the API request to create a product.    
    After the request is successful, a group with the same name as the product will be created in GitLab, and a repository named `default.project` will be created in this group to store the product configuration manifest . Each group has only one `default.project` repository.

> Any account in GitLab can create products.

## Delete Product (API)
> Before deleting a product, please delete all entities and resources associated with the product, such as deployment runtimes, environments, code repositories, and projects, otherwise the deletion cannot be performed.
1. Generate an API request example by API definition `Product_DeleteProduct` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
        'HTTP://$api-server-address/api/v1/products/$product_name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' 
```
The request example after replacing the variables is shown below:  
```Shell
    curl -X 'DELETE' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```
2. Use the curl command or other tools to execute the API request to delete a product.    
After the request is successful, the product and its related resources will be deleted, including the group and the `default.project` repository in GitLab.

> If your account has deletion permission for the GitLab group, you can delete the product.



## List Products (API)
1. Generate an API request example by API definition `Product_ListProducts` and add the access token as a request header.
```Shell
    curl -X 'GET' \
        'HTTP://$api-server-address/api/v1/products' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' 
```
The request example after replacing the variables is shown below:  
```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```
2. Use the curl command or other tools to execute the API request to list products. The response example for the product list is shown below:  

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

> If your account has read permission for the GitLab group, you can retrieve the list of products.

## View Product Details (API)
1. Generate an API request example by API definition `Product_GetProduct` and add the access token as a request header.

```Shell
    curl -X 'GET' \
        'HTTP://$api-server-address/api/v1/products/$product_name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' 
```
The request example after replacing the variables is shown below:  

```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx' 
```

2. Use the curl command or other tools to execute the API request to retrieve the product details. The response example for retrieving the product details is similar to that of [listing products](#list-products-api).

> If your account has read permission for the GitLab group, you can retrieve the product details.