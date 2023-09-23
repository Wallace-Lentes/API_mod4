import MateriaisDAO from "../DAO/MateriaisDAO.js"
import MaterialRecModel from "../models/MaterialRecModel.js"
import ValidacaoServices from "../services/ReciclavelValidacaoServices.js"

class MaterialRecController {
    /**
   * Método para contralização de rotas no controller
   * @param {express} app 
   */
    static rotas(app) {

        app.get("/material", async (req, res) => {
            const material = await MateriaisDAO.buscarTododsOsMateriais()
            console.log(material)
            res.status(200).json(material)
        })


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
                res.status(201).json({ inserir, message: "Material adicionado!" })
            } catch (erro) {
                res.status(400).json({ error: true, message: `Campos invalidos` })
            }
        })


        app.delete("/material/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoServices.validarExistencia(id)
                MateriaisDAO.deletarMateriaisPorId(id)
                res.status(200).json({ error: false })
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        app.put("/material/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                ValidacaoServices.validaCamposMaterial(body.tipolixo, body.quantidade, body.peso)
                await ValidacaoServices.validarExistencia(id)
                const materialModelado = new MaterialRecModel(body.tipolixo, body.quantidade, body.peso)
                MateriaisDAO.AtualizarMateriaisPorId(id, materialModelado)
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
export default MaterialRecController