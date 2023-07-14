'use strict';

module.exports = {
  up: async (_queryInterface, Sequelize) => {'post_categories', {
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'id',
      primaryKey: true,
      references: {
        model: 'blog_posts',
        key: 'id'
      }
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'id',
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('post_categories');
  }
};
