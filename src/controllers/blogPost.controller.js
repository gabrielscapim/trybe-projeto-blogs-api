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

const getAllBlogPosts = async (_req, res) => {
    try {
        const blogPosts = await blogPostService.getAllBlogPosts();

        return res.status(200).json(blogPosts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const getBlogPostById = async (req, res) => {
    try {
        const { id } = req.params;

        const blogPost = await blogPostService.getBlogPostById(id);

        if (!blogPost) {
            return res.status(404).json({ message: 'Post does not exist' });
        }

        return res.status(200).json(blogPost);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
};