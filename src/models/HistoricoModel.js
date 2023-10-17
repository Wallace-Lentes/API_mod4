import mongoose from 'mongoose'

const Historico =mongoose.model('Historico', {
    
            produto: String,
            quantidade: String, 
            credito: String

})

   

export default Historico