const db = require('../../db/db')

exports.adduser = (req,res) => {
    const {UserNome} = req.body;
    const {UserEmail} = req.body;
    const {UserSenha} = req.body;

    const sql = 'insert into Usuario(Nome,EMAIL,SENHA) values (?,?,?)';

    db.query(sql, [UserNome,UserEmail,UserSenha], (err,result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result);
        }
    })


}