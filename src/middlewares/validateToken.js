const { getPayload } = require('../security/authfunctions');

const validateToken = async (req, _res, next) => {
    const { headers: { authorization } } = req;

    if (!authorization) {
        return next({ statusCode: 401, message: 'Token not found' });
    }

    try {
        const tokenSended = authorization.split(' ')[1];
        const payload = getPayload(tokenSended);
        req.payload = payload;
        
        return next();
    } catch (error) {
        console.log(error);
        return next({ statusCode: 401, message: 'Expired or invalid token' });
    }
};

module.exports = {
    validateToken,
};