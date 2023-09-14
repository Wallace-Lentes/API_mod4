import MateriaisDAO from "../DAO/MateriaisDAO.js"

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

    }
}
export default MaterialRecController