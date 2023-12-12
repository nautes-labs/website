---
footerLink: /guide/user-guide/project-pipeline-runtime
title: 维护流水线运行时
---
# 维护流水线运行时

在开始本节之前，请确保您已阅读 [主体流程](main-process.md) 章节，了解执行流水线和部署应用的主体流程和相关术语。

流水线运行时定义了用于集成项目的流水线的配置声明，如：流水线配置的存储位置、流水线的触发方式、运行流水线的目标环境等。

支持通过 [命令行](run-a-pipeline.md#初始化产品) 和 API 两种方式维护流水线运行时。

## 前提条件

### 创建 access token

您需要创建一个 access token，作为请求 API 的请求头。详情参考 [创建 access token](product.md#创建-access-token)。

### 导入证书

在使用 HTTPS 协议访问 Nautes API Server 之前，请先[导入证书](run-a-pipeline.md#导入证书)。

### 创建产品

流水线运行时归属于项目，而项目归属于产品，您需要创建至少一个[产品](product.md#创建产品api)。

### 创建项目

流水线运行时归属于项目，您需要创建至少一个属于指定产品的[项目](project.md#创建和更新项目api)。

### 创建代码库

流水线运行时需要监听存储流水线配置的代码库，您需要创建至少一个属于指定项目的[代码库](code-repo.md#创建和更新代码库api)。

### 创建环境

流水线运行时需要使用关联运行时集群的环境进行项目集成，您需要创建至少一个属于指定产品的[环境](environment.md#创建和更新环境api)。

## 创建和更新流水线运行时（API）

### 生成创建/更新流水线运行时的 API 请求

通过接口定义 `ProjectPipelineRuntime_SaveProjectPipelineRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

请求示例如下：

```Shell
    # $api-server-address 指 Nautes API Server 的访问地址
    # $gitlab-access-token 指 GitLab access token
    # $product-name 指流水线运行时所属产品的名称
    # $project-pipeline-runtime-name 指流水线运行时的名称
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
                "destination": {
                  "environment": "env-dev-demo",
                  "namespace": "pr-demo-namespace"
                },
                "additionalResources": {
                  "git": {
                    "codeRepo": "coderepo-sc-demo",
                    "revision": "main",
                    "path": "test"
                  }
                },
                "hooks": {
                    "pre_hooks": [
                        {
                            "name": "ls",
                            "vars": {
                                "imageName": "bash",
                                "printPath": "/var"
                            },
                            "alias": "pre-ls"
                        }
                    ],
                    "post_hooks": [
                        {
                            "name": "ls",
                            "vars": {
                                "imageName": "bash",
                                "printPath": "/usr"
                            },
                            "alias": "post-ls"
                        }
                    ]
                },
                "isolation": "exclusive",
                "account": "pr-demo-account"
            }'
```

请求体中属性的注释如下：

```JSONC
{
    // project 指流水线运行时归属于哪个项目
    "project": "$project-name",
    // pipeline_source 指存储流水线配置的代码库的名称
    "pipeline_source": "$pipeline-coderepo-name",
    // pipelines 主要用于从代码库中获取流水线配置，请至少填写一组数据
    // 支持多分支流水线：如果代码库中有多条分支，流水线运行时将根据 pipelines 获取多个分支的流水线
    // 多分支流水线的示例：一个团队采用主干开发的分支策略，并且源码库中存在主干和多条短周期的功能分支
    // 在开发阶段，开发人员向功能分支推送代码，均触发开发流水线，流水线将执行静态代码检查、编译构建和单元测试等任务
    // 在集成阶段，开发人员提交 MR，该 MR 用于将功能分支向主干合并
    // 如果 MR 审核通过，将触发集成流水线，流水线将执行编译构建、部署和测试等任务
    // 在发布阶段，发布人员基于 main 分支打标签，将触发发布流水线，流水线将向生产态镜像仓库推送生产镜像
    // 为了实现多分支流水线的场景，您需要配置多组 pipeline（参见请求示例）
    "pipelines": [
        {
            // name 用于关联流水线和事件源
            "name": "$pipeline-name",
            // 选填项
            // label 表示流水线运行时给流水线打标签时的标签属性
            "label": "$pipeline-label",
            // path 指流水线配置在代码库中的相对路径，用于查询流水线配置
            "path": "$pipeline-path"
        }
    ],
    // event_sources 指触发流水线的事件源，目前支持 GitLab webhook 和 Calendar
    // 请至少填写一组事件源，每组事件源中至少定义一种类型的事件源
    "event_sources": [
        {
            "name": "$event-source-name",
            // 选填项
            // gitlab 用于生成 GitLab webhook 以触发流水线
            "gitlab": {
                // repo_name 指事件源所属的 Gitlab project 的名称
                "repo_name": "$repo-name",
                // revision 指需要被处理的分支，支持 Lua 正则表达式
                // Lua 正则表达式不同于标准正则表达式
                // 参见：http://lua-users.org/wiki/PatternsTutorial
                "revision": "$repo-revision",
                // events 指触发 webhook 的 Gitlab 事件，例如：push_events，tag_push_events 等
                // 参见：https://docs.gitlab.com/ee/api/projects.html#add-project-hook
                "events": [
                    "$webhook-events"
                ]
            },
            // 选填项
            // calendar 指 calendar 类型的事件源，将定时生成事件来触发流水线
            // 如果使用该类型的事件源，请至少填写“schedule、interval”属性中的一项 
            // 如果两者都被定义了，“schedule”属性的优先级更高
            "calendar": {
                // schedule 指定时调度规则，支持 cron 表达式，参见：https://en.wikipedia.org/wiki/Cron
                "schedule": "$cron-expression",
                // interval 指两个事件之间的时间间隔周期，例如：1s、30m、2h 等
                "interval": "$interval",
                // 选填项
                // exclusion_dates 指 calendar 类型事件源的例外日期和时间，这些时间内将不会触发事件
                // 日期时间格式遵循 ISO8601 格式，参见：https://en.wikipedia.org/wiki/ISO_8601
                "exclusion_dates": [
                    "$exclusion-date"
                ],
                // 选填项
                // timezone 指执行调度的时区，参见：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
                "timezone": "$timezone"
            }
        }
    ],
    // pipeline_triggers 表示待执行的流水线及其触发方式，请至少填写一组数据
    "pipeline_triggers": [
        {
            // event_source 需填写为 event_sources 中 name 的属性值
            "event_source": "$event-source-name",
            // pipeline 需填写为 pipelines 中 name 的属性值
            // 不同事件源可以和相同流水线组成多组数据，表示流水线可以被多个事件触发
            "pipeline": "$pipeline-name",
            // 选填项
            // revision 表示获取流水线配置的分支
            // 如果不填，将根据 event_sources 中 gitlab 的 revision 属性值决定获取流水线配置的分支
            "revision": "$pipeline-revision"
        }
    ],
    // destination 表示承载流水线运行时的目标环境
    "destination": {
      // environment 指环境名称
      "environment": "$environment",
      // 选填项
      // namespace 指自定义的 namespace，表示将在目标环境的自定义 namespace 中执行流水线
      // 如果不填，将创建与流水线运行时同名的默认 namespace
      "namespace": "$namespace"
    },
    // 选填项
    // additionalResources 指运行流水线所需要的资源，例如 ConfigMap、PVC 等
    // 支持自定义流水线资源的代码库、代码库分支和代码库路径
    "additionalResources": {
      "git": {
        // codeRepo 指存储流水线资源的代码库的名称
        // 如果 codeRepo 与 pipeline_source 相同：表示流水线资源与流水线存储在相同的代码库
        // 如果 codeRepo 与 pipeline_source 不同：表示流水线资源存储在独立于流水线的代码库，适用于多条流水线共享资源等场景，
        // 这时需要将 codeRepo 授权给 pipeline_source，以确保正常创建流水线资源
        "codeRepo": "$pipeline-res-coderepo-name",
        // revision 指存储流水线资源的代码库的分支
        "revision": "$pipeline-res-coderepo-revision",
        // path 指存储流水线资源的代码库的路径
        "path": "$pipeline-res-coderepo-path"
      }
    }, 
    // 选填项
    // hooks 指流水线执行前或执行后的自定义步骤
    // 如果在 runtime-operator 中已添加插件，可以在流水线执行前或执行后添加自定义步骤
    // 默认不支持任何自定义步骤
    "hooks": {
        // pre_hooks 指流水线执行前的步骤
        // 如果包含多个步骤，将按照编排顺序执行
        "pre_hooks": [
            {
                // hook 名称
                "name": "$hook-name",
                // hook 参数
                "vars": {
                    "$hook-params-1": "$hook-value-1",
                    "$hook-params-2": "$hook-value-2"
                },
                // 选填项
                // hook 别名
                // 在一个流水线运行时中，同一侧（指流水线执行前或执行后）不能设置多个相同的 hook
                // 如果需要使用相同的hook，只能在不同侧定义步骤，并设置 alias 以确保别名不重复
                "alias": "$hook-alias-name"
            }
        ],
        // post_hooks 指流水线执行后的步骤
        // 如果包含多个步骤，将按照编排顺序执行
        "post_hooks": [
            {
                "name": "$hook-name",
                "vars": {
                    "$hook-params-1": "$hook-value-1",
                    "$hook-params-2": "$hook-value-2"
                },
                "alias": "$hook-alias-name"
            }
        ]
    },
    // isolation 指流水线运行时相关资源的隔离性，包括：shared 或者 exclusive
    // shared 表示多个 event_sources 共享资源。例如：当某个 event_source 需要重启时，将影响其他的 event_sources
    // shared 相较于 exclusive 模式，更节省资源
    // exclusive 表示每个 event_sources 独占资源，不同 event_sources 之间资源隔离互不影响
    // exclusive 相较于 shared 模式，将占用更多资源
    "isolation": "$isolation",
    // 选填项
    // account 指自定义的 account，表示将在目标环境的 namespace 中创建 service account，该账号拥有确保流水线运行时正常运行的相关权限，例如获取代码库、获取制品库密钥等
    // 如果不填，将创建与流水线运行时同名的默认 account
    "account": "$account"
}
```

> 关于将代码库授权给流水线，详情参见[初始化产品](run-a-pipeline.md#初始化产品)。
>
> 关于如何添加流水线插件，详情参见[编写流水线插件](how_to_write_a_pipeline_plugin.md)。

### 执行创建/更新流水线运行时的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以新增流水线运行时。

请求成功后，将在指定产品的 `default.project` 代码库中生成流水线运行时的资源文件。流水线运行时的资源文件示例如下：

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: ProjectPipelineRuntime
    metadata:
        name: pr-demo
        namespace: product-xxxx
    spec:
        account: pr-demo-account
        destination:
          environment: env-dev-demo
          namespace: pr-demo-namespace
        additionalResources:
          git:
            codeRepo: repo-3
            revision: main
            path: test
        eventSources:
        - gitlab:
            events:
            - push_events
            repoName: repo-3
            revision: ^refs/heads/feature%-
          name: webhook-feature-push
        - gitlab:
            events:
            - push_events
            repoName: repo-3
            revision: ^refs/heads/fix%-
          name: webhook-fix-push
        - calendar:
            schedule: '0 17 * * 1-5'
          gitlab:
            events:
            - push_events
            repoName: repo-3
            revision: refs/heads/main
          name: webhook-main-push
        - gitlab:
            events:
            - tag_push_events
            repoName: repo-3
            revision: .*
          name: webhook-main-tag
        isolation: exclusive
        pipelineSource: repo-3
        pipelineTriggers:
        - eventSource: webhook-feature-push
          pipeline: pipeline-dev
        - eventSource: webhook-fix-push
          pipeline: pipeline-dev
        - eventSource: webhook-main-push
          pipeline: pipeline-main
        - eventSource: webhook-main-tag
          pipeline: pipeline-release
        pipelines:
        - label: dev
          name: pipeline-dev
          path: pipelines/dev.yaml
        - label: main
          name: pipeline-main
          path: pipelines/main.yaml
        - label: release
          name: pipeline-release
          path: pipelines/release.yaml
        project: project-demo
        hooks:
            preHooks:
            - name: ls
              alias: pre-ls
              vars: 
                imageName: bash
                printPath: /var
            postHooks:
            - name: ls 
              alias: post-ls          
              vars: 
                imageName: bash
                printPath: /var
```

> 请求 API 更新流水线运行时也将更新流水线运行时的资源文件。
>
> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的 main 分支的写入权限，才可以创建或者更新流水线运行时。

## 删除流水线运行时（API）

### 生成删除流水线运行时的 API 请求

通过接口定义 `ProjectPipelineRuntime_DeleteProjectPipelineRuntime` 生成 API 请求示例，并添加 access token 作为请求头。

```Shell
    curl -X 'DELETE' \
        'HTTP://$api-server-address/api/v1/products/$product-name/projectpipelineruntimes/$project-pipeline-runtime-name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'DELETE' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/pr-demo' \
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
            "account": "pr-demo-account",
            "name": "pr-demo",
            "project": "project-demo",
            "pipeline_source": "coderepo-sc-demo",
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
                },
                {
                    "name": "webhook-fix-push",
                    "gitlab": {
                        "repo_name": "coderepo-sc-demo",
                        "revision": "^refs/heads/fix%-",
                        "events": [
                            "push_events"
                        ]
                    }
                },
                {
                    "name": "webhook-main-push",
                    "gitlab": {
                        "repo_name": "coderepo-sc-demo",
                        "revision": "refs/heads/main",
                        "events": [
                            "push_events"
                        ]
                    },
                    "calendar": "0 17 * * 1-5"
                },
                {
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
            "pipelines": [
                {
                    "name": "pipeline-dev",
                    "label": "dev",
                    "path": "pipelines/dev.yaml"
                },
                {
                    "name": "pipeline-main",
                    "label": "main",
                    "path": "pipelines/main.yaml"
                },
                {
                    "name": "pipeline-release",
                    "label": "release",
                    "path": "pipelines/release.yaml"
                }
            ],
            "pipeline_triggers": [
                {
                    "event_source": "webhook-feature-push",
                    "pipeline": "pipeline-dev"
                },
                {
                    "event_source": "webhook-fix-push",
                    "pipeline": "pipeline-dev"
                },
                {
                    "event_source": "webhook-main-push",
                    "pipeline": "pipeline-main"
                },
                {
                    "event_source": "webhook-main-tag",
                    "pipeline": "pipeline-release"
                }
            ],
            "destination": {
                "environment": "env-dev-demo",
                "namespace": "pr-demo-namespace"
            },
            "additionalResources": {
                "git": {
                    "codeRepo": "coderepo-sc-demo",
                    "revision": "main",
                    "path": "test"
                }
            },
            "hooks": {
                "pre_hooks": [
                    {
                        "name": "ls",
                        "vars": {
                            "imageName": "bash",
                            "printPath": "/var"
                        },
                        "alias": "pre-ls"
                    }
                ],
                "post_hooks": [
                    {
                        "name": "ls",
                        "vars": {
                            "imageName": "bash",
                            "printPath": "/usr"
                        },
                        "alias": "post-ls"
                    }
                ]
            }
            "isolation": "exclusive"
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
        'HTTP://$api-server-address/api/v1/products/$product-name/projectpipelineruntimes/$project-pipeline-runtime-name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

替换变量后的请求示例如下：

```Shell
    curl -X 'GET' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/pr-demo' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### 执行查看流水线运行时详情的 API 请求

使用 curl 命令或者其他工具执行 API 请求，以查看流水线运行时详情。流水线运行时详情的返回值示例与[查询流水线运行时列表](#执行查询流水线运行时列表的-api-请求)类似。

> 只有当您的账号是 GitLab 的 group 成员，并且具备对 `default.project` 代码库的读取权限，才可以查看流水线运行时详情。

## 强制创建/更新/删除流水线运行时（API）

适用于需要跳过 API 校验的特殊场景，详情参见[初始化产品](main-process.md#初始化产品)。

以创建流水线运行时为例，将 `destination.environment` 属性设置为不合规的 environment，启用 `insecure-skip-check` 查询参数并设置其值为 `true`，可以强制提交流水线运行时的资源文件。请求示例的片段如下：

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
                "destination": {
                  "environment": "env-dev-invalid",
                  "namespace": "pr-demo-namespace"
                },
                "isolation": "shared",
                "account": "pr-demo-account"
            }'
```
