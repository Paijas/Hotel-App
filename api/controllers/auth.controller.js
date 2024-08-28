import bcrypt from "bcrypt"; 

export const  register = async (req,res)=>{
    const {username,email,password} = req.body

  
    //HASH SENHA
    
    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword)

    //CREATE USER e INSERT TO DB
  
}
export const  login = (req,res)=>{
   
}
export const  logout = (req,res)=>{
  
}