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
