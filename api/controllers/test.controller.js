import jwt from "jsonwebtoken"

export const shouldBeLoggedIn =  async (req,res) =>{
   
    console.log(req.userId)
    res.status(200).json({message:"Você está autenticado"})
}
export const shouldBeAdmin =  async (req,res) =>{
    const token =  req.cookies.token

    if(!token) return res.status(401).json({message:"Não autenticado"})

    jwt.verify(token, "manga", async(err,paylot)=>{
        if(err) return res.status(403).json({message:"Token autenticado"})
        if(!paylot,isAdmin){
            return res.status(403).json({message:"Não autorizado"})
        }
    })

    res.status(200).json({message:"Você está autenticado"})
}