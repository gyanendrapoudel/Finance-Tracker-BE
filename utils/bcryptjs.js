import bcrypt from 'bcryptjs'
const saltRound = 15

export const hasPassword =(text)=>{
    return bcrypt.hashSync(text, saltRound)
    
}