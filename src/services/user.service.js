const { User } = require('../models');

const getUserByEmail = (email) => User.findOne({ where: { email } });

const createUser = async (userDetails) => {
    const result = await User.create(userDetails);
    
    return result;
};

module.exports = {
    getUserByEmail,
    createUser,
};