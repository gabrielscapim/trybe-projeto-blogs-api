const UserSchema = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, 
    {
        tableName: 'users',
        underscored: true,
        timestamps: false,
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost,
          { foreignKey: 'userId', as: 'blog_posts' });
      };

    return User;
}

module.exports = UserSchema;