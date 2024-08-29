import bcrypt from "bcrypt"; 
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"
//Criando metodo Register

export const  register = async (req,res)=>{
    const {username,email,password} = req.body
  
  
    try {
        //HASH SENHA
    
        const hashedPassword = await bcrypt.hash(password,10);

        //CREATE USER e INSERT TO DB

        const newUser =  await prisma.usuario.create({
            data:{
                username,
                email,
                password: hashedPassword, 
            },
        })

        res.status(201).json({message:"O usuário foi criado com sucesso"})
        
       
      

    } catch (err) {
        console.error(err)
        res.status(500).json({message:"Falha ao criar o usuário"})
    }
   

    
}

export const  login = async (req,res)=>{

   const {username,password} = req.body

   try {
    
    //VERIFICAR SE O USUARIO EXISTE

    const user = await prisma.usuario.findUnique({
        where:{username}
    })

    if(!user) return res.status(401).json({message:"Credencial Invalida"})

   //VERIFICANDO SE A SENHA ESTA CORRETA
   
    const isPasswordValid = await bcrypt.compare(password,user.password) //(SENHA INSERIDA,SENHA DO USER)
    if(!isPasswordValid) return res.status(401).json({message:"Credencial Invalida"})

   //GERAR COOKIE TOKEN e ENVIAR AO USUARIO

   
   const age = 1000 * 60 * 60 * 24 * 7

   const token = jwt.sign({
    id:user.id
   }, "manga",{expiresIn:age})

   const {userPassword, ...userInfo} =user

    res.cookie("token",token,{
        httpOnly:true,
        maxAge:age,
        
    }).status(200).json({userInfo})


   } catch (err) {
        console.log(err)
        res.status(500).json({message:"Falha no login"})
   }
}
export const  logout = (req,res)=>{
  res.clearCookie("token").status(200).json({message:"Logout feito com sucesso!"})
}