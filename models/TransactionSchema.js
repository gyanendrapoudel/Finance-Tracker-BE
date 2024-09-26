import mongoose from "mongoose";


const transactionSchema = mongoose.Schema(
  {
    tType: {
        type:"string",
       enum: ['income', 'expenses'],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    tDate: {
      type: Date,
      required: true,
    },
    userId :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
    }
    
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("Transactions",transactionSchema)