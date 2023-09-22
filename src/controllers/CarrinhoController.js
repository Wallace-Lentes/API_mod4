import CarrinhoDAO from "../DAO/CarrinhoDAO.js"
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


        app.delete("/carrinho/:id", async (req, res) => {
            try {
                const carrinho = await CarrinhoDAO.buscarNoCarrinhoPorId(req.params.id)
                if (!carrinho) {
                    throw new Error("carrinho não encontrado")
                }
                const resposta = await CarrinhoDAO.deletarNoCarrinhoPorId(req.params.id)
                res.status(200).json(resposta)
            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id: req.params.id })
            }
        })
    }
}
export default CarrinhoController