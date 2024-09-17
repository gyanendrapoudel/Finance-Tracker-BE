import bcrypt from 'bcryptjs'
const saltRound = 15

export const hashPassword =(text)=>{
    return bcrypt.hashSync(text, saltRound)
    
}

export const checkPassword = (text1, text2)=>{
    return bcrypt.compareSync(text1,text2)
}