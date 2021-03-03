/**
 * @function
 * @returns @var - returns the Order table with its columns.
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
  const Order = sequelize.define("Order", {
    price: {
      type: DataTypes.INTEGER, //
      allowNull: false,
      validate: {
        isNumeric: true,
        notEmpty: false,
      },
    },
    seller_id: {
      type: DataTypes.INTEGER, //
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    buyer_id: {
      type: DataTypes.INTEGER, //
      allowNull: true,
      validate: {
        isNumeric: true,
      },
    },
    
    item_id: Sequelize.INTEGER,

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


  Order.associate = (models) => {
    Order.belongsTo(models.Item, {
      as: "item",
      foreignKey: "item_id",
      notEmpty: true
    });
  };

  return Order;
};
