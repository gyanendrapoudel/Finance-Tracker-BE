import jwt from 'jsonwebtoken'


export const jwtToken=(obj)=>{
  const token = jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: '1m',
  })
    return token
}

export const verifyJwtToken= (token)=>{
 try {
   return jwt.verify(token, process.env.JWT_SECRET)
 } catch (error) {
  return error.message
  
 }
}