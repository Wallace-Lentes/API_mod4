
class UsuarioValidacaoServices {


    static validaNome(nome) { 
        if(typeof nome == "string" && nome.length > 3){
            return true
        }else{
            throw new Error('Nome invalido!')
        }
    }
  
    static validaArgumentosUsuarios(nome) {
        try {
            UsuarioValidacaoServices.validaNome(nome)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
export default UsuarioValidacaoServices