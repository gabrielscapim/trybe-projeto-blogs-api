const route = require('express').Router();
const { categoryController } = require('../controllers');
const { validateCreateCategory } = require('../middlewares/validateCreateCategory');
const { validateToken } = require('../middlewares/validateToken');

route.post('/', validateCreateCategory, validateToken, categoryController.createCategory);

module.exports = route;