const { User } = require('../models');

const getUserByEmail = (email) => User.findOne({ where: { email } });

const getAllUsers = () => User.findAll({ attributes: { exclude: 'password' } });

const getUserById = (id) => User.findOne({ where: { id }, attributes: { exclude: 'password' } });

const createUser = async (userDetails) => {
    const result = await User.create(userDetails);
    
    return result;
};

const deleteUser = (id) => User.destroy({ where: { id } });

module.exports = {
    getUserByEmail,
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
};