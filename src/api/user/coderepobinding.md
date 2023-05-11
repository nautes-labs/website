---
footerLink: /api/tadmin/coderepobinding
title: 授权代码库
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="coderepobinding-api">CodeRepoBinding API v0.3.0</h1>

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="coderepobinding-api-coderepobinding">CodeRepoBinding</h1>

## CodeRepoBinding_ListCodeRepoBindings

<a id="opIdCodeRepoBinding_ListCodeRepoBindings"></a>

`GET /api/v1/products/{product_name}/coderepobindings`

<h3 id="coderepobinding_listcoderepobindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product to list repositories for|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "coderepo": "string",
      "name": "string",
      "permissions": "string",
      "product": "string",
      "projects": [
        "string"
      ]
    }
  ]
}
```

<h3 id="coderepobinding_listcoderepobindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepobinding.v1.ListsReply](#schemaapi.coderepobinding.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CodeRepoBinding_DeleteCodeRepoBinding

<a id="opIdCodeRepoBinding_DeleteCodeRepoBinding"></a>

`DELETE /api/v1/products/{product_name}/coderepobindings/{coderepo_binding_name}`

<h3 id="coderepobinding_deletecoderepobinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|none|
|coderepo_binding_name|path|string|true|none|
|insecure_skip_check|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="coderepobinding_deletecoderepobinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepobinding.v1.DeleteReply](#schemaapi.coderepobinding.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CodeRepoBinding_GetCodeRepoBinding

<a id="opIdCodeRepoBinding_GetCodeRepoBinding"></a>

`GET /api/v1/products/{product_name}/coderepobindings/{coderepo_binding_name}`

<h3 id="coderepobinding_getcoderepobinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|none|
|coderepo_binding_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "coderepo": "string",
  "name": "string",
  "permissions": "string",
  "product": "string",
  "projects": [
    "string"
  ]
}
```

<h3 id="coderepobinding_getcoderepobinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepobinding.v1.GetReply](#schemaapi.coderepobinding.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CodeRepoBinding_SaveCodeRepoBinding

<a id="opIdCodeRepoBinding_SaveCodeRepoBinding"></a>

`POST /api/v1/products/{product_name}/coderepobindings/{coderepo_binding_name}`

> Body parameter

```json
{
  "coderepo": "string",
  "permissions": "string",
  "product": "string",
  "projects": [
    "string"
  ]
}
```

<h3 id="coderepobinding_savecoderepobinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|Products to which the resource belongs.|
|coderepo_binding_name|path|string|true|CodeRepoBinding resource name.|
|insecure_skip_check|query|boolean|false|Whether to skip global resource detection (not recommended).|
|body|body|[api.coderepobinding.v1.SaveRequest_Body](#schemaapi.coderepobinding.v1.saverequest_body)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="coderepobinding_savecoderepobinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepobinding.v1.SaveReply](#schemaapi.coderepobinding.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_api.coderepobinding.v1.DeleteReply">api.coderepobinding.v1.DeleteReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepobinding.v1.deletereply"></a>
<a id="schema_api.coderepobinding.v1.DeleteReply"></a>
<a id="tocSapi.coderepobinding.v1.deletereply"></a>
<a id="tocsapi.coderepobinding.v1.deletereply"></a>

```json
{
  "message": "string"
}

```

Represents a response to a DeleteRequest message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Msg is a message confirming the delete.|

<h2 id="tocS_api.coderepobinding.v1.GetReply">api.coderepobinding.v1.GetReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepobinding.v1.getreply"></a>
<a id="schema_api.coderepobinding.v1.GetReply"></a>
<a id="tocSapi.coderepobinding.v1.getreply"></a>
<a id="tocsapi.coderepobinding.v1.getreply"></a>

```json
{
  "coderepo": "string",
  "name": "string",
  "permissions": "string",
  "product": "string",
  "projects": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coderepo|string|false|none|Authorized Code Repository.|
|name|string|false|none|CodeRepoBinding resource name.|
|permissions|string|false|none|Authorization Permissions, readwrite or readonly.|
|product|string|false|none|The Code repo is authorized to this product or projects under it.|
|projects|[string]|false|none|If the project list is empty, it means that the code repo is authorized to the product. If the project list has values, it means that the code repo is authorized to the specified projects.|

<h2 id="tocS_api.coderepobinding.v1.ListsReply">api.coderepobinding.v1.ListsReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepobinding.v1.listsreply"></a>
<a id="schema_api.coderepobinding.v1.ListsReply"></a>
<a id="tocSapi.coderepobinding.v1.listsreply"></a>
<a id="tocsapi.coderepobinding.v1.listsreply"></a>

```json
{
  "items": [
    {
      "coderepo": "string",
      "name": "string",
      "permissions": "string",
      "product": "string",
      "projects": [
        "string"
      ]
    }
  ]
}

```

Define the ListsReply message, which includes the repeated items field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[api.coderepobinding.v1.GetReply](#schemaapi.coderepobinding.v1.getreply)]|false|none|none|

<h2 id="tocS_api.coderepobinding.v1.SaveReply">api.coderepobinding.v1.SaveReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepobinding.v1.savereply"></a>
<a id="schema_api.coderepobinding.v1.SaveReply"></a>
<a id="tocSapi.coderepobinding.v1.savereply"></a>
<a id="tocsapi.coderepobinding.v1.savereply"></a>

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

<h2 id="tocS_api.coderepobinding.v1.SaveRequest_Body">api.coderepobinding.v1.SaveRequest_Body</h2>
<!-- backwards compatibility -->
<a id="schemaapi.coderepobinding.v1.saverequest_body"></a>
<a id="schema_api.coderepobinding.v1.SaveRequest_Body"></a>
<a id="tocSapi.coderepobinding.v1.saverequest_body"></a>
<a id="tocsapi.coderepobinding.v1.saverequest_body"></a>

```json
{
  "coderepo": "string",
  "permissions": "string",
  "product": "string",
  "projects": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coderepo|string|false|none|Authorized Code Repository.|
|permissions|string|false|none|Authorization Permissions, readwrite or readonly.|
|product|string|false|none|The Code repo is authorized to this product or projects under it.|
|projects|[string]|false|none|If the project list is empty, it means that the code repo is authorized to the product. If the project list has values, it means that the code repo is authorized to the specified projects.|

