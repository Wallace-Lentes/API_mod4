import DAO from "./DAO.js"

const PRODUTOS_TABELA = "PRODUTOS"

class ProdutosDAO extends DAO {
    static async inserirProdutos(data) {
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO PRODUTOS (NOME, DESCRICAO, PRECO) VALUES (?, ?, ?)
        `
        const result = await this.inserirProdutos(query, dataValues)
        return result
    }
    static async buscarTodosOsProdutos() {
        return await this.buscar(PRODUTOS_TABELA)
    }
    static buscarProdutosPorId(id) {
        return this.buscarPorId(PRODUTOS_TABELA, id)
    }
    static deletarProdutosPorId(id) {
        return this.deletarPorId(PRODUTOS_TABELA, id)
    }
    static AtualizarProdutosPorId(id, data) {
        this.AtualizarPorId(PRODUTOS_TABELA, id, data)
    }
}




export default ProdutosDAO;

