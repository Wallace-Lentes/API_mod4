import CarrinhoDAO from "../DAO/CarrinhoDAO.js"
import CarrinhoValidacao from "../services/CarrinhoValidacao.js"

class CarrinhoController {
    /**
   * Método para contralização de rotas no controller
   * @param {express} app
   */
    static rotas(app) {
    app.get("/carrinho", async (req, res) => {
        const carrinhos = await CarrinhoDAO.buscarNoCarrinho();
        console.log(carrinhos);
        res.status(200).json(carrinhos);
    });
    app.get("/carrinho/:id", async (req, res) => {
        const id = req.params.id;
        const valido = await CarrinhoValidacao.validarBusca(id);
        if (valido) {
        const carrinho = await CarrinhoDAO.buscarNoCarrinhoPorId(id);
        res.status(200).json(carrinho);
        } else {
        res.status(404).json({ menssagem: "Carrinho não encontrado" });
    }
    });
    app.put("/carrinho/:id", async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const valido = await CarrinhoValidacao.validarBusca(id);
        if (valido) {
        await CarrinhoDAO.AtualizarNoCarrinhoPorId(id, data);
        res.status(200).json({ menssagem: "Carrinho atualizado com sucesso" });
        } else {
        res.status(404).json({ menssagem: "Carrinho não encontrado" });
    }
    });
    app.post("/carrinho", async (req, res) => {
        const body = req.body;
        const valido = CarrinhoValidacao.validarCampos(...Object.values(body));
        if (valido) {
        const antes = Date.now();
        const hoje = new Date(antes);
        body.data = hoje.toISOString();
        await CarrinhoDAO.buscarNoCarrinhoPorId(body);
        res.status(201).json({ menssagem: "Carrinho criado com sucesso" });
        } else {
        res.status(400).json({ menssagem: "Operação inválida" });
    }
    });
    
    app.delete("/carrinho/:id", async (req, res) => {
        const id = req.params.id;
        const valido = await CarrinhoValidacao.validarBusca(id);
        if (valido) {
        await CarrinhoDAO.deletarNoCarrinhoPorId(id);
        res.status(200).json({ menssagem: "Carrinho deletado com sucesso" });
        } else {
        res.status(404).json({ menssagem: " Carrinho não foi encontrado" });
        }
    });
    }
}

export default CarrinhoController