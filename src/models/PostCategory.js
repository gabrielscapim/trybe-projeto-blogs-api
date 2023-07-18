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
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false,
    });

    PostCategory.associate = ({ Category, BlogPost }) => {
        Category.belongsToMany(BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
        BlogPost.belongsToMany(Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        })
    };

    return PostCategory;
}

module.exports = PostCategorySchema;