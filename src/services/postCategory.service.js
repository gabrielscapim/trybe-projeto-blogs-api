const { PostCategory } = require('../models');

const createPostCategory = async (categories, postId) => {
    const promises = categories.map(async (category) => {
        PostCategory.create({ postId, categoryId: category });
    });

    await Promise.all(promises);

    return null;
};

module.exports = {
    createPostCategory,
};