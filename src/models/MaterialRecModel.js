import mongoose from 'mongoose'

const Material = mongoose.model('Material', {

    tipoLixo: String,
    quantidade: String,
    peso: String
})

export default Material