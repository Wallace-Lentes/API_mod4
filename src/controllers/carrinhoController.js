import produtosdao from "./dao/produtosdao.js"; 

class CarrinhoController{ 

    static rotas(app){

        app.get('/carrinho', async(req,res) =>{

            const carrinho = await carrinhodao.buscarNoCarrinho()
            console.log(carrinho)
            res.status(200).json(pcarrinho)
        })
    }
}
export default carrinhoController