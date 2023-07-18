const { blogPostService, postCategoryService } = require('../services');

const createBlogPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { data: { id } } = req.payload;

        const blogPost = await blogPostService.createBlogPost(title, content, id);

        const { id: blogPostId } = blogPost;
        
        await postCategoryService.createPostCategory(categoryIds, blogPostId);
        
        return res.status(201).json(blogPost);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const getAllBlogPosts = async (req, res) => {
    try {
        const blogPosts = await blogPostService.getAllBlogPosts();

        return res.status(200).json(blogPosts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
};