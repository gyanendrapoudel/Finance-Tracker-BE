import { loginUser } from "../models/UserModel.js"
import { verifyJwtToken } from "../utils/jwt.js"

export const auth = async(req,res,next)=>{
    try {
        // getting access token from API header
        const jwtToken = req.headers.authorization
        // decoding access token using JWT decoding method
        const result =  verifyJwtToken(jwtToken)
        // getting user details from database using that decoded email from access token
        if(result?.email){
             const user = await loginUser(result?.email)
             if(user?._id){
                user.password = undefined
                req.userInfo = user
                return next()
             }
             
        }
        res.status(403).json({
            error:"Unauthorized"
        })

       
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}