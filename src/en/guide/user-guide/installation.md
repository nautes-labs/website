---
footerLink: /guide/user-guide/installation
title: Installation
---
# Installation

Nautes supports installation on public cloud, private cloud, hosts, and Kubernetes clusters. This document uses Alibaba Cloud as an example to describe the process of installing Nautes on a public cloud.

## Prepare the Environment

- Installation machine: An AMD64 architecture Linux server, with Docker, Git, and Bash pre-installed, and ensure that the `/opt/nautes` directory is not occupied.
- Public cloud access key: An access key for an Alibaba Cloud account. If you are using a RAM user, make sure the RAM user has AliyunECSFullAccess and AliyunVPCFullAccess permissions. For more information, refer to [Create AccessKey](https://help.aliyun.com/document_detail/116401.html).

> The installer will call Alibaba Cloud's API to apply for resources, which will incur some costs (please refer to [Alibaba Cloud Cost Description](#alibaba-cloud-cost-description)).
>
> Due to Alibaba Cloud's billing rules restrictions, please ensure that the Alibaba Cloud account balance is more than 100 RMB, otherwise the installation program cannot call Alibaba Cloud's API to apply for resources.

## Execute the Installation

1. Clone the installer project on the installation machine:

```bash
git clone https://github.com/nautes-labs/installer.git
```

2. Write vars.yaml based on vars.yaml.sample, where access_key and secret_key must be filled in with the AccessKey of the Alibaba Cloud account, and other configurations can use default values.

```bash
cat <<EOT >> vars.yaml
access_key: < your alicloud access key >
secret_key: < your alicloud secret key >
EOT
```

3. Run the `start.sh` script to start the installation:

```bash
sh start.sh
```

> Since there are many components to be installed, the entire installation process is expected to take about 40-50 minutes. After the installation is successful, you can find the installed component information in the `/opt/nautes` directory. If the installation fails, you can troubleshoot issues through the logs in the `/opt/nautes/out/logs` directory.

## Check the Installation Results

`/opt/nautes/management` is the local copy of the tenant configuration repository.

`/opt/nautes/terraform` is the terraform state file, which records the list of resources applied for by the installation program on Alibaba Cloud.

`/opt/nautes/out` stores information about the installed components:

- GitLab is used to store the tenant configuration repository, user application source code, deployment manifests, pipeline configurations, etc. GitLab's administrator password and tenant configuration repository access information are stored in the `gitlab` subdirectory.
- Vault is used to store and manage tenant secret data. Vault's unseal key and root token are stored in the `vault` subdirectory. 
- Kubernetes clusters are used to host all management components of the tenant. The cluster's kubeconfig is stored in the `kubernetes` subdirectory.
- ArgoCD is used to watch to the tenant configuration repository and synchronize the tenant configuration to the Kubernetes cluster according to the configuration declarations in the repository. ArgoCD's administrator password is stored in the `argocd` subdirectory.
- Dex provides a unified authentication service based on the OIDC protocol. Dex's client secret is stored in the `kubernetes` subdirectory.

In addition, related information in other subdirectories under `/opt/nautes/out`:

- hosts: IP addresses and access keys of the cloud server.
- PKI: Certificates that are used to access the components and the CA that issues certificates.
- service: Access addresses for the tenant management cluster, Dex, ArgoCD, Vault, GitLab, and Nautes API Server.
- logs: Installation program logs.

> The relative path of the Nautes API Server's Swagger UI documentation is: /q/swagger-ui.

## Destroy the Environment

> Please make sure the installation has been successfully executed and the `/opt/nautes directory` has not been deleted on the installation machine.
>
> The uninstallation program will remove all resources applied from the cloud service, and it does not currently support uninstalling components individually.

1. Clone the installer project on the installation machine:

```bash
git clone https://github.com/nautes-labs/installer.git
```

2. Modify the vars.yaml file in the project root directory, filling in the access_key and secret_key.

3. Execute the `destroy.sh` script to start destroying the environment:

```bash
sh destroy.sh
```

> The location of the destroy environment log is : /tmp/destroy.log.

## Alibaba Cloud Cost Description

The default specifications of the cloud server applied by the installer are as follows:

- Region: China Hong Kong - Availability Zone B
- Image: Ubuntu 22.04 64-bit
- Instance Specification: ecs.c6.large (2C4G)
- System Disk: ESSD Cloud Disk PL0 40G
- Network: Public IP

The installer uses the [Preemptible Instance Mode](https://help.aliyun.com/document_detail/52088.html?spm=5176.ecsbuyv3.0.0.2a2736756P0dh1) to create cloud servers by default, which carries the risk of instances being automatically released. If you prefer a more stable environment, please add the following configuration to vars.yaml to switch to the [Pay-As-You-Go Mode](https://help.aliyun.com/document_detail/40653.html?spm=5176.ecsbuyv3.0.0.2a2736756P0dh1) for resources apply.

```yaml
alicloud:
  save_money: false
```

The cost estimates for the two billing modes are as follows (excluding traffic fees):

- Pay-As-You-Go: ￥ 88.32 pre Day
- Preemptible Instance: ￥ 24 pre Day

> The actual costs incurred may be affected by market price fluctuations, and the above estimates are for reference only.
