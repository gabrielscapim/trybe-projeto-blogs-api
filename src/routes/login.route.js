const route = require('express').Router();
const { loginController } = require('../controllers');

route.post('/', loginController.loginAuthentication);

module.exports = route;