import e from 'express'
import TransactionSchema from './TransactionSchema.js'


// insert transaction 

export const insertTransaction = (transaction)=>{
    
    return  TransactionSchema(transaction).save()
}

// get all transaction  using userId

export const getTransaction = (userId)=>{
    return TransactionSchema.find(userId)
}