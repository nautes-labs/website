---
footerLink: /api/tadmin/cluster
title: Cluster
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="cluster-api">Cluster API v0.3.1</h1>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>

# Authentication

- HTTP Authentication, scheme: Bearer 

<h1 id="cluster-api-cluster">Cluster</h1>

## ListClusters

<a id="opIdListClusters"></a>

`GET /api/v1/clusters`

<h3 id="listclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|field_selector|query|string|false|Filter the list by field.  eg: field_selector=cluster_type=physical,usage=worker,worker_type=pipeline Field Support: cluster_type: exact match usage: exact match worker_type: exact match|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "string",
      "cluster_kind": "string",
      "cluster_type": "string",
      "usage": "string",
      "host_cluster": "string",
      "primary_domain": "string",
      "worker_type": "string",
      "api_server": "string"
    }
  ]
}
```

<h3 id="listclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.cluster.v1.ListsReply](#schemaapi.cluster.v1.listsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## GetCluster

<a id="opIdGetCluster"></a>

`GET /api/v1/clusters/{cluster_name}`

<h3 id="getcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_name|path|string|true|cluster_name is the name of the cluster.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "cluster_kind": "string",
  "cluster_type": "string",
  "usage": "string",
  "host_cluster": "string",
  "primary_domain": "string",
  "worker_type": "string",
  "api_server": "string"
}
```

<h3 id="getcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.cluster.v1.GetReply](#schemaapi.cluster.v1.getreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## SaveCluster

<a id="opIdSaveCluster"></a>

`POST /api/v1/clusters/{cluster_name}`

> Body parameter

```json
{
  "api_server": "string",
  "cluster_kind": "string",
  "cluster_type": "string",
  "usage": "string",
  "host_cluster": "string",
  "argocd_host": "string",
  "vcluster": {
    "https_node_port": "string"
  },
  "traefik": {
    "http_node_port": "string",
    "https_node_port": "string"
  },
  "kubeconfig": "string",
  "worker_type": "string",
  "primary_domain": "string",
  "tekton_host": "string"
}
```

