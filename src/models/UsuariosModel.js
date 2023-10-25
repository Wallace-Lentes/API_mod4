import mongoose from 'mongoose'

const Usuarios = mongoose.model('Usuarios', {

    nome: String,
    sobrenome: String,
    cpf: String,
    email: String,
    telefone: String,
    cep: String,
    rua: String,
    numero: String,
    senha: String,
    confirmaSenha: String

})

export default Usuarios