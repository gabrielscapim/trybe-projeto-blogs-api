const { createToken } = require('../security/authfunctions');
const { userService } = require('../services');

const loginAuthentication = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userService.getUserByEmail(email);

        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid fields' });
        }

        const { password: _password, ...userWithoutPassword } = user.dataValues;

        const payload = { data: userWithoutPassword };

        const token = createToken(payload);

        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = {
    loginAuthentication,
};