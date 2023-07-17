const { Category } = require('../models');

const getAllCategories = () => Category.findAll();

const createCategory = async (categoryDetails) => {
    const category = await Category.create(categoryDetails);

    return category;
};

module.exports = {
    createCategory,
    getAllCategories,
};