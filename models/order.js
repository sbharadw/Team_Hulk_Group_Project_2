module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      price: DataTypes.INTEGER,
    });
  
    Order.associate = (models) => {
        // We're saying that a Order should belong to an User
        // An order can't be created without a user due to the foreign key constraint
        Order.belongsTo(models.Seller, {
          foreignKey: {
            allowNull: true,
          },
        });
      };
    
      Order.associate = (models) => {
        // We're saying that a  should belong to an User
        // A Seller can't be created without a User due to the foreign key constraint
        Order.belongsTo(models.Buyer, {
          foreignKey: {
            allowNull: true,
          },
        });
      };

      Order.associate = (models) => {
        // We're saying that a  should belong to an User
        // A Seller can't be created without a User due to the foreign key constraint
        Order.belongsTo(models.Item, {
          foreignKey: {
            allowNull: true,
          },
        });
      };


  
    return Order;
  };