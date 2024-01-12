const express = require('express');
const Router = express.Router();
const addcontroller = require('../controllers/addprodutos');
const getcontroller = require('../controllers/getprodutos');

Router.post("/add", addcontroller.add);

Router.get("/get", getcontroller.get);


module.exports = Router;