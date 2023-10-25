import ProdutosValidacao from "../services/ProdutosValidacao.js"
import ProdutoRepository from "../Repository/ProdutoRepository.js"

class ProdutosController{ 

    static rotas(app){

        app.get('/produto', async(req,res) =>{
            try {
                
                const produto = await ProdutoRepository.buscarTodosOsProdutos()
                res.status(200).json(produto) 
            } catch (error) {
                res.status(404).json(error.message)  
            }
        })

        app.post("/produtos", async (req, res) => {
            try {
                ProdutosValidacao.validaCamposProdutos(req.body.nomeProduto, req.body.descricaoProduto, req.body.preco)
                const produtos = req.body
                const inserir = await ProdutosRepository.criarProduto(produtos)
                res.status(201).json({inserir, message: "Novo produto adicionado!"})
            } catch (erro) {
                res.status(400).json({error: true, message: `Campos invalidos` })
            }
        })

        app.get("/produtos/:id", async (req, res) => {
            try {
                const produtos = await ProdutosRepository.buscarProdutoPorId(req.params.id)
                if (!produtos_id) {
                    throw new Error("Id do produto está inválido ou não cadastrado")
                }
                res.status(200).json(produtos)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })      
                
        app.delete("/produtos/:id", async (req, res) => {
            const id = req.params.id
            try {
                const produtos = await ProdutosValidacao.buscarProdutoPorId(id)
                if(!produtos_id){
                    throw new Erro("Produto não encontrado")
                }
                const resposta = await ProdutosRepository.deletaProdutoPorId(id)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })
        
        app.patch("/produtos/:id", async (req, res) => {
            const id = req.params.id
            const entries = Object.entries(req.body)
            try {
                const produtos = req.body
                await ProdutosValidacao.validaAtualizacaoProduto(entries)
                const resposta = await ProdutosRepository.atualizaProdutoPorId(id, produtos)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(400).json({ message: erro.message, id })
                } 
        })
    
    }
}
export default ProdutosController