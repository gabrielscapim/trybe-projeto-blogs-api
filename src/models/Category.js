const CategorySchema = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
    }, 
    {
        tableName: 'categories',
        timestamps: false,
    });

    return Category;
}

module.exports = CategorySchema;