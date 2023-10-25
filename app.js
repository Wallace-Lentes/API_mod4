import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import cors from "cors"

import MaterialRecController from "./src/controllers/MaterialRecController.js";
import UsuariosController from "./src/controllers/UsuariosController.js";
import ProdutosController from "./src/controllers/ProdutoController.js";
import CarrinhoController from "./src/controllers/CarrinhoController.js";
import HistoricoController from "./src/controllers/HistoricoController.js";

config()

const app = express();

app.use(express.json())
app.use(cors("*"))

const port = process.env.PORT || 3000
const USER_DB = process.env.USER_DB || "local"
const DATABASE = process.env.DATABASE || "local"
const PASSWORD = process.env.PASSWORD || "local"
const CLUSTER = process.env.CLUSTER || "local"

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
app.listen(port, () => {
  console.log(`Servidor rodando`)
})
})
.catch((e)=>console.log(e.message))

MaterialRecController.rotas(app)
UsuariosController.rotas(app)
HistoricoController.rotas(app)
CarrinhoController.rotas(app)
ProdutosController.rotas(app)