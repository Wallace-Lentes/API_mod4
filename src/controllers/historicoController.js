import produtosdao from "./dao/produtosdao.js"; 

class HistoricoController{ 

    static rotas(app){

        app.get('/historico', async(req,res) =>{

            const historico = await historicodao.buscarTodosOsHistoricos()
            console.log(historico)
            res.status(200).json(historico)
        })
    }
}
export default historicoController