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

const getAllUsers = async (_req, res) => {
    try {
        const users = await userService.getAllUsers();

        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { data: { id: tokenUserId } } = req.payload;

        await userService.deleteUser(tokenUserId);

        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
};
