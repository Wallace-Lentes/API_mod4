import UsuarioValidacaoServices from "../services/UsuarioValidacaoServices.js";
import UsuariosRepository from "../Repository/UsuariosRepository.js"

class UsuariosController {
    static rotas(app) {

        app.post("/usuarios", async (req, res) => {
            try {
                await UsuarioValidacaoServices.validaArgumentosUsuarios(req.body.nome, req.body.sobrenome, req.body.cpf, req.body.email, req.body.telefone, req.body.cep, req.body.rua, req.body.numero, req.body.senha, req.body.confirmaSenha)
                const usuario = req.body
                const inserir = await UsuariosRepository.criarUsuario(usuario)
                res.status(201).json({inserir, message: "Novo usuario adicionado!"})
            } catch (erro) {
                res.status(400).json({error: true, message: `Campos invalidos` })
            }
        })
        
        app.delete("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            try {
                const usuarios = await UsuarioValidacaoServices.validarId(id)
                if (!usuarios._id) {
                    throw new Erro("Usuario não encontrado")
                }
                const resposta = await UsuariosRepository.deletaUsuarioPorId(id)

                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })
      
        app.patch("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            const entries = Object.entries(req.body)
            try {
                const usuario = req.body
                await UsuarioValidacaoServices.validaAtualizacaoUsuario(entries)
                const resposta = await UsuariosRepository.atualizaUsuarioPorId(id, usuario)
                res.status(200).json(resposta)
            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            } 
            
        })
    }
}

export default UsuariosController;