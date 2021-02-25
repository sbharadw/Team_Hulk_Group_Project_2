/**
 * @function
 * @returns @var - returns the User table with its columns.
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
    const User = sequelize.define('User', {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      last_name: {
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
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [5],
          notEmpty: true
        }
      },
      cell_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          
          notEmpty: true,

          isPhoneNum: (value) => {
            if (!value) return value;

            var regexp = /^[0-9]+$/;
            var values = (Array.isArray(value)) ? value : [value];

            values.forEach(function(val) {
                if (!regexp.test(val)) {
                    throw new Error("Number only is allowed.");
                }
            });
            return value;
        }}
      }
    });
  
    User.associate = (models) => {
      
      User.hasOne(models.UserLogin, {
        onDelete: 'cascade',
      });
    };

    User.associate = (models) => {
        User.hasOne(models.Seller, {
          onDelete: 'cascade',
        });
      };

    User.associate = (models) => {
        
        User.hasOne(models.Buyer, {
          onDelete: 'cascade',
        });
      };

    User.associate = (models) => {
        
        User.hasMany(models.Item, {
          onDelete: 'cascade',
        });
      };

    User.associate = (models) => {
        
        User.hasMany(models.Userimage, {
          onDelete: 'cascade',
        });
      };
  
    return User;
  };

