import UserSchema from "./UserSchema.js";


 export const insertUser=(obj)=>{
   return UserSchema(obj).save()
}

export const loginUser=(email)=>{
  return UserSchema.findOne({email:email})
}