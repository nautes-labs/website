---
footerLink: /api/tadmin/projectpipelineruntime
title: Project Pipeline Runtime
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="projectpipelineruntime-api">ProjectPipelineRuntime API v0.3.0</h1>

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="projectpipelineruntime-api-projectpipelineruntime">ProjectPipelineRuntime</h1>

## ProjectPipelineRuntime_ListProjectPipelineRuntimes

<a id="opIdProjectPipelineRuntime_ListProjectPipelineRuntimes"></a>

`GET /api/v1/products/{product_name}/projectpipelineruntimes`

<h3 id="projectpipelineruntime_listprojectpipelineruntimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|Name of the product associated with the pipelines to be listed.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "destination": "string",
      "event_sources": [
        {
          "calendar": {
            "exclusion_dates": [
              "string"
            ],
            "interval": "string",
            "schedule": "string",
            "timezone": "string"
          },
          "gitlab": {
            "events": [
              "string"
            ],
            "repo_name": "string",
            "revision": "string"
          },
          "name": "string"
        }
      ],
      "isolation": "string",
      "name": "string",
      "pipeline_source": "string",
      "pipeline_triggers": [
        {
          "event_source": "string",
          "pipeline": "string",
          "revision": "string"
        }
      ],
      "pipelines": [
        {
          "label": "string",
          "name": "string",
          "path": "string"
        }
      ],
      "project": "string"
    }
  ]
}
```

<h3 id="projectpipelineruntime_listprojectpipelineruntimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.projectpipelineruntime.v1.ListsReply](#schemaapi.projectpipelineruntime.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## ProjectPipelineRuntime_DeleteProjectPipelineRuntime

<a id="opIdProjectPipelineRuntime_DeleteProjectPipelineRuntime"></a>

`DELETE /api/v1/products/{product_name}/projectpipelineruntimes/{project_pipeline_runtime_name}`

<h3 id="projectpipelineruntime_deleteprojectpipelineruntime-parameters">Parameters</h3>

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

<h3 id="projectpipelineruntime_deleteprojectpipelineruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.projectpipelineruntime.v1.DeleteReply](#schemaapi.projectpipelineruntime.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## ProjectPipelineRuntime_GetProjectPipelineRuntime

<a id="opIdProjectPipelineRuntime_GetProjectPipelineRuntime"></a>

`GET /api/v1/products/{product_name}/projectpipelineruntimes/{project_pipeline_runtime_name}`

<h3 id="projectpipelineruntime_getprojectpipelineruntime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|Name of the product associated with the pipeline.|
|project_pipeline_runtime_name|path|string|true|Name of the pipeline runtime environment.|

> Example responses

> 200 Response

```json
{
  "destination": "string",
  "event_sources": [
    {
      "calendar": {
        "exclusion_dates": [
          "string"
        ],
        "interval": "string",
        "schedule": "string",
        "timezone": "string"
      },
      "gitlab": {
        "events": [
          "string"
        ],
        "repo_name": "string",
        "revision": "string"
      },
      "name": "string"
    }
  ],
  "isolation": "string",
  "name": "string",
  "pipeline_source": "string",
  "pipeline_triggers": [
    {
      "event_source": "string",
      "pipeline": "string",
      "revision": "string"
    }
  ],
  "pipelines": [
    {
      "label": "string",
      "name": "string",
      "path": "string"
    }
  ],
  "project": "string"
}
```

<h3 id="projectpipelineruntime_getprojectpipelineruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.projectpipelineruntime.v1.GetReply](#schemaapi.projectpipelineruntime.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## ProjectPipelineRuntime_SaveProjectPipelineRuntime

<a id="opIdProjectPipelineRuntime_SaveProjectPipelineRuntime"></a>

`POST /api/v1/products/{product_name}/projectpipelineruntimes/{project_pipeline_runtime_name}`

> Body parameter

```json
{
  "destination": "string",
  "event_sources": [
    {
      "calendar": {
        "exclusion_dates": [
          "string"
        ],
        "interval": "string",
        "schedule": "string",
        "timezone": "string"
      },
      "gitlab": {
        "events": [
          "string"
        ],
        "repo_name": "string",
        "revision": "string"
      },
      "name": "string"
    }
  ],
  "isolation": "string",
  "pipeline_source": "string",
  "pipeline_triggers": [
    {
      "event_source": "string",
      "pipeline": "string",
      "revision": "string"
    }
  ],
  "pipelines": [
    {
      "label": "string",
      "name": "string",
      "path": "string"
    }
  ],
  "project": "string"
}
```

<h3 id="projectpipelineruntime_saveprojectpipelineruntime-parameters">Parameters</h3>

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

<h3 id="projectpipelineruntime_saveprojectpipelineruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.projectpipelineruntime.v1.SaveReply](#schemaapi.projectpipelineruntime.v1.savereply)|

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
  "exclusion_dates": [
    "string"
  ],
  "interval": "string",
  "schedule": "string",
  "timezone": "string"
}

```

Defines the event source for triggering a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclusion_dates|[string]|false|none|ExclusionDates defines the list of DATE-TIME exceptions for recurring events.|
|interval|string|false|none|Interval is a string that describes an interval duration, e.g. 1s, 30m, 2h...|
|schedule|string|false|none|Schedule is a cron-like expression. For reference, see: https://en.wikipedia.org/wiki/Cron|
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
  "calendar": {
    "exclusion_dates": [
      "string"
    ],
    "interval": "string",
    "schedule": "string",
    "timezone": "string"
  },
  "gitlab": {
    "events": [
      "string"
    ],
    "repo_name": "string",
    "revision": "string"
  },
  "name": "string"
}

