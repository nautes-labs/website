---
footerLink: /guide/user-guide/main-process
title: Main Process
---
# Main Process


This document describes the main process of deploying an application, including the following steps:  
[Installation](#installation)  
[Register Runtime Cluster](#register-runtime-cluster)  
[Prepare Runtime Environment](#prepare-runtime-environment)  
[Deployment](#deployment)  
[View Deployment Results](#view-deployment-results)  

The main process is shown in the following diagram: 

![directive syntax graph](./../images/user-guide-overview-1.png)

In Nautes, a tenant management cluster and deployment runtime clusters are essential components. Each tenant has only one tenant management cluster, which is responsible for initializing all deployment runtime clusters for the tenant and coordinating various components to implement automated deployment to deployment runtime clusters. Each tenant has only one tenant configuration repository stored in GitLab, and the tenant management cluster updates its components and resources automatically by watching the tenant configuration repository. 

Each tenant can have multiple deployment runtime clusters, which serve as the actual infrastructures for hosting IT system runtime environments. These clusters can be either virtual or physical. 

Different stages of the IT system lifecycle require corresponding environments, such as: development, testing, pre-production, and production environments.
Environments need to run on deployment runtime clusters, and it is essential to relate the environment to the deployment runtime cluster to ensure that the IT system is deployed to the correct runtime environment.

In Nautes, for IT systems adopting a microservices architecture, a "Product" refers to an IT system, while a "Project" refers to a microservice. Therefore, each Product contains multiple Projects, each with its own independent code repository. 

When a product is ready for testing or utilization, it is typically deployed to the deployment runtime cluster related to the corresponding environment based on the deployment configuration, resulting in a deployment runtime environment.Each product can have multiple deployment runtime environments, such as functional testing or customer demonstration environments created in different clusters with the same deployment configuration. Additionally, multiple products' deployment runtime environments can be hosted on the same cluster. 

Nautes uses Kubernetes resource files to define environments, projects, code repositories, and deployment runtimes and stores these resource files in the product's GitLab repository, collectively referred to as the "product configuration manifest." Nautes watches the product configuration manifest and implements automated deployment to the deployment runtime cluster, creating or updating the product's deployment runtime environment. 

When users submit Kubernetes Manifests to the GitLab repository watched by the deployment runtime cluster, the product's deployment runtime environment watches the Kubernetes Manifests and implements automated deployment to the deployment runtime cluster until the actual state in the deployment runtime cluster is consistent with the expected state in the GitLab repository.

In order to prevent sensitive information from being leaked, sensitive information is managed by Vault in Nautes. 

## Installation
For more information, refer to the [Installation](installation.md).

## Register Runtime Cluster
Support both [Command Line](deploy-an-application.md#register-runtime-cluster)  and  [API](cluster.md) for registering runtime clusters. 

## Prepare Runtime Environment
Submitting product configuration manifests supports both [Command Line](deploy-an-application.md#prepare-runtime-environment) and API methods. For more information about the API interfaces, refer to the [Maintain Product](product.md), [Maintain Project](project.md),[Maintain Code Repository](code-repo.md), [Maintain Environment](environment.md), and [Maintain Deployment Runtime](deployment-runtime.md) sections. 

There is an order for submitting product configuration manifests. The forward order for adding is: create a product, create an environment, create a project, create a repository, and create a deployment runtime. The reverse order for destroying is: delete deployment runtime, delete code repository, delete project, delete environment, and delete product.

After the product is created successfully, a group with the same name as the product will be created in GitLab, and a repository named `default.project` will be created in this group to store the product configuration manifest , including resource files for environments, projects, repositories, and deployment runtimes. Each group has only one `default.project` repository. 

After the product configuration manifest is created successfully, relevant resources will be automatically installed in the deployment runtime cluster according to the product configuration manifest, enabling the deployment runtime cluster to watch the GitLab repository of the product and automatically deploy to the cluster. 

## Deployment
Use the Git CLI to submit Kubernetes Manifests to the product's GitLab repository, such as deployment, service, etc. After successful submission , the product will be deployed to the specified deployment runtime cluster. For more information, refer to [Deployment](deploy-an-application.md#deployment). 

## View Deployment Results  
Through the ArgoCD console or the kubectl command-line tool, you will be able to view the deployment results of the product and manage resources related to authorized products only.  For more information, refer to [View Deployment Results](deployment-results.md). 