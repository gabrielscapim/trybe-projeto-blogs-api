'use strict';

module.exports = {
  up: async (_queryInterface, Sequelize) => {'categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
