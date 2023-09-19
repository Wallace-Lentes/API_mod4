import UsuariosDAO from "../DAO/UsuariosDAO.js";

class UsuarioValidacaoServices {
    static validaId(id) {
        const usuarioId = UsuariosDAO.buscarUsuariosPorId(id)
        if (usuarioId) {
            return true
        } else {
            return false
        }
    }
    static validaNome(nome) {
        return typeof nome == "string" && nome.length > 8
    }
    static validaEmail(email) {
        const email = "exemplo@email.com";
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
        if (regex.test(email)) {
            console.log("O email é válido.");
        } else {
            console.log("O email não é válido.");
        }
    }
    static validaSenha(senha) {
        return typeof senha == "string" && senha.length > 8
    }
    static validaTelefone(telefone) {
        return typeof telefone == "string" && telefone.length > 10
    }
    static validaCpf(cpf) {
        return typeof cpf == "string" && cpf.length > 9
    }
    static validaCep(cep){
            if (cep=="string" && cep.length > 8 ) {
                const receberEndereco = async ((cep) => {
                    const apiUrl = `https://viacep.com.br/ws/${cep}/json`;
                    const resposta = fetch(apiUrl)
                    const data = resposta.json()
                    console.log(data)
                    cadastro.enderecoInput.value = data.logradouro;
                    cadastro.bairroInput.value = data.bairro;
                    cadastro.cidadeInput.value = data.localidade;
                    cadastro.estadoInput.value = data.uf;
                  })
            } else {
              console.log('Digite um cep válido')
            }
    }
    static validaNumeroEnd(numeroEnd) {
        return typeof numeroEnd == "string" && numeroEnd.length > 1
    }
    static validaArgumentosUsuarios(nome, email, senha, telefone, cpf, cep, numeroEnd) {
        const isValid = this.validaNome(nome) && this.validaEmail(email) && this.validaSenha(senha) && this.validaTelefone(telefone) && this.validaCpf(cpf) && this.validaCep(cep) && this.validaNumeroEnd(numeroEnd)
        return isValid
    }
}
export default UsuarioValidacaoServices