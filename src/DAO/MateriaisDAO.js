import DAO from "./DAO.js"


const MATERIAIS_TABELA = "MATERIAL"

class MateriaisDAO extends DAO{
    static async inserirMateriais(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO MATERIAL (TIPOLIXO, QUANTIDADE, PESO) VALUES (?, ?, ?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }
    static async buscarTododsOsMateriais(){
        return await this.buscar(MATERIAIS_TABELA)
    }
    static buscarMateriaisPorId(id){
        return this.buscarPorId(MATERIAIS_TABELA, id)
    }
    static deletarMateriaisPorId(id){
        return this.deletarPorId(MATERIAIS_TABELA, id)
    }
    static AtualizarMateriaisPorId(id, data){
        this.atualizarPorId(MATERIAIS_TABELA, id, data)
    }
}

export default MateriaisDAO;