const { Category } = require('../models');

const createCategory = async (categoryDetails) => {
    const category = await Category.create(categoryDetails);

    return category;
};

module.exports = {
    createCategory,
};