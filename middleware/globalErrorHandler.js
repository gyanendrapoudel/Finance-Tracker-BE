export  const globalErrorHandler = ((error,req,res,next)=>{
        
       const statusCode = error.statusCode || 500
       const message = error.message || "Inter server Error"
       res.status(statusCode).json({
        status:"error",
        message
       })
})