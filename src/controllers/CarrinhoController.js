import CarrinhoValidacao from "../services/CarrinhoValidacao.js"
import CarrinhoRepository from "../Repository/CarrinhoRepository.js"
class CarrinhoController {

    static rotas(app) {

        app.get('/carrinho', async (req, res) => {
            try {
                const carrinho = await CarrinhoRepository.buscarTodosOsCarrinhos()
                res.status(200).json(erro.message)
                
            } catch (error) {
                
                res.status(404).json(erro.message)                
            }
        })
        
        
        app.post("/carrinho", async (req, res) => {
            try {
                CarrinhoValidacao.validaCarrinho(req.body.produto, req.body.valortotal, req.body.resumocompra, req.body.valortrocaid)
                const carrinho = req.body
                const inserir = await CarrinhoRepository.criarCarrinho(carrinho)
                res.status(201).json({ inserir, message: "Novo carrinho adicionado!" })
            } catch (erro) {
                res.status(400).json({ error: true, message: `Campos invalidos` })
            }
        })

        app.get("/carrinho/:id", async (req, res) => {
            try {
                const carrinho = await CarrinhoRepository.buscarCarrinhoPorId(req.params.id)
                if (!carrinho_id) {
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
                const carrinho = await CarrinhoValidacao.buscarCarrinhoPorId(id)
                if(!carrinho._id) {
                    throw new Erro("Carrinho não encontrado")
                }
                const resposta = await CarrinhoRepository.deletaCarrinhoPorId(id)

                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        app.patch("/carrinho/:id", async (req, res) => {
            const id = req.params.id
            const entries = Object.entries(req.body)
            try {
                const carrinho = req.body
                await CarrinhoValidacao.validaAtualizacaoCarrinho(entries)
                const resposta = await CarrinhoRepository.AtualizaCarrinhoPorId(id, carrinho)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(400).json({ message: erro.message, id })
                } 
        })
    }
}
export default CarrinhoController