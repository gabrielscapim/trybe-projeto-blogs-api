const route = require('express').Router();
const { blogPostController } = require('../controllers');
const { validadeCreateBlogPost } = require('../middlewares/validateCreateBlogPost');
const { validateToken } = require('../middlewares/validateToken');

route.post('/', validateToken, validadeCreateBlogPost, blogPostController.createBlogPost);

module.exports = route;