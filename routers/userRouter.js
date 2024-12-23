import express from "express";
import { insertUser, loginUser } from "../models/UserModel.js";
import { checkPassword, hashPassword } from '../utils/bcryptjs.js'
import { jwtToken } from "../utils/jwt.js";
import { auth } from "../middleware/auth.js";


const router = express.Router()


router.get("/", auth,(req,res,next)=>{
 
 try {
    const user = req.userInfo
    
  res.json({
    status: 'success',
    message: 'user details',
    user
  })
 } catch (error) {
  next(error)
 }
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
  
      if (
        error.message.includes(
          'E11000 duplicate key error collection: FinaceTracker.users index: email_1 dup key:'
        )
      ) {
           error.message = 'User already exist. Please Login'
      }
      error.statusCode = 200
        next(error)
   }
   
})

// login 
router.post("/login", async (req,res,next)=>{
   try {
   
    const { email, password } = req.body
      if(email && password){
        const result = await loginUser(email)
        
        // check user exist with given email.
        if (result?._id) {
          // compare password with bcrypt to authenticate user
          const match = checkPassword(password, result.password)

          result.password = undefined  
          // sending response without password, when property is undefined 
          // json will ignore that property  
          if (match) {
            // when users comes here, they are authenticated users

            // creating JWT Token for authenticated user using JWT
            const accessJWT = jwtToken({ email: email })
            
            return res.status(200).json({
              message: 'Login Successful',
              user: result,
              status:"success",
              accessJWT
            })
          }
        }
      }
    

    return res.status(401).json({
      error:"Invalid email or password",
      
     
    })
    
   } catch (error) {
    next(error)
   }
})



export default router