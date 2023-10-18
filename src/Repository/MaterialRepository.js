import Material from "../models/MaterialModel.js"
import RepositoryGeneral from "./RepositoryGeneral.js"

class MaterialRepository {
    static async criarMaterial(material){
        const response =  await RepositoryGeneral.criar(Material, material)
        return response
    }

    static async buscarTodosOsMateriais(){
        const response = await RepositoryGeneral.buscarTodos(Material)
        return response
    }

    static async buscarMaterialPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Material, id)
        return response
    }

    static async buscarMaterialPorEmail(email){
        const response = await RepositoryGeneral.buscarPorChave(Material, 'email', email)
        return response
    }
    
    static async atualizaMaterialPorId(id, material){
        const response = await RepositoryGeneral.atualizaPorId(Material, id, material)
        return response
    }

    static async deletaMaterialPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Material, id)
        return response
    }
}

export default MaterialRepository;