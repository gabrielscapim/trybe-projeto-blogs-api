const { categoryService } = require('../services');
const { addBlogPostSchema } = require('./validations/schemas');

const validadeCreateBlogPost = async (req, _res, next) => {
    const { error } = addBlogPostSchema.validate(req.body);

    if (error) {
        return next({ statusCode: 400, message: 'Some required fields are missing' });
    }

    const { categoryIds } = req.body;
    const getAllCategories = await categoryService.getAllCategories();
    const categories = getAllCategories
        .map((category) => category.dataValues)
        .map((category) => category.id);

    const allCategoriesExist = categoryIds.every((categoryId) => categories.includes(categoryId));

    if (!allCategoriesExist) {
        return next({ statusCode: 400, message: 'one or more "categoryIds" not found' });
    }

    return next();
};

module.exports = {
    validadeCreateBlogPost,
};