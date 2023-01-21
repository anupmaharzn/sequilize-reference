const express = require('express');
const route = express.Router();
const userController = require('../controllers/users.Controllers')
route.get('/',userController.get);
route.post('/',userController.store);
route.put('/:id',userController.edit);
route.delete('/:id',userController.destory);

module.exports = route;