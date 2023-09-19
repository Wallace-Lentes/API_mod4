import DAO from "./DAO.js";

const PRODUTOS_TABLE = "PRODUTOS"

class ProdutosDao extends DAO{
    static async inserirProdutos(data){
        const dataValues= Object.values(data)
        const query=`
        INSERT INTO PRODUTOS_TABLE(NOME, DESCRICAO, PRECO) VALUES (?, ?, ?)
        `
        const result = await this.inserirProdutos(query, dataValues)
        return result
    }
    static async buscarTodososProdutos(){
        return await this.buscar(PRODUTOS_TABLE)
    }
    static buscarProdutosPorId(id){
        return this.buscarPorId(PRODUTOS_TABLE, id)
    }
    static deletarProdutosPorId(id){
        return  this.deletarPorId(PRODUTOS_TABLE, id)
    }
    static AtualizarProdutosPorId(id, data){
        this.AtualizarPorId(PRODUTOS_TABLE, id, data)
    }
}

const HISTORICO_TABLE = "HISTORICO"

class HistoricoDao extends DAO{
    static async inserirHistoricos(data){
        const dataValues= Object.values(data)
        const query=`
        INSERT INTO HISTORICO_TABLE(PRODUTO, QUANTIDADE, CREDITO) VALUES (?, ?, ?)
        `
        const result = await this.inserirHistoricos(query, dataValues)
        return result 
    }
    static async buscarTodooHistorico(){
        return await this.buscar(HISTORICO_TABLE)
    }
    static buscarHistoricoPorId(id){
        return this.buscarPorId(HISTORICO_TABLE, id)
    }
    static deletarHistoricoPorId(id){
        return  this.deletarPorId(HISTORICO_TABLE, id)
    }
    static AtualizarHistoricoPorId(id, data){
        this.AtualizarPorId(HISTORICO_TABLE, id, data)
    }
}

const CARRINHO_TABLE = "CARRINHO"

class CarrinhoDao extends DAO{
    static async inserirnoCarrinho(data){
        const dataValues= Object.values(data)
        const query=`
        INSERIR INTO CARRINHO_TABLE(PRODUTO, VALORTOTAL, RESUMOCOMPRA, CREDITO) VALUES (?, ?, ?, ?)
        `
        const result = await this.inserirnoCarrinho(query, dataValues)
        return result
    }
    static async buscarnoCarrinho(){
        return await this.buscar(CARRINHO_TABLE)
    }
    static buscarnoCarrinhoPorId(id){
        return this.buscarPorId(CARRINHO_TABLE, id)
    }
    static deletarnoCarrinhoPorId(id){
        return  this.deletarPorId(CARRINHO_TABLE, id)
    }
    static AtualizarnoCarrinhoPorId(id, data){
        this.AtualizarPorId(CARRINHO_TABLE, id, data)
    }
}

export default ProdutosDao;