import Database from "../database/Database.js"

class DAO {
    static inserir(query, data) {
        return new Promise((resolve, reject) => {
            Database.run(query, ...data, (error) => {
                if(error){
                    reject(error)
                }
                resolve({error:false})
            })
        })
    }


    static async buscar(entidade) {
        const query = `
        SELECT * FROM ${entidade};
        `
        return new Promise((resolve, reject) => {
            Database.all(query, (error, rows) => {
                if (error) {
                    console.log(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }
    static buscarPorId(entidade, id) {
        if (Database[entidade] && Database[entidade][id]) {
            return Database[entidade][id];
        } else {
            return null; // Ou outro valor padrão para indicar que o registro não foi encontrado
        }
    }
    
    
    static deletarPorId(entidade, id) {
        delete Database[entidade][id]
    }
    static atualizarPorId(entidade, id, data) {
        Database[entidade][id] = data
    }
}

export default DAO;