import express from "express";
import MaterialRecController from "./src/controllers/MaterialRecController.js";
import UsuariosController from "./src/controllers/UsuariosController.js";

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor rodando`)
})

app.use(express.json())
MaterialRecController.rotas(app)
UsuariosController.rotas(app)
