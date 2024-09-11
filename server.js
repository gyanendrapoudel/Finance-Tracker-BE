import express from 'express'

const app = express()

const PORT = process.env.PORT || 8000

console.log(PORT)

app.get("/",(req,res)=>{
    res.json({
        message:"Hello"
    })
})

app.listen(PORT, (error)=>{
    error ? console.log('Error',error) : console.log(`Port is running on ${PORT}`)
})