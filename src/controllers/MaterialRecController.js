import MateriaisDAO from "../DAO/MateriaisDAO.js"
import ValidacaoServices from "../services/ReciclavelValidacaoServices.js"

class MaterialRecController {
    /**
   * Método para contralização de rotas no controller
   * @param {express} app 
   */
    static rotas(app){

        app.get("/material", async (req, res) => {
            const material = await MateriaisDAO.buscarTododsOsMateriais()
            console.log(material)
            res.status(200).json(material)
          })

          // app.get("/material/:id", (req, res) => {
          //   const id = req.params.id
          //   const isValid = ValidacaoServices.validarExistencia(id)
          //   if (isValid) {
          //     const resposta = MateriaisDAO.buscarMateriaisPorId(id)
          //     res.status(200).json(resposta)
          //   }
          //   res.status(404).json({ error: true, message: `Material com o id ${id} não encontrado!` })
          // })

          app.get("/material/:id", async (req, res) => {
            try {
                const material = await MateriaisDAO.buscarMateriaisPorId(req.params.id)
                if (!material) {
                    throw new Error("Id do material está inválido ou não cadastrado")
                }
                res.status(200).json(material)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })



        app.post("/material", async (req, res) => {
          try {
              ValidacaoServices.validaCamposMaterial(req.body.tipolixo, req.body.quantidade, req.body.peso)
              const material = req.body
              const inserir = await MateriaisDAO.inserirMateriais(material)
              res.status(201).json({inserir, message: "Material adicionado!"})
          } catch (erro) {
              res.status(400).json({error: true, message: `Campos invalidos` })
          }
      })


      app.delete("/material/:id", async (req, res) => {
        try {
            const material = await MateriaisDAO.buscarMateriaisPorId(req.params.id)
            if (!material) {
                throw new Error("Material não encontrado")
            }
            const resposta = await MateriaisDAO.deletarMateriaisPorId(req.params.id)
            res.status(200).json(resposta)
        } catch (erro) {
            res.status(404).json({ Erro: erro.message, id: req.params.id })
        }
    })
    }

    
}
export default MaterialRecController