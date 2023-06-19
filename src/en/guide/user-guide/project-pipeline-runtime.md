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
    # Replace the variable $product-name with the name of the product to which the project pipeline runtime belongs.
    # Replace the variable $project-pipeline-runtime-name with the project pipeline runtime name.
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
    // The project to which the project pipeline runtime belongs.
    "project": "$project-name"
    // pipeline_source refers to the name of the code repository that stores the pipeline configurations.
    "pipeline_source": "$pipeline-coderepo-name",
    // pipelines are primarily used to retrieve the pipeline configuration from the code repository, 
    // please provide at least one set of data. 
    // Support for multi-branch pipelines: If there are multiple branches in the code repository, 
    // the project pipeline runtime will retrieve the pipelines of multiple branches based on the 'pipelines' properties.
    
    // An example of multi-branch pipelines: 
    // A team adopts trunk-based development and there are a trunk named 'main' and multiple short-lived feature branches in the code repository.
    // During the development stage, developers push code to feature branches, triggering the pipeline configuration of dev.yaml. 
    // The pipeline will carry out tasks such as static code analysis, building, and unit testing.
    
    // During the integration and testing phase, 
    // developers request to merge branches prefixed with feature and fix into the main branch. 
    // After code review approval, 
    // it will trigger the pipeline configuration of main.yaml to perform integration, testing and other activities.
    // During the integration stage, developers submit MRs to merge the feature branches into the trunk. 
    // If the MR is approved, it will trigger the pipeline configuration of main.yaml. 
    // The pipeline will carry out tasks such as building, deployment, and testing.
    
    // During the release phase, when release manager or release engineer tags the main branch, 
    // it triggers the pipeline configuration of release.yaml to push images with the specified tags to the image repository.
    // To implement a multi-branch pipeline scenario, you need to configure multiple sets of pipelines (refer to the request example).  
    "pipelines": [
        {
            // name is used to associate the pipeline with the event source.
            "name": "$pipeline-name",
            // optional
            // label refers to the label property when the pipeline is tagged by the project pipeline runtime.
            "label": "$pipeline-label",
            // path refers to the relative path of the pipeline configuration in the code repository, 
            // which is used to retrieve the pipeline configuration.
            "path": "$pipeline-path"
        }
    ],
    // event_sources refer to the event sources that trigger the pipelines, currently supporting GitLab webhook and Calendar. 
    // Please provide at least one set of event sources, with at least one type of event source defined in each set. 
    "event_sources": [
        {
            "name": "$event-source-name",
            // optional
            // gitlab is used to generate GitLab webhooks to trigger the pipelines.
            "gitlab": {
                // repo_name refers to the name of the GitLab project to which the webhook belongs.
                "repo_name": "$repo-name",
                // revision refers to the branch that needs to be processed, supporting Lua regular expressions.
                // Due to the limitations of the underlying tools, please define keywords for branches, 
                // such as prefixes or suffixes, to match the branches to be processed(refer to the request example).
                "revision": "$repo-revision",
                // events refer to the GitLab events that trigger the webhook, such as push_events, tag_push_events, etc.
                // Refer to: https://docs.gitlab.com/ee/api/projects.html#add-project-hook
                "events": [
                    "$webhook-events"
                ]
            },
            // optional
            // calendar refers to the calendar type of event source, which will generate events on schedule to trigger the pipeline.
            // If you use this type of event source, please provide at least one of the properties "schedule" or "interval". 
            // If both are defined, the "schedule" property has higher priority.
            "calendar": {
                // schedule refers to the scheduling rule, supporting cron expressions. 
                // Refer to: https://en.wikipedia.org/wiki/Cron
                "schedule": "$cron-expression",
                // interval refers to the time interval period between two events, such as: 1s, 30m, 2h, etc. 
                "interval": "$interval",
                // optional
                // exclusion_dates refers to the exception dates and times of the calendar type event source, 
                // and no events will be triggered during these times.
                // The date and time format follows the ISO8601 format. 
                // Refer to: https://en.wikipedia.org/wiki/ISO_8601
                "exclusion_dates": [
                    "$exclusion-date"
                ],
                // optional
                // timezone refers to the timezone for executing the schedule. 
                // Refer to: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
                "timezone": "$timezone"
            }
        }
    ],
    // pipeline_triggers represent the pipelines to be executed and their triggering methods. 
    // Please provide at least one set of data.
    "pipeline_triggers": [
        {
            // event_source should be filled with the 'name' property value from event_sources.
            "event_source": "$event-source-name",
            // pipeline should be filled with the 'name' property value from pipelines.
            // Different event sources can form multiple sets of data with the same pipeline, 
            // indicating that the pipeline can be triggered by multiple events. 
            "pipeline": "$pipeline-name",
            // optional
            // revision refers to the branch for retrieving the pipeline configuration. 
            // If not specified, it will be determined based on the 'revision' property value of the gitlab in event_sources.
            "revision": "$pipeline-revision"
        }
    ],
    // destination refers to the target environment for executing the pipeline.
    "destination": "$destination",
    // isolation refers to the isolation of related resources of the project pipeline runtime, including: shared or exclusive.
    // shared means that multiple event_sources share resources. 
    // For example, when a certain event_source needs to be restarted, it will affect other event_sources. 
    // Compared with exclusive mode, shared mode saves more resources. 
    // exclusive means that each event_sources has exclusive resources, and resources are isolated between different event_sources. 
    // Compared with shared mode, exclusive mode will consume more resources.
    "isolation": "$isolation"
}
```

### Execute Create and Update Pipeline-Runtime Request

Use the curl command or other tools to execute the API request to create a project pipeline runtime.

After the request is successful, the resource file for the project pipeline runtime will be generated in the `default.` `project` repository of the specified product. The example of a resource file for a project pipeline runtime is shown below:

```yaml
    apiVersion: nautes.resource.nautes.io/v1alpha1
    kind: ProjectPipelineRuntime
    metadata:
        name: pr-demo
        namespace: product-xxxx
    spec:
        destination: env-dev-demo
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
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/pr-demo' \
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
            "destination": "env-dev-demo",
            "isolation": "exclusive"
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
      'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/products/nautes-labs/projectpipelineruntimes/pr-demo' \
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
