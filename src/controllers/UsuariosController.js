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
            const id = req.params.id
            const isValid = await UsuariosServices.validarBusca(id)
            if(isValid){   
                const usuario = await UsuariosDAO.buscarUsuariosPorId(id)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({message:"Usuário não encontrado"})
            }
        })
        // app.post("/usuarios", async (req, res) => {
        //     const body = Object.values(req, body)
        //     const isValid = UsuarioValidacaoServices.validaArgumentosUsuarios(...body)
        //     if (isValid) {
        //         const usuarioModelado = new UsuariosModel(...body)
        //         try {
        //             await UsuariosDAO.inserirUsuario(usuarioModelado)
        //             res.status(201).json({
        //                 error: false,
        //                 message: "Cadastro criado com sucesso."
        //             })
        //         }
        //         catch (error) {
        //             res.status(406).json({
        //                 error: true,
        //                 message: "Cadastro não realizado."
        //             })
        //         }
        //     }
        // })
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

        app.put("/usuarios/:id", async (req, res) => {
            const id = req.params.id
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
            const id = req.params.id
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