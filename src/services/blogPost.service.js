const { BlogPost, User, Category, Sequelize } = require('../models');

const currentDate = new Date();
const formattedDate = currentDate.toISOString();

const createBlogPost = async (title, content, userId) => {
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

const updateBlogPost = async (id, title, content) => {
    const [returnFromSequelize] = await BlogPost.update(
        { title, content, updated: formattedDate },
        { where: { id } },  
    );

    return returnFromSequelize;
};

const deleteBlogPost = async (id) => {
    const returnFromSequelize = await BlogPost.destroy({ where: { id } });

    return returnFromSequelize;
};

const findBlogPostByQuery = (query) => BlogPost.findAll({
    where: {
        [Sequelize.Op.or]: [
            { title: { [Sequelize.Op.like]: `%${query}%` } },
            { content: { [Sequelize.Op.like]: `%${query}%` } },
        ],
    },
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

module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost,
    findBlogPostByQuery,
};