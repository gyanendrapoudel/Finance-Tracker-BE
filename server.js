import express from 'express'
import { mongoConnection } from './config/dbConfig.js'
const app = express()
const PORT = process.env.PORT || 8000

// DB Connection 
mongoConnection()


app.get("/",(req,res)=>{
    res.json({
        message:"Hello"
    })
})


app.listen(PORT, (error)=>{
    error ? console.log('Error',error) : console.log(`Port is running on ${PORT}`)
})