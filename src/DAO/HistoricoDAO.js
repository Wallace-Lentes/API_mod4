import DAO from "./DAO.js"

const HISTORICO_TABLE = "HISTORICO"

class HistoricoDAO extends DAO {
    static async inserirHistoricos(data) {
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO HISTORICO (PRODUTO, QUANTIDADE, CREDITO) VALUES (?, ?, ?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }
    static async buscarTodosOsHistoricos() {
        return await this.buscar(HISTORICO_TABLE)
    }
    static async buscarHistoricoPorId(id) {
        const query = `
        SELECT * FROM HISTORICO where ID = ?;
        `
        try {
            const response = await this.buscarPorId(query, id)
            return response
        } catch (error) {
            throw error
        }
    }

    static async deletarHistoricoPorId(id) {
        const query = "DELETE FROM HISTORICO WHERE ID = ?"
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            throw error
        }
    }

    static async AtualizarHistoricoPorId(id, data) {
        const query = "UPDATE HISTORICO SET (ID, PRODUTO, QUANTIDADE, CREDITO) = (?,?,?,?) WHERE ID = ?"
        const values = Object.values(data)
        try {
            await this.atualizarPorId(query, id, [id, ...values])
        } catch (error) {
            throw error
        }

    }
}
export default HistoricoDAO