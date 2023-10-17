import mongoose from 'mongoose'

const Usuarios = mongoose.model('Usuarios', {

    nome: String,
    email: String,
    senha: String,
    telefone: String,
    cpf: String,
    cep: String,
    numeroEnd: String

})

export default Usuarios