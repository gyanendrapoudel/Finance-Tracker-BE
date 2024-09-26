import express from 'express'
import { mongoConnection } from './config/dbConfig.js'
import userRouter from './routers/userRouter.js'
import transactionRouter from './routers/transactionRouter.js'
import cors from 'cors'
import { auth } from './middleware/Auth.js'
const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())
// DB Connection 
mongoConnection()

// Middleware
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        message:"Hello"
    })
})

// user Router
app.use('/api/v1/users', userRouter)
// transaction router
app.use("/api/v1/transactions", auth, transactionRouter)


app.listen(PORT, (error)=>{
    error ? console.log('Error',error) : console.log(`Port is running on ${PORT}`)
})