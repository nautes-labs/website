---
footerLink: /api/tadmin/coderepo
title: 代码库
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="coderepo-api">CodeRepo API v0.3.0</h1>

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="coderepo-api-coderepo">CodeRepo</h1>

## CodeRepo_ListCodeRepos

<a id="opIdCodeRepo_ListCodeRepos"></a>

`GET /api/v1/products/{product_name}/coderepos`

<h3 id="coderepo_listcoderepos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product to list repositories for|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "deployment_runtime": true,
      "git": {
        "github": {
          "description": "string",
          "http_url_to_repo": "string",
          "name": "string",
          "path": "string",
          "ssh_url_to_repo": "string",
          "visibility": "string"
        },
        "gitlab": {
          "description": "string",
          "http_url_to_repo": "string",
          "name": "string",
          "path": "string",
          "ssh_url_to_repo": "string",
          "visibility": "string"
        }
      },
      "name": "string",
      "pipeline_runtime": true,
      "product": "string",
      "project": "string",
      "webhook": {
        "events": [
          "string"
        ]
      }
    }
  ]
}
```

<h3 id="coderepo_listcoderepos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepo.v1.ListsReply](#schemaapi.coderepo.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CodeRepo_DeleteCodeRepo

<a id="opIdCodeRepo_DeleteCodeRepo"></a>

`DELETE /api/v1/products/{product_name}/coderepos/{coderepo_name}`

<h3 id="coderepo_deletecoderepo-parameters">Parameters</h3>

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

<h3 id="coderepo_deletecoderepo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepo.v1.DeleteReply](#schemaapi.coderepo.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CodeRepo_GetCodeRepo

<a id="opIdCodeRepo_GetCodeRepo"></a>

`GET /api/v1/products/{product_name}/coderepos/{coderepo_name}`

<h3 id="coderepo_getcoderepo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|none|
|coderepo_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "deployment_runtime": true,
  "git": {
    "github": {
      "description": "string",
      "http_url_to_repo": "string",
      "name": "string",
      "path": "string",
      "ssh_url_to_repo": "string",
      "visibility": "string"
    },
    "gitlab": {
      "description": "string",
      "http_url_to_repo": "string",
      "name": "string",
      "path": "string",
      "ssh_url_to_repo": "string",
      "visibility": "string"
    }
  },
  "name": "string",
  "pipeline_runtime": true,
  "product": "string",
  "project": "string",
  "webhook": {
    "events": [
      "string"
    ]
  }
}
```

<h3 id="coderepo_getcoderepo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepo.v1.GetReply](#schemaapi.coderepo.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CodeRepo_SaveCodeRepo

<a id="opIdCodeRepo_SaveCodeRepo"></a>

`POST /api/v1/products/{product_name}/coderepos/{coderepo_name}`

> Body parameter

```json
{
  "deployment_runtime": true,
  "git": {
    "github": {
      "description": "string",
      "name": "string",
      "path": "string",
      "visibility": "string"
    },
    "gitlab": {
      "description": "string",
      "name": "string",
      "path": "string",
      "visibility": "string"
    }
  },
  "pipeline_runtime": true,
  "project": "string",
  "webhook": {
    "events": [
      "string"
    ]
  }
}
```

<h3 id="coderepo_savecoderepo-parameters">Parameters</h3>

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

<h3 id="coderepo_savecoderepo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepo.v1.SaveReply](#schemaapi.coderepo.v1.savereply)|

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
  "deployment_runtime": true,
  "git": {
    "github": {
      "description": "string",
      "http_url_to_repo": "string",
      "name": "string",
      "path": "string",
      "ssh_url_to_repo": "string",
      "visibility": "string"
    },
    "gitlab": {
      "description": "string",
      "http_url_to_repo": "string",
      "name": "string",
      "path": "string",
      "ssh_url_to_repo": "string",
      "visibility": "string"
    }
  },
  "name": "string",
  "pipeline_runtime": true,
  "product": "string",
  "project": "string",
  "webhook": {
    "events": [
      "string"
    ]
  }
}

```

Define the GetReply message, which includes the product, name, project, webhook, DeploymentRuntime, PipelineRuntime, and GitProject fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment_runtime|boolean|false|none|none|
|git|[api.coderepo.v1.GitProject](#schemaapi.coderepo.v1.gitproject)|false|none|Define the GitProject message, which includes the GitlabProject and GithubProject fields.|
|name|string|false|none|none|
|pipeline_runtime|boolean|false|none|none|
|product|string|false|none|none|
|project|string|false|none|none|
|webhook|[api.coderepo.v1.Webhook](#schemaapi.coderepo.v1.webhook)|false|none|Message representing a webhook|

<h2 id="tocS_api.coderepo.v1.Git">api.coderepo.v1.Git</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.git"></a>
<a id="schema_api.coderepo.v1.Git"></a>
<a id="tocSapi.coderepo.v1.git"></a>
<a id="tocsapi.coderepo.v1.git"></a>

```json
{
  "github": {
    "description": "string",
    "name": "string",
    "path": "string",
    "visibility": "string"
  },
  "gitlab": {
    "description": "string",
    "name": "string",
    "path": "string",
    "visibility": "string"
  }
}

