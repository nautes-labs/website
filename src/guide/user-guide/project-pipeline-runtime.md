---
footerLink: /guide/user-guide/project-pipeline-runtime
title: 维护流水线运行时
---
# 维护流水线运行时

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解部署应用的主体流程和相关术语。

流水线运行时定义了用于集成项目的流水线的配置声明，如：流水线配置的存储位置、流水线的触发方式、运行流水线的目标环境等。

支持通过 [命令行](deploy-an-application.md#初始化产品) 和 API 两种方式维护流水线运行时。

## 前提条件

### 创建 access token

您需要创建一个 access token，作为请求 API 的请求头。详情参考 [创建 access token](product.md#创建-access-token)。

### 导入证书

如果您想使用 https 协议访问 Nautes API Server，请[导入证书](deploy-an-application.md#导入证书)。

### 创建产品

流水线运行时归属于项目，而项目归属于产品，您需要创建至少一个[产品](product.md#创建产品api)。

### 创建项目

流水线运行时归属于项目，您需要创建至少一个属于指定产品的[项目](project.md#创建和更新项目api)。

### 创建代码库

流水线运行时需要监听代码库中的流水线配置，您需要创建至少一个属于指定项目的[代码库](code-repo.md#创建和更新代码库api)。

### 创建环境

流水线运行时需要使用环境关联的流水线运行时集群对项目进行集成，您需要创建至少一个属于指定产品的[环境](environment.md#创建和更新环境api)。

## 创建和更新流水线运行时（API）

### 生成创建/更新流水线运行时的 API 请求

通过接口定义 `ProjectPipelineRuntime_SaveProjectPipelineRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # 替换变量 $api-server-address 为 Nautes API Server 的访问地址
    # 替换变量 $gitlab-access-token 为 GitLab access token
    # 替换变量 $product_name 为流水线运行时所属产品的名称
    # 替换变量 $project_pipeline_runtime_name 为流水线运行时的名称
    curl -X 'POST' \
    'HTTP://$api-server-address/api/v1/products/$product_name/projectpipelineruntimes/$project_pipeline_runtime_name' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' \
    -d '{
    # 流水线运行时所属项目的名称
    "project": "$project_name",
    # 存储流水线运行时配置的代码库的名称
    "pipeline_source": "$pipeline_coderepo_name",
    # 定义名称、标签和路径等属性，以匹配存储流水线运行时配置的代码库中的流水线，支持定义多分支流水线
    "pipelines": [
        {
        "name": "$pipeline_name",
        "label": "$pipeline_label",
        # 支持通配符
        "path": "$pipeline_path"
        }
    ],
    # 监听流水线的事件源，目前支持 GitLab webhook 和定时器
    "event_sources": [
        {
            # 事件源名称
            "name": "$event_source_name",
            # 定义 GitLab webhook
            "gitlab": {
                # webhook 监听的代码库名称
                "repo_name": "$repo_name",
                # webhook 监听的代码库版本
                "revision": "$repo_revision",
                # 触发 webhook 的事件，例如：PushEvents, TagPushEvents 等
                "events": [
                    "$webhook_events"
                ]
            },
            # 定义定时器
            "calendar": {
                # 使用 cron 表达式定义调度规则，参见：https://en.wikipedia.org/wiki/Cron
                "schedule": "$cron_expression",
                # 触发流水线的间隔周期
                "interval": "$interval",
                # 循环事件的例外日期和时间
                "exclusion_dates": [
                    "$exclusion_date"
                ],
                # 执行调度的时区
                "timezone": "$timezone"
            }
        }
    ],
    # 组合事件源和流水线，以定义流水线及其触发机制
    "pipeline_triggers": [
        {
            # 触发流水线的事件源，填写已定义的 event_sources 中的名称
            "event_source": "$event_source_name",
            # 待触发的流水线，填写已定义的 pipelines 中的名称
            "pipeline": "$pipeline_name",
            # 待触发的流水线的版本，如果不填，将根据 event_sources.gitlab.revision 决定流水线的版本
            "revision": "$pipeline_revision"
        }
    ],
    # 执行流水线的目标环境
    "destination": "$destination",
    # 流水线运行时相关资源的隔离性：shared 或者 exclusive
    "isolation": "$isolation"
    }'  
```

替换变量后的请求示例如下：

```Shell
    curl -X 'POST' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/api-server-pr' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
    -d '{
    "project": "api-server",
    "pipeline_source": "api-server",
    "pipelines": [
        {
            "name": "pipeline-test",
            "label": "test",
            "path": "pipeline/test"
        },{
            "name": "pipeline-dev",
            "label": "dev",
            "path": "pipeline/dev"
        }
    ],
    "event_sources": [
        {
            "name": "event-source-test",
            "gitlab": {
                "repo_name": "api-server",
                "revision": "test",
                "events": [
                    "PushEvents"
                ]
            },
            "calendar": {
                "schedule": "0 15 17 ? * MON-FRI"
            }
        },{
            "name": "event-source-dev",
            "gitlab": {
                "repo_name": "api-server",
                "revision": "dev",
                "events": [
                    "PushEvents"
                ]
            },
            "calendar": {
                "schedule": "0 0 16 ? * MON-FRI"
            }
        }
    ],
    "pipeline_triggers": [
        {
            "event_source": "event-source-dev",
            "pipeline": "pipeline-dev"
        },        {
            "event_source": "event-source-test",
            "pipeline": "pipeline-test"
        }
    ],
    "destination": "env-test",
    "isolation": "shared"
    }'
```

### 执行创建/更新流水线运行时的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以新增流水线运行时。

请求成功后，将在指定产品的 `default.project` 代码库中生成流水线运行时的资源文件。流水线运行时的资源文件示例如下：

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: ProjectPipelineRuntime
    metadata:
        creationTimestamp: null
        name: api-server-pr
    spec:
        destination: env-test
        eventsource:
        - calendar:
            schedule: 0 15 17 ? * MON-FRI
          gitlab:
            events:
            - PushEvents
            repoName: api-server
            revision: test
          name: event-source-test
        - calendar:
            schedule: 0 0 16 ? * MON-FRI
          gitlab:
            events:
            - PushEvents
            repoName: api-server
            revision: dev
          name: event-source-dev
        isolation: shared
        pipeline_triggers:
          - eventSource: event-source-dev
            pipeline: pipeline-dev
          - eventSource: event-source-test
            pipeline: pipeline-test
        pipelines:
        - label: test
          name: pipeline-test
          path: pipeline/test
        - label: dev
          name: pipeline-dev
          path: pipeline/dev
        pipelinesource: api-server
        project: api-server
```

> 请求 API 更新流水线运行时也将更新流水线运行时的资源文件。
>
> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的 main 分支的写入权限，才可以创建或者更新流水线运行时。

## 删除流水线运行时（API）

### 生成删除流水线运行时的 API 请求

通过接口定义 `ProjectPipelineRuntime_DeleteProjectPipelineRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/products/$product_name/projectpipelineruntimes/$project_pipeline_runtime_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/api-server-pr' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行删除流水线运行时的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以删除流水线运行时。

请求成功后，将删除在指定产品的 `default.project` 代码库中的流水线运行时的资源文件，并且销毁运行时集群中的流水线运行时。

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的 main 分支的写入权限，才可以删除流水线运行时。

## 查询流水线运行时列表（API）

### 生成查询流水线运行时列表的 API 请求

通过接口定义 `ProjectPipelineRuntime_ListProjectPipelineRuntimes` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/projectpipelineruntimes' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
  curl -X 'GET' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查询流水线运行时列表的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查询流水线运行时列表。流水线运行时列表的返回值示例如下：

```yaml
{
    "items": [
        {
            "name": "api-server-pr",
            "project": "api-server",
            "pipeline_source": "api-server",
            "event_sources": [
                {
                    "name": "event-source-test",
                    "gitlab": {
                        "repo_name": "api-server",
                        "revision": "test",
                        "events": [
                            "PushEvents"
                        ]
                    },
                    "calendar": "0 15 17 ? * MON-FRI"
                },
                {
                    "name": "event-source-dev",
                    "gitlab": {
                        "repo_name": "api-server",
                        "revision": "dev",
                        "events": [
                            "PushEvents"
                        ]
                    },
                    "calendar": "0 0 16 ? * MON-FRI"
                }
            ],
            "pipelines": [
                {
                    "name": "pipeline-test",
                    "label": "test",
                    "path": "pipeline/test"
                },
                {
                    "name": "pipeline-dev",
                    "label": "dev",
                    "path": "pipeline/dev"
                }
            ],
            "pipeline_triggers": [
                {
                    "event_source": "event-source-dev",
                    "pipeline": "pipeline-dev"
                },
                {
                    "event_source": "event-source-test",
                    "pipeline": "pipeline-test"
                }
            ],
            "destination": "env-test",
            "isolation": "shared"
        }
    ]
}
```

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的读取权限，才可以查询流水线运行时列表。

## 查看流水线运行时详情（API）

### 生成查看流水线运行时详情的 API 请求

通过接口定义 `ProjectPipelineRuntime_GetProjectPipelineRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/projectpipelineruntimes/$project_pipeline_runtime_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/api-server-pr' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查看流水线运行时详情的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查看流水线运行时详情。流水线运行时详情的返回值示例与[查询流水线运行时列表](#执行查询流水线运行时列表的-api-请求)类似。

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的读取权限，才可以查看流水线运行时详情。

## 强制创建/更新/删除流水线运行时（API）

适用于需要跳过 API 校验的特殊场景，详情参见[初始化产品](main-process.md#初始化产品)。

以创建流水线运行时为例，将 `destination` 属性设置为不合规的 environment，启用 `insecure_skip_check` 查询参数并设置其值为 `true`，可以强制提交流水线运行时的资源文件。请求示例的片段如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/api-server-pr?insecure_skip_check=true' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
        "project": "api-server",
        "pipeline_source": "api-server",
        ...
        "destination": "env-invalid",
        "isolation": "shared"
        }'
```
