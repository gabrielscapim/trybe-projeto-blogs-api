const validateCreateCategory = async (req, _res, next) => {
    const { name } = req.body;

    if (!name) {
        return next({ statusCode: 400, message: '"name" is required' });
    }

    return next();
};

module.exports = {
    validateCreateCategory,
};