/**
 * @function
 * @returns @var - returns the UserLogin table with its columns.
 * @description - We export a function that takes in 2 variables (parameters) -
                                       1. sequelize,
                                       2. DataTypes
 * These parameters are provided to us automatically by index.js
 * Inside of our function we run the “sequelize.define” method. 
 * We pass it two arguments. The name of our model as a string, and an object 
   describing our model’s schema. Each property will represent a column in the database.
 * @param sequelize - in this case is actually our connection to our database. 
 * @param DataTypes - DataTypes will be used to define what type of data each property on our 
                      model should be. http://docs.sequelizejs.com/en/latest/api/datatypes/#string
 */

module.exports = (sequelize, DataTypes) => {

    const UserLogin = sequelize.define('UserLogin', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [2, 10],
          notEmpty: true,
          unique: true
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
          len: [6, 10],
          notEmpty: true
        }
      },
    });

      // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  UserLogin.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Before a User is created, we will automatically hash their password
  UserLogin.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

    UserLogin.associate = (models) => {

        UserLogin.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    
    return UserLogin;
  
  };

  