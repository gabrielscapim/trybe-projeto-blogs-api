const route = require('express').Router();
const { userController } = require('../controllers');
const { validateCreateUser } = require('../middlewares/validateCreateUser');
const { validateToken } = require('../middlewares/validateToken');

route.post('/', validateCreateUser, userController.createUser);
route.get('/', validateToken, userController.getAllUsers);

module.exports = route;