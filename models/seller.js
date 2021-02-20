module.exports = (sequelize, DataTypes) => {

    const Seller = sequelize.define('Seller', {
      
    });

    Seller.associate = (models) => {
        // We're saying that a Seller should belong to an User
        // A Seller can't be created without a User due to the foreign key constraint
        UserLogin.belongsTo(models.User, {
          foreignKey: {
            allowNull: true,
          },
        });
      };
    

    Seller.associate = () => {
        // Associating User with UserLogin
        // When a User is deleted, also delete the associated UserLogin
        Seller.hasMany(models.Order, {
          onDelete: 'cascade',
        });
      };


    return Seller;
  
  };