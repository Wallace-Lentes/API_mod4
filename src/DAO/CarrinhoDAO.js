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
    static buscarNoCarrinhoPorId(id) {
        return this.buscarPorId(CARRINHO_TABLE, id)
    }
    static deletarNoCarrinhoPorId(id) {
        return this.deletarPorId(CARRINHO_TABLE, id)
    }
    static AtualizarNoCarrinhoPorId(id, data) {
        this.AtualizarPorId(CARRINHO_TABLE, id, data)
    }
}
export default CarrinhoDAO