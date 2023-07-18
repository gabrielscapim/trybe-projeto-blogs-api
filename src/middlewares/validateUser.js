const { blogPostService } = require('../services');

const validateUser = async (req, _res, next) => {
    const { data: { id: tokenUserId } } = req.payload;
    const { id } = req.params;
    const { dataValues: { userId: blogPostUserId } } = await blogPostService.getBlogPostById(id);

    if (tokenUserId !== blogPostUserId) {
        return next({ statusCode: 401, message: 'Unauthorized user' });
    }

    return next();
};

module.exports = {
    validateUser,
};