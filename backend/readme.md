## API Endpoints

### POST /users/register

This endpoint is used to register a new user.

#### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

#### Response
- **201 Created**: User successfully registered. Returns the created user object and an authentication token.
  ```json
  {
    "user": {
      "_id": "string",
      "firstname": "string",
      "lastname": "string",
      "email": "string"
    },
    "token": "string"
  }
  ```
- **400 Bad Request**: Validation errors or missing required fields. Returns an array of error messages.
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

#### Example Request
```bash
POST /users/register HTTP/1.1
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```
## API Endpoints

### POST /users/register

This endpoint is used to register a new user.

#### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

#### Response
- **201 Created**: User successfully registered. Returns the created user object and an authentication token.
  ```json
  {
    "user": {
      "_id": "string",
      "firstname": "string",
      "lastname": "string",
      "email": "string"
    },
    "token": "string"
  }
  ```
- **400 Bad Request**: Validation errors or missing required fields. Returns an array of error messages.
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

#### Example Request
```bash
POST /users/register HTTP/1.1
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

---

### POST /users/login

This endpoint is used to authenticate an existing user and generate an authentication token.

#### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

#### Response
- **200 OK**: User successfully authenticated. Returns the user object and an authentication token.
  ```json
  {
    "user": {
      "_id": "string",
      "firstname": "string",
      "lastname": "string",
      "email": "string"
    },
    "token": "string"
  }
  ```
- **400 Bad Request**: Validation errors or missing required fields. Returns an array of error messages.
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```
- **401 Unauthorized**: Invalid credentials provided (e.g., incorrect email or password).
  ```json
  {
    "error": "Invalid credentials"
  }
  ```

#### Example Request
```bash
POST /users/login HTTP/1.1
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```
