import UsuarioValidacaoServices from "../services/UsuarioValidacaoServices.js";
import UsuariosRepository from "../Repository/UsuariosRepository.js"

class UsuariosController {
    static rotas(app) {

        app.get("/usuarios", async (req, res) => {
            try {
                const usuario = await UsuariosRepository.buscarTodosOsUsuarios()
                res.status(200).json(usuario)                
            } catch (error) {
                res.status(404).json(error.message)                
            }
        })
      
        app.get("/usuarios/:id", async (req, res) => {
            try {
                const usuarios = await UsuariosRepository.buscarUsuarioPorId(req.params.id)
                if (!usuarios_id) {
                    throw new Error("Id do usuario está inválido ou não cadastrado")
                }
                res.status(200).json(usuarios)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/usuarios", (req, res) => {
            const db = router.db;
            const { nome, sobrenome, cpf, email, telefone, cep, rua, numero} = req.body;
          
            const senha = req.get("X-Password");
          
            const existingUser = db.get("usuarios").find({ email: email }).value();
          
            if (existingUser) {
              return res
                .status(400)
                .json({ message: "Email já cadastrado.", success: false });
            }
            const id = crypto.createHash("md5").update(`${Date.now()}`).digest("hex");
            const transacoes = [];
          
            const newUser = { id, nome, sobrenome, cpf, email, telefone, cep, rua, numero };
            db.get("usuarios").push(newUser).write();
          
            res.status(201).json({
              success: true,
              message: "usuario criado com sucesso",
              data: { id, nome },
            });
          });


        // app.post("/usuarios", async (req, res) => {
        //     const {nome, sobrenome, cpf, email, telefone, cep, rua, numero }
        //     try {
        //         UsuarioValidacaoServices.validaArgumentosUsuarios(req.body.nome, req.body.email, req.body.senha, req.body.telefone, req.body.cpf, req.body.cep, req.body.numeroend)
        //         const usuario = req.body
        //         const inserir = await UsuariosRepository.criarUsuario(usuario)
        //         res.status(201).json({inserir, message: "Novo usuario adicionado!"})
        //     } catch (erro) {
        //         res.status(400).json({error: true, message: `Campos invalidos` })
        //     }
        // })
        
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