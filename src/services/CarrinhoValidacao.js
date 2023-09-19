import ProdutosDAO from "../DAO/ProdutosDao.js";

class CarrinhoValidacao{
    static ValidarCarrinho(id){
        const Carrinho = ProdutosDao.buscarnoCarrinhoPorId(id)
        if(Carrinho){
            return true 
        }else{
            return false
        }
    }
    static validaProduto(produto){
        return typeof produto == "string" && produto.length > 2
    }
    static validaValorTotal(valorTotal){
        if (typeof valorTotal !== 'number' || valorTotal < 1) {
            throw new Error('O Valor Total deve ser um número maior que 1.');
        }
    }
    static validaResumoCompra(resumoCompra){
        return typeof resumoCompra == "string" && resumoCompra.length > 2
    }
    static validaCredito(credito){
        if (typeof credito !== 'number' || credito < 0) {
            throw new Error('O credito deve ser um número não negativo.');
        }
    }
    static validaCamposCarrinho(produto, valorTotal, resumoCompra, credito){
        const isValid = this.validaProduto(produto) && this.validaValorTotal(valorTotal) && this.validaResumoCompra(resumoCompra) && this.validaCredito(credito)
        return isValid
    }
}
export default CarrinhoValidacao