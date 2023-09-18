import MateriaisDAO from "../DAO/MateriaisDAO.js";


class ValidacaoServices{
    static validarExistencia(id){
        const material = MateriaisDAO.buscarMateriaisPorId(id)
        if(material){
            return true
        }else{
            return false
        }
    }
    static validaTipo(tipoLixo){
        return typeof tipoLixo == "string" && tipoLixo.length > 2
    }
    static validaQuantidade(quantidade){
        return typeof quantidade == "string" && quantidade.length > 2
    }
    static validaPeso(peso){
        const pesoInt = parseInt(peso)
        return typeof peso == "string" && peso.length > 9 && peso == pesoInt
    }
    static validaCamposMaterial(tipoLixo, quantidade, peso){
        const isValid = this.validaTipo(tipoLixo) && this.validaQuantidade(quantidade) && this.validaPeso(peso)
        return isValid
    }
}
export default ValidacaoServices