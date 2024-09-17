import jwt from 'jsonwebtoken'
const JWT_SECRET = 'hgfds'

export const jwtToken=(obj)=>{
  const token =  jwt.sign(obj, JWT_SECRET,{
        expiresIn:"1d"
    })
    return token
}