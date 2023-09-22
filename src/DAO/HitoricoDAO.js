import DAO from "./DAO.js"

const HISTORICO_TABLE = "HISTORICO"

class HistoricoDAO extends DAO {
    static async inserirHistoricos(data) {
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO HISTORICO (PRODUTO, QUANTIDADE, CREDITO) VALUES (?, ?, ?)
        `
        const result = await this.inserirHistoricos(query, dataValues)
        return result
    }
    static async buscarTodosOsHistoricos() {
        return await this.buscar(HISTORICO_TABLE)
    }
    static buscarHistoricoPorId(id) {
        return this.buscarPorId(HISTORICO_TABLE, id)
    }
    static deletarHistoricoPorId(id) {
        return this.deletarPorId(HISTORICO_TABLE, id)
    }
    static AtualizarHistoricoPorId(id, data) {
        this.AtualizarPorId(HISTORICO_TABLE, id, data)
    }
}
export default HistoricoDAO