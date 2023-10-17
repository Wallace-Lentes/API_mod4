import mongoose from "mongoose"

const UsuariosModel = mongoose.model('UsuariosModel',{
        id : id,
        nome : nome,
        email : email,
        senha : senha,
        telefone : telefone,
        cpf : cpf,
        cep : cep,
        numeroEnd : numeroEnd
    })

export default UsuariosModel