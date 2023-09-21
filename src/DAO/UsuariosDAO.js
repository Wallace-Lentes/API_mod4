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
    static async buscarUsuarioPorId(ID){
        return await this.buscarPorId(USUARIOS_TABLE, ID)
    }
    static async buscarCepUsuario(cep){
        return await this.buscarCepUsuario(USUARIOS_TABLE, cep)
    }
    static async atualizarUsuarioPorId(id, data){
        return await this.atualizarPorId(USUARIOS_TABLE, id, data)
    }
    static async deletarUsuarioPorId(id){
        return await this.deletarPorId(USUARIOS_TABLE, id)
    }
}

export default UsuariosDAO;