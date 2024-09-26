import express from "express"
import { insertTransaction } from "../models/TransactionModel.js"


const router = express.Router()


router.post("/", async(req,res,next)=>{
    try {
         const transaction = req.body
         
         const result = await insertTransaction(transaction)
        res.json({
            status:"success",
            message:"transactions created ",
            transaction:transaction
        })

    } catch (error) {
        
    }
})

export default router