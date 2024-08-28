import bcrypt from "bcrypt"; 
import prisma from "../lib/prisma.js"

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

        const users = await prisma.usuario.findMany()

        res.status(201).json({message:"O usuário foi criado com sucesso"})

    } catch (err) {
        console.error(err)
        res.status(500).json({message:"Falha ao criar o usuário"})
    }
   

    
}
export const  login = (req,res)=>{
   const {username,password,email} = req.body

   //VERIFICAR SE O USUARIO EXISTE

   //VERIFICAR SE A SENHA ESTA CORRETA
}
export const  logout = (req,res)=>{
  
}