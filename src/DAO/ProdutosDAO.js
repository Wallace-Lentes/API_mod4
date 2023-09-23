import DAO from "./DAO.js"

const PRODUTOS_TABELA = "PRODUTOS"

class ProdutosDAO extends DAO {
    static async inserirProdutos(data) {
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO PRODUTOS (NOME, DESCRICAO, PRECO) VALUES (?, ?, ?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }
    static async buscarTodosOsProdutos() {
        return await this.buscar(PRODUTOS_TABELA)
    }
    static async buscarProdutosPorId(id) {
        const query = `
        SELECT * FROM PRODUTOS where ID = ?;
        `
        try {
            const response = await this.buscarPorId(query, id)
            return response
        } catch (error) {
            throw error
        }
    }

    static async deletarProdutosPorId(id) {
        const query = "DELETE FROM PRODUTOS WHERE ID = ?"
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            throw error
        }
    }

    static async AtualizarProdutosPorId(id, data) {
        const query = "UPDATE PRODUTOS SET (ID, NOME, DESCRICAO, PRECO) = (?,?,?,?) WHERE ID = ?"
        const values = Object.values(data)
        try {
            await this.atualizarPorId(query, id, [id, ...values])
        } catch (error) {
            throw error
        }

    }
}




export default ProdutosDAO;

