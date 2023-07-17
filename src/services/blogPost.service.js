const { BlogPost } = require('../models');

const createBlogPost = async (title, content, userId) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    const blogPost = await BlogPost.create({ 
        title,
        content,
        userId,
        published: formattedDate,
        updated: formattedDate,
    });

    return blogPost;
};

module.exports = {
    createBlogPost,
};