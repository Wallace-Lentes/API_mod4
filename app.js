import express from "express";
import MaterialRecController from "./src/controllers/MaterialRecController.js";
import UsuariosController from "./src/controllers/UsuariosController.js";
import HistoricoController from "./src/controllers/HistoricoController.js";
import CarrinhoController from "./src/controllers/CarrinhoController.js";
import ProdutosController from "./src/controllers/produtoController.js";

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor rodando`)
})

app.use(express.json())
MaterialRecController.rotas(app)
UsuariosController.rotas(app)
HistoricoController.rotas(app)
CarrinhoController.rotas(app)
ProdutosController.rotas(app)