const { updateBlogPostSchema } = require('./validations/schemas');

const validateUpdateBlogPost = async (req, _res, next) => {
    const { error } = updateBlogPostSchema.validate(req.body);

    if (error) {
        return next({ statusCode: 400, message: 'Some required fields are missing' });
    }

    return next();
};

module.exports = {
    validateUpdateBlogPost,
};