import express from "express"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"



const app = express()

//Permitindo receber JSON
app.use(express.json())

//Declarando Rotas
app.use("/api/post", postRoute)
app.use("/api/auth", authRoute)

//Declarando porta 
app.listen(3000,()=>{
    console.log("Server está rodando na porta 3000")
})