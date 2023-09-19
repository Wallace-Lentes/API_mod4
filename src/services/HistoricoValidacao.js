import ProdutosDAO from "../DAO/ProdutosDao.js";

class HistoricoValidacao{
    static validaHistorico(id){
        const Historico = ProdutosDAO.buscarHistoricoPorId(id)
        if(Historico){
            return true 
        }else{
            return false
        }
    }
    static validaProduto(produto){
        return typeof produto == "string" && produto.length > 2
    }
    static validaquantidade(quantidade){
        if (typeof quantidade !== 'number' || quantidade < 0) {
            throw new Error('A quantidade deve ser um número não negativo.');
        }
    }
    static validaCredito(credito){
        if (typeof credito !== 'number' || credito < 0) {
            throw new Error('O credito deve ser um número não negativo.');
        }
    }
    static validaCamposHistorico(produto, quantidade, credito){
        const isValid = this.validaProduto(produto) && this.validaquantidade(quantidade) && this.validaCredito(credito)
        return isValid
    }
}

export default HistoricoValidacao
