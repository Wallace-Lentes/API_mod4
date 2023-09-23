import CarrinhoDAO from "../DAO/CarrinhoDAO.js"
import TabelaCarrinho from "../models/CarrinhoModel.js"
import CarrinhoValidacao from "../services/CarrinhoValidacao.js"

class CarrinhoController {

    static rotas(app) {

        app.get('/carrinho', async (req, res) => {

            const carrinho = await CarrinhoDAO.buscarNoCarrinho()
            console.log(carrinho)
            res.status(200).json(carrinho)
        })


        app.post("/carrinho", async (req, res) => {
            try {
                CarrinhoValidacao.validaCamposCarrinho(req.body.produto, req.body.valortotal, req.body.resumocompra, req.body.valortrocaid)
                const carrinho = req.body
                const inserir = await CarrinhoDAO.inserirnoCarrinho(carrinho)
                res.status(201).json({ inserir, message: "Novo carrinho adicionado!" })
            } catch (erro) {
                res.status(400).json({ error: true, message: `Campos invalidos` })
            }
        })

        app.get("/carrinho/:id", async (req, res) => {
            try {
                const carrinho = await CarrinhoDAO.buscarNoCarrinhoPorId(req.params.id)
                if (!carrinho) {
                    throw new Error("Id do carrinho está inválido ou não cadastrado")
                }
                res.status(200).json(carrinho)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })
        app.delete("/carrinho/:id", async (req, res) => {
            const id = req.params.id
            try {
                await CarrinhoValidacao.ValidarCarrinho(id)
                CarrinhoDAO.deletarNoCarrinhoPorId(id)
                res.status(200).json({ error: false })
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        app.put("/carrinho/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                CarrinhoValidacao.validaCamposCarrinho(body.produto, body.valortotal, body.resumocompra, body.valortrocaid)
                await CarrinhoValidacao.ValidarCarrinho(id)
                const carrinhoModelado = new TabelaCarrinho(body.produto, body.valortotal, body.resumocompra, body.valortrocaid)
                CarrinhoDAO.AtualizarcarrinhoPorId(id, carrinhoModelado)
                res.status(204).json()
            } catch (error) {
                if (error.message == "Campos invalidos") {
                    res.status(400).json({ error: error.message })
                } else {
                    res.status(404).json({ id: id, ...error })
                }
            }
        })
    }
}
export default CarrinhoController