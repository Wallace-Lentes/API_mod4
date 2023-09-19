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
    static async buscarUsuarioPorId(id){
        return this.buscarPorId(USUARIOS_TABLE, id)
    }
    static async buscarCepUsuario(cep){
        return this.buscar
    }
    static async atualizarUsuarioPorId(id, data){
        return this.atualizarPorId(USUARIOS_TABLE, id, data)
    }
    static async deletarUsuarioPorId(id){
        return  this.deletarPorId(USUARIOS_TABLE, id)
    }
}

export default UsuariosDAO;