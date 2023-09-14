import express from "express";
import MaterialRecController from "./src/controllers/MaterialRecController.js";


const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Esta rodando`)
})

app.use(express.json())
MaterialRecController.rotas(app)
