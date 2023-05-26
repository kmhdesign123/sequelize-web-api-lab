# Sequelize Cryptid API
This API allows you to perform CRUD operations on a database of cryptids!

# Endpoints
The following section provides information on the available endpoints for this API.

## Create a Cryptid

**Method**: ```POST```

**Endpoint**: ```/api/cryptids```

**Description**: This endpoint creates a new cryptid with the provided information in the request body.

**Request Body**:
```
{
  "name": "string",
  "region": "string",
  "description": "string"
}
```

**Response**:
```
{
  "id": integer,
  "name": "string",
  "region": "string",
  "description": "string"
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## Get All Cryptids

**Method**: GET

**Endpoint**: ```/api/cryptids```

**Description**: This endpoint retrieves all the cryptids stored in the database.

**Response**:
```
[
  {
    "id": integer,
    "name": "string",
    "region": "string",
    "description": "string"
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

## Update a Cryptid

**Method**: ```PUT```

**Endpoint**: ```/api/cryptids/:id```

**Description**: This endpoint updates the cryptid with the specified id using the information in the request body.

**Request Body**:
```
{
  "name": "string",
  "region": "string",
  "description": "string"
}
```

**Response**:
```
{
  "id": integer,
  "name": "string",
  "region": "string",
  "description": "string"
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## Delete a Cryptid

**Method**: ```DELETE```

**Endpoint**: ```/api/cryptids/:id```

**Description**: This endpoint deletes the cryptid with the specified id from the database.

**Response**:
```
{
  "id": integer,
  "name": "string",
  "region": "string",
  "description": "string"
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```