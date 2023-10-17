import mongoose from 'mongoose'

const Carrinho = mongoose.model('Carrinho',{

        produto: String,
        resumoCompra: String,
        valorTotal: String,
        valorTrocaId: String
    }
)

export default Carrinho