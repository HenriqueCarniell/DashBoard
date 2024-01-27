const db = require("../../db/db");

exports.login = (req, res) => {
  const { CurrentEmailUser, CurrentPasswordUser } = req.body;

  const sql = "SELECT EMAIL, SENHA FROM Usuario WHERE EMAIL = ? AND SENHA = ?";

  db.query(sql, [CurrentEmailUser, CurrentPasswordUser], (err, result) => {
    if (err) {
      console.error(err);
    }

    if (result.length > 0) {
      // Usuário válido
      console.log("Usuario encontrado");
      return res.status(500).json({userOk: "Usuario encontrado"})
      // Redireciona para a rota desejada
    } else {
      // Credenciais inválidas
      console.log("Usuario Não encontrado");
      return res.status(401).json({ msg: 'Credenciais inválidas' });
    }
  });
};
