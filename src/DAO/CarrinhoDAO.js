import DAO from "./DAO.js"

const CARRINHO_TABLE = "CARRINHO"

class CarrinhoDAO extends DAO {
    static async inserirnoCarrinho(data) {
        const dataValues = Object.values(data)
        const query = `
        INSERIR INTO CARRINHO (PRODUTO, VALORTOTAL, RESUMOCOMPRA, VALORTROCAID) VALUES (?, ?, ?, ?)
        `
        const result = await this.inserirNoCarrinho(query, dataValues)
        return result
    }
    static async buscarNoCarrinho() {
        return await this.buscar(CARRINHO_TABLE)
    }
    static async buscarNoCarrinhoPorId(id) {
        const query = `
        SELECT * FROM CARRINHO where ID = ?;
        `
        try {
            const response = await this.buscarPorId(query, id)
            return response
        } catch (error) {
            throw error
        }
    }

    static async deletarCarrinhoPorId(id) {
        const query = "DELETE FROM CARRINHO WHERE ID = ?"
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            throw error
        }
    }

    static async AtualizarCarrinhoPorId(id, data) {
        const query = "UPDATE CARRINHO SET (ID, PRODUTO, RESUMOCOMPRA, VALORTOTAL, VALORTROCAID) = (?,?,?,?,?) WHERE ID = ?"
        const values = Object.values(data)
        try {
            await this.atualizarPorId(query, id, [id, ...values])
        } catch (error) {
            throw error
        }
    }
}
export default CarrinhoDAO