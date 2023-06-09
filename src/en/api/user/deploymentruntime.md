---
footerLink: /api/tadmin/deploymentruntime
title: Deployment Runtime
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="deployment-runtime-api">Deployment Runtime API v0.3.1</h1>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>

# Authentication

- HTTP Authentication, scheme: Bearer 

<h1 id="deployment-runtime-api-deploymentruntime">Deploymentruntime</h1>

## ListDeploymentRuntimes

<a id="opIdListDeploymentRuntimes"></a>

`GET /api/v1/products/{product_name}/deploymentruntimes`

<h3 id="listdeploymentruntimes-parameters">Parameters</h3>

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
      "projects_ref": [
        "string"
      ],
      "manifest_source": {
        "code_repo": "string",
        "target_revision": "string",
        "path": "string"
      },
      "destination": "string"
    }
  ]
}
```

<h3 id="listdeploymentruntimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.deploymentruntime.v1.ListsReply](#schemaapi.deploymentruntime.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## GetDeploymentRuntime

<a id="opIdGetDeploymentRuntime"></a>

`GET /api/v1/products/{product_name}/deploymentruntimes/{deploymentruntime_name}`

<h3 id="getdeploymentruntime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|ProductName is the name of the product.|
|deploymentruntime_name|path|string|true|DeploymentRuntimeName is the name of the Deployment Runtime.|

> Example responses

> 200 Response

```json
{
  "product": "string",
  "name": "string",
  "projects_ref": [
    "string"
  ],
  "manifest_source": {
    "code_repo": "string",
    "target_revision": "string",
    "path": "string"
  },
  "destination": "string"
}
```

<h3 id="getdeploymentruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.deploymentruntime.v1.GetReply](#schemaapi.deploymentruntime.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## SaveDeploymentRuntime

<a id="opIdSaveDeploymentRuntime"></a>

`POST /api/v1/products/{product_name}/deploymentruntimes/{deploymentruntime_name}`

> Body parameter

```json
{
  "projects_ref": [
    "string"
  ],
  "manifest_source": {
    "code_repo": "string",
    "target_revision": "string",
    "path": "string"
  },
  "destination": "string"
}
```

<h3 id="savedeploymentruntime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|ProductName is the name of the product.|
|deploymentruntime_name|path|string|true|DeploymentRuntimeName is the name of the Deployment Runtime.|
|insecure_skip_check|query|boolean|false|InsecureSkipCheck specifies whether to skip security checks.|
|body|body|[api.deploymentruntime.v1.SaveRequest_Body](#schemaapi.deploymentruntime.v1.saverequest_body)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="savedeploymentruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.deploymentruntime.v1.SaveReply](#schemaapi.deploymentruntime.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## DeleteDeploymentRuntime

<a id="opIdDeleteDeploymentRuntime"></a>

`DELETE /api/v1/products/{product_name}/deploymentruntimes/{deploymentruntime_name}`

<h3 id="deletedeploymentruntime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|ProductName is the name of the product.|
|deploymentruntime_name|path|string|true|DeploymentRuntimeName is the name of the Deployment Runtime.|
|insecure_skip_check|query|boolean|false|InsecureSkipCheck specifies whether to skip security checks.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedeploymentruntime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.deploymentruntime.v1.DeleteReply](#schemaapi.deploymentruntime.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_api.deploymentruntime.v1.DeleteReply">api.deploymentruntime.v1.DeleteReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.deploymentruntime.v1.deletereply"></a>
<a id="schema_api.deploymentruntime.v1.DeleteReply"></a>
<a id="tocSapi.deploymentruntime.v1.deletereply"></a>
<a id="tocsapi.deploymentruntime.v1.deletereply"></a>

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

<h2 id="tocS_api.deploymentruntime.v1.GetReply">api.deploymentruntime.v1.GetReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.deploymentruntime.v1.getreply"></a>
<a id="schema_api.deploymentruntime.v1.GetReply"></a>
<a id="tocSapi.deploymentruntime.v1.getreply"></a>
<a id="tocsapi.deploymentruntime.v1.getreply"></a>

```json
{
  "product": "string",
  "name": "string",
  "projects_ref": [
    "string"
  ],
  "manifest_source": {
    "code_repo": "string",
    "target_revision": "string",
    "path": "string"
  },
  "destination": "string"
}

