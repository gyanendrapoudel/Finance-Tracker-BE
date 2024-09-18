# Finance Tracker API

### Environment variables
* Install dotenv
* Database connection string( MONGO_URI) and JWT secret key(JWT_SECRET )
example
In dbConfig.js
``` 
process('dotenv').config()
const url = process.env.URL  
```
(In this case URL is env variable)


### DB connection 
* install mongoose 
In dbConfig.js
```
const conn = await mongoose.connect(process.env.MONGO_URI)
```


### user API end point 
http://localhost:8000/api/v1/users/


### Define userSchema

### user password Hashing 
* install bcrypt
A library to help you hash passwords.

### using JWT token for authorization 
JSON Web Tokens consist of three parts separated by dots (.),
 which are:
Header
Payload
Signature
```
yarn add  jsonwebtoken
```

