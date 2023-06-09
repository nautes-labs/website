---
footerLink: /api/tadmin/project
title: 项目
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="project-api">Project API v0.3.0</h1>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>

# Authentication

- HTTP Authentication, scheme: Bearer 

<h1 id="project-api-project">Project</h1>

## ListProjects

<a id="opIdListProjects"></a>

`GET /api/v1/products/{product_name}/projects`

<h3 id="listprojects-parameters">Parameters</h3>

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
      "product": "string",
      "name": "string",
      "language": "string"
    }
  ]
}
```

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.project.v1.ListsReply](#schemaapi.project.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## GetProject

<a id="opIdGetProject"></a>

`GET /api/v1/products/{product_name}/projects/{project_name}`

<h3 id="getproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product the project belongs to.|
|project_name|path|string|true|The name of the project being retrieved.|

> Example responses

> 200 Response

```json
{
  "product": "string",
  "name": "string",
  "language": "string"
}
```

<h3 id="getproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.project.v1.GetReply](#schemaapi.project.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## SaveProject

<a id="opIdSaveProject"></a>

`POST /api/v1/products/{product_name}/projects/{project_name}`

> Body parameter

```json
{
  "language": "string"
}
```

<h3 id="saveproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product the project belongs to.|
|project_name|path|string|true|The name of the project being created or updated.|
|insecureSkipCheck|query|boolean|false|Whether or not to skip validation.|
|body|body|[api.project.v1.SaveRequest_Body](#schemaapi.project.v1.saverequest_body)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="saveproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.project.v1.SaveReply](#schemaapi.project.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

`DELETE /api/v1/products/{product_name}/projects/{project_name}`

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product the project belongs to.|
|project_name|path|string|true|The name of the project being deleted.|
|insecureSkipCheck|query|boolean|false|Whether or not to skip validation.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.project.v1.DeleteReply](#schemaapi.project.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_api.project.v1.DeleteReply">api.project.v1.DeleteReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.project.v1.deletereply"></a>
<a id="schema_api.project.v1.DeleteReply"></a>
<a id="tocSapi.project.v1.deletereply"></a>
<a id="tocsapi.project.v1.deletereply"></a>

```json
{
  "message": "string"
}

```

Defines the SaveReply message which is used to return a message after deleting a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message being returned.|

<h2 id="tocS_api.project.v1.GetReply">api.project.v1.GetReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.project.v1.getreply"></a>
<a id="schema_api.project.v1.GetReply"></a>
<a id="tocSapi.project.v1.getreply"></a>
<a id="tocsapi.project.v1.getreply"></a>

```json
{
  "product": "string",
  "name": "string",
  "language": "string"
}

```

Defines the GetReply message which is used to return a specific project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|false|none|The name of the product the project belongs to.|
|name|string|false|none|The name of the project.|
|language|string|false|none|The language used in the project.|

<h2 id="tocS_api.project.v1.ListsReply">api.project.v1.ListsReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.project.v1.listsreply"></a>
<a id="schema_api.project.v1.ListsReply"></a>
<a id="tocSapi.project.v1.listsreply"></a>
<a id="tocsapi.project.v1.listsreply"></a>

```json
{
  "items": [
    {
      "product": "string",
      "name": "string",
      "language": "string"
    }
  ]
}

```

Defines the ListsReply message which is used to return a list of projects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[api.project.v1.GetReply](#schemaapi.project.v1.getreply)]|false|none|The list of projects being returned.|

<h2 id="tocS_api.project.v1.SaveReply">api.project.v1.SaveReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.project.v1.savereply"></a>
<a id="schema_api.project.v1.SaveReply"></a>
<a id="tocSapi.project.v1.savereply"></a>
<a id="tocsapi.project.v1.savereply"></a>

```json
{
  "message": "string"
}

```

Defines the SaveReply message which is used to return a message after creating or updating a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message being returned.|

<h2 id="tocS_api.project.v1.SaveRequest_Body">api.project.v1.SaveRequest_Body</h2>
<!-- backwards compatibility -->
<a id="schemaapi.project.v1.saverequest_body"></a>
<a id="schema_api.project.v1.SaveRequest_Body"></a>
<a id="tocSapi.project.v1.saverequest_body"></a>
<a id="tocsapi.project.v1.saverequest_body"></a>

```json
{
  "language": "string"
}

```

The request body for the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|The language used in the project.|

