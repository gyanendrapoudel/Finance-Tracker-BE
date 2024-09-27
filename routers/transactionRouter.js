import express from "express"
import { getTransaction, insertTransaction } from "../models/TransactionModel.js"


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
        res.json({
          status: 'error',
          message: error.message,
        })
    }
})

router.get("/", async (req,res,next)=>{
    try {
        const userInfo = req.userInfo
        const { userId } = userInfo
        const result =  await getTransaction(userId)
        result?.length>0?res.json({
            status:"success",
            message:"All transactions",
            transactions:result
        }):res.json({
            status:"error",
            message:"Unable to get transaction"
        })
    } catch (error) {
        res.json({
          status: 'error',
          message: error.message,
        })
    }

})

export default router