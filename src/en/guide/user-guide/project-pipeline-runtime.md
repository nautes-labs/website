---
footerLink: /guide/user-guide/project-pipeline-runtime
title: Maintain Pipeline-Runtime
---
# Maintain Pipeline-Runtime

Before starting this section, please ensure that you have read the [Main Process](main-process.md) section to understand the main process and related terminology for running pipelines and deploying applications in Nautes.

A pipeline runtime defines the configuration declaration of a pipeline used to integrate projects, such as the storage location of pipeline configurations, the pipeline's triggering method and the target environment for running the pipeline, etc.

Support both [Command Line](run-a-pipeline.md#initialize-a-product) and API for maintaining project Project Pipeline runtimes.

## Prerequisites

### Create Access Token

You need to create an access token to use as a request header for requesting APIs. For more information, refer to [Create Access Token](product.md#create-access-token).

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol, you need to [import certificates](run-a-pipeline.md#import-certificates).

### Create Product

Project Pipeline runtimes belong to a project, and a project belongs to a product, so you need to create at least one [product](product.md#create-product-api).

### Create Project

Project Pipeline runtimes belong to a project, so you need to create at least one [project](project.md#create-and-update-project-api).

### Create Repository

Project Pipeline runtimes need to watch code repositories that store the pipeline configurations, so you need to create at least one code repository related to the specified [project](project.md#create-and-update-project-api).

### Create Environment

Project Pipeline runtimes need to use environments related to runtime clusters in order to integrate projects, so you need to create at least one environment related to the specified [product](product.md#create-product-api).

## Create and Update Pipeline-Runtime (API)

### Compose Create and Update Pipeline-Runtime Request

Compose an API request example by API definition `ProjectPipelineRuntime_SaveProjectPipelineRuntime` and add the access token as a request header.

The request example is shown below:

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server.
    # Replace the variable $gitlab-access-token with the GitLab access token.
    # Replace the variable $product_name with the name of the product to which the project pipeline runtime belongs.
    # Replace the variable $project_pipeline_runtime_name with the project pipeline runtime name.
    curl -X 'POST' \
        'HTTP://$api-server-address/api/v1/products/$product-name/projectpipelineruntimes/$project-pipeline-runtime-name' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' \
        -d '{
                "project": "project-demo",
                "pipeline_source": "coderepo-sc-demo",
                "pipelines": [
                    {
                        "name": "pipeline-dev",
                        "label": "dev",
                        "path": "pipelines/dev.yaml"
                    },{
                        "name": "pipeline-main",
                        "label": "main",
                        "path": "pipelines/main.yaml"
                    },{
                        "name": "pipeline-release",
                        "label": "release",
                        "path": "pipelines/release.yaml"
                    }
                ],
                "event_sources": [
                    {
                        "name": "webhook-feature-push",
                        "gitlab": {
                            "repo_name": "coderepo-sc-demo",
                            "revision": "^refs/heads/feature%-",
                            "events": [
                                "push_events"
                            ]
                        }
                    },{
                        "name": "webhook-fix-push",
                        "gitlab": {
                            "repo_name": "coderepo-sc-demo",
                            "revision": "^refs/heads/fix%-",
                            "events": [
                                "push_events"
                            ]
                        }
                    },{
                        "name": "webhook-main-push",
                        "gitlab": {
                            "repo_name": "coderepo-sc-demo",
                            "revision": "refs/heads/main",
                            "events": [
                                "push_events"
                            ]
                        },
                        "calendar": {
                            "schedule": "0 17 * * 1-5" 
                        }
                    },{
                        "name": "webhook-main-tag",
                        "gitlab": {
                            "repo_name": "coderepo-sc-demo",
                            "revision": ".*",
                            "events": [
                                "tag_push_events"
                            ]
                        }
                    }
                ],
                "pipeline_triggers": [
                    {
                        "event_source": "webhook-feature-push",
                        "pipeline": "pipeline-dev"
                    },{
                        "event_source": "webhook-fix-push",
                        "pipeline": "pipeline-dev"
                    },{
                        "event_source": "webhook-main-push",
                        "pipeline": "pipeline-main"
                    },{
                        "event_source": "webhook-main-tag",
                        "pipeline": "pipeline-release"
                    }
                ],
                "destination": "env-dev-demo",
                "isolation": "exclusive"
            }'
```

The property comments in the request body are shown below:

```JSONC
{
    // The project to which the project pipeline runtime belongs
    "project": "$project-name"
    // pipeline_source refers to the name of the code repository that stores the pipeline configurations.
    "pipeline_source": "$pipeline-coderepo-name",
    // pipelines represent the query conditions for obtaining pipeline configurations from the code repository. Please provide at least one set of data.
    // Support for multi-branch pipelines: If there are multiple branches in the code repository, the project pipeline runtime will obtain pipelines for multiple branches based on the query conditions.
    // The example of a multi-branch pipeline: If a team adopts a trunk-based branching strategy to carry out CI/CD activities for a product, 
    // there are branches in the product's code repository: main, feature-xxx, feature-yyy, and fix-zzz. Each branch has pipeline configurations stored in the same path.
    // During the development phase, when developers push code to the feature-xxx, feature-yyy, and fix-zz branches, it triggers the dev.yaml pipeline configuration to perform activities such as compilation and building.
    // During the integration and testing phase, when developers request to merge branches with prefixes feature and fix into the main branch and the code review is approved, it triggers the main.yaml pipeline configuration to perform integration and testing.
    // 发布阶段，发布人员向 main 分支打标签，触发 release.yaml 的流水线配置，向镜像仓库推送指定标签的镜像
    // During the release phase, when release manager or release engineer tags the main branch, it triggers the release.yaml pipeline configuration to push images with the specified tag to the image repository.
    // 为了实现多分支流水线的场景，您需要配置多组查询条件（参见请求示例）
    // To implement the scenario of multi-branch pipelines, you need to configure multiple sets of query conditions (see request example).
    "pipelines": [
        {
            // name 用于关联流水线和事件源
            // name is used to associate the pipeline with the event source.
            "name": "$pipeline-name",
            // 选填项
            // label 表示流水线运行时给流水线打标签时的标签属性
            // label represents the label attribute given to the pipeline at runtime.
            "label": "$pipeline-label",
            // path 指流水线配置在代码库中的相对路径，用于查询流水线
            // path refers to the relative path of the pipeline configuration in the code repository, used for querying the pipeline.
            "path": "$pipeline-path"
        }
    ],
    // event_sources 指触发流水线的事件源，目前支持 GitLab webhook 和 Calendar
    // event_sources refer to the sources that trigger the pipeline. Currently, GitLab webhook and Calendar are supported.
    // 请至少填写一组事件源，每组事件源中至少定义一种类型的事件源
    // Please provide at least one set of event sources, with at least one type of event source defined in each set.
    "event_sources": [
        {
            "name": "$event-source-name",
            // 选填项
            // gitlab 用于生成 GitLab webhook 以触发流水线
            // gitlab is used to generate GitLab webhooks to trigger the pipeline.
            "gitlab": {
                // repo_name 指 webhook 所属的 Gitlab project 的名称
                // repo_name refers to the name of the GitLab project to which the webhook belongs.
                "repo_name": "$repo-name",
                // revision 指需要被处理的分支，支持 Lua 正则表达式
                // revision refers to the branch that needs to be processed, supports Lua regular expressions.
                // 受限于底层工具，请约定分支的关键字，例如前缀或后缀，以匹配待处理的分支
                // Due to limitations in the underlying tools, please define keywords for branches, such as prefixes or suffixes, to match the branches to be processed.
                "revision": "$repo-revision",
                // events 指触发 webhook 的 Gitlab 事件，例如：push_events，tag_push_events 等
                // events refer to the GitLab events that trigger the webhook, such as push_events, tag_push_events, etc.
                // 参见：https://docs.gitlab.com/ee/api/projects.html#add-project-hook
                // See: https://docs.gitlab.com/ee/api/projects.html#add-project-hook
                "events": [
                    "$webhook-events"
                ]
            },
            // 选填项
            // calendar 指 calendar 类型的事件源，将定时生成事件来触发流水线
            // calendar refers to the event source of type calendar, which generates scheduled events to trigger the pipeline.
            // 如果使用该类型的事件源，请至少填写“schedule、interval”属性中的一项 
            // If using this type of event source, please provide at least one of the attributes "schedule" or "interval".
            // 如果两者都被定义了，“schedule”属性的优先级更高
            // If both are defined, the "schedule" attribute takes priority.
            "calendar": {
                // schedule 指定时调度规则，支持 cron 表达式，参见：https://en.wikipedia.org/wiki/Cron
                // schedule specifies the scheduling rule, supports cron expressions, see: https://en.wikipedia.org/wiki/Cron
                "schedule": "$cron-expression",
                // interval 指两个事件之间的时间间隔周期，例如：1s、30m、2h 等
                // interval specifies the time interval between two events, for example: 1s, 30m, 2h, etc.
                "interval": "$interval",
                // 选填项
                // exclusion_dates 指 calendar 类型事件源的例外日期和时间，这些时间内将不会触发事件
                // exclusion_dates specify the exception dates and times for calendar-type event sources, no events will be triggered during these times.
                // 日期时间格式遵循 ISO8601 格式，参见：https://en.wikipedia.org/wiki/ISO_8601
                // The date and time format follows the ISO8601 format, see: https://en.wikipedia.org/wiki/ISO_8601
                "exclusion_dates": [
                    "$exclusion-date"
                ],
                // 选填项
                // timezone 指执行调度的时区，参见：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
                // timezone specifies the timezone for executing the schedule, see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
                "timezone": "$timezone"
            }
        }
    ],
    // pipeline_triggers 表示待执行的流水线及其触发方式，请至少填写一组数据
    // pipeline_triggers represent the pipelines to be executed and their triggering methods. Please provide at least one set of data.
    "pipeline_triggers": [
        {
            // event_source 需填写为 event_sources 中 name 的属性值
            // event_source should be filled with the value of the "name" attribute in event_sources.
            "event_source": "$event-source-name",
            // pipeline 需填写为 pipelines 中 name 的属性值
            // pipeline should be filled with the value of the "name" attribute in pipelines.
            // 不同事件源可以和相同流水线组成多组数据，表示流水线可以被多个事件触发
            // Different event sources can form multiple sets of data with the same pipeline, indicating that the pipeline can be triggered by multiple events.
            "pipeline": "$pipeline-name",
            // 选填项
            // revision 表示流水线运行时将从代码库中哪个分支拉取流水线配置
            // revision represents the branch from which the pipeline retrieves the pipeline configuration at runtime.
            // 如果不填，将根据 event_sources 中 gitlab 的 revision 属性值决定拉取流水线配置的分支
            // If not specified, it will be determined based on the "revision" attribute value of gitlab in event_sources.
            "revision": "$pipeline-revision"
        }
    ],
    // destination 指执行流水线的目标环境
    // destination refers to the target environment where the pipeline is executed. 
    "destination": "$destination",
    // isolation 指流水线运行时相关资源的隔离性，包括：shared 或者 exclusive
    // isolation refers to the isolation of related resources during pipeline runtime, including: shared or exclusive.
    // shared 表示多个 event_sources 共享资源。例如：当某个 event_source 需要重启时，将影响其他的 event_sources
    // shared means multiple event_sources share resources. For example, when one event_source needs to be restarted, it will affect other event_sources.
    // shared 相较于 exclusive 模式，更节省资源
    // Compared to exclusive mode, shared mode saves more resources.
    // exclusive 表示每个 event_sources 独占资源，不同 event_sources 之间资源隔离互不影响
    // exclusive means each event_source has exclusive resources, and resource isolation between different event_sources does not affect each other.
    // exclusive 相较于 shared 模式，将占用更多资源
    // Compared to shared mode, exclusive mode will consume more resources.
    "isolation": "$isolation"
}
```

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server.
    # Replace the variable $gitlab-access-token with the GitLab access token.
    # Replace the variable $product_name with the name of the product to which the project pipeline runtime belongs.
    # Replace the variable $project_pipeline_runtime_name with the project pipeline runtime name.
    curl -X 'POST' \
    'HTTP://$api-server-address/api/v1/products/$product_name/projectpipelineruntimes/$project_pipeline_runtime_name' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer $gitlab-access-token' \
    -d '{
    # The name of the project to which the project pipeline runtime belongs
    "project": "$project_name",
    # The name of the code repository where the pipeline runtime configuration is stored.
    "pipeline_source": "$pipeline_coderepo_name",
    # Define properties such as name, label, and path to match the pipelines in the code repository that stores pipeline runtime configurations. This supports the definition of multiple branch pipelines.
    "pipelines": [
        {
        "name": "$pipeline_name",
        "label": "$pipeline_label",
        # Support wildcards
        "path": "$pipeline_path"
        }
    ],
    # The event sources that watch pipelines support GitLab webhooks and schedulers.
    "event_sources": [
        {
            # The name of event source
            "name": "$event_source_name",
            # GitLab webhook definition
            "gitlab": {
                # The name of code repository watched by webhook
                "repo_name": "$repo_name",
                # The revision of code repository watched by webhook
                "revision": "$repo_revision",
                # Webhook events, such as PushEvents, TagPushEvents, etc.
                "events": [
                    "$webhook_events"
                ]
            },
            # Scheduler definition
            "calendar": {
                # Define scheduling rules using cron expression, refer to https://en.wikipedia.org/wiki/Cron.
                "schedule": "$cron_expression",
                # The interval period for triggering a pipeline
                "interval": "$interval",
                # The exception dates and times for recurring events.
                "exclusion_dates": [
                    "$exclusion_date"
                ],
                # Timezone in which to run the schedule
                "timezone": "$timezone"
            }
        }
    ],

    # The composition of event sources and pipelines to define pipelines and their triggering methods.
    "pipeline_triggers": [
        {
            # The event source to trigger a pipeline. Please fill in the event source name from the defined event sources.
            "event_source": "$event_source_name",
            # The pipeline to be triggered. Please fill in the pipeline name from the defined pipelines.
            "pipeline": "$pipeline_name",
            # The pipeline revision to be triggered. If it is not filled, the pipeline revision will be determined based on 'event_sources.gitlab.revision'.
            "revision": "$pipeline_revision"
        }
    ],
    # The target environment of the pipeline runtime
    "destination": "$destination",
    # The isolation definition of the pipeline runtime related resources: shared(default) or exclusive
    "isolation": "$isolation"
    }'  
```

### Execute Create and Update Pipeline-Runtime Request

Use the curl command or other tools to execute the API request to create a project pipeline runtime.

After the request is successful, the resource file for the project pipeline runtime will be generated in the `default.project` repository of the specified product. The example of a resource file for a project pipeline runtime is shown below:

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

> When requesting the API to update a project pipeline runtime, the resource file for the project pipeline runtime will also be updated.
>
> If your account is a member of the GitLab group and has write permission to the `main` branch of the `default.project` repository, you can create or update project Project Pipeline runtimes.

## Delete Pipeline-Runtime (API)

### Compose Delete Pipeline-Runtime Request

Compose an API request example by API definition `ProjectPipelineRuntime_DeleteProjectPipelineRuntime` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
      'HTTP://$api-server-address/api/v1/products/$product_name/projectpipelineruntimes/$project_pipeline_runtime_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'DELETE' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/api-server-pr' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute Delete Pipeline-Runtime Request

Use the curl command or other tools to execute the API request to delete a project pipeline runtime.

After the request is successful, the resource file for the project pipeline runtime will be deleted in the `default.project` repository of the specified product, and the project pipeline runtime will be destroyed.

> If your account is a member of the GitLab group and has write permission to the `main` branch of the `default.project` repository, you can delete project Project Pipeline runtimes.

## List Pipeline-Runtimes (API)

### Compose List Pipeline-Runtimes Request

Compose an API request example by API definition `ProjectPipelineRuntime_ListProjectPipelineRuntimes` and add the access token as a request header.

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/projectpipelineruntimes' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
  curl -X 'GET' \
    'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute List Pipeline-Runtimes Request

Use the curl command or other tools to execute the API request to list project Project Pipeline runtimes. The response example for the project pipeline runtime list is shown below:

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

> If your account is a member of the GitLab group and has read permission to the `default.project` repository, you can list project Project Pipeline runtimes.

## View Pipeline-Runtime Details (API)

### Compose View Pipeline-Runtime Details Request

Compose an API request example by API definition `ProjectPipelineRuntime_GetProjectPipelineRuntime` and add the access token as a request header.

```Shell
    curl -X 'GET' \
      'HTTP://$api-server-address/api/v1/products/$product_name/projectpipelineruntimes/$project_pipeline_runtime_name' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'GET' \
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/api-server-pr' \
      -H 'accept: application/json' \
      -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute View Pipeline-Runtime Details Request

Use the curl command or other tools to execute the API request to view the project pipeline runtime details. The response example for viewing the project pipeline runtime details is similar to that of [listing project Project Pipeline runtimes](#execute-list-pipeline-runtimes-request).

> If your account is a member of the GitLab group and has read permission to the `default.project` repository, you can view the details of project Project Pipeline runtimes.

## Force Create/Update/Delete Pipeline-Runtime (API)

For special scenarios in which API verification needs to be skipped, refer to the [Initialize a Product](main-process.md#initialize-a-product) section.

Taking creating a project pipeline runtime as an example, if the value of the `destination` property is set to an invalid environment whose related cluster has been destroyed, you can forcibly submit a request by adding the `insecure_skip_check` query parameter with its value set to `true` , to submit the project pipeline runtime resource file. The snippets of the request example are shown below:

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
