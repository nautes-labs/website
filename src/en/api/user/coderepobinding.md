---
footerLink: /api/tadmin/coderepobinding
title: Code Repository Binding
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="code-repository-binding-api">Code Repository Binding API v0.3.0</h1>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>

# Authentication

- HTTP Authentication, scheme: Bearer 

<h1 id="code-repository-binding-api-coderepobinding">CodeRepoBinding</h1>

## ListCodeRepoBindings

<a id="opIdListCodeRepoBindings"></a>

`GET /api/v1/products/{product_name}/coderepobindings`

<h3 id="listcoderepobindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product to list repositories for|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "product": "string",
      "name": "string",
      "projects": [
        "string"
      ],
      "permissions": "string",
      "coderepo": "string"
    }
  ]
}
```

<h3 id="listcoderepobindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepobinding.v1.ListsReply](#schemaapi.coderepobinding.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## GetCodeRepoBinding

<a id="opIdGetCodeRepoBinding"></a>

`GET /api/v1/products/{product_name}/coderepobindings/{coderepo_binding_name}`

<h3 id="getcoderepobinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|none|
|coderepo_binding_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "product": "string",
  "name": "string",
  "projects": [
    "string"
  ],
  "permissions": "string",
  "coderepo": "string"
}
```

<h3 id="getcoderepobinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepobinding.v1.GetReply](#schemaapi.coderepobinding.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## SaveCodeRepoBinding

<a id="opIdSaveCodeRepoBinding"></a>

`POST /api/v1/products/{product_name}/coderepobindings/{coderepo_binding_name}`

> Body parameter

```json
{
  "product": "string",
  "projects": [
    "string"
  ],
  "permissions": "string",
  "coderepo": "string"
}
```

<h3 id="savecoderepobinding-parameters">Parameters</h3>

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

<h3 id="savecoderepobinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepobinding.v1.SaveReply](#schemaapi.coderepobinding.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## DeleteCodeRepoBinding

<a id="opIdDeleteCodeRepoBinding"></a>

`DELETE /api/v1/products/{product_name}/coderepobindings/{coderepo_binding_name}`

<h3 id="deletecoderepobinding-parameters">Parameters</h3>

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

<h3 id="deletecoderepobinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.coderepobinding.v1.DeleteReply](#schemaapi.coderepobinding.v1.deletereply)|

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
  "product": "string",
  "name": "string",
  "projects": [
    "string"
  ],
  "permissions": "string",
  "coderepo": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|false|none|The Code repo is authorized to this product or projects under it.|
|name|string|false|none|CodeRepoBinding resource name.|
|projects|[string]|false|none|If the project list is empty, it means that the code repo is authorized to the product. If the project list has values, it means that the code repo is authorized to the specified projects.|
|permissions|string|false|none|Authorization Permissions, readwrite or readonly.|
|coderepo|string|false|none|Authorized Code Repository.|

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
      "product": "string",
      "name": "string",
      "projects": [
        "string"
      ],
      "permissions": "string",
      "coderepo": "string"
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
  "product": "string",
  "projects": [
    "string"
  ],
  "permissions": "string",
  "coderepo": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|false|none|The Code repo is authorized to this product or projects under it.|
|projects|[string]|false|none|If the project list is empty, it means that the code repo is authorized to the product. If the project list has values, it means that the code repo is authorized to the specified projects.|
|permissions|string|false|none|Authorization Permissions, readwrite or readonly.|
|coderepo|string|false|none|Authorized Code Repository.|

