const db = require('../../db/db')

exports.delete = (req, res) => {
    const {id} = req.params;

    const sql = "DELETE FROM Produto WHERE idProduto = ?";

    db.query(sql, [id], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}