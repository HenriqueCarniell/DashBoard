const db = require('../../db/db');

exports.add = async (req, res) => {
    const { Nome } = req.body;
    const { Descricao } = req.body;
    const { Categoria } = req.body;
    const { Local } = req.body;
    const { Preco } = req.body;
    const { Promo } = req.body;
    const { Tag } = req.body;

    const sql = "INSERT INTO Produto(Nome, Descricao, Categoria, Localização_Na_Pagina, preco, preco_Promocional, Tag) VALUES (?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [Nome, Descricao, Categoria, Local, Preco, Promo, Tag], (err, result) => {
        if (err) {
            console.error(err);
            res.status(400).send({ message: err.sqlMessage });
        } else {
            console.log(result);
            res.send(result);
        }
    });
};
