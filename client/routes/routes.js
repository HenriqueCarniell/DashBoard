// Configs
const express = require('express');
const Router = express.Router();

//Controllers
const addcontroller = require('../controllers/products/addprodutos');
const getcontroller = require('../controllers/products/getprodutos');
const deletecontroller = require('../controllers/products/deleteproduto');
const updatecontroller = require("../controllers/products/updatecontroller");
const AddUserController = require("../controllers/users/addusercontroller")

// Produtos

Router.post("/add", addcontroller.add);

Router.get("/get", getcontroller.get);

Router.delete("/delete/:id", deletecontroller.delete);

Router.put("/update/:id", updatecontroller.update);

// Users

Router.post("/add/user/cadastro", AddUserController.adduser);


module.exports = Router;