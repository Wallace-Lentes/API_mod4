import HistoricoDAO from "../DAO/HistoricoDao.js"

class HistoricoController{ 

    static rotas(app){

        app.get('/historico', async(req,res) =>{

            const historico = await HistoricoDAO.buscarTodosOsHistoricos()
            console.log(historico)
            res.status(200).json(historico)
        })
    }
}
export default HistoricoController 