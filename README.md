# JWT Authentication API

A simple Express.js API for JWT-based authentication with protected routes.

## Overview

This project demonstrates a basic implementation of JSON Web Token (JWT) authentication in a Node.js/Express application. It includes:

- User login functionality
- Protected routes requiring authentication
- Error handling middleware
- JWT verification

## Project Structure

```
├── controllers/
│   └── main.js               # Controller for login and dashboard logic
├── errors/
│   └── index.js              # Custom error classes
├── middleware/
│   ├── auth.js               # JWT verification middleware
│   ├── error-handler.js      # Error handling middleware
│   └── notfound.js           # 404 handler middleware
├── public/
│   ├── index.html            # Simple frontend for testing
│   ├── styles.css            # CSS for the frontend
│   └── browser-app.js        # Frontend JavaScript
├── routes/
│   └── main.js               # API route definitions
├── .env                      # Environment variables (JWT_SECRET, etc.)
├── app.js                    # Main application entry point
└── package.json              # Project dependencies
```

## Features

- **JWT Authentication**: Secure user authentication using JSON Web Tokens
- **Protected Routes**: Access control for specific API endpoints
- **Error Handling**: Custom error classes and middleware
- **Async/Await Support**: Using express-async-errors for cleaner code

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/suraj-kumal/JSON-Web-Token.git
   cd JSON-Web-Token
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Login
- **URL**: `/api/v1/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Response**: JWT token

### Dashboard (Protected)
- **URL**: `/api/v1/dashboard`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <your_jwt_token>`
- **Response**: Secret data that requires authentication

## Usage Example

### Login and Get Token
```javascript
// Example with fetch API
async function login() {
  const response = await fetch('/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'username',
      password: 'password'
    })
  });
  
  const data = await response.json();
  // Store token for future requests
  localStorage.setItem('token', data.token);
}
```

### Access Protected Route
```javascript
// Example with fetch API
async function getDashboardData() {
  const token = localStorage.getItem('token');
  
  const response = await fetch('/api/v1/dashboard', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  const data = await response.json();
  console.log(data);
}
```

## Error Handling

The API includes custom error handling for:
- 404 Not Found errors
- Authentication failures
- JWT validation errors
- General server errors

## Security Notes

- Store your JWT secret securely in environment variables
- Use HTTPS in production
- Consider token expiration for enhanced security

