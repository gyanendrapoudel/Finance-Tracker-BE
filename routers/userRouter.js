import express from "express";
import { insertUser } from "../models/UserModel.js";
import { hashPassword } from '../utils/bcryptjs.js'
const router = express.Router()


router.get("/",(req,res)=>{
 res.json({
    status:"success",
    message:"user details"
 })
})
router.post("/", async (req,res,next)=>{
   // password encryption
   
   
   console.log("before hashing ", req.body.password)
   req.body.password = hashPassword(req.body.password)
   console.log('after hashing ', req.body.password)
    
   try {
      const result = await insertUser(req.body)
      result?.id
        ? res.json({
            status: 'success',
            message: 'User has been created',
          })
        : res.json({
            status: 'error',
            message: 'Unable to create user, try again later',
          })
   } catch (error) {
      let msg =error.message
      if (
        msg.includes(
          'E11000 duplicate key error collection: FinaceTracker.users index: email_1 dup key:'
        )
      ){
         msg = "User already exist. Please Login"
      }
        res.json({
          status: 'error',
          message: msg,
        })
   }
   
})



export default router