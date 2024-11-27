import express from "express"
import { deleteTransaction, getTransaction, insertTransaction } from "../models/TransactionModel.js"
import { auth } from "../middleware/auth.js"


const router = express.Router()


router.post("/", async (req,res,next)=>{
    try {
         let transaction = req.body
        //  getting user form auth.js
         const user = req.userInfo
         const {_id} = user
         transaction.userId = _id
         const result = await insertTransaction(transaction)
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
       next(error)
    }
})

router.get("/",  async (req,res,next)=>{
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
        next(error)
    }

})

router.delete("/", auth, async(req,res,next)=>{
  try {
    const userId = req.userInfo._id
    const transIds = req.body
    const { deletedCount } = await deleteTransaction(userId, transIds)
    deletedCount>0?res.json({
      status:"success",
      message:`${deletedCount} transaction has been deleted !`
    }):res.json({
      status:"error",
      message:"Unable to delete any transaction"
    })
  } catch (error) {
    
    next(error)
  }
})

export default router