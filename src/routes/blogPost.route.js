const route = require('express').Router();
const { blogPostController } = require('../controllers');
const { validadeCreateBlogPost } = require('../middlewares/validateCreateBlogPost');
const { validateToken } = require('../middlewares/validateToken');
const { validateUpdateBlogPost } = require('../middlewares/validateUpdateBlogPost');

route.post('/', validateToken, validadeCreateBlogPost, blogPostController.createBlogPost);
route.get('/', validateToken, blogPostController.getAllBlogPosts);
route.get('/:id', validateToken, blogPostController.getBlogPostById);
route.put('/:id', validateToken, validateUpdateBlogPost, blogPostController.updateBlogPost);

module.exports = route;