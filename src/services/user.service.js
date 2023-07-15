const { User } = require('../models');

const getUserByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
    getUserByEmail,
};