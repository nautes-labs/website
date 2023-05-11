---
footerLink: /api/tadmin/product
title: 产品
---
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="product-api">Product API v0.3.0</h1>

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="product-api-product">Product</h1>

## Product_ListProducts

<a id="opIdProduct_ListProducts"></a>

`GET /api/v1/products`

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "git": {
        "github": {
          "description": "string",
          "path": "string",
          "visibility": "string"
        },
        "gitlab": {
          "description": "string",
          "path": "string",
          "visibility": "string"
        }
      },
      "name": "string"
    }
  ]
}
```

<h3 id="product_listproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.product.v1.ListProductsReply](#schemaapi.product.v1.listproductsreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Product_DeleteProduct

<a id="opIdProduct_DeleteProduct"></a>

`DELETE /api/v1/products/{product_name}`

<h3 id="product_deleteproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product to delete|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="product_deleteproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.product.v1.DeleteProductReply](#schemaapi.product.v1.deleteproductreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Product_GetProduct

<a id="opIdProduct_GetProduct"></a>

`GET /api/v1/products/{product_name}`

<h3 id="product_getproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product to get|

> Example responses

> 200 Response

```json
{
  "git": {
    "github": {
      "description": "string",
      "path": "string",
      "visibility": "string"
    },
    "gitlab": {
      "description": "string",
      "path": "string",
      "visibility": "string"
    }
  },
  "name": "string"
}
```

<h3 id="product_getproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.product.v1.GetProductReply](#schemaapi.product.v1.getproductreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Product_SaveProduct

<a id="opIdProduct_SaveProduct"></a>

`POST /api/v1/products/{product_name}`

> Body parameter

```json
{
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
  "product_name": "string"
}
```

<h3 id="product_saveproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_name|path|string|true|The name of the product to save|
|body|body|[api.product.v1.SaveProductRequest](#schemaapi.product.v1.saveproductrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="product_saveproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[api.product.v1.SaveProductReply](#schemaapi.product.v1.saveproductreply)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_api.product.v1.DeleteProductReply">api.product.v1.DeleteProductReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.deleteproductreply"></a>
<a id="schema_api.product.v1.DeleteProductReply"></a>
<a id="tocSapi.product.v1.deleteproductreply"></a>
<a id="tocsapi.product.v1.deleteproductreply"></a>

```json
{
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message returned after deleting the product|

<h2 id="tocS_api.product.v1.GetProductReply">api.product.v1.GetProductReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.getproductreply"></a>
<a id="schema_api.product.v1.GetProductReply"></a>
<a id="tocSapi.product.v1.getproductreply"></a>
<a id="tocsapi.product.v1.getproductreply"></a>

```json
{
  "git": {
    "github": {
      "description": "string",
      "path": "string",
      "visibility": "string"
    },
    "gitlab": {
      "description": "string",
      "path": "string",
      "visibility": "string"
    }
  },
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|git|[api.product.v1.GitGroup](#schemaapi.product.v1.gitgroup)|false|none|none|
|name|string|false|none|The name of the product|

<h2 id="tocS_api.product.v1.Git">api.product.v1.Git</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.git"></a>
<a id="schema_api.product.v1.Git"></a>
<a id="tocSapi.product.v1.git"></a>
<a id="tocsapi.product.v1.git"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github|[api.product.v1.Github](#schemaapi.product.v1.github)|false|none|none|
|gitlab|[api.product.v1.Gitlab](#schemaapi.product.v1.gitlab)|false|none|none|

<h2 id="tocS_api.product.v1.GitGroup">api.product.v1.GitGroup</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.gitgroup"></a>
<a id="schema_api.product.v1.GitGroup"></a>
<a id="tocSapi.product.v1.gitgroup"></a>
<a id="tocsapi.product.v1.gitgroup"></a>

```json
{
  "github": {
    "description": "string",
    "path": "string",
    "visibility": "string"
  },
  "gitlab": {
    "description": "string",
    "path": "string",
    "visibility": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github|[api.product.v1.GithubGroup](#schemaapi.product.v1.githubgroup)|false|none|none|
|gitlab|[api.product.v1.GitlabGroup](#schemaapi.product.v1.gitlabgroup)|false|none|none|

<h2 id="tocS_api.product.v1.Github">api.product.v1.Github</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.github"></a>
<a id="schema_api.product.v1.Github"></a>
<a id="tocSapi.product.v1.github"></a>
<a id="tocsapi.product.v1.github"></a>

```json
{
  "description": "string",
  "name": "string",
  "path": "string",
  "visibility": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the Github repository|
|name|string|false|none|The name of the Github repository|
|path|string|false|none|The path of the Github repository|
|visibility|string|false|none|The visibility of the Github repository, which can only be "public" or "private"|

<h2 id="tocS_api.product.v1.GithubGroup">api.product.v1.GithubGroup</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.githubgroup"></a>
<a id="schema_api.product.v1.GithubGroup"></a>
<a id="tocSapi.product.v1.githubgroup"></a>
<a id="tocsapi.product.v1.githubgroup"></a>

```json
{
  "description": "string",
  "path": "string",
  "visibility": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the Github group|
|path|string|false|none|The path of the Github group|
|visibility|string|false|none|The visibility of the Github group|

<h2 id="tocS_api.product.v1.Gitlab">api.product.v1.Gitlab</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.gitlab"></a>
<a id="schema_api.product.v1.Gitlab"></a>
<a id="tocSapi.product.v1.gitlab"></a>
<a id="tocsapi.product.v1.gitlab"></a>

```json
{
  "description": "string",
  "name": "string",
  "path": "string",
  "visibility": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the Gitlab repository|
|name|string|false|none|The name of the Gitlab repository|
|path|string|false|none|The path of the Gitlab repository|
|visibility|string|false|none|The visibility of the Gitlab repository, which can only be "public" or "private"|

<h2 id="tocS_api.product.v1.GitlabGroup">api.product.v1.GitlabGroup</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.gitlabgroup"></a>
<a id="schema_api.product.v1.GitlabGroup"></a>
<a id="tocSapi.product.v1.gitlabgroup"></a>
<a id="tocsapi.product.v1.gitlabgroup"></a>

```json
{
  "description": "string",
  "path": "string",
  "visibility": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the Gitlab group|
|path|string|false|none|The path of the Gitlab group|
|visibility|string|false|none|The visibility of the Gitlab group|

<h2 id="tocS_api.product.v1.ListProductsReply">api.product.v1.ListProductsReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.listproductsreply"></a>
<a id="schema_api.product.v1.ListProductsReply"></a>
<a id="tocSapi.product.v1.listproductsreply"></a>
<a id="tocsapi.product.v1.listproductsreply"></a>

```json
{
  "items": [
    {
      "git": {
        "github": {
          "description": "string",
          "path": "string",
          "visibility": "string"
        },
        "gitlab": {
          "description": "string",
          "path": "string",
          "visibility": "string"
        }
      },
      "name": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[api.product.v1.GetProductReply](#schemaapi.product.v1.getproductreply)]|false|none|The list of products|

<h2 id="tocS_api.product.v1.SaveProductReply">api.product.v1.SaveProductReply</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.saveproductreply"></a>
<a id="schema_api.product.v1.SaveProductReply"></a>
<a id="tocSapi.product.v1.saveproductreply"></a>
<a id="tocsapi.product.v1.saveproductreply"></a>

```json
{
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message returned after saving the product|

<h2 id="tocS_api.product.v1.SaveProductRequest">api.product.v1.SaveProductRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi.product.v1.saveproductrequest"></a>
<a id="schema_api.product.v1.SaveProductRequest"></a>
<a id="tocSapi.product.v1.saveproductrequest"></a>
<a id="tocsapi.product.v1.saveproductrequest"></a>

```json
{
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
  "product_name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|git|[api.product.v1.Git](#schemaapi.product.v1.git)|false|none|none|
|product_name|string|false|none|The name of the product to save|

