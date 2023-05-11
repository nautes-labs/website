---
footerLink: /api/tadmin/environment
title: Environment
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="environment-api">Environment API v0.3.0</h1>

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="environment-api-environment">Environment</h1>

## Environment_ListEnvironments

<a id="opIdEnvironment_ListEnvironments"></a>

`GET /api/v1/products/{product_name}/environments`

<h3 id="environment_listenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "cluster": "string",
      "env_type": "string",
      "name": "string",
      "product": "string"
    }
  ]
}
```

<h3 id="environment_listenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.environment.v1.ListsReply](#schemaapi.environment.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Environment_GetEnvironment

<a id="opIdEnvironment_GetEnvironment"></a>

`GET /api/v1/products/{product_name}/environments/{enviroment_name}`

<h3 id="environment_getenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product|
|enviroment_name|path|string|true|The name of the environment|

> Example responses

> 200 Response

```json
{
  "cluster": "string",
  "env_type": "string",
  "name": "string",
  "product": "string"
}
```

<h3 id="environment_getenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.environment.v1.GetReply](#schemaapi.environment.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Environment_DeleteEnvironment

<a id="opIdEnvironment_DeleteEnvironment"></a>

`DELETE /api/v1/products/{product_name}/environments/{environment_name}`

<h3 id="environment_deleteenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product|
|environment_name|path|string|true|The name of the environment to delete|
|insecure_skip_check|query|boolean|false|Whether to skip security checks (not recommended)|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="environment_deleteenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.environment.v1.DeleteReply](#schemaapi.environment.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Environment_SaveEnvironment

<a id="opIdEnvironment_SaveEnvironment"></a>

`POST /api/v1/products/{product_name}/environments/{environment_name}`

> Body parameter

```json
{
  "cluster": "string",
  "env_type": "string"
}
```

<h3 id="environment_saveenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product|
|environment_name|path|string|true|The name of the environment|
|insecure_skip_check|query|boolean|false|Whether to skip security checks (not recommended)|
|body|body|[api.environment.v1.SaveRequest_Body](#schemaapi.environment.v1.saverequest_body)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="environment_saveenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.environment.v1.SaveReply](#schemaapi.environment.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_api.environment.v1.DeleteReply">api.environment.v1.DeleteReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.environment.v1.deletereply"></a>
<a id="schema_api.environment.v1.DeleteReply"></a>
<a id="tocSapi.environment.v1.deletereply"></a>
<a id="tocsapi.environment.v1.deletereply"></a>

```json
{
  "message": "string"
}

```

Response for deleting an environment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A message indicating whether the request was successful|

<h2 id="tocS_api.environment.v1.GetReply">api.environment.v1.GetReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.environment.v1.getreply"></a>
<a id="schema_api.environment.v1.GetReply"></a>
<a id="tocSapi.environment.v1.getreply"></a>
<a id="tocsapi.environment.v1.getreply"></a>

```json
{
  "cluster": "string",
  "env_type": "string",
  "name": "string",
  "product": "string"
}

```

Response for getting environment information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|string|false|none|The name of the cluster that the environment belongs to|
|env_type|string|false|none|The type of environment, such as "production" or "staging"|
|name|string|false|none|The environment name|
|product|string|false|none|The product name|

<h2 id="tocS_api.environment.v1.ListsReply">api.environment.v1.ListsReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.environment.v1.listsreply"></a>
<a id="schema_api.environment.v1.ListsReply"></a>
<a id="tocSapi.environment.v1.listsreply"></a>
<a id="tocsapi.environment.v1.listsreply"></a>

```json
{
  "items": [
    {
      "cluster": "string",
      "env_type": "string",
      "name": "string",
      "product": "string"
    }
  ]
}

```

Response for listing environments for a given product

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[api.environment.v1.GetReply](#schemaapi.environment.v1.getreply)]|false|none|A list of environment information|

<h2 id="tocS_api.environment.v1.SaveReply">api.environment.v1.SaveReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.environment.v1.savereply"></a>
<a id="schema_api.environment.v1.SaveReply"></a>
<a id="tocSapi.environment.v1.savereply"></a>
<a id="tocsapi.environment.v1.savereply"></a>

```json
{
  "message": "string"
}

```

Response for saving changes to an environment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A message indicating whether the request was successful|

<h2 id="tocS_api.environment.v1.SaveRequest_Body">api.environment.v1.SaveRequest_Body</h2>
<!-- backwards compatibility -->
<a id="schemaapi.environment.v1.saverequest_body"></a>
<a id="schema_api.environment.v1.SaveRequest_Body"></a>
<a id="tocSapi.environment.v1.saverequest_body"></a>
<a id="tocsapi.environment.v1.saverequest_body"></a>

```json
{
  "cluster": "string",
  "env_type": "string"
}

```

The body of the request, including cluster and envType

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|string|false|none|The name of the cluster that the environment belongs to|
|env_type|string|false|none|The type of environment, such as "production" or "staging"|

