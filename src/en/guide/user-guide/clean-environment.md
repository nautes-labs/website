---
footerLink: /guide/user-guide/clean-environment
title: Clean Up the Environment
---
# Clean Up the Environment

This document describes the process of cleaning up all resources, data, and environment created in the [Run a Pipeline](#run-a-pipeline.md) and [Deploy an Application](deploy-an-application.md) sections.

> The cleanup process will delete the application-related repository, which will result in all version records of the application being cleared and unrecoverable. Please ensure that the environment can be completely deleted or has been backed up.

## Prerequisites

### Run a Pipeline or Deploy an Application

Please ensure that you have successfully completed running a pipeline or deploying an application in the runtime cluster.

### Register a GitLab Account

Please ensure that you have a Nautes GitLab account. For more information, refer to [Register a GitLab account](deploy-an-application.md#register-a-gitlab-account).

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol, you need to [import certificates](deploy-an-application.md#import-certificates).

## Delete Runtime

Please choose the specific deletion steps according to the type of runtime based on the specific actions performed in the previous sections.

### Delete Pipeline Runtime

Delete the related entities of the pipeline runtime, including a pipeline runtime, a code repository, code repository permissions, an environment, a project, and a product.

Clone the command-line repository to your local machine.

```Shell
git clone https://github.com/nautes-labs/cli.git
```

Replace the variables in the pipeline runtime template located at the relative path `examples/demo-pipeline.yaml`, including `$suffix`, `$pipeline-runtime-cluster`.

Replace the variables in the product template located at the relative path `examples/demo-product.yaml`, including `$suffix`.

> For comments and examples of the template, refer to [Initialize a Product](deploy-an-application.md#initialize-a-product).

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0)  and run the following command to clean up the product and runtime.

```Shell
# examples/demo-product.yaml and examples/demo-pipeline.yaml refer to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes remove -f examples/demo-pipeline.yaml -t $gitlab-access-token -s $api-server-address
nautes remove -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
```

### Delete Deployment Runtime

Delete the related entities of the deployment runtime, including a deployment runtime, a code repository, code repository permissions, an environment, a project, and a product.

Clone the command-line repository to your local machine.

```Shell
git clone https://github.com/nautes-labs/cli.git
```

Replace the variables in the deployment runtime template located at the relative path `examples/demo-deployment.yaml`, including `$suffix`, `$deployment-runtime-cluster`.

Replace the variables in the product template located at the relative path `examples/demo-product.yaml`, including `$suffix`.

> For comments and examples of th template, refer to [Initialize a Product](deploy-an-application.md#initialize-a-product).

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0)  and run the following command to clean up the product and runtime.

```Shell
# examples/demo-product.yaml and examples/demo-deployment.yaml refer to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes remove -f examples/demo-deployment.yaml -t $gitlab-access-token -s $api-server-address
nautes remove -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
```

## Delete Runtime Cluster

Please choose the specific deletion steps according to the type and usage of runtime cluster you registered.

### Delete Physical Cluster

> Please ensure that a physical cluster has been successfully registered.

Clone the command-line repository to your local machine.

```Shell
git clone https://github.com/nautes-labs/cli.git
```

Replace the variables in the physical cluster property template located at the relative path `examples/demo-cluster-physical-worker-pipeline.yaml` or `examples/demo-cluster-physical-worker-deployment.yaml`, including `$suffix`, `$api-server`, and `$kubeconfig`.

> For comments and examples of the physical cluster property template,  refer to  [Register Physical Cluster](deploy-an-application.md#register-physical-cluster).

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0)  and run the following command to clean up the physical cluster.

```Shell
nautes remove -f examples/demo-cluster-physical-worker-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

or

```Shell
nautes remove -f examples/demo-cluster-physical-worker-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

### Delete Virtual Cluster

> Please ensure that a virtual cluster has been successfully registered.

Clone the command-line repository to your local machine.

```Shell
git clone https://github.com/nautes-labs/cli.git
```

Replace the variables in the virtual cluster property template located at the relative path `examples/demo-cluster-virtual-worker-pipeline.yaml` or `examples/demo-cluster-virtual-worker-deployment.yaml`, including `$suffix`, `$api-server`, `$host-cluster`, and `$api-server-port`.

> For comments and examples of the virtual cluster property template, refer to [Register Virtual Cluster](deploy-an-application.md#register-runtime-cluster).

Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0)  and run the following command to destroy the virtual cluster.

```Shell
nautes remove -f examples/demo-cluster-virtual-worker-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

or

```Shell
nautes remove -f examples/demo-cluster-virtual-worker-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

Replace the variables in the host cluster property template located at the relative path `examples/demo-cluster-host.yaml`, including `$suffix`, `$api-server`, and `$kubeconfig`.

> For comments and examples of the host cluster property template, refer to [Register Virtual Cluster](deploy-an-application.md#register-runtime-cluster).

Run the following command to clean up the host cluster.

```Shell
nautes remove -f examples/demo-cluster-host.yaml -t $gitlab-access-token -s $api-server-address
```
