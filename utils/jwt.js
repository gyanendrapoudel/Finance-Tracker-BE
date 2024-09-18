import jwt from 'jsonwebtoken'


export const jwtToken=(obj)=>{
  const token = jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
    return token
}