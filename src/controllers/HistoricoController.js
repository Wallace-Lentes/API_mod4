import HistoricoValidacao from "../services/HistoricoValidacao.js"
import HistoricoRepository from "../Repository/HistoricoRepository.js"

class HistoricoController{ 

    static rotas(app){

        app.get('/historico', async(req,res) =>{
            try {
                
                const historico = await HistoricoRepository.buscarTodosOsHistoricos()
                res.status(200).json(historico) 
            } catch (error) {
                res.status(404).json(erro.message)  
            }
        })
       

        app.get("/historico/:id", async (req, res) => {
            try {
                const historico = await HistoricoRepository.buscarHistoricoPorId(req.params.id)
                if (!historico_id) {
                    throw new Error("Id do historico está inválido ou não cadastrado")
                }
                res.status(200).json(historico)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })
        
        app.post("/historico", async (req, res) => {
            try {
                HistoricoValidacao.validaHistorico(req.body.produto, req.body.quantidade, req.body.credito)
                const historico = req.body
                const inserir = await HistoricoRepository.criarHistorico(historico)
                res.status(201).json({inserir, message: "Novo historico adicionado!"})
            } catch (erro) {
                res.status(400).json({error: true, message: `Campos invalidos` })
            }
        })
                
        app.delete("/historico/:id", async (req, res) => {
            const id = req.params.id
            try {
                const historico = await ValidacaoServices.buscarHistoricoPorId(id)
                if(!historico_id){
                    throw new Erro("Historico não encontrado")
                }
                const resposta = await HistoricoRepository.deletaHistoricoPorId(id)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })
        
        app.patch("/historico/:id", async (req, res) => {
            const id = req.params.id
            const entries = Object.entries(req.body)
            try {
                const historico = req.body
                await HistoricoValidacao.validaAtualizacaoHistorico(entries)
                const resposta = await HistoricoRepository.atualizaHistoricoPorId(id, historico)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(400).json({ message: erro.message, id })
                } 
        })
    }
}
export default HistoricoController 