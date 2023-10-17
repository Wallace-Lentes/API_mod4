import mongoose from 'mongoose'

const Produto = mongoose.model('Produto', {

    nome: String,
    descricao: String,
    preco: String
})
 

export default Produto