---
footerLink: /guide/user-guide/clean-environment
title: 清理环境
---
# 清理环境

本文档描述了如何清理掉在[执行流水线](run-a-pipeline.md)和[部署一个应用](deploy-an-application.md)章节中创建的所有资源、数据和环境。

> 清理过程将删除应用相关的代码库，这会导致应用的所有版本记录被清空且无法恢复。请确保待清理的环境是可以被彻底删除或已做好备份。

## 前提条件

### 执行流水线或部署应用

请确保已经在运行时集群中成功运行过流水线或部署了一个应用。

### 注册 GitLab 账号

请确保您拥有 Nautes 的 GitLab 的账号，详情参考[注册 GitLab 账号](deploy-an-application.md#注册-gitlab-账号)。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，需要[导入证书](deploy-an-application.md#导入证书)。

## 删除运行时

您需要根据在前面章节执行过的具体操作来选择删除运行时的类型。

### 删除流水线运行时

删除流水线运行时的相关实体，包括流水线运行时、代码库、代码库权限、环境、项目和产品。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-pipeline.yaml` 下流水线运行时模板的变量，包括 `$suffix`，`$pipeline-runtime-cluster`。

替换位于相对路径 `examples/demo-product.yaml` 下产品模板的变量，包括 `$suffix`。

> 模板的注释和示例，详情参考 [初始化产品](deploy-an-application.md#初始化产品)。

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.3.8)，执行以下命令，以销毁产品及运行时。

```Shell
# examples/demo-product.yaml 和 examples/demo-pipeline.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes remove -f examples/demo-pipeline.yaml -t $gitlab-access-token -s $api-server-address
nautes remove -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
```

### 删除部署运行时

删除部署运行时的相关实体，包括部署运行时、代码库、代码库权限、环境、项目和产品。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-deployment.yaml` 下部署运行时模板的变量，包括 `$suffix`，`$deployment-runtime-cluster`。

替换位于相对路径 `examples/demo-product.yaml` 下产品模板的变量，包括 `$suffix`。

> 模板的注释和示例，详情参考 [初始化产品](deploy-an-application.md#初始化产品)。

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.3.8)，执行以下命令，以销毁产品及运行时。

```Shell
# examples/demo-product.yaml 和 examples/demo-deployment.yaml 指在代码库中模板文件的相对路径
# gitlab-access-token 指 GitLab access token
# api-server-address 指 Nautes API Server 的访问地址
nautes remove -f examples/demo-deployment.yaml -t $gitlab-access-token -s $api-server-address
nautes remove -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
```

## 删除运行时集群

请您根据所注册的运行时集群的形态和用途选择具体的删除步骤。

### 删除物理集群

> 请确保已成功注册物理集群。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-cluster-physical-worker-pipeline.yaml` 或 `examples/demo-cluster-physical-worker-deployment.yaml` 下物理集群属性模板的变量，包括 `$suffix`、`$api-server` 和 `$kubeconfig`。

> 物理集群属性模板的注释和示例，详情参考 [注册物理集群](deploy-an-application.md#注册物理集群)。

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.3.8)，执行以下命令，以删除物理集群。

```Shell
nautes remove -f examples/demo-cluster-physical-worker-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

或

```Shell
nautes remove -f examples/demo-cluster-physical-worker-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

### 删除虚拟集群

> 请确保已成功注册虚拟集群。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-cluster-virtual-worker-pipeline.yaml` 或 `examples/demo-cluster-virtual-worker-deployment.yaml` 下的虚拟集群属性模板的变量，包括 `$suffix`、`$api-server`、`$host-cluster` 和 `$api-server-port`。

> 虚拟集群属性模板的注释和示例，详情参考 [注册虚拟集群](deploy-an-application.md#注册虚拟集群)。

下载 [命令行工具](https://github.com/nautes-labs/cli/releases/tag/v0.3.8)，执行以下命令，将删除虚拟集群。

```Shell
nautes remove -f examples/demo-cluster-virtual-worker-pipeline.yaml -t $gitlab-access-token -s $api-server-address
```

或

```Shell
nautes remove -f examples/demo-cluster-virtual-worker-deployment.yaml -t $gitlab-access-token -s $api-server-address
```

替换位于相对路径 `examples/demo-cluster-host.yaml` 下的宿主集群属性模板的变量，包括 `$suffix`、`$api-server` 和 `$kubeconfig`。

> 宿主集群属性模板的注释和示例，详情参考 [注册虚拟集群](deploy-an-application.md#注册虚拟集群)。

执行以下命令，以删除宿主集群。

```Shell
nautes remove -f examples/demo-cluster-host.yaml -t $gitlab-access-token -s $api-server-address
```
