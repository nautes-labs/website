---
footerLink: /api/tadmin/projectpipelineruntime
title: 流水线运行时
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="project-pipeline-runtime-api">Project Pipeline Runtime API v0.3.1</h1>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>

# Authentication

- HTTP Authentication, scheme: Bearer 

<h1 id="project-pipeline-runtime-api-projectpipelineruntime">ProjectPipelineRuntime</h1>

## ListProjectPipelineRuntimes

<a id="opIdListProjectPipelineRuntimes"></a>

`GET /api/v1/products/{product_name}/projectpipelineruntimes`

<h3 id="listprojectpipelineruntimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|To list the product name of the repository.|
|field_selector|query|string|false|Filter the list by field.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "string",
      "project": "string",
      "pipeline_source": "string",
      "event_sources": [
        {
          "name": "string",
          "gitlab": {
            "repo_name": "string",
            "revision": "string",
            "events": [
              "string"
            ]
          },
          "calendar": {
            "schedule": "string",
            "interval": "string",
            "exclusion_dates": [
              "string"
            ],
            "timezone": "string"
          }
        }
      ],
      "pipelines": [
        {
          "name": "string",
          "label": "string",
          "path": "string"
        }
      ],
      "pipeline_triggers": [
        {
          "event_source": "string",
          "pipeline": "string",
          "revision": "string"
        }
      ],
      "destination": "string",
      "isolation": "string"
    }
  ]
}
```

<h3 id="listprojectpipelineruntimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.projectpipelineruntime.v1.ListsReply](#schemaapi.projectpipelineruntime.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## GetProjectPipelineRuntime

<a id="opIdGetProjectPipelineRuntime"></a>

`GET /api/v1/products/{product_name}/projectpipelineruntimes/{project_pipeline_runtime_name}`

<h3 id="getprojectpipelineruntime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|Name of the product associated with the pipeline.|
|project_pipeline_runtime_name|path|string|true|Name of the pipeline runtime environment.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "project": "string",
  "pipeline_source": "string",
  "event_sources": [
    {
      "name": "string",
      "gitlab": {
        "repo_name": "string",
        "revision": "string",
        "events": [
          "string"
        ]
      },
      "calendar": {
        "schedule": "string",
        "interval": "string",
        "exclusion_dates": [
          "string"
        ],
        "timezone": "string"
      }
    }
  ],
  "pipelines": [
    {
      "name": "string",
      "label": "string",
      "path": "string"
    }
  ],
  "pipeline_triggers": [
    {
      "event_source": "string",
      "pipeline": "string",
      "revision": "string"
    }
  ],
  "destination": "string",
  "isolation": "string"
}
```

<h3 id="getprojectpipelineruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.projectpipelineruntime.v1.GetReply](#schemaapi.projectpipelineruntime.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## SaveProjectPipelineRuntime

<a id="opIdSaveProjectPipelineRuntime"></a>

`POST /api/v1/products/{product_name}/projectpipelineruntimes/{project_pipeline_runtime_name}`

> Body parameter

```json
{
  "project": "string",
  "pipeline_source": "string",
  "pipelines": [
    {
      "name": "string",
      "label": "string",
      "path": "string"
    }
  ],
  "event_sources": [
    {
      "name": "string",
      "gitlab": {
        "repo_name": "string",
        "revision": "string",
        "events": [
          "string"
        ]
      },
      "calendar": {
        "schedule": "string",
        "interval": "string",
        "exclusion_dates": [
          "string"
        ],
        "timezone": "string"
      }
    }
  ],
  "pipeline_triggers": [
    {
      "event_source": "string",
      "pipeline": "string",
      "revision": "string"
    }
  ],
  "destination": "string",
  "isolation": "string"
}
```

