---
footerLink: /api/tadmin/coderepo
title: Code Repository
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="code-repository-api">Code Repository API v0.3.1</h1>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>

# Authentication

- HTTP Authentication, scheme: Bearer 

<h1 id="code-repository-api-coderepo">CodeRepo</h1>

## ListCodeRepos

<a id="opIdListCodeRepos"></a>

`GET /api/v1/products/{product_name}/coderepos`

<h3 id="listcoderepos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|To list the product name of the repository.|
|field_selector|query|string|false|Filter the list by field. eg: field_selector=project=project1,pipeline_runtime=true,deployment_runtime=false Field Support: project: fuzzy match pipeline_runtime: exact match deployment_runtime: exact match|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "product": "string",
      "name": "string",
      "project": "string",
      "webhook": {
        "events": [
          "string"
        ]
      },
      "deployment_runtime": true,
      "pipeline_runtime": true,
      "git": {
        "gitlab": {
          "name": "string",
          "path": "string",
          "visibility": "string",
          "description": "string",
          "ssh_url_to_repo": "string",
          "http_url_to_repo": "string"
        },
        "github": {
          "name": "string",
          "path": "string",
          "visibility": "string",
          "description": "string",
          "ssh_url_to_repo": "string",
          "http_url_to_repo": "string"
        }
      }
    }
  ]
}
```

<h3 id="listcoderepos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepo.v1.ListsReply](#schemaapi.coderepo.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## GetCodeRepo

<a id="opIdGetCodeRepo"></a>

`GET /api/v1/products/{product_name}/coderepos/{coderepo_name}`

<h3 id="getcoderepo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|none|
|coderepo_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "product": "string",
  "name": "string",
  "project": "string",
  "webhook": {
    "events": [
      "string"
    ]
  },
  "deployment_runtime": true,
  "pipeline_runtime": true,
  "git": {
    "gitlab": {
      "name": "string",
      "path": "string",
      "visibility": "string",
      "description": "string",
      "ssh_url_to_repo": "string",
      "http_url_to_repo": "string"
    },
    "github": {
      "name": "string",
      "path": "string",
      "visibility": "string",
      "description": "string",
      "ssh_url_to_repo": "string",
      "http_url_to_repo": "string"
    }
  }
}
```

<h3 id="getcoderepo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepo.v1.GetReply](#schemaapi.coderepo.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## SaveCodeRepo

<a id="opIdSaveCodeRepo"></a>

`POST /api/v1/products/{product_name}/coderepos/{coderepo_name}`

> Body parameter

```json
{
  "project": "string",
  "webhook": {
    "events": [
      "string"
    ]
  },
  "deployment_runtime": true,
  "pipeline_runtime": true,
  "git": {
    "gitlab": {
      "name": "string",
      "path": "string",
      "visibility": "string",
      "description": "string"
    },
    "github": {
      "name": "string",
      "path": "string",
      "visibility": "string",
      "description": "string"
    }
  }
}
```

