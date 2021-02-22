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

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    date: {
      type: DataTypes.DATEONLY,//DATETIME is also option
      validate: {
        len: [8],
        notEmpty: true,
      },
    },

    price: {
      type: DataTypes.INTEGER, //
      allowNull: false,
      validate: {
        len: [2, 10],
        isNumeric: true,
        notEmpty: true,
      },
    },

    shipping_address: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 50],
        isAlphanumeric: true,
        notEmpty: true,
      },
    },
    shipping_city: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 20],
        isAlpha: true,
        notEmpty: true,
      },
    },
    shipping_state: {
      type: DataTypes.STRING,
      validate: {
        len: [2],
        isAlpha: true,
        notEmpty: true,
      },
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Seller, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  Order.associate = (models) => {
    Order.belongsTo(models.Item, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Order;
};
