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

Create configuration file for installer.

```bash
cat <<EOT >> vars.yaml
access_key: < your alicloud access key >
secret_key: < your alicloud secret key >
EOT
```

Run the following command for default installation.

```bash
curl https://raw.githubusercontent.com/nautes-labs/installer/main/installer.sh | bash -
```

or

```bash
curl -OL https://raw.githubusercontent.com/nautes-labs/installer/main/installer.sh
chmod +x installer.sh
./installer.sh
```

> By default, install a single-node K3s. Depending on the public network bandwidth of the installation machine, the entire installation process is expected to take 15~25 minutes. After the installation is successful, you can find the installed component information in the `/opt/nautes` directory. If the installation fails, you can troubleshoot issues through the logs in the `/opt/nautes/out/logs` directory.
>
> If you encounter any problems during the installation process, please refer to the [FAQ](#faq).

## Check the Installation Results

`/opt/nautes/flags` stores the identification files of the installation progress. The installer will skip completed installation steps according to the identification files.

`/opt/nautes/terraform` stores the terraform state file, which records the list of resources applied for by the installation program on Alibaba Cloud.

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

> Please make sure the `/opt/nautes directory` has not been deleted on the installation machine, and under the directory where the destroy command is executed, there is a configuration file for the installation program called vars.yaml.
>
> The uninstallation program will remove all resources applied from the cloud service, and it does not currently support uninstalling components individually.

```bash
curl https://raw.githubusercontent.com/nautes-labs/installer/main/installer.sh | bash -s destroy
```

or

```bash
./installer.sh destroy
```

## Alibaba Cloud Cost Description

The default specifications of the cloud server applied by the installer are as follows:

- Region: China Hong Kong - Availability Zone B
- Image: Ubuntu 22.04 64-bit
- Instance Specification: ecs.c6.large (2C4G)
- System Disk: ESSD Cloud Disk PL0 40G
- Network: Public IP
- Number: 2
- Usage: K3s, Vault

---

- Region: China Hong Kong - Availability Zone B
- Image: Ubuntu 22.04 64-bit
- Instance Specification: ecs.g5.large(2C8G)
- System Disk: ESSD Cloud Disk PL0 40G
- Network: Public IP
- Number: 1
- Usage: GitLab

The installer uses the [Preemptible Instance Mode](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/preemptible-instances-overview) to create cloud servers by default, which carries the risk of instances being automatically released. If you prefer a more stable environment, please add the following configuration to vars.yaml to switch to the [Pay-As-You-Go Mode](https://help.aliyun.com/document_detail/40653.html?spm=5176.ecsbuyv3.0.0.2a2736756P0dh1) for resources apply.

```yaml
alicloud.save_money: false
```

The cost estimates for the two billing modes are as follows (excluding traffic fees):

- Pay-As-You-Go: ￥ 56.1 pre Day
- Preemptible Instance: ￥ 13.5 pre Day

> The actual costs incurred may be affected by market price fluctuations, and the above estimates are for reference only.

## Custom installation

### Use a specified version of the installer image

Before installation, set the environment variable INSTALLER_VERSION.

```bash
export INSTALLER_VERSION=vX.Y.Z
```

### Use a specified tenant configuration repository template

Before installation, add the following configuration to the vars.yaml file.

```yaml
repos.tenant_template.url: https://github.com/nautes-labs/tenant-repo-template.git
repos.tenant_template.version: main
```

### Use standard K8s

Before installation, add the following configuration to the vars.yaml file.

```yaml
deploy.kubernetes.type: k8s
deploy.kubernetes.node_num: 3
```

### Complete parameter list

Please refer to [vars.yaml.sample](https://github.com/nautes-labs/installer/blob/main/vars.yaml.sample).

## FAQ

**During the installation process of Nautes, the step [init-host : Create instance] encounters errors: code: 403, The resource is out of stock in the specified zone、in resource "alicloud_instance" "gitlab". How should this be resolved?**

The installer defaults to using the [Preemptible Instance Mode](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/preemptible-instances-overview) to create cloud servers of specified specifications.

If the cloud servers of the default specifications are out of stock, the above error will occur.

To resolve this issue, you can add the parameter in the `vars.yaml` configuration file to modify the default specification of the cloud server for GitLab. After destroying the environment, you should then re-execute the installer.

```yaml
# The cloud server instance type for GitLab
gitlab_instance_type: ecs.g6.large
```

**During the installation process of Nautes, the step [init-host : Create instance] encounters errors: code: 403, The resource is out of stock in the specified zone、in resource "alicloud_instance" "kubernetes". How should this be resolved?**

The cloud servers with the default specifications are out of stock, which has led to the above error.

To resolve this issue, you can add the parameter in the `vars.yaml` configuration file to modify the default specification of the cloud server for Kubernetes. After destroying the environment, you should then re-execute the installer.

```yaml
# The cloud server instance type for Kubernetes
kubernetes_instance_type: ecs.c5.large
```

**During the installation process of Nautes, the step [init-host : Create instance] encounters errors: code: 403, The resource is out of stock in the specified zone、in resource "alicloud_instance" "vault". How should this be resolved?**

The cloud servers with the default specifications are out of stock, which has led to the above error.

To resolve this issue, you can add the parameter in the `vars.yaml` configuration file to modify the default specification of the cloud server for Vault. After destroying the environment, you should then re-execute the installer.

```yaml
# The cloud server instance type for Vault
vault_instance_type: ecs.c5.large
```
