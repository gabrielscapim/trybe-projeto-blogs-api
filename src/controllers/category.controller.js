const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const category = await categoryService.createCategory({ name });
        
        return res.status(201).json(category);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        
        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
};