```

Defines the types of event sources that can trigger a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendar|[api.projectpipelineruntime.v1.Calendar](#schemaapi.projectpipelineruntime.v1.calendar)|false|none|Defines the event source for triggering a pipeline.|
|gitlab|[api.projectpipelineruntime.v1.Gitlab](#schemaapi.projectpipelineruntime.v1.gitlab)|false|none|none|
|name|string|false|none|Name of the event source.|

<h2 id="tocS_api.projectpipelineruntime.v1.GetReply">api.projectpipelineruntime.v1.GetReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.getreply"></a>
<a id="schema_api.projectpipelineruntime.v1.GetReply"></a>
<a id="tocSapi.projectpipelineruntime.v1.getreply"></a>
<a id="tocsapi.projectpipelineruntime.v1.getreply"></a>

```json
{
  "destination": "string",
  "event_sources": [
    {
      "calendar": {
        "exclusion_dates": [
          "string"
        ],
        "interval": "string",
        "schedule": "string",
        "timezone": "string"
      },
      "gitlab": {
        "events": [
          "string"
        ],
        "repo_name": "string",
        "revision": "string"
      },
      "name": "string"
    }
  ],
  "isolation": "string",
  "name": "string",
  "pipeline_source": "string",
  "pipeline_triggers": [
    {
      "event_source": "string",
      "pipeline": "string",
      "revision": "string"
    }
  ],
  "pipelines": [
    {
      "label": "string",
      "name": "string",
      "path": "string"
    }
  ],
  "project": "string"
}

```

Response message format for getting pipeline information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|Target deployment environment.|
|event_sources|[[api.projectpipelineruntime.v1.EventSource](#schemaapi.projectpipelineruntime.v1.eventsource)]|false|none|Other repositories outside the pipeline (optional).|
|isolation|string|false|none|Isolation definition of pipeline runtime related resources: shared(default) or exclusive.|
|name|string|false|none|Name of the pipeline.|
|pipeline_source|string|false|none|Configuration repository of the pipeline.|
|pipeline_triggers|[[api.projectpipelineruntime.v1.PipelineTriggers](#schemaapi.projectpipelineruntime.v1.pipelinetriggers)]|false|none|Pipeline event triggers.|
|pipelines|[[api.projectpipelineruntime.v1.Pipeline](#schemaapi.projectpipelineruntime.v1.pipeline)]|false|none|Pipelines associated with the product.|
|project|string|false|none|Name of the project associated with the pipeline.|

<h2 id="tocS_api.projectpipelineruntime.v1.Gitlab">api.projectpipelineruntime.v1.Gitlab</h2>
<!-- backwards compatibility -->
<a id="schemaapi.projectpipelineruntime.v1.gitlab"></a>
<a id="schema_api.projectpipelineruntime.v1.Gitlab"></a>
<a id="tocSapi.projectpipelineruntime.v1.gitlab"></a>
<a id="tocsapi.projectpipelineruntime.v1.gitlab"></a>

```json
{
  "events": [
    "string"
  ],
  "repo_name": "string",
  "revision": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[string]|false|none|Gitlab webhook events: PushEvents, TagPushEvents, etc.|
|repo_name|string|false|none|Gitlab project name.|
|revision|string|false|none|Supports wildcards.|

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
      "destination": "string",
      "event_sources": [
        {
          "calendar": {
            "exclusion_dates": [
              "string"
            ],
            "interval": "string",
            "schedule": "string",
            "timezone": "string"
          },
          "gitlab": {
            "events": [
              "string"
            ],
            "repo_name": "string",
            "revision": "string"
          },
          "name": "string"
        }
      ],
      "isolation": "string",
      "name": "string",
      "pipeline_source": "string",
      "pipeline_triggers": [
        {
          "event_source": "string",
          "pipeline": "string",
          "revision": "string"
        }
      ],
      "pipelines": [
        {
          "label": "string",
          "name": "string",
          "path": "string"
        }
      ],
      "project": "string"
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
  "label": "string",
  "name": "string",
  "path": "string"
}

```

Defines a pipeline and its associated event sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Default is 'default'.|
|name|string|false|none|Name of the pipeline.|
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
|revision|string|false|none|does not support wildcards. If it is empty, the trigger will determine the revision of the pipeline based on the revision of the event source.|

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
  "destination": "string",
  "event_sources": [
    {
      "calendar": {
        "exclusion_dates": [
          "string"
        ],
        "interval": "string",
        "schedule": "string",
        "timezone": "string"
      },
      "gitlab": {
        "events": [
          "string"
        ],
        "repo_name": "string",
        "revision": "string"
      },
      "name": "string"
    }
  ],
  "isolation": "string",
  "pipeline_source": "string",
  "pipeline_triggers": [
    {
      "event_source": "string",
      "pipeline": "string",
      "revision": "string"
    }
  ],
  "pipelines": [
    {
      "label": "string",
      "name": "string",
      "path": "string"
    }
  ],
  "project": "string"
}

```

Message containing the body of the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|The definition of pipeline.|
|event_sources|[[api.projectpipelineruntime.v1.EventSource](#schemaapi.projectpipelineruntime.v1.eventsource)]|false|none|Events source that may trigger the pipeline.|
|isolation|string|false|none|Isolation definition of pipeline runtime related resources: shared(default) or exclusive|
|pipeline_source|string|false|none|The code repo for pipeline manifests.|
|pipeline_triggers|[[api.projectpipelineruntime.v1.PipelineTriggers](#schemaapi.projectpipelineruntime.v1.pipelinetriggers)]|false|none|Pipeline event triggers.|
|pipelines|[[api.projectpipelineruntime.v1.Pipeline](#schemaapi.projectpipelineruntime.v1.pipeline)]|false|none|The definition of pipeline.|
|project|string|false|none|Name of the project associated with the pipeline.|

