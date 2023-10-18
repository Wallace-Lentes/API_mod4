import Produto from "../models/ProdutoModel.js"
import RepositoryGeneral from "./RepositoryGeneral.js"

class ProdutoRepository {
    static async criarProduto(produto){
        const response =  await RepositoryGeneral.criar(Produto, produto)
        return response
    }

    static async buscarTodosOsProdutos(){
        const response = await RepositoryGeneral.buscarTodos(Produto)
        return response
    }

    static async buscarProdutoPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Produto, id)
        return response
    }

    static async buscarProdutoPorEmail(email){
        const response = await RepositoryGeneral.buscarPorChave(Produto, 'email', email)
        return response
    }
    
    static async atualizaProdutoPorId(id, produto){
        const response = await RepositoryGeneral.atualizaPorId(Produto, id, produto)
        return response
    }

    static async deletaProdutoPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Produto, id)
        return response
    }
}

export default ProdutoRepository;