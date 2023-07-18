const { blogPostService } = require('../services');
const { updateBlogPostSchema } = require('./validations/schemas');

const validateUpdateBlogPost = async (req, _res, next) => {
    const { error } = updateBlogPostSchema.validate(req.body);

    if (error) {
        return next({ statusCode: 400, message: 'Some required fields are missing' });
    }

    const { data: { id: tokenUserId } } = req.payload;
    const { id } = req.params;
    const { dataValues: { userId: blogPostUserId } } = await blogPostService.getBlogPostById(id);

    if (tokenUserId !== blogPostUserId) {
        return next({ statusCode: 401, message: 'Unauthorized user' });
    }

    return next();
};

module.exports = {
    validateUpdateBlogPost,
};