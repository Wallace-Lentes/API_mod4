import MaterialRepository from "../models/MaterialModel.js"
import ValidacaoServices from "../services/ReciclavelValidacaoServices.js"

class MaterialRecController {
    /**
   * Método para contralização de rotas no controller
   * @param {express} app 
   */
    static rotas(app) {

        app.get("/material", async (req, res) => {
            try {
                const material = await MaterialRepository.buscarTododsOsMateriais()
                res.status(200).json(erro.message)                
            } catch (error) {
                res.status(404).json(erro.message)                
            }
        })
      
        app.get("/material/:id", async (req, res) => {
            try {
                const material = await MaterialRepository.buscarMaterialPorId(req.params.id)
                if (!material_id) {
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
                const inserir = await MaterialRepository.criarMaterial(material)
                res.status(201).json({ inserir, message: "Material adicionado!" })
            } catch (erro) {
                res.status(400).json({ error: true, message: `Campos invalidos` })
            }
        })


        app.delete("/material/:id", async (req, res) => {
            const id = req.params.id
            try {
                const material = await ValidacaoServices.va(id)
                if (!material._id) {
                    throw new Erro("Material não encontrado")
                }
                const resposta = await MaterialRepository.deletaMaterialPorId(id)

                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        app.patch("/material/:id", async (req, res) => {
            const id = req.params.id
            const entries = Object.entries(req.body)
            try {
                const material = req.body
                await ValidacaoServices.validaAtualizacaoMaterial(entries)
                const resposta = await MaterialRepository.atualizaMaterialPorId(id, material)
                res.status(200).json(resposta)
            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            } 
            
        })
    }


}
export default MaterialRecController