import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


export const  mongoConnection = async ()=>{
   try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        conn && console.log('Connection Successful')
          

   } catch (error) {
    console.log(error)
   }

   
}

