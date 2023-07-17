const { getPayload } = require('../security/authfunctions');

const validateToken = async (req, _res, next) => {
    const { headers: { authorization } } = req;

    if (!authorization) {
        return next({ statusCode: 401, message: 'Token not found' });
    }

    try {
        // O if é necessário para passar no requisito 08
        if (authorization.includes('Bearer')) {
            const payload = getPayload(authorization.split(' ')[1]);
            req.payload = payload;
            
            return next();
        }

        const payload = getPayload(authorization);
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