import UsuariosModel from "../models/UsuariosModel.js";
import UsuariosDAO from "../DAO/UsuariosDAO.js";
import ValidacaoServices from "../services/ReciclavelValidacaoServices.js";

class UsuariosController {
    static rotas(app) {

        app.get("/usuarios", async (req, res) => {
            const usuario = await UsuariosDAO.buscarTodosOsUsuarios()
            console.log(usuario)
            res.status(200).json(usuario)
        })

        app.get("/usuarios/:id", async (req, res) => {
            const usuarioId = req.params.id
            const isValid = ValidacaoServices.validaId(id)
            if (isValid) {
                UsuariosDAO.buscarUsuarioPorId(id)
                res.status(200).json({
                    error: false
                })
            }
            res.status(404).json({
                error: true,
                message: `Usuário não encontrado para o id ${id}.`
            })
        })

        app.post("/usuarios", async (req, res) => {
            const body = Object.values(req, body)
            const isValid = ValidacaoServices.validaArgumentosUsuarios(...body)
            if (isValid) {
                const usuarioModelado = new UsuariosModel(...body)
                try {
                    await UsuariosDAO.inserirUsuario(usuarioModelado)
                    res.status(201).json({
                        error: false,
                        message: "Cadastro criado com sucesso."
                    })
                }
                catch (error) {
                    res.status(406).json({
                        error: true,
                        message: "Cadastro não realizado."
                    })
                }
            }
        })

            app.put("/usuarios/:id", async (req, res) => {
                const usuarioId = req.params.id
                const body = req.body
                const idExists = ValidacaoServices.validaId(id)
                const isValid = ValidacaoServices.validaArgumentosUsuarios(...body)
                if (idExists) {
                    if (isValid) {
                        const usuarioModelado = new UsuariosModel(body.id, body.nome, body.email, body.senha, body.telefone, body.cpf, body.cep, body.numero)
                        UsuariosDAO.atualizarUsuarioId(id, usuarioModelado)
                        res.status(204).json()
                    }
                    res.status(400).json({
                        error: true,
                        message: "Campos inválidos."
                    })
                    res.status(404).json({
                        error: true,
                        message: `Usuario não encontrado pelo ID ${id}.`
                    })
                }

            })

            app.delete("/usuarios/:id", async (req, res) => {
                const usuarioId = req.params.id
                const isValid = ValidacaoServices.validaId(id)
                if (isValid) {
                    UsuariosDAO.deletarUsuarioId(id)
                    res.status(204).json({
                        error: false
                    })
                    res.status(404).json({
                        error: true,
                        message: `Usuário não encontrado pelo ID ${id}.`
                    })
                }
            }
            )
        }
    }
    
export default UsuariosController;