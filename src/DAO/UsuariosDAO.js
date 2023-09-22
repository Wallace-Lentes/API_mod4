import UsuarioValidacaoServices from "../services/UsuarioValidacaoServices.js";
import DAO from "./DAO.js"; 

const USUARIOS_TABLE= "USUARIOS"

class UsuariosDAO extends DAO{ 
    static async inserirUsuarios(data){ 
        const dataValues= Object.values(data)
        const query= `
        INSERT INTO USUARIOS_TABLE(NOME, EMAIL, SENHA, TELEFONE, CPF, CEP, NUMEROEND) VALUES (?,?,?,?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    } 

    static async buscarTodosOsUsuarios(){
        return await this.buscar(USUARIOS_TABLE)
    }
    static async buscarUsuariosPorId(id){
        const result = await this.buscarPorId(USUARIOS_TABLE, id);
        return result;
    }
    static async buscarCepUsuario(cep){
        return await this.buscarCepUsuario(USUARIOS_TABLE, cep)
    }
    static async atualizarUsuarioPorId(id, data){
        return await this.atualizarUsuarioPorId(USUARIOS_TABLE, id, data)
    }
    static async deletarUsuarioPorId(id){
        return await this.deletarUsuarioPorId(USUARIOS_TABLE, id)
    }
}

export default UsuariosDAO;