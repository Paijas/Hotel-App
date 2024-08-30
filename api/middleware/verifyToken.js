import jwt from "jsonwebtoken";

export const verifyToken = (req,res,next) =>{
    const token =  req.cookies.token

    if(!token) return res.status(401).json({message:"Não autenticado"})

    jwt.verify(token, "manga", async(err,paylot)=>{
        if(err) return res.status(403).json({message:"Token autenticado"})
        req.userId = paylot.id

        next()
        })
}