import bcrypt from 'bcryptjs'
const saltRound = 15

export const hashPassword =(text)=>{
    return bcrypt.hashSync(text, saltRound)
    
}