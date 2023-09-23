import Database from "../database/Database.js"
import DAO from "./DAO.js"


const MATERIAIS_TABELA = "MATERIAL"

class MateriaisDAO extends DAO {
    static async inserirMateriais(data) {
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO MATERIAL (TIPOLIXO, QUANTIDADE, PESO) VALUES (?, ?, ?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }
    static async buscarTododsOsMateriais() {
        return await this.buscar(MATERIAIS_TABELA)
    }
    static async buscarMateriaisPorId(id) {
        const query = `
        SELECT * FROM MATERIAL where ID = ?;
        `
        try {
            const response = await this.buscarPorId(query, id)
            return response
        } catch (error) {
            throw error
        }
    }

    static async deletarMateriaisPorId(id) {
        const query = "DELETE FROM MATERIAL WHERE ID = ?"
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            throw error
        }
    }

    static async AtualizarMateriaisPorId(id, data) {
        const query = "UPDATE MATERIAL SET (ID, TIPOLIXO, QUANTIDADE, PESO) = (?,?,?,?) WHERE ID = ?"
        const values = Object.values(data)
        try {
            await this.atualizarPorId(query, id, [id, ...values])
        } catch (error) {
            throw error
        }

    }
}

export default MateriaisDAO;