```

GetReply is a message that returns a Deployment Runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|false|none|Product is the name of the product.|
|name|string|false|none|Name is the name of the Deployment Runtime.|
|projects_ref|[string]|false|none|ProjectsRef is a list of project references.|
|manifest_source|[api.deploymentruntime.v1.ManifestSource](#schemaapi.deploymentruntime.v1.manifestsource)|false|none|ManifestSource is a message representing the source of the deployment manifest.|
|destination|string|false|none|Destination is the destination for the deployment.|

<h2 id="tocS_api.deploymentruntime.v1.ListsReply">api.deploymentruntime.v1.ListsReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.deploymentruntime.v1.listsreply"></a>
<a id="schema_api.deploymentruntime.v1.ListsReply"></a>
<a id="tocSapi.deploymentruntime.v1.listsreply"></a>
<a id="tocsapi.deploymentruntime.v1.listsreply"></a>

```json
{
  "items": [
    {
      "product": "string",
      "name": "string",
      "projects_ref": [
        "string"
      ],
      "manifest_source": {
        "code_repo": "string",
        "target_revision": "string",
        "path": "string"
      },
      "destination": "string"
    }
  ]
}

```

ListsReply is a message that returns a list of Deployment Runtimes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[api.deploymentruntime.v1.GetReply](#schemaapi.deploymentruntime.v1.getreply)]|false|none|Items is a list of Deployment Runtimes.|

<h2 id="tocS_api.deploymentruntime.v1.ManifestSource">api.deploymentruntime.v1.ManifestSource</h2>
<!-- backwards compatibility -->
<a id="schemaapi.deploymentruntime.v1.manifestsource"></a>
<a id="schema_api.deploymentruntime.v1.ManifestSource"></a>
<a id="tocSapi.deploymentruntime.v1.manifestsource"></a>
<a id="tocsapi.deploymentruntime.v1.manifestsource"></a>

```json
{
  "code_repo": "string",
  "target_revision": "string",
  "path": "string"
}

```

ManifestSource is a message representing the source of the deployment manifest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code_repo|string|false|none|CodeRepo specifies the code repository of the git platform.|
|target_revision|string|false|none|TargetRevision is the corresponding code repository revision, eg: main.|
|path|string|false|none|Path is the deploy the specified path.|

<h2 id="tocS_api.deploymentruntime.v1.SaveReply">api.deploymentruntime.v1.SaveReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.deploymentruntime.v1.savereply"></a>
<a id="schema_api.deploymentruntime.v1.SaveReply"></a>
<a id="tocSapi.deploymentruntime.v1.savereply"></a>
<a id="tocsapi.deploymentruntime.v1.savereply"></a>

```json
{
  "message": "string"
}

```

SaveReply is a message that confirms a Deployment Runtime has been saved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Msg is a message confirming the save.|

<h2 id="tocS_api.deploymentruntime.v1.SaveRequest_Body">api.deploymentruntime.v1.SaveRequest_Body</h2>
<!-- backwards compatibility -->
<a id="schemaapi.deploymentruntime.v1.saverequest_body"></a>
<a id="schema_api.deploymentruntime.v1.SaveRequest_Body"></a>
<a id="tocSapi.deploymentruntime.v1.saverequest_body"></a>
<a id="tocsapi.deploymentruntime.v1.saverequest_body"></a>

```json
{
  "projects_ref": [
    "string"
  ],
  "manifest_source": {
    "code_repo": "string",
    "target_revision": "string",
    "path": "string"
  },
  "destination": "string"
}

```

Body is the message body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects_ref|[string]|false|none|ProjectsRef is a list of project references.|
|manifest_source|[api.deploymentruntime.v1.ManifestSource](#schemaapi.deploymentruntime.v1.manifestsource)|false|none|ManifestSource is a message representing the source of the deployment manifest.|
|destination|string|false|none|Destination is the destination for the deployment.|