<h3 id="saveprojectpipelineruntime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|Name of the product associated with the pipeline.|
|project_pipeline_runtime_name|path|string|true|Name of the pipeline runtime associated with the project.|
|insecure_skip_check|query|boolean|false|Whether to skip checking global resource detection when making requests.|
|body|body|[api.projectpipelineruntime.v1.SaveRequest_Body](#schemaapi.projectpipelineruntime.v1.saverequest_body)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="saveprojectpipelineruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.projectpipelineruntime.v1.SaveReply](#schemaapi.projectpipelineruntime.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## DeleteProjectPipelineRuntime

<a id="opIdDeleteProjectPipelineRuntime"></a>

`DELETE /api/v1/products/{product_name}/projectpipelineruntimes/{project_pipeline_runtime_name}`

<h3 id="deleteprojectpipelineruntime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|Name of the product associated with the pipeline.|
|project_pipeline_runtime_name|path|string|true|Name of the pipeline runtime associated with the project.|
|insecure_skip_check|query|boolean|false|Whether to skip checking global resource detection when making requests.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteprojectpipelineruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.projectpipelineruntime.v1.DeleteReply](#schemaapi.projectpipelineruntime.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_api.projectpipelineruntime.v1.Calendar">api.projectpipelineruntime.v1.Calendar</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.calendar"></a>
<a id="schema_api.projectpipelineruntime.v1.Calendar"></a>
<a id="tocSapi.projectpipelineruntime.v1.calendar"></a>
<a id="tocsapi.projectpipelineruntime.v1.calendar"></a>

```json
{
  "schedule": "string",
  "interval": "string",
  "exclusion_dates": [
    "string"
  ],
  "timezone": "string"
}

```

Defines the event source for triggering a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|string|false|none|Schedule is a cron-like expression. For reference, see: https://en.wikipedia.org/wiki/Cron|
|interval|string|false|none|Interval is a string that describes an interval duration, e.g. 1s, 30m, 2h...|
|exclusion_dates|[string]|false|none|ExclusionDates defines the list of DATE-TIME exceptions for recurring events.|
|timezone|string|false|none|Timezone in which to run the schedule|

<h2 id="tocS_api.projectpipelineruntime.v1.DeleteReply">api.projectpipelineruntime.v1.DeleteReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.deletereply"></a>
<a id="schema_api.projectpipelineruntime.v1.DeleteReply"></a>
<a id="tocSapi.projectpipelineruntime.v1.deletereply"></a>
<a id="tocsapi.projectpipelineruntime.v1.deletereply"></a>

```json
{
  "message": "string"
}

```

Proto message for the response to a delete pipeline configuration request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A message describing the status of the delete request.|

<h2 id="tocS_api.projectpipelineruntime.v1.EventSource">api.projectpipelineruntime.v1.EventSource</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.eventsource"></a>
<a id="schema_api.projectpipelineruntime.v1.EventSource"></a>
<a id="tocSapi.projectpipelineruntime.v1.eventsource"></a>
<a id="tocsapi.projectpipelineruntime.v1.eventsource"></a>

```json
{
  "name": "string",
  "gitlab": {
    "repo_name": "string",
    "revision": "string",
    "events": [
      "string"
    ]
  },
  "calendar": {
    "schedule": "string",
    "interval": "string",
    "exclusion_dates": [
      "string"
    ],
    "timezone": "string"
  }
}

```

Defines the types of event sources that can trigger a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the event source.|
|gitlab|[api.projectpipelineruntime.v1.Gitlab](#schemaapi.projectpipelineruntime.v1.gitlab)|false|none|none|
|calendar|[api.projectpipelineruntime.v1.Calendar](#schemaapi.projectpipelineruntime.v1.calendar)|false|none|Defines the event source for triggering a pipeline.|

<h2 id="tocS_api.projectpipelineruntime.v1.GetReply">api.projectpipelineruntime.v1.GetReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.getreply"></a>
<a id="schema_api.projectpipelineruntime.v1.GetReply"></a>
<a id="tocSapi.projectpipelineruntime.v1.getreply"></a>
<a id="tocsapi.projectpipelineruntime.v1.getreply"></a>

```json
{
  "name": "string",
  "project": "string",
  "pipeline_source": "string",
  "event_sources": [
    {
      "name": "string",
      "gitlab": {
        "repo_name": "string",
        "revision": "string",
        "events": [
          "string"
        ]
      },
      "calendar": {
        "schedule": "string",
        "interval": "string",
        "exclusion_dates": [
          "string"
        ],
        "timezone": "string"
      }
    }
  ],
  "pipelines": [
    {
      "name": "string",
      "label": "string",
      "path": "string"
    }
  ],
  "pipeline_triggers": [
    {
      "event_source": "string",
      "pipeline": "string",
      "revision": "string"
    }
  ],
  "destination": "string",
  "isolation": "string"
}

```

Response message format for getting pipeline information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the pipeline.|
|project|string|false|none|Name of the project associated with the pipeline.|
|pipeline_source|string|false|none|Configuration repository of the pipeline.|
|event_sources|[[api.projectpipelineruntime.v1.EventSource](#schemaapi.projectpipelineruntime.v1.eventsource)]|false|none|Other repositories outside the pipeline (optional).|
|pipelines|[[api.projectpipelineruntime.v1.Pipeline](#schemaapi.projectpipelineruntime.v1.pipeline)]|false|none|Pipelines associated with the product.|
|pipeline_triggers|[[api.projectpipelineruntime.v1.PipelineTriggers](#schemaapi.projectpipelineruntime.v1.pipelinetriggers)]|false|none|Pipeline event triggers.|
|destination|string|false|none|Target deployment environment.|
|isolation|string|false|none|Isolation definition of pipeline runtime related resources: shared(default) or exclusive.|

<h2 id="tocS_api.projectpipelineruntime.v1.Gitlab">api.projectpipelineruntime.v1.Gitlab</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.gitlab"></a>
<a id="schema_api.projectpipelineruntime.v1.Gitlab"></a>
<a id="tocSapi.projectpipelineruntime.v1.gitlab"></a>
<a id="tocsapi.projectpipelineruntime.v1.gitlab"></a>

```json
{
  "repo_name": "string",
  "revision": "string",
  "events": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repo_name|string|false|none|Gitlab project name.|
|revision|string|false|none|Supports regular expressions.|
|events|[string]|false|none|Gitlab webhook events: push_events, tag_push_events, etc.|

<h2 id="tocS_api.projectpipelineruntime.v1.ListsReply">api.projectpipelineruntime.v1.ListsReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.listsreply"></a>
<a id="schema_api.projectpipelineruntime.v1.ListsReply"></a>
<a id="tocSapi.projectpipelineruntime.v1.listsreply"></a>
<a id="tocsapi.projectpipelineruntime.v1.listsreply"></a>

```json
{
  "items": [
    {
      "name": "string",
      "project": "string",
      "pipeline_source": "string",
      "event_sources": [
        {
          "name": "string",
          "gitlab": {
            "repo_name": "string",
            "revision": "string",
            "events": [
              "string"
            ]
          },
          "calendar": {
            "schedule": "string",
            "interval": "string",
            "exclusion_dates": [
              "string"
            ],
            "timezone": "string"
          }
        }
      ],
      "pipelines": [
        {
          "name": "string",
          "label": "string",
          "path": "string"
        }
      ],
      "pipeline_triggers": [
        {
          "event_source": "string",
          "pipeline": "string",
          "revision": "string"
        }
      ],
      "destination": "string",
      "isolation": "string"
    }
  ]
}

```

Response message format for listing pipelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[api.projectpipelineruntime.v1.GetReply](#schemaapi.projectpipelineruntime.v1.getreply)]|false|none|List of pipelines.|

<h2 id="tocS_api.projectpipelineruntime.v1.Pipeline">api.projectpipelineruntime.v1.Pipeline</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.pipeline"></a>
<a id="schema_api.projectpipelineruntime.v1.Pipeline"></a>
<a id="tocSapi.projectpipelineruntime.v1.pipeline"></a>
<a id="tocsapi.projectpipelineruntime.v1.pipeline"></a>

```json
{
  "name": "string",
  "label": "string",
  "path": "string"
}

```

Defines a pipeline and its associated event sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the pipeline.|
|label|string|false|none|Default is 'default'.|
|path|string|false|none|Pipeline manifest path, wildcard support.|

<h2 id="tocS_api.projectpipelineruntime.v1.PipelineTriggers">api.projectpipelineruntime.v1.PipelineTriggers</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.pipelinetriggers"></a>
<a id="schema_api.projectpipelineruntime.v1.PipelineTriggers"></a>
<a id="tocSapi.projectpipelineruntime.v1.pipelinetriggers"></a>
<a id="tocsapi.projectpipelineruntime.v1.pipelinetriggers"></a>

```json
{
  "event_source": "string",
  "pipeline": "string",
  "revision": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_source|string|false|none|Key of the event source.|
|pipeline|string|false|none|Key of the pipeline.|
|revision|string|false|none|Regular expressions are not supported, If it is empty, the trigger will determine the revision of the pipeline based on the revision of the event source|

<h2 id="tocS_api.projectpipelineruntime.v1.SaveReply">api.projectpipelineruntime.v1.SaveReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.savereply"></a>
<a id="schema_api.projectpipelineruntime.v1.SaveReply"></a>
<a id="tocSapi.projectpipelineruntime.v1.savereply"></a>
<a id="tocsapi.projectpipelineruntime.v1.savereply"></a>

```json
{
  "message": "string"
}

```

Proto message for the response to a save pipeline configuration request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A message describing the status of the save request.|

<h2 id="tocS_api.projectpipelineruntime.v1.SaveRequest_Body">api.projectpipelineruntime.v1.SaveRequest_Body</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.saverequest_body"></a>
<a id="schema_api.projectpipelineruntime.v1.SaveRequest_Body"></a>
<a id="tocSapi.projectpipelineruntime.v1.saverequest_body"></a>
<a id="tocsapi.projectpipelineruntime.v1.saverequest_body"></a>

```json
{
  "project": "string",
  "pipeline_source": "string",
  "pipelines": [
    {
      "name": "string",
      "label": "string",
      "path": "string"
    }
  ],
  "event_sources": [
    {
      "name": "string",
      "gitlab": {
        "repo_name": "string",
        "revision": "string",
        "events": [
          "string"
        ]
      },
      "calendar": {
        "schedule": "string",
        "interval": "string",
        "exclusion_dates": [
          "string"
        ],
        "timezone": "string"
      }
    }
  ],
  "pipeline_triggers": [
    {
      "event_source": "string",
      "pipeline": "string",
      "revision": "string"
    }
  ],
  "destination": "string",
  "isolation": "string"
}

```

Message containing the body of the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|string|false|none|Name of the project associated with the pipeline.|
|pipeline_source|string|false|none|The code repo for pipeline manifests.|
|pipelines|[[api.projectpipelineruntime.v1.Pipeline](#schemaapi.projectpipelineruntime.v1.pipeline)]|false|none|The definition of pipeline.|
|event_sources|[[api.projectpipelineruntime.v1.EventSource](#schemaapi.projectpipelineruntime.v1.eventsource)]|false|none|Events source that may trigger the pipeline.|
|pipeline_triggers|[[api.projectpipelineruntime.v1.PipelineTriggers](#schemaapi.projectpipelineruntime.v1.pipelinetriggers)]|false|none|Pipeline event triggers.|
|destination|string|false|none|The definition of pipeline.|
|isolation|string|false|none|Isolation definition of pipeline runtime related resources: shared(default) or exclusive|

