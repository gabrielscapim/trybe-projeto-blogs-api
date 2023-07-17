const { User } = require('../models');

const getUserByEmail = (email) => User.findOne({ where: { email } });

const getAllUsers = () => User.findAll({ attributes: { exclude: 'password' } });

const createUser = async (userDetails) => {
    const result = await User.create(userDetails);
    
    return result;
};

module.exports = {
    getUserByEmail,
    createUser,
    getAllUsers,
};