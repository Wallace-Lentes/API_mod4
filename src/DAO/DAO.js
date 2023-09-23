import Database from "../database/Database.js"

class DAO {
    static inserir(query, data) {
        return new Promise((resolve, reject) => {
            Database.run(query, ...data, (error) => {
                if (error) {
                    reject(error)
                }
                resolve({ error: false })
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
    static buscarPorId(query, id) {
        return new Promise((resolve, reject) => {
            Database.get(query, [id], (error, rows) => {
                if (error) {
                    reject(error)
                } else {
                    if (!rows) {
                        reject({ error: true})
                    }
                    resolve(rows)
                }
            })
        })
    }


    static deletarPorId(query, id) {
        return new Promise((resolve, reject) => {
            Database.all(query, id, (error, rows) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }
    static atualizarPorId(query, id, data) {
        return new Promise((resolve, reject) => {
            Database.run(query, [...data, id], (error, rows) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }
}

export default DAO