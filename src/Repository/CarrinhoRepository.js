import Carrinho from "../models/CarrinhoModel.js"
import RepositoryGeneral from "./RepositoryGeneral.js"

class CarrinhoRepository {
    static async criarCarrinho(carrinho){
        const response =  await RepositoryGeneral.criar(Carrinho, carrinho)
        return response
    }

    static async buscarTodosOsCarrinhos(){
        const response = await RepositoryGeneral.buscarTodos(Carrinho)
        return response
    }

    static async buscarCarrinhoPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Carrinho, id)
        return response
    }

    static async buscarCarrinhoPorEmail(email){
        const response = await RepositoryGeneral.buscarPorChave(Carrinho, 'email', email)
        return response
    }
    
    static async atualizaCarrinhoPorId(id, carrinho){
        const response = await RepositoryGeneral.atualizaPorId(Carrinho, id, carrinho)
        return response
    }

    static async deletaCarrinhoPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Carrinho, id)
        return response
    }
}

export default CarrinhoRepository;