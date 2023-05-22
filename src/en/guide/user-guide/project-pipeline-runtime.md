---
footerLink: /guide/user-guide/project-pipeline-runtime
title: Maintain Pipeline-Runtime
---
# Maintain Pipeline-Runtime

Before starting this section, please ensure that you have read the [Main Process](main-process.md) section to understand the main process and related terminology for deploying applications in Nautes.

A pipeline Runtime defines the configuration declaration of a pipeline used to integrate projects, such as the storage location of pipeline configurations, the pipeline's triggering method and the target environment for running the pipeline, etc.

Support both [Command Line](deploy-an-application.md#initialize-a-product) and API for maintaining project pipeline runtimes.

## Prerequisites

### Create Access Token

You need to create an access token to use as a request header for requesting APIs. For more information, refer to [Create Access Token](product.md#create-access-token).

### Import Certificates

If you want to access Nautes API Server using the HTTPS protocol, you need to [import certificates](deploy-an-application.md#import-certificates).

### Create Product

Pipeline runtimes belong to a project, and a project belongs to a product, so you need to create at least one [product](product.md#create-product-api).

### Create Project

Pipeline runtimes belong to a project, so you need to create at least one [project](project.md#create-and-update-project-api).

### Create Repository

Pipeline runtimes need to watch the pipeline configurations in the repositories, so you need to create at least one repository related to the specified [project](project.md#create-and-update-project-api).

### Create Environment

Pipeline runtimes need to run on the runtime clusters related to the environments in order to integrate projects, so you need to create at least one environment related to the specified [product](product.md#create-product-api).

## Create and Update Pipeline-Runtime (API)

### Compose Create and Update Pipeline-Runtime Request

Compose an API request example by API definition `ProjectPipelineRuntime_SaveProjectPipelineRuntime` and add the access token as a request header.

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
                # The dates excluded by scheduling rules
                "exclusion_dates": [
                    "$exclusion_date"
                ],
                # Time zone
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

The request example after replacing the variables is shown below:

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
> If your account is a member of the GitLab group and has write permission to the `main` branch of the `default.project` repository, you can create or update project pipeline runtimes.

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

> If your account is a member of the GitLab group and has write permission to the `main` branch of the `default.project` repository, you can delete project pipeline runtimes.

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

Use the curl command or other tools to execute the API request to list project pipeline runtimes. The response example for the project pipeline runtime list is shown below:

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

> If your account is a member of the GitLab group and has read permission to the `default.project` repository, you can list project pipeline runtimes.

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

Use the curl command or other tools to execute the API request to view the project pipeline runtime details. The response example for viewing the project pipeline runtime details is similar to that of [listing project pipeline runtimes](#execute-list-pipeline-runtimes-request).

> If your account is a member of the GitLab group and has read permission to the `default.project` repository, you can view the details of project pipeline runtimes.

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
