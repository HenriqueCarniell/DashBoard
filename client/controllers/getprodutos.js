const db = require('../db/db');

exports.get = (req,res) => {
    const sql = 'select * from produto';

    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}