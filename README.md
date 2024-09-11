# Finance Tracker API

### Environment variables
* Install dotenv
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