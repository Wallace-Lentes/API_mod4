import Historico from "../models/HistoricoModel.js"
import RepositoryGeneral from "./RepositoryGeneral.js"

class HistoricoRepository {
    static async criarHistorico(historico){
        const response =  await RepositoryGeneral.criar(Historico, historico)
        return response
    }

    static async buscarTodosOsHistoricos(){
        const response = await RepositoryGeneral.buscarTodos(Historico)
        return response
    }

    static async buscarHistoricoPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Historico, id)
        return response
    }

    static async buscarHistoricoPorEmail(email){
        const response = await RepositoryGeneral.buscarPorChave(Historico, 'email', email)
        return response
    }
    
    static async atualizaHistoricoPorId(id, historico){
        const response = await RepositoryGeneral.atualizaPorId(Historico, id, historico)
        return response
    }

    static async deletaHistoricoPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Historico, id)
        return response
    }
}

export default HistoricoRepository;