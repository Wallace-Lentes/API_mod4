import produtosdao from "./dao/produtosdao.js"; 

class ProdutosController{ 

    static rotas(app){

        app.get('/produtos', async(req,res) =>{

            const produto = await produtosdao.buscarTodosOsProdutos()
            console.log(produto)
            res.status(200).json(produto)
        })
    }
}
export default produtoController