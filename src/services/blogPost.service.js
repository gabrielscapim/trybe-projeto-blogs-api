const { BlogPost, User, Category } = require('../models');

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

const getAllBlogPosts = () => BlogPost.findAll({
    include: [{ model: User,
        as: 'user',
        attributes: { 
            exclude: ['password'] },
        },
        { model: Category,
          as: 'categories',
          through: { 
            attributes: [] },
        }],
});

const getBlogPostById = (id) => BlogPost.findOne({
    include: [{ model: User,
        as: 'user',
        attributes: { 
            exclude: ['password'] },
        },
        { model: Category,
          as: 'categories',
          through: { 
            attributes: [] },
        }],
    where: { id },
});

module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
};