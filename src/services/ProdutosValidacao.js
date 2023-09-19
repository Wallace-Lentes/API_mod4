import ProdutosDAO from "../DAO/ProdutosDao.js";

class ProdutosValidacao{
    static validaId(id){
        const produtos = ProdutosDAO.buscarProdutosPorId(id)
        if(Produtos){
            return true 
        }else{
            return false 
        }
    }
    static validaNome(nomeProduto){
        return typeof nomeProduto == "string" && nomeProduto.length > 3
    }
    static validaDescricao(descricaoProduto){
        return typeof descricaoProduto == "string" && descricaoProduto.length > 5
    }
    static validaPreco(preco){
        if (typeof preco !== "number" || preco <= 0) {
            throw new Error('O preço deve ser um número positivo.');
        }
    }
    static validaCamposProdutos(nomeProduto, descricaoProduto, preco){
        const isValid = this.validaNome(nomeProduto) && this.validaDescricao(descricaoProduto) && this.validaPreco(preco)
        return isValid
    }
}

export default ProdutosValidacao