import express from "express"


const router = express.Router()


router.post("/",(req,res,next)=>{
    try {
        console.log("transaction")
        res.json({
            status:"success",
            message:"transactions created "
        })

    } catch (error) {
        
    }
})

export default router