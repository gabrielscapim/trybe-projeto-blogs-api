const { blogPostService } = require('../services');

const validateBlogPostId = async (req, _res, next) => {
    const { id } = req.params;
    const blogPost = await blogPostService.getBlogPostById(id);

    if (!blogPost) {
        return next({ statusCode: 404, message: 'Post does not exist' });
    }

    return next();
};

module.exports = {
    validateBlogPostId,
};