module.exports = (sequelize, DataTypes) => {

    const UserLogin = sequelize.define('UserLogin', {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });

    UserLogin.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        UserLogin.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    
    return UserLogin;
  
  };