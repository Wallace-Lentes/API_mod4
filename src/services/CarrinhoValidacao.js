
class CarrinhoValidacao{
    static ValidarCarrinho(id){
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
    static validaValorTrocaId(valorTrocaId){
        if (typeof valorTrocaId !== 'number' || valorTrocaId < 0) {
            throw new Error('O valorTrocaId deve ser um número não negativo.');
        }
    }
    static validaCamposCarrinho(produto, valorTotal, resumoCompra, valorTrocaId){
        const isValid = this.validaProduto(produto) && this.validaValorTotal(valorTotal) && this.validaResumoCompra(resumoCompra) && this.validavalorTrocaId(valorTrocaId)
        return isValid
    }
}
export default CarrinhoValidacao