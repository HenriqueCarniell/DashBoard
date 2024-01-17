const express = require('express');
const Router = express.Router();
const addcontroller = require('../controllers/addprodutos');
const getcontroller = require('../controllers/getprodutos');
const deletecontroller = require('../controllers/deleteproduto')

Router.post("/add", addcontroller.add);

Router.get("/get", getcontroller.get);

Router.delete("/delete/:id", deletecontroller.delete);


module.exports = Router;