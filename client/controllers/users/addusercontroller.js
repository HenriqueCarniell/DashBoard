const db = require('../../db/db')

exports.adduser = (req,res) => {
    const {UserNome} = req.body;
    const {UserEmail} = req.body;
    const {UserSenha} = req.body;

    let ValidateUser = async () => {
        const sql = "select * from Usuario where email = ?"

        db.query(sql, [UserEmail], (err,result) => {
            if(result.length > 0) {
                return res.status(401).json({ error: 'Email já cadastrado' });
            } else {
            InsertUser();
            }
        })
    }

    let InsertUser = async () => {
        const sql = "insert into Usuario(Nome,EMAIL,SENHA) values(?,?,?)";

        db.query(sql,[UserNome,UserEmail,UserSenha], (err,result) => {
            if(err) {
                console.log(err)
            } else {
                console.log(result)
            }
        })
    }

    ValidateUser()
}
