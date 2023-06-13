---
footerLink: /api/tadmin/environment
title: 环境
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="environment-api">Environment API v0.3.1</h1>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>

# Authentication

- HTTP Authentication, scheme: Bearer 

<h1 id="environment-api-environment">Environment</h1>

## ListEnvironments

<a id="opIdListEnvironments"></a>

`GET /api/v1/products/{product_name}/environments`

<h3 id="listenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|To list the product name of the repository.|
|field_selector|query|string|false|Filter the list by field. eg: field_selector=cluster=cluster1,env_type=host Field Support: cluster: fuzzy match env_type: fuzzy match|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "product": "string",
      "name": "string",
      "cluster": "string",
      "env_type": "string"
    }
  ]
}
```

<h3 id="listenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.environment.v1.ListsReply](#schemaapi.environment.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## GetEnvironment

<a id="opIdGetEnvironment"></a>

`GET /api/v1/products/{product_name}/environments/{enviroment_name}`

<h3 id="getenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product|
|enviroment_name|path|string|true|The name of the environment|

> Example responses

> 200 Response

```json
{
  "product": "string",
  "name": "string",
  "cluster": "string",
  "env_type": "string"
}
```

<h3 id="getenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.environment.v1.GetReply](#schemaapi.environment.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## SaveEnvironment

<a id="opIdSaveEnvironment"></a>

`POST /api/v1/products/{product_name}/environments/{environment_name}`

> Body parameter

```json
{
  "cluster": "string",
  "env_type": "string"
}
```

<h3 id="saveenvironment-parameters">Parameters</h3>

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

<h3 id="saveenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.environment.v1.SaveReply](#schemaapi.environment.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## DeleteEnvironment

<a id="opIdDeleteEnvironment"></a>

`DELETE /api/v1/products/{product_name}/environments/{environment_name}`

<h3 id="deleteenvironment-parameters">Parameters</h3>

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

<h3 id="deleteenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.environment.v1.DeleteReply](#schemaapi.environment.v1.deletereply)|

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
  "product": "string",
  "name": "string",
  "cluster": "string",
  "env_type": "string"
}

```

Response for getting environment information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|false|none|The product name|
|name|string|false|none|The environment name|
|cluster|string|false|none|The name of the cluster that the environment belongs to|
|env_type|string|false|none|The type of environment, such as "production" or "staging"|

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
      "product": "string",
      "name": "string",
      "cluster": "string",
      "env_type": "string"
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