<h3 id="savecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_name|path|string|true|cluster_name specifies the name of the cluster.|
|insecure_skip_check|query|boolean|false|insecureSkipCheck specifies whether to skip the certificate check when connecting to the API server.|
|body|body|[api.cluster.v1.SaveRequest_Body](#schemaapi.cluster.v1.saverequest_body)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="savecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.cluster.v1.SaveReply](#schemaapi.cluster.v1.savereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## DeleteCluster

<a id="opIdDeleteCluster"></a>

`DELETE /api/v1/clusters/{cluster_name}`

<h3 id="deletecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_name|path|string|true|ClusterName is the name of the cluster.|
|insecure_skip_check|query|boolean|false|InsecureSkipCheck specifies whether to skip security checks.|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="deletecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.cluster.v1.DeleteReply](#schemaapi.cluster.v1.deletereply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_api.cluster.v1.DeleteReply">api.cluster.v1.DeleteReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.cluster.v1.deletereply"></a>
<a id="schema_api.cluster.v1.DeleteReply"></a>
<a id="tocSapi.cluster.v1.deletereply"></a>
<a id="tocsapi.cluster.v1.deletereply"></a>

```json
{
  "message": "string"
}

```

DeleteReply represents a response to a delete request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|msg specifies the message of the delete response.|

<h2 id="tocS_api.cluster.v1.GetReply">api.cluster.v1.GetReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.cluster.v1.getreply"></a>
<a id="schema_api.cluster.v1.GetReply"></a>
<a id="tocSapi.cluster.v1.getreply"></a>
<a id="tocsapi.cluster.v1.getreply"></a>

```json
{
  "name": "string",
  "cluster_kind": "string",
  "cluster_type": "string",
  "usage": "string",
  "host_cluster": "string",
  "primary_domain": "string",
  "worker_type": "string",
  "api_server": "string"
}

```

GetReply represents a response to a get request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|name is the name of the cluster.|
|cluster_kind|string|false|none|cluster_kind is the kind of the cluster.|
|cluster_type|string|false|none|cluster_type is the type of the cluster.|
|usage|string|false|none|usage is the usage of the cluster.|
|host_cluster|string|false|none|host_cluster specifies the host cluster name if the cluster is a virtual cluster.|
|primary_domain|string|false|none|primary_domain is used to build the domain of components within the cluster.|
|worker_type|string|false|none|worker_type maybe pipeline or deployment, when the cluster usage is 'worker', the WorkType is required.|
|api_server|string|false|none|api_server specifies the API server address of the cluster.|

<h2 id="tocS_api.cluster.v1.ListsReply">api.cluster.v1.ListsReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.cluster.v1.listsreply"></a>
<a id="schema_api.cluster.v1.ListsReply"></a>
<a id="tocSapi.cluster.v1.listsreply"></a>
<a id="tocsapi.cluster.v1.listsreply"></a>

```json
{
  "items": [
    {
      "name": "string",
      "cluster_kind": "string",
      "cluster_type": "string",
      "usage": "string",
      "host_cluster": "string",
      "primary_domain": "string",
      "worker_type": "string",
      "api_server": "string"
    }
  ]
}

```

ListsReply represents a response to a list request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[api.cluster.v1.GetReply](#schemaapi.cluster.v1.getreply)]|false|none|[GetReply represents a response to a get request.]|

<h2 id="tocS_api.cluster.v1.SaveReply">api.cluster.v1.SaveReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.cluster.v1.savereply"></a>
<a id="schema_api.cluster.v1.SaveReply"></a>
<a id="tocSapi.cluster.v1.savereply"></a>
<a id="tocsapi.cluster.v1.savereply"></a>

```json
{
  "message": "string"
}

```

SaveReply represents a response to a save request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|msg specifies the message of the save response.|

<h2 id="tocS_api.cluster.v1.SaveRequest_Body">api.cluster.v1.SaveRequest_Body</h2>
<!-- backwards compatibility -->
<a id="schemaapi.cluster.v1.saverequest_body"></a>
<a id="schema_api.cluster.v1.SaveRequest_Body"></a>
<a id="tocSapi.cluster.v1.saverequest_body"></a>
<a id="tocsapi.cluster.v1.saverequest_body"></a>

```json
{
  "api_server": "string",
  "cluster_kind": "string",
  "cluster_type": "string",
  "usage": "string",
  "host_cluster": "string",
  "argocd_host": "string",
  "vcluster": {
    "https_node_port": "string"
  },
  "traefik": {
    "http_node_port": "string",
    "https_node_port": "string"
  },
  "kubeconfig": "string",
  "worker_type": "string",
  "primary_domain": "string",
  "tekton_host": "string"
}

```

Body represents the body of the save request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_server|string|false|none|api_server specifies the API server address of the cluster.|
|cluster_kind|string|false|none|cluster_kind specifies the kind of the cluster.|
|cluster_type|string|false|none|cluster_type specifies the type of the cluster. It can be "physical" or "virtual".|
|usage|string|false|none|usage specifies the usage of the cluster. It can be "host" or "worker".|
|host_cluster|string|false|none|host_cluster specifies the host cluster name if the cluster is a virtual cluster.|
|argocd_host|string|false|none|argocd_host specifies the ArgoCD host name.|
|vcluster|[api.cluster.v1.Vcluster](#schemaapi.cluster.v1.vcluster)|false|none|Vcluster represents the configuration for the virtual cluster.|
|traefik|[api.cluster.v1.Traefik](#schemaapi.cluster.v1.traefik)|false|none|Traefik represents the configuration for the Traefik ingress controller.|
|kubeconfig|string|false|none|kubeconfig specifies the Kubeconfig file of the cluster.|
|worker_type|string|false|none|worker_type maybe pipeline or deployment, when the cluster usage is 'worker', the WorkType is required.|
|primary_domain|string|false|none|primary_domain is used to build the domain of components within the cluster.|
|tekton_host|string|false|none|tekton_host is the domain for the tekton dashboard, and it must be a subdomain of the PrimaryDomain|

<h2 id="tocS_api.cluster.v1.Traefik">api.cluster.v1.Traefik</h2>
<!-- backwards compatibility -->
<a id="schemaapi.cluster.v1.traefik"></a>
<a id="schema_api.cluster.v1.Traefik"></a>
<a id="tocSapi.cluster.v1.traefik"></a>
<a id="tocsapi.cluster.v1.traefik"></a>

```json
{
  "http_node_port": "string",
  "https_node_port": "string"
}

```

Traefik represents the configuration for the Traefik ingress controller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|http_node_port|string|false|none|httpNodePort specifies the NodePort for the HTTP port of the Traefik ingress controller.|
|https_node_port|string|false|none|httpsNodePort specifies the NodePort for the HTTPS port of the Traefik ingress controller.|

<h2 id="tocS_api.cluster.v1.Vcluster">api.cluster.v1.Vcluster</h2>
<!-- backwards compatibility -->
<a id="schemaapi.cluster.v1.vcluster"></a>
<a id="schema_api.cluster.v1.Vcluster"></a>
<a id="tocSapi.cluster.v1.vcluster"></a>
<a id="tocsapi.cluster.v1.vcluster"></a>

```json
{
  "https_node_port": "string"
}

```

Vcluster represents the configuration for the virtual cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|https_node_port|string|false|none|httpsNodePort specifies the NodePort for the HTTPS port of the virtual cluster.|

