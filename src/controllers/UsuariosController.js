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

        app.get("/usuarios/:id", async (req, res) => {
            const usuarioId = req.params.id;
            try {
                const isValid = await ValidacaoServices.validaId(usuarioId);
                if (isValid) {
                    const usuario = await UsuariosDAO.buscarUsuarioPorId(usuarioId);
                    res.status(200).json({
                        error: false,
                        usuario: usuario // Incluímos o usuário encontrado na resposta, se aplicável
                    });
                } else {
                    res.status(404).json({
                        error: true,
                        message: `Usuário não encontrado para o id ${usuarioId}.`
                    });
                }
            } catch (error) {
                res.status(500).json({
                    error: true,
                    message: "Erro interno no servidor." // Tratamento de erros
                });
            }
        });

        app.post("/usuarios", async (req, res) => {
            const body = Object.values(req, body)
            const isValid = UsuarioValidacaoServices.validaArgumentosUsuarios(...body)
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
            const idExists = UsuarioValidacaoServices.validaId(id)
            const isValid = UsuarioValidacaoServices.validaArgumentosUsuarios(...body)
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
            const isValid = UsuarioValidacaoServices.validaId(id)
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