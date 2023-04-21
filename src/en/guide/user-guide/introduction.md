---
footerLink: /guide/user-guide/introduction
title: Overview
---

# Overview

Nautes is a Kubernetes-native all-in-one Internal Developer Platform that combines the concepts and best practices of DevOps and GitOps. It integrates the industry's best cloud-native open-source projects in a pluggable manner.

## Features

- a Kubernetes-native all-in-one Internal Developer Platform that covers the entire process, including agile development, CI/CD, automated testing, security, and operations.
- Following the best practices of GitOps, the version control repository serves as the single source of truth. When data in the repository changes, the Operator automatically detects the changes and performs incremental updates to the Kubernetes cluster.
- A fully distributed multi-tenant architecture, where tenants serve as distributed computing and storage units that support horizontal scaling. The resources hosted by tenants also support horizontal scaling.
- Good adaptability, In addition to the base Kubernetes and Git, other components can be replaced.
- All features are provided with declarative REST APIs, supporting secondary development. 
- For all integrated open-source projects, their native features are maintained without any trimmed encapsulation, ensuring that there is no secondary binding for the hosted applications.
- By constructing a higher-level data model, unified authentication and authorization are achieved for all integrated open-source projects.
- Supports deployment modes for private cloud and hybrid cloud.

## Architecture

Nautes adopts a fully distributed multi-tenant architecture, where the platform management cluster is responsible for tenant allocation and recovery. Each tenant has exclusive access to a set of resources, including code repositories, key repositories, artifact repositories, authentication servers, and clusters. Resources within a tenant are managed by the tenant management cluster.

Tenants serve as the unit of resource management which can be divided by users based on their organization's characteristics, such as by product teams, departments, or subsidiaries.

Resources within a tenant can also be deployed with multiple instances, for example, multiple Harbor instances can be deployed within a single tenant to isolate container image data for different products.

![](./../images/brief-architecture.png)

## Entity Definition

- **Product:** Corresponds to a software system, including teams, projects, environments, code repositories, artifact repositories, and runtime. A product can be authorized by the Tenant Manager for use on specified Kubernetes clusters.
- **Project:** Corresponds to a microservice, and each project has its own code repository. You can use a cluster for project integration and deployment, or use the artifact repository of the product to store and version control the project artifacts. A product can contain multiple projects.
- **Environment:** A management unit that uses a cluster to host the integration and deployment of various microservices in the product. Currently, we only support the Kubernetes cluster type. A product contains multiple environments, such as development, testing, pre-production, and production environments.
- **Code Repository:** A repository used for storing a project's source code, pipeline configurations, or deployment manifests. Only Git is supported.
- **Pipeline Runtime:** The configuration declaration defining the aspects for integrating a project's pipeline, such as: the storage location of pipeline configurations, the pipeline's triggering method, the target environment for running the pipeline, etc.
- **Deployment Runtime:** The configuration declaration defining the aspects for deploying projects, such as: the storage location of deployment manifests, the target environment to deploy to, etc.