```

Define the Git message, which includes the Gitlab and Github fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github|[api.coderepo.v1.Github](#schemaapi.coderepo.v1.github)|false|none|Message representing a GitHub repository|
|gitlab|[api.coderepo.v1.Gitlab](#schemaapi.coderepo.v1.gitlab)|false|none|Message representing a GitLab repository|

<h2 id="tocS_api.coderepo.v1.GitProject">api.coderepo.v1.GitProject</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.gitproject"></a>
<a id="schema_api.coderepo.v1.GitProject"></a>
<a id="tocSapi.coderepo.v1.gitproject"></a>
<a id="tocsapi.coderepo.v1.gitproject"></a>

```json
{
  "github": {
    "description": "string",
    "http_url_to_repo": "string",
    "name": "string",
    "path": "string",
    "ssh_url_to_repo": "string",
    "visibility": "string"
  },
  "gitlab": {
    "description": "string",
    "http_url_to_repo": "string",
    "name": "string",
    "path": "string",
    "ssh_url_to_repo": "string",
    "visibility": "string"
  }
}

```

Define the GitProject message, which includes the GitlabProject and GithubProject fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github|[api.coderepo.v1.GithubProject](#schemaapi.coderepo.v1.githubproject)|false|none|Message representing a GitHub project|
|gitlab|[api.coderepo.v1.GitlabProject](#schemaapi.coderepo.v1.gitlabproject)|false|none|Message representing a GitLab project|

<h2 id="tocS_api.coderepo.v1.Github">api.coderepo.v1.Github</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.github"></a>
<a id="schema_api.coderepo.v1.Github"></a>
<a id="tocSapi.coderepo.v1.github"></a>
<a id="tocsapi.coderepo.v1.github"></a>

```json
{
  "description": "string",
  "name": "string",
  "path": "string",
  "visibility": "string"
}

```

Message representing a GitHub repository

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the repository|
|name|string|false|none|The name of the repository|
|path|string|false|none|The path of the repository|
|visibility|string|false|none|The visibility of the repository|

<h2 id="tocS_api.coderepo.v1.GithubProject">api.coderepo.v1.GithubProject</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.githubproject"></a>
<a id="schema_api.coderepo.v1.GithubProject"></a>
<a id="tocSapi.coderepo.v1.githubproject"></a>
<a id="tocsapi.coderepo.v1.githubproject"></a>

```json
{
  "description": "string",
  "http_url_to_repo": "string",
  "name": "string",
  "path": "string",
  "ssh_url_to_repo": "string",
  "visibility": "string"
}

```

Message representing a GitHub project

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the project|
|http_url_to_repo|string|false|none|The HTTP URL of the repository|
|name|string|false|none|The name of the project|
|path|string|false|none|The path of the project|
|ssh_url_to_repo|string|false|none|The SSH URL of the repository|
|visibility|string|false|none|The visibility of the project|

<h2 id="tocS_api.coderepo.v1.Gitlab">api.coderepo.v1.Gitlab</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.gitlab"></a>
<a id="schema_api.coderepo.v1.Gitlab"></a>
<a id="tocSapi.coderepo.v1.gitlab"></a>
<a id="tocsapi.coderepo.v1.gitlab"></a>

```json
{
  "description": "string",
  "name": "string",
  "path": "string",
  "visibility": "string"
}

```

Message representing a GitLab repository

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the repository|
|name|string|false|none|The name of the repository|
|path|string|false|none|The path of the repository|
|visibility|string|false|none|The visibility of the repository|

<h2 id="tocS_api.coderepo.v1.GitlabProject">api.coderepo.v1.GitlabProject</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepo.v1.gitlabproject"></a>
<a id="schema_api.coderepo.v1.GitlabProject"></a>
<a id="tocSapi.coderepo.v1.gitlabproject"></a>
<a id="tocsapi.coderepo.v1.gitlabproject"></a>

```json
{
  "description": "string",
  "http_url_to_repo": "string",
  "name": "string",
  "path": "string",
  "ssh_url_to_repo": "string",
  "visibility": "string"
}

```

Message representing a GitLab project

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the project|
|http_url_to_repo|string|false|none|The HTTP URL of the repository|
|name|string|false|none|The name of the project|
|path|string|false|none|The path of the project|
|ssh_url_to_repo|string|false|none|The SSH URL of the repository|
|visibility|string|false|none|The visibility of the project|

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
      "deployment_runtime": true,
      "git": {
        "github": {
          "description": "string",
          "http_url_to_repo": "string",
          "name": "string",
          "path": "string",
          "ssh_url_to_repo": "string",
          "visibility": "string"
        },
        "gitlab": {
          "description": "string",
          "http_url_to_repo": "string",
          "name": "string",
          "path": "string",
          "ssh_url_to_repo": "string",
          "visibility": "string"
        }
      },
      "name": "string",
      "pipeline_runtime": true,
      "product": "string",
      "project": "string",
      "webhook": {
        "events": [
          "string"
        ]
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
  "deployment_runtime": true,
  "git": {
    "github": {
      "description": "string",
      "name": "string",
      "path": "string",
      "visibility": "string"
    },
    "gitlab": {
      "description": "string",
      "name": "string",
      "path": "string",
      "visibility": "string"
    }
  },
  "pipeline_runtime": true,
  "project": "string",
  "webhook": {
    "events": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment_runtime|boolean|false|none|none|
|git|[api.coderepo.v1.Git](#schemaapi.coderepo.v1.git)|false|none|Define the Git message, which includes the Gitlab and Github fields.|
|pipeline_runtime|boolean|false|none|none|
|project|string|false|none|none|
|webhook|[api.coderepo.v1.Webhook](#schemaapi.coderepo.v1.webhook)|false|none|Message representing a webhook|

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

