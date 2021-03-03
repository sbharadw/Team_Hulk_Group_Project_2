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

const Sequelize = require('sequelize');
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [2, 120],
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
       // set(value) {
          // Storing passwords in plaintext in the database is terrible.
          // Hashing the value with an appropriate cryptographic hash function is better.
       //   this.setDataValue('password', hash(value));
      //  },
        validate:{
          len: [6, 10],
          notEmpty: true
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [2, 120],
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
          len: [2, 120],
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [2, 120],
        }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [2, 120],
        }
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [5, 120],
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
      },
      createdAt: { 
        type: DataTypes.DATE, 
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      updatedAt: { 
        type: DataTypes.DATE, 
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      }
    });

      // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });


    User.associate = (models) => {
        
        User.hasMany(models.Item, {
          as: "item",
          onDelete: 'cascade',
          foreignKey: "user_id"
        });
      };

    User.associate = (models) => {
        
        User.hasMany(models.Userimage, {
          onDelete: 'cascade',
        });
      };
  
    return User;
  };