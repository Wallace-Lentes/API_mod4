import ProdutosDAO from "../DAO/ProdutosDAO.js"
import TabelaProduto from "../models/ProdutoModel.js"
import ProdutosValidacao from "../services/ProdutosValidacao.js"

class ProdutosController{ 

    static rotas(app){

        app.get('/produtos', async(req,res) =>{

            const produto = await ProdutosDAO.buscarTodosOsProdutos()
            console.log(produto)
            res.status(200).json(produto)
        })

        app.post("/produtos", async (req, res) => {
            try {
                ProdutosValidacao.validaCamposProdutos(req.body.nomeProduto, req.body.descricaoProduto, req.body.preco)
                const produtos = req.body
                const inserir = await ProdutosDAO.inserirProdutos(produtos)
                res.status(201).json({inserir, message: "Novo produto adicionado!"})
            } catch (erro) {
                res.status(400).json({error: true, message: `Campos invalidos` })
            }
        })
        app.get("/produtos/:id", async (req, res) => {
            try {
                const produtos = await ProdutosDAO.buscarProdutosPorId(req.params.id)
                if (!produtos) {
                    throw new Error("Id do produtos está inválido ou não cadastrado")
                }
                res.status(200).json(produtos)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })
        app.delete("/produtos/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ProdutosValidacao.validaId(id)
                ProdutosDAO.deletarProdutosPorId(id)
                res.status(200).json({ error: false })
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        app.put("/produtos/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                ProdutosValidacao.validaCamposprodutos(body.nome, body.descricao, body.preco)
                await ProdutosValidacao.validaId(id)
                const produtosModelado = new TabelaProduto(body.nome, body.descricao, body.preco)
                ProdutosDAO.AtualizarProdutosPorId(id, produtosModelado)
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
export default ProdutosController