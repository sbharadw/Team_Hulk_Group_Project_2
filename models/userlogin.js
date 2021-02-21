module.exports = (sequelize, DataTypes) => {

    const UserLogin = sequelize.define('UserLogin', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [6],
          notEmpty: true
        }
      },
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