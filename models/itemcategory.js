/**
 * @function
 * @returns @var - returns the ItemCategory table with its columns.
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

    const ItemCategory = sequelize.define('ItemCategory', {

      category: {
        type: DataTypes.STRING,
        validate:{
          len: [2],
          notEmpty: true
        }
      }

    });

    ItemCategory.associate = (models) => {
        
        ItemCategory.belongsTo(models.Item, {
          foreignKey: {
            allowNull: false,
          },
        });
      };


    ItemCategory.associate = (models) => {
        
        ItemCategory.hasMany(models.Item, {
          onDelete: 'SET NULL',
        });
      };
    
    return ItemCategory;
  
  };

  //freezeTableName: true