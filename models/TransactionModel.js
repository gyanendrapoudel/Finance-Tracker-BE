import TransactionSchema from './TransactionSchema.js'


// insert transaction 

export const insertTransaction = (transaction)=>{
    
    return  TransactionSchema(transaction).save()
}