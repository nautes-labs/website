---
footerLink: /guide/user-guide/clean-environment
title: Clean Up the Environment
---
# Clean Up the Environment

This document describes the process of cleaning up all resources, data, and environment created in the [Deploy an Application](deploy-an-application.md) section.

> The cleanup process will delete the application-related repository, which will result in all version records of the application being cleared and unrecoverable. Please ensure that the environment can be completely deleted or has been backed up. 



## Prerequisites
### Deploy an Application
Please ensure that an application has been successfully deployed in the runtime cluster. 

### Register a GitLab Account
Please ensure that you have a Nautes GitLab account. For more information, refer to [Register a GitLab account](deploy-an-application.md#register-a-gitlab-account). 

### Import Certificates
If you want to access Nautes API Server using the HTTPS protocol, you need to [import certificates](deploy-an-application.md#import-certificates).

## Delete Runtime Environment
Delete the relevant entities of the runtime environment, including a deployment runtime, a code repository, an environment, a project, and a product.

1. Clone the command-line repository to your local machine.  
```Shell
git clone https://github.com/nautes-labs/cli.git
```

2. Replace the variables in the runtime environment property template located at the relative path `examples/demo-product.yaml`, including `$suffix`, `$runtime-cluster`.

> For comments and examples of the runtime environment property template, refer to [Prepare Runtime Environment](deploy-an-application.md#prepare-runtime-environment).

3. Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0)  and run the following command to clean up the product's runtime environment.

```Shell
# examples/demo-product.yaml refers to the relative path of the template file in the command-line repository.
# gitlab-access-token refers to the GitLab access token.
# api-server-address refers to the access address of the Nautes API Server.
nautes remove -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
```
## Delete Runtime Cluster

Please choose the specific deletion steps according to the type of runtime cluster you registered. 

### Delete Physical Cluster
> Please ensure that a physical cluster has been successfully registered.

1. Clone the command-line repository to your local machine.  
```Shell
git clone https://github.com/nautes-labs/cli.git
```

2. Replace the variables in the physical cluster property template located at the relative path `examples/demo-cluster-physical-worker.yaml`, including `$suffix`, `$api-server`, and `$kubeconfig`.

> For comments and examples of the physical cluster property template,  refer to  [Register Physical Cluster](deploy-an-application.md#register-physical-cluster).

3. Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0)  and run the following command to clean up the physical cluster.

```Shell
nautes remove -f examples/demo-cluster-physical-worker.yaml -t $gitlab-access-token -s $api-server-address
```

### Delete Virtual Cluster
> Please ensure that a virtual cluster has been successfully registered. 

1. Clone the command-line repository to your local machine.  
```Shell
git clone https://github.com/nautes-labs/cli.git
```

2. Replace the variables in the virtual cluster property template located at the relative path `examples/demo-cluster-virtual-worker.yaml`, including `$suffix`, `$api-server`, `$host-cluster`, and `$api-server-port`.

> For comments and examples of the virtual cluster property template, refer to step 4 of [Register Virtual Cluster](deploy-an-application.md#register-runtime-cluster).

3. Download the [command-line tool](https://github.com/nautes-labs/cli/releases/tag/v0.2.0)  and run the following command to destroy the virtual cluster.

```Shell
nautes remove -f examples/demo-cluster-virtual-worker.yaml -t $gitlab-access-token -s $api-server-address
```

4. Replace the variables in the host cluster property template located at the relative path `examples/demo-cluster-host.yaml`, including `$suffix`, `$api-server`, and `$kubeconfig`.

> For comments and examples of the host cluster property template, refer to step 2 of [Register Virtual Cluster](deploy-an-application.md#register-runtime-cluster).

5. Run the following command to clean up the host cluster.
```Shell
nautes remove -f examples/demo-cluster-host.yaml -t $gitlab-access-token -s $api-server-address
```