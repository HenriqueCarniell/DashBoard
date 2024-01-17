const db = require("../db/db")

exports.update = (req, res) => {
    const id = req.params.id;

    const { NewNome } = req.body;
    const { NewDescricao } = req.body;
    const { NewCategoria } = req.body;
    const { NewLocal } = req.body;
    const { NewPreco } = req.body;
    const { NewPromo } = req.body;
    const { NewTag } = req.body;

    const sql = "update Produto set Nome = ?, Descricao = ?, Categoria = ?, Localização_Na_Pagina = ?, preco = ?, preco_Promocional = ?, Tag = ? where idProduto = ?";

    db.query(sql, [NewNome, NewDescricao, NewCategoria, NewLocal, NewPreco, NewPromo, NewTag, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ error: "Erro interno no servidor" });
        } else {
            res.send(result);
            console.log(result);
        }
    });
};
