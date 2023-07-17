const { createToken } = require('../security/authfunctions');
const { userService } = require('../services');

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;

        await userService.createUser({ displayName, email, password, image });

        const payload = { data: email };
        const token = createToken(payload);

        return res.status(201).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = {
    createUser,
};
