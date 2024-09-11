import express from "express";
import { insertUser } from "../models/UserModel.js";
const router = express.Router()


router.get("/",(req,res)=>{
 res.json({
    status:"success",
    message:"user details"
 })
})
router.post("/", async (req,res,next)=>{
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
      res.json({
        status: 'error',
        message: error.message
      })
   }
   
})



export default router