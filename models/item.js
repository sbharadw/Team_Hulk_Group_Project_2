/**
 * @function
 * @returns @var - returns the Item table with its columns.
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
module.exports = (sequelize, DataTypes) => {

    const Item = sequelize.define('Item', {

      title: {
        type: DataTypes.STRING,
        validate:{
          len: [2],
          notEmpty: true
        }
      },

      description: {
        type: DataTypes.STRING,
        validate:{
          len: [2],
          notEmpty: true
        }
      },

      item_type: {
        type: DataTypes.STRING,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      item_category: {
        type: DataTypes.STRING,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      user_id: Sequelize.INTEGER,
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

    Item.associate = (models) => {
        
        Item.belongsTo(models.User, {
          as: "user",
          foreignKey: user_id
        });
      };

      Item.associate = (models) => {
        
        Item.belongsTo(models.Order, {
          as: "order",
          onDelete: 'cascade',
          foreignKey: "item_id"
        });
      };


    // Item.associate = (models) => {
        
    //     Item.belongsTo(models.ItemCategory, {
    //       foreignKey: {
    //         allowNull: false,
    //       },
    //     });
    //   };
    
    Item.associate = (models) => {
        
        Item.hasMany(models.Itemimage, {
          onDelete: 'cascade',
        });
      };


    return Item;
  
};

//freezeTableName: true