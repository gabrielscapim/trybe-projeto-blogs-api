const route = require('express').Router();
const { blogPostController } = require('../controllers');
const { validateBlogPostId } = require('../middlewares/validateBlogPostId');
const { validadeCreateBlogPost } = require('../middlewares/validateCreateBlogPost');
const { validateToken } = require('../middlewares/validateToken');
const { validateUpdateBlogPost } = require('../middlewares/validateUpdateBlogPost');
const { validateUserFromBlogPost } = require('../middlewares/validateUserFromBlogPost');

route.post('/', validateToken, validadeCreateBlogPost, blogPostController.createBlogPost);
route.get('/', validateToken, blogPostController.getAllBlogPosts);
route.get('/:id', validateToken, blogPostController.getBlogPostById);
route.put(
    '/:id',
    validateToken,
    validateUpdateBlogPost,
    validateBlogPostId,
    validateUserFromBlogPost,
    blogPostController.updateBlogPost,
);
route.delete(
    '/:id',
    validateToken,
    validateBlogPostId,
    validateUserFromBlogPost,
    blogPostController.deleteBlogPost,
);

module.exports = route;