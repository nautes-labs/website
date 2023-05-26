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

流水线运行时需要使用关联运行时集群的环境进行项目集成，您需要创建至少一个属于指定产品的[环境](environment.md#创建和更新环境api)。

## 创建和更新流水线运行时（API）

### 生成创建/更新流水线运行时的 API 请求

通过接口定义 `ProjectPipelineRuntime-SaveProjectPipelineRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    # $api-server-address 指 Nautes API Server 的访问地址
    # $gitlab-access-token 指 GitLab access token
    # $product-name 指流水线运行时所属产品的名称
    curl -X 'POST' \
    'HTTP://$api-server-address/api/v1/products/$product-name/projectpipelineruntimes/$project-pipeline-runtime-name' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' \
    -d '{
    # project（必填） 指归属于特定产品（名称为 $product-name）的项目名称，该项目决定了流水线运行时资源文件在 GitLab 中的存储位置
    "project": "$project-name",
    # pipeline-source（必填） 指存储流水线配置的代码库的名称
    "pipeline-source": "$pipeline-coderepo-name",
    # pipelines 表示流水线运行时从特定代码库（名称为 $pipeline-coderepo-name）中自动发现流水线配置的过滤条件，请至少填写一组数据
    # 支持多分支流水线：如果代码库中有多条分支，并且不同分支有各自的流水线配置，流水线运行时将根据过滤条件自动发现多个分支的流水线。其中，过滤条件包括 pipelines.name（流水线名称）、pipelines.path（流水线在代码库中的相对路径）
    # 多分支流水线的配置举例：如果一个代码库中有三个分支：main、dev、test，每个分支在 'pipelines' 的相对路径下存储了名称为 'pipeline-demo' 的流水线。这时您只需要配置一组 pipelines ，并设置 pipelines.name 为 pipeline-demo、pipelines.path 为 pipelines，流水线运行时即可自动发现该代码库中三个不同分支的三条流水线
    # pipelines.label 指流水线运行时将对流水线打标签，标签与该属性值相同，以便于查询流水线
    "pipelines": [
        {
        "name": "$pipeline-name",
        "label": "$pipeline-label",
        "path": "$pipeline-path"
        }
    ],
    # event-sources 指触发流水线的事件源，目前支持 GitLab webhook 和 Calendar，请至少填写一个事件源，事件源类型任选一种即可
    "event-sources": [
        {
            "name": "$event-source-name",
            # event-sources.gitlab 用于在 Gitlab project 中自动创建 webhook
            # event-sources.gitlab.repo-name（必填） 指 webhook 所属的 Gitlab project 的名称
            # event-sources.gitlab.events（必填） 指触发 webhook 的 Gitlab 事件，例如：push_events，tag_push_events 等，参见：https://github.com/xanzy/go-gitlab/blob/bf34eca5d13a9f4c3f501d8a97b8ac226d55e4d9/projects.go#L794
            # event-sources.gitlab.revision（选填） 表示根据分支过滤事件，以确定哪些分支的事件需要被处理，支持正则表达式，例如：^(feature|hotfix)/)
            "gitlab": {
                "repo-name": "$repo-name",
                "revision": "$repo-revision",
                "events": [
                    "$webhook-events"
                ]
            },
            # event-sources.calendar 用于生成 calendar 类型的事件源，将定时生成事件。如果使用该类型的事件源，请至少填写“schedule、interval”属性中的一项，如果两者都被定义了，“schedule”属性的优先级更高
            # event-sources.calendar.schedule 指定时调度规则，支持 cron 表达式，参见：https://en.wikipedia.org/wiki/Cron
            # event-sources.calendar.interval 指两个事件之间的时间间隔周期，例如：1s、30m、2h 等
            # event-sources.calendar.exclusion-dates（选填） 指 calendar 类型事件源的例外日期和时间，这些时间内将不会触发事件。日期时间格式遵循 ISO8601 格式，参见：https://en.wikipedia.org/wiki/ISO_8601
            # event-sources.calendar.timezone（选填）指执行调度的时区，参见：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
            "calendar": {
                "schedule": "$cron-expression",
                "interval": "$interval",
                "exclusion-dates": [
                    "$exclusion-date"
                ],
                "timezone": "$timezone"
            }
        }
    ],
    # pipeline-triggers 定义了 pipelines 和 event-sources 的组合，表示待执行的流水线及其触发方式，是执行流水线的前提条件，请至少填写一组数据
    # pipeline-triggers.event-source（必填） 需填写 event-sources.name 的属性值。不同事件源可以和相同流水线组成多组数据，表示流水线可以被多个事件触发
    # pipeline-triggers.pipeline（必填） 需填写 pipelines.name 的属性值。组合 pipeline-source、pipelines.name 和 pipelines.path 属性，表示从特定代码库中根据流水线名称和相对路径拉取流水线配置
    # pipeline-triggers.revision（选填）指从代码库中哪个分支拉取流水线配置，如果不填，将根据 event-sources.gitlab.revision 决定拉取流水线配置的分支
    "pipeline-triggers": [
        {
            "event-source": "$event-source-name",
            "pipeline": "$pipeline-name",
            "revision": "$pipeline-revision"
        }
    ],
    # destination 指执行流水线的目标环境
    "destination": "$destination",
    # isolation 指流水线运行时相关资源的隔离性，包括：shared 或者 exclusive
    # shared 指多个 event-sources 共享资源，当某个 event-source 需要重启时，将影响其他的 event-source；相较于 exclusive 模式，更节省资源
    # exclusive 指每个 event-source 独占资源，不同 event-source 之间资源隔离互不影响； 相较于 shared 模式，将占用更多资源
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
    "pipeline-source": "api-server",
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
    "event-sources": [
        {
            "name": "event-source-test",
            "gitlab": {
                "repo-name": "api-server",
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
                "repo-name": "api-server",
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
    "pipeline-triggers": [
        {
            "event-source": "event-source-dev",
            "pipeline": "pipeline-dev"
        },        {
            "event-source": "event-source-test",
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
        pipeline-triggers:
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

通过接口定义 `ProjectPipelineRuntime-DeleteProjectPipelineRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/products/$product-name/projectpipelineruntimes/$project-pipeline-runtime-name' \
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

通过接口定义 `ProjectPipelineRuntime-ListProjectPipelineRuntimes` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product-name/projectpipelineruntimes' \
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
            "pipeline-source": "api-server",
            "event-sources": [
                {
                    "name": "event-source-test",
                    "gitlab": {
                        "repo-name": "api-server",
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
                        "repo-name": "api-server",
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
            "pipeline-triggers": [
                {
                    "event-source": "event-source-dev",
                    "pipeline": "pipeline-dev"
                },
                {
                    "event-source": "event-source-test",
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

通过接口定义 `ProjectPipelineRuntime-GetProjectPipelineRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product-name/projectpipelineruntimes/$project-pipeline-runtime-name' \
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

以创建流水线运行时为例，将 `destination` 属性设置为不合规的 environment，启用 `insecure-skip-check` 查询参数并设置其值为 `true`，可以强制提交流水线运行时的资源文件。请求示例的片段如下：

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/api-server-pr?insecure-skip-check=true' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
        "project": "api-server",
        "pipeline-source": "api-server",
        ...
        "destination": "env-invalid",
        "isolation": "shared"
        }'
```
