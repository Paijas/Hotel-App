import express from "express"
import cookieParser from "cookie-parser"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import testRoute from "./routes/test.route.js"
import cors from "cors"


const app = express()

//Permitindo receber JSON
app.use(express.json())
app.use(cors({origin: "http://localhost:5173", credentials:true}))
app.use(cookieParser())

//Declarando Rotas
app.use("/api/post", postRoute)
app.use("/api/auth", authRoute)
app.use("/api/test", testRoute)

//Declarando porta 
app.listen(3000,()=>{
    console.log("Server está rodando na porta 3000")
})