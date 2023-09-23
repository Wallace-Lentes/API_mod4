import HistoricoDAO from "../DAO/HistoricoDAO.js"
import TabelaHistorico from "../models/HistoricoModel.js"
import HistoricoValidacao from "../services/HistoricoValidacao.js"

class HistoricoController{ 

    static rotas(app){

        app.get('/historico', async(req,res) =>{

            const historico = await HistoricoDAO.buscarTodosOsHistoricos()
            console.log(historico)
            res.status(200).json(historico)
        })

        app.get("/historico/:id", async (req, res) => {
            try {
                const historico = await HistoricoDAO.buscarHistoricoPorId(req.params.id)
                if (!historico) {
                    throw new Error("Id do historico está inválido ou não cadastrado")
                }
                res.status(200).json(historico)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/historico", async (req, res) => {
            try {
                HistoricoValidacao.validaCamposHistorico(req.body.produto, req.body.quantidade, req.body.credito)
                const historico = req.body
                const inserir = await HistoricoDAO.inserirHistoricos(historico)
                res.status(201).json({inserir, message: "Novo historico adicionado!"})
            } catch (erro) {
                res.status(400).json({error: true, message: `Campos invalidos` })
            }
        })
        
        app.delete("/historico/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoServices.validarExistencia(id)
                HistoricoDAO.deletarHistoricoPorId(id)
                res.status(200).json({ error: false })
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        app.put("/historico/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                HistoricoValidacao.validaCamposHistorico(body.produto, body.quantidade, body.credito)
                await HistoricoValidacao.validaHistorico(id)
                const historicoModelado = new TabelaHistorico(body.produto, body.quantidade, body.credito)
                HistoricoDAO.AtualizarHistoricoPorId(id, historicoModelado)
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
export default HistoricoController 