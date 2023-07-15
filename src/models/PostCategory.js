const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        categoryId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: 'post_categories',
        underscored: true,
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'id',
            otherKey: 'post_id',
        });
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'id',
            otherKey: 'category_id',
        })
    };

    return PostCategory;
}

module.exports = PostCategorySchema;