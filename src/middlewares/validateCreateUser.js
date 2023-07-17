const { getUserByEmail } = require('../services/user.service');
const { EMPTY_STRING_REGEX, EMAIL_REGEX } = require('../utils/regex');

const validateCreateUser = async (req, _res, next) => {
    const { displayName, email, password } = req.body;

    if (displayName.replace(EMPTY_STRING_REGEX).length < 8) {
        return next({ 
            statusCode: 400, message: '"displayName" length must be at least 8 characters long',
        });
    }

    if (!EMAIL_REGEX.test(email)) {
        return next({ statusCode: 400, message: '"email" must be a valid email' });
    }

    if (password.replace(EMPTY_STRING_REGEX).length < 6) {
        return next({ 
            statusCode: 400, message: '"password" length must be at least 6 characters long' });
    }

    const isUserAlreadyRegistered = await getUserByEmail(email);

    if (isUserAlreadyRegistered) {
        return next({ statusCode: 409, message: 'User already registered' });
    }

    return next();
};

module.exports = {
    validateCreateUser,
};