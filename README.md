# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. Validates the provided email, first name, and password. If registration is successful, returns a JWT token and the newly created user data.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "user@example.com",
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "password": "yourpassword"
}
```

### Field Requirements

- **email**: Must be a valid email address.
- **fullname.firstName**: Minimum 3 characters, required.
- **fullname.lastName**: Required (no specific validation in route, but should be provided).
- **password**: Minimum 6 characters.

## Responses

| Status Code | Description                             | Response Example                                                                    |
| ----------- | --------------------------------------- | ----------------------------------------------------------------------------------- |
| 201         | User registered successfully            | `{ "token": "...", "message": "User registered successfully", "newUser": { ... } }` |
| 400         | Validation error or user already exists | `{ "errors": [ ... ] }` or `{ "message": "User already exists" }`                   |
| 500         | Internal server error                   | `{ "message": "Internal server error" }`                                            |

## Example Request

```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "password": "yourpassword"
  }'
```

---

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description

Authenticates a user with email and password. If credentials are valid, returns a JWT token and user data.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- **email**: Must be a valid email address.
- **password**: Minimum 6 characters.

## Responses

| Status Code | Description                        | Response Example                                                    |
| ----------- | ---------------------------------- | ------------------------------------------------------------------- |
| 200         | Login successful                   | `{ "token": "...", "message": "Login successful", "user": { ... } }`|
| 400         | Validation error or invalid login  | `{ "errors": [ ... ] }` or `{ "message": "Invalid email or password" }` |
| 500         | Internal server error              | `{ "message": "Internal server error" }`                            |

## Example Request

```bash
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "yourpassword"
  }'
```

---

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Description

Returns the authenticated user's profile information. Requires a valid JWT token (sent as a cookie or in the `Authorization` header).

## Authentication

- **Required**: Yes (JWT token via cookie or `Authorization: Bearer <token>` header)

## Responses

| Status Code | Description                | Response Example                |
| ----------- | -------------------------- | ------------------------------- |
| 200         | Returns user profile       | `{ "_id": "...", "email": "...", "fullname": { ... }, ... }` |
| 401         | Unauthorized (no/invalid token) | `{ "message": "Unauthorized access" }` |

## Example Request

```bash
curl -X GET http://localhost:PORT/users/profile \
  -H "Authorization: Bearer <your_jwt_token>"
```

---

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Description

Logs out the authenticated user by blacklisting the current JWT token and clearing the authentication cookie.

## Authentication

- **Required**: Yes (JWT token via cookie or `Authorization` header)

## Responses

| Status Code | Description                | Response Example                        |
| ----------- | -------------------------- | --------------------------------------- |
| 200         | Logout successful          | `{ "message": "Logout successful" }`    |
| 401         | Unauthorized (no/invalid token) | `{ "message": "Unauthorized access" }` |

## Example Request

```bash
curl -X GET http://localhost:PORT/users/logout \
  -H "Authorization: Bearer <your_jwt_token>"
```