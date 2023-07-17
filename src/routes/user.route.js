const route = require('express').Router();
const { userController } = require('../controllers');
const { validateCreateUser } = require('../middlewares/validateCreateUser');

route.post('/', validateCreateUser, userController.createUser);

module.exports = route;