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
# Captain API Endpoint Documentation

---

## Captain Registration

### Endpoint

`POST /captains/register`

### Description

Registers a new captain (driver) with vehicle details. Validates all required fields. Returns a JWT token and the newly created captain data.

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "password": "YourPassword123",
  "vehicals": {
    "color": "Red",
    "passangerCapacity": 4,
    "regNo": "DL01AB1234",
    "vehicalType": "car"
  }
}
```

#### Field Requirements

- **email**: Valid email address.
- **fullname.firstName**: Required, not empty.
- **fullname.lastName**: Required, not empty.
- **password**: Minimum 6 characters, must contain uppercase, lowercase, and a number.
- **vehicals.color**: Required, not empty.
- **vehicals.passangerCapacity**: Integer, minimum 1.
- **vehicals.regNo**: Valid registration number (e.g., `DL01AB1234`).
- **vehicals.vehicalType**: Required, one of `car`, `bike`, `auto`.

### Responses

| Status Code | Description                             | Response Example                                                                    |
| ----------- | --------------------------------------- | ----------------------------------------------------------------------------------- |
| 201         | Captain registered successfully         | `{ "token": "...", "message": "Captain registered successfully", "newCaptain": { ... } }` |
| 400         | Validation error or captain exists      | `{ "errors": [ ... ] }` or `{ "message": "Captain already exists" }`                |
| 500         | Internal server error                   | `{ "message": "Internal server error" }`                                            |

### Example Request

```bash
curl -X POST http://localhost:PORT/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "captain@example.com",
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "password": "YourPassword123",
    "vehicals": {
      "color": "Red",
      "passangerCapacity": 4,
      "regNo": "DL01AB1234",
      "vehicalType": "car"
    }
  }'
```

---

## Captain Login

### Endpoint

`POST /captains/login`

### Description

Authenticates a captain with email and password. Returns a JWT token if credentials are valid.

### Request Body

```json
{
  "email": "captain@example.com",
  "password": "YourPassword123"
}
```

#### Field Requirements

- **email**: Valid email address.
- **password**: Minimum 6 characters.

### Responses

| Status Code | Description                        | Response Example                                                    |
| ----------- | ---------------------------------- | ------------------------------------------------------------------- |
| 200         | Login successful                   | `{ "token": "...", "message": "Login successful" }`                 |
| 400         | Validation error or invalid login  | `{ "errors": [ ... ] }` or `{ "message": "Invalid email or password" }` |
| 500         | Internal server error              | `{ "message": "Internal server error" }`                            |

### Example Request

```bash
curl -X POST http://localhost:PORT/captains/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "captain@example.com",
    "password": "YourPassword123"
  }'
```

---

## Captain Profile

### Endpoint

`GET /captains/profile`

### Description

Returns the authenticated captain's profile information. Requires a valid JWT token (sent as a cookie or in the `Authorization` header).

### Authentication

- **Required**: Yes (JWT token via cookie or `Authorization: Bearer <token>` header)

### Responses

| Status Code | Description                | Response Example                |
| ----------- | -------------------------- | ------------------------------- |
| 200         | Returns captain profile    | `{ "captain": { ... } }`        |
| 401         | Unauthorized               | `{ "message": "Unauthorized access" }` |
| 404         | Captain not found          | `{ "message": "Captain not found" }`   |

### Example Request

```bash
curl -X GET http://localhost:PORT/captains/profile \
  -H "Authorization: Bearer <your_jwt_token>"
```
### Example Response

```json
{
  "captain": {
    "_id": "64a1f8e2c2b9e2a1b8c1d2e3",
    "email": "captain@example.com",
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "vehicals": {
      "color": "Red",
      "passangerCapacity": 4,
      "regNo": "DL01AB1234",
      "vehicalType": "car"
    }
    // ...other fields
  }
}
```
---
## Captain Logout

### Endpoint

`GET /captains/logout`

### Description

Logs out the authenticated captain by blacklisting the current JWT token and clearing the authentication cookie.

### Authentication

- **Required**: Yes (JWT token via cookie or `Authorization` header)

### Responses

| Status Code | Description                | Response Example                        |
| ----------- | -------------------------- | --------------------------------------- |
| 200         | Logout successful          | `{ "message": "Logout successful" }`    |
| 401         | Unauthorized               | `{ "message": "Unauthorized access" }`  |

### Example Request

```bash
curl -X GET http://localhost:PORT/captains/logout \
  -H "Authorization:
  ```

### Example Response

```json
{
  "message": "Logout successful"
}
```