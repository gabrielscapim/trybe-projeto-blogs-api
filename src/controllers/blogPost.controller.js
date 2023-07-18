const { blogPostService, postCategoryService } = require('../services');

const serverErrorMessage = { message: 'Erro interno' };

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
        return res.status(500).json(serverErrorMessage);
    }
};

const getAllBlogPosts = async (_req, res) => {
    try {
        const blogPosts = await blogPostService.getAllBlogPosts();

        return res.status(200).json(blogPosts);
    } catch (error) {
        console.log(error);
        return res.status(500).json(serverErrorMessage);
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
        return res.status(500).json(serverErrorMessage);
    }
};

const updateBlogPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
    
        await blogPostService.updateBlogPost(id, title, content);

        const blogPost = await blogPostService.getBlogPostById(id);

        return res.status(200).json(blogPost);
    } catch (error) {
        console.log(error);
        return res.status(500).json(serverErrorMessage);
    }
};

const deleteBlogPost = async (req, res) => {
    try {
        const { id } = req.params;

        await blogPostService.deleteBlogPost(id);

        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json(serverErrorMessage);
    }
};

const findBlogPostByQuery = async (req, res) => {
    try {
        const { q: query } = req.query;

        if (query === '') {
            return getAllBlogPosts(req, res);
        }
        
        const blogPosts = await blogPostService.findBlogPostByQuery(query);

        return res.status(200).json(blogPosts);
    } catch (error) {
        console.log(error);
        return res.status(500).json(serverErrorMessage);
    }
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost,
    findBlogPostByQuery,
};