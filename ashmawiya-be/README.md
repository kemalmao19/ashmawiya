# Ashmawiya API Documentation
## Welcome to Ashmawiya API Documentation 
https://ashmawiya-be.vercel.app/api

## Getting Started

### Get Users
#### All Users
```
GET /api/users
```
#### Single User
```
GET /api/users/:id
```

### Authentication
#### Register
```
POST /api/users
```
*json body: username, email, password*

#### Login
```
POST /api/users/login
``` 
*json body: email, password*

### Update User
```
PUT /api/users/:id
```
*json body: username?, email?, password?*


-----------------------------------------------------
 ... Rest Coming Soon ...