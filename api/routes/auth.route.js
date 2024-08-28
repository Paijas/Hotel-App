import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

//Criando rotas do auth
//Usando metodos diretamente ligados com o banco de dados
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router