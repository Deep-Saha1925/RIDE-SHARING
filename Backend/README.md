# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user in the system. This endpoint validates the input data, hashes the password, creates a user record, and returns an authentication token along with the user data.

### Method

`POST`

### Request Body

The request body must be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (min 3 characters, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

#### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      // user object (excluding password)
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "erros": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

#### Missing Fields

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "message": "All fields are required."
  }
  ```

### Notes

- The password is securely hashed before storing.
- The returned token can be used for authenticated requests.


## `/users/login` Endpoint

### Description

Authenticates an existing user. This endpoint validates the input data, checks the user's credentials, and returns an authentication token along with the user data.

### Method

`POST`

### Request Body

The request body must be a JSON object with the following structure:

```json
{
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

#### Example

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      // user object (excluding password)
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "erros": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Something went wrong."
  }
  ```

### Notes

- The password is checked securely against the stored hash.
- The returned token can be used for authenticated requests.


## `/users/profile` Endpoint

### Description

Returns the authenticated user's profile information. This endpoint requires a valid authentication token (JWT) sent via cookie or `Authorization` header.

### Method

`GET`

### Authentication

- Requires JWT token in the `token` cookie **or** in the `Authorization` header as `Bearer <token>`.

### Request

No request body required.

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": "optional_socket_id"
    // other user fields (excluding password)
  }
  ```

#### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes

- You must be logged in to access this endpoint.
- Returns the user object associated with the provided token.