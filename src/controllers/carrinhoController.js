import CarrinhoDAO from "../DAO/CarrinhoDAO.js"

class CarrinhoController{ 

    static rotas(app){

        app.get('/carrinho', async(req,res) =>{

            const carrinho = await CarrinhoDAO.buscarNoCarrinho()
            console.log(carrinho)
            res.status(200).json(carrinho)
        })
    }
}
export default CarrinhoController