<h3 id="savecoderepo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|none|
|coderepo_name|path|string|true|none|
|insecure_skip_check|query|boolean|false|none|
|body|body|[api.coderepo.v1.SaveRequest_Body](#schemaapi.coderepo.v1.saverequest_body)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="savecoderepo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepo.v1.SaveReply](#schemaapi.coderepo.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## DeleteCodeRepo

<a id="opIdDeleteCodeRepo"></a>

`DELETE /api/v1/products/{product_name}/coderepos/{coderepo_name}`

<h3 id="deletecoderepo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|none|
|coderepo_name|path|string|true|none|
|insecure_skip_check|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="deletecoderepo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepo.v1.DeleteReply](#schemaapi.coderepo.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_api.coderepo.v1.DeleteReply">api.coderepo.v1.DeleteReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.deletereply"></a>
<a id="schema_api.coderepo.v1.DeleteReply"></a>
<a id="tocSapi.coderepo.v1.deletereply"></a>
<a id="tocsapi.coderepo.v1.deletereply"></a>

```json
{
  "message": "string"
}

```

Represents a response to a DeleteRequest message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_api.coderepo.v1.GetReply">api.coderepo.v1.GetReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.getreply"></a>
<a id="schema_api.coderepo.v1.GetReply"></a>
<a id="tocSapi.coderepo.v1.getreply"></a>
<a id="tocsapi.coderepo.v1.getreply"></a>

```json
{
  "product": "string",
  "name": "string",
  "project": "string",
  "webhook": {
    "events": [
      "string"
    ]
  },
  "deployment_runtime": true,
  "pipeline_runtime": true,
  "git": {
    "gitlab": {
      "name": "string",
      "path": "string",
      "visibility": "string",
      "description": "string",
      "ssh_url_to_repo": "string",
      "http_url_to_repo": "string"
    },
    "github": {
      "name": "string",
      "path": "string",
      "visibility": "string",
      "description": "string",
      "ssh_url_to_repo": "string",
      "http_url_to_repo": "string"
    }
  }
}

```

Define the GetReply message, which includes the product, name, project, webhook, DeploymentRuntime, PipelineRuntime, and GitProject fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|false|none|none|
|name|string|false|none|none|
|project|string|false|none|none|
|webhook|[api.coderepo.v1.Webhook](#schemaapi.coderepo.v1.webhook)|false|none|Message representing a webhook|
|deployment_runtime|boolean|false|none|none|
|pipeline_runtime|boolean|false|none|none|
|git|[api.coderepo.v1.GitProject](#schemaapi.coderepo.v1.gitproject)|false|none|Define the GitProject message, which includes the GitlabProject and GithubProject fields.|

<h2 id="tocS_api.coderepo.v1.Git">api.coderepo.v1.Git</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.git"></a>
<a id="schema_api.coderepo.v1.Git"></a>
<a id="tocSapi.coderepo.v1.git"></a>
<a id="tocsapi.coderepo.v1.git"></a>

```json
{
  "gitlab": {
    "name": "string",
    "path": "string",
    "visibility": "string",
    "description": "string"
  },
  "github": {
    "name": "string",
    "path": "string",
    "visibility": "string",
    "description": "string"
  }
}

```

Define the Git message, which includes the Gitlab and Github fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gitlab|[api.coderepo.v1.Gitlab](#schemaapi.coderepo.v1.gitlab)|false|none|Message representing a GitLab repository|
|github|[api.coderepo.v1.Github](#schemaapi.coderepo.v1.github)|false|none|Message representing a GitHub repository|

<h2 id="tocS_api.coderepo.v1.GitProject">api.coderepo.v1.GitProject</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.gitproject"></a>
<a id="schema_api.coderepo.v1.GitProject"></a>
<a id="tocSapi.coderepo.v1.gitproject"></a>
<a id="tocsapi.coderepo.v1.gitproject"></a>

```json
{
  "gitlab": {
    "name": "string",
    "path": "string",
    "visibility": "string",
    "description": "string",
    "ssh_url_to_repo": "string",
    "http_url_to_repo": "string"
  },
  "github": {
    "name": "string",
    "path": "string",
    "visibility": "string",
    "description": "string",
    "ssh_url_to_repo": "string",
    "http_url_to_repo": "string"
  }
}

```

Define the GitProject message, which includes the GitlabProject and GithubProject fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gitlab|[api.coderepo.v1.GitlabProject](#schemaapi.coderepo.v1.gitlabproject)|false|none|Message representing a GitLab project|
|github|[api.coderepo.v1.GithubProject](#schemaapi.coderepo.v1.githubproject)|false|none|Message representing a GitHub project|

<h2 id="tocS_api.coderepo.v1.Github">api.coderepo.v1.Github</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.github"></a>
<a id="schema_api.coderepo.v1.Github"></a>
<a id="tocSapi.coderepo.v1.github"></a>
<a id="tocsapi.coderepo.v1.github"></a>

```json
{
  "name": "string",
  "path": "string",
  "visibility": "string",
  "description": "string"
}

```

Message representing a GitHub repository

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the repository|
|path|string|false|none|The path of the repository|
|visibility|string|false|none|The visibility of the repository|
|description|string|false|none|The description of the repository|

<h2 id="tocS_api.coderepo.v1.GithubProject">api.coderepo.v1.GithubProject</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.githubproject"></a>
<a id="schema_api.coderepo.v1.GithubProject"></a>
<a id="tocSapi.coderepo.v1.githubproject"></a>
<a id="tocsapi.coderepo.v1.githubproject"></a>

```json
{
  "name": "string",
  "path": "string",
  "visibility": "string",
  "description": "string",
  "ssh_url_to_repo": "string",
  "http_url_to_repo": "string"
}

```

Message representing a GitHub project

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the project|
|path|string|false|none|The path of the project|
|visibility|string|false|none|The visibility of the project|
|description|string|false|none|The description of the project|
|ssh_url_to_repo|string|false|none|The SSH URL of the repository|
|http_url_to_repo|string|false|none|The HTTP URL of the repository|

<h2 id="tocS_api.coderepo.v1.Gitlab">api.coderepo.v1.Gitlab</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.gitlab"></a>
<a id="schema_api.coderepo.v1.Gitlab"></a>
<a id="tocSapi.coderepo.v1.gitlab"></a>
<a id="tocsapi.coderepo.v1.gitlab"></a>

```json
{
  "name": "string",
  "path": "string",
  "visibility": "string",
  "description": "string"
}

```

Message representing a GitLab repository

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the repository|
|path|string|false|none|The path of the repository|
|visibility|string|false|none|The visibility of the repository|
|description|string|false|none|The description of the repository|

<h2 id="tocS_api.coderepo.v1.GitlabProject">api.coderepo.v1.GitlabProject</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.gitlabproject"></a>
<a id="schema_api.coderepo.v1.GitlabProject"></a>
<a id="tocSapi.coderepo.v1.gitlabproject"></a>
<a id="tocsapi.coderepo.v1.gitlabproject"></a>

```json
{
  "name": "string",
  "path": "string",
  "visibility": "string",
  "description": "string",
  "ssh_url_to_repo": "string",
  "http_url_to_repo": "string"
}

```

Message representing a GitLab project

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the project|
|path|string|false|none|The path of the project|
|visibility|string|false|none|The visibility of the project|
|description|string|false|none|The description of the project|
|ssh_url_to_repo|string|false|none|The SSH URL of the repository|
|http_url_to_repo|string|false|none|The HTTP URL of the repository|

<h2 id="tocS_api.coderepo.v1.ListsReply">api.coderepo.v1.ListsReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.listsreply"></a>
<a id="schema_api.coderepo.v1.ListsReply"></a>
<a id="tocSapi.coderepo.v1.listsreply"></a>
<a id="tocsapi.coderepo.v1.listsreply"></a>

```json
{
  "items": [
    {
      "product": "string",
      "name": "string",
      "project": "string",
      "webhook": {
        "events": [
          "string"
        ]
      },
      "deployment_runtime": true,
      "pipeline_runtime": true,
      "git": {
        "gitlab": {
          "name": "string",
          "path": "string",
          "visibility": "string",
          "description": "string",
          "ssh_url_to_repo": "string",
          "http_url_to_repo": "string"
        },
        "github": {
          "name": "string",
          "path": "string",
          "visibility": "string",
          "description": "string",
          "ssh_url_to_repo": "string",
          "http_url_to_repo": "string"
        }
      }
    }
  ]
}

```

Define the ListsReply message, which includes the repeated items field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[api.coderepo.v1.GetReply](#schemaapi.coderepo.v1.getreply)]|false|none|[Define the GetReply message, which includes the product, name, project, webhook, DeploymentRuntime, PipelineRuntime, and GitProject fields.]|

<h2 id="tocS_api.coderepo.v1.SaveReply">api.coderepo.v1.SaveReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.savereply"></a>
<a id="schema_api.coderepo.v1.SaveReply"></a>
<a id="tocSapi.coderepo.v1.savereply"></a>
<a id="tocsapi.coderepo.v1.savereply"></a>

```json
{
  "message": "string"
}

```

Define the SaveReply message, which includes the msg field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Msg is a message confirming the save.|

<h2 id="tocS_api.coderepo.v1.SaveRequest_Body">api.coderepo.v1.SaveRequest_Body</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.saverequest_body"></a>
<a id="schema_api.coderepo.v1.SaveRequest_Body"></a>
<a id="tocSapi.coderepo.v1.saverequest_body"></a>
<a id="tocsapi.coderepo.v1.saverequest_body"></a>

```json
{
  "project": "string",
  "webhook": {
    "events": [
      "string"
    ]
  },
  "deployment_runtime": true,
  "pipeline_runtime": true,
  "git": {
    "gitlab": {
      "name": "string",
      "path": "string",
      "visibility": "string",
      "description": "string"
    },
    "github": {
      "name": "string",
      "path": "string",
      "visibility": "string",
      "description": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|string|false|none|none|
|webhook|[api.coderepo.v1.Webhook](#schemaapi.coderepo.v1.webhook)|false|none|Message representing a webhook|
|deployment_runtime|boolean|false|none|none|
|pipeline_runtime|boolean|false|none|none|
|git|[api.coderepo.v1.Git](#schemaapi.coderepo.v1.git)|false|none|Define the Git message, which includes the Gitlab and Github fields.|

<h2 id="tocS_api.coderepo.v1.Webhook">api.coderepo.v1.Webhook</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.webhook"></a>
<a id="schema_api.coderepo.v1.Webhook"></a>
<a id="tocSapi.coderepo.v1.webhook"></a>
<a id="tocsapi.coderepo.v1.webhook"></a>

```json
{
  "events": [
    "string"
  ]
}

```

Message representing a webhook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[string]|false|none|The events that the webhook should trigger on|

