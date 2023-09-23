import UsuariosModel from "../models/UsuariosModel.js";
import UsuariosDAO from "../DAO/UsuariosDAO.js";
import UsuarioValidacaoServices from "../services/UsuarioValidacaoServices.js";

class UsuariosController {
    static rotas(app) {

        app.get("/usuarios", async (req, res) => {
            const usuario = await UsuariosDAO.buscarTodosOsUsuarios()
            console.log(usuario)
            res.status(200).json(usuario)
        })

        app.post("/usuarios", async (req, res) => {
            try {
                UsuarioValidacaoServices.validaArgumentosUsuarios(req.body.nome, req.body.email, req.body.senha, req.body.telefone, req.body.cpf, req.body.cep, req.body.numeroend)
                const usuarios = req.body
                const inserir = await UsuariosDAO.inserirUsuarios(usuarios)
                res.status(201).json({inserir, message: "Novo usuario adicionado!"})
            } catch (erro) {
                res.status(400).json({error: true, message: `Campos invalidos` })
            }
        })
        app.get("/usuarios/:id", async (req, res) => {
            try {
                const usuarios = await UsuariosDAO.buscarUsuariosPorId(req.params.id)
                if (!usuarios) {
                    throw new Error("Id do usuarios está inválido ou não cadastrado")
                }
                res.status(200).json(usuarios)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })
        app.delete("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            try {
                await UsuarioValidacaoServices.validarId(id)
                UsuariosDAO.deletarUsuarioPorId(id)
                res.status(200).json({ error: false })
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        app.put("/usuarios/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                UsuarioValidacaoServices.validaArgumentosUsuarios(body.nome, body.email, body.senha, body.telefone, body.cpf, body.cep, body.numeroend)
                await UsuarioValidacaoServices.validaId(id)
                const usuariosModelado = new TabelaProduto(body.nome, body.email, body.senha, body.telefone, body.cpf, body.cep, body.numeroend)
                UsuariosDAO.atualizarUsuarioPorId(id, usuariosModelado)
                res.status(204).json()
            } catch (error) {
                if (error.message == "Campos invalidos") {
                    res.status(400).json({ error: error.message })
                } else {
                    res.status(404).json({ id: id, ...error })
                }
            }
        })
        
    }
}

export default UsuariosController;