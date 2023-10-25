import mongoose from 'mongoose';

const UsuariosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    cep: {
        type: Number,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    confirmaSenha: {
        type: String,
        required: true
    }
});

const UsuariosModel = mongoose.model('UsuariosModel', UsuariosSchema);
export default UsuariosModel;
