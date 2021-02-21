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
      }

    });

    Item.associate = (models) => {
        
        Item.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };


    Item.associate = (models) => {
        
        Item.belongsTo(models.ItemCategory, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    
    return Item;
  
};

//freezeTableName: true