import ProdutosDAO from "../DAO/ProdutosDAO.js"

class ProdutosController{ 

    static rotas(app){

        app.get('/produtos', async(req,res) =>{

            const produto = await ProdutosDAO.buscarTodosOsProdutos()
            console.log(produto)
            res.status(200).json(produto)
        })
    }
}
export default ProdutosController