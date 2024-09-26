import express from "express"
import { insertTransaction } from "../models/TransactionModel.js"


const router = express.Router()


router.post("/", async (req,res,next)=>{
    try {
         let transaction = req.body
        //  getting user form auth.js
         const user = req.userInfo
         const {_id} = user
         transaction.userId = _id
         console.log(transaction)
         const result = await insertTransaction(transaction)
         console.log(result)
         result?._id
           ? res.json({
               status: 'success',
               message: 'transactions created ',
               transaction: transaction,
             })
           : res.json({
               status: 'error',
               message: 'Unable to create a transaction ',
               transaction: transaction,
             })

    } catch (error) {
        
    }
})

export default router