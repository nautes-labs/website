---
footerLink: /guide/user-guide/clean-environment
title: 清理环境
---
# 清理环境

本文档描述了如何清理掉在[部署一个应用](deploy-an-application.md)章节中创建的所有资源、数据和环境。

> 清理过程将删除应用相关的代码库，这会导致应用的所有版本记录被清空且无法恢复。请确保待清理的环境是可以被彻底删除或已做好备份。

## 前提条件

### 部署应用

请确保运行时集群中成功部署了一个应用。

### 注册 GitLab 账号

请确保您拥有 Nautes 的 GitLab 的账号，详情参考[注册 GitLab 账号](deploy-an-application.md#注册-gitlab-账号)。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，需要[导入证书](deploy-an-application.md#导入证书)。

## 删除运行环境

删除运行环境的相关实体，包括部署运行时、代码库、环境、项目和产品。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-product.yaml` 下运行环境属性模板的变量，包括 `$suffix`，`$runtime-cluster`。
> 运行环境属性模板的注释和示例，详情参考 [准备运行环境](deploy-an-application.md#准备运行环境)。

下载 [命令行工具](https://github.com/nautes-labs/cli.git)，执行以下命令，以销毁产品的运行环境。

```Shell
nautes remove -f examples/demo-product.yaml -t $gitlab-access-token -s $api-server-address
```

## 删除运行时集群

请您根据所注册的运行时集群的形态选择具体的删除步骤。

### 删除物理集群

> 请确保已成功注册物理集群。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-cluster-physical-worker.yaml` 下物理集群属性模板的变量，包括 `$suffix`、`$api-server` 和 `$kubeconfig`。
> 物理集群属性模板的注释和示例，详情参考 [注册物理集群](deploy-an-application.md#注册物理集群)。

下载 [命令行工具](https://github.com/nautes-labs/cli.git)，执行以下命令，以删除物理集群。

```Shell
nautes remove -f examples/demo-cluster-physical-worker.yaml -t $gitlab-access-token -s $api-server-address
```

### 删除虚拟集群

> 请确保已成功注册虚拟集群。

将命令行程序的代码库克隆到本地。

```Shell
git clone https://github.com/nautes-labs/cli.git
```

替换位于相对路径 `examples/demo-cluster-virtual-worker.yaml` 下的虚拟集群属性模板的变量，包括 `$suffix`、`$api-server`、`$host-cluster` 和 `$api-server-port`。
> 虚拟集群属性模板的注释和示例，详情参考 [注册虚拟集群](deploy-an-application.md#注册虚拟集群) 的第4步。

下载 [命令行工具](https://github.com/nautes-labs/cli.git)，执行以下命令，将删除虚拟集群。

```Shell
nautes remove -f examples/demo-cluster-virtual-worker.yaml -t $gitlab-access-token -s $api-server-address
```

替换位于相对路径 `examples/demo-cluster-host.yaml` 下的宿主集群属性模板的变量，包括 `$suffix`、`$api-server` 和 `$kubeconfig`。
> 宿主集群属性模板的注释和示例，详情参考 [注册虚拟集群](deploy-an-application.md#注册虚拟集群) 的第2步。

执行以下命令，以删除宿主集群。

```Shell
nautes remove -f examples/demo-cluster-host.yaml -t $gitlab-access-token -s $api-server-address
```
