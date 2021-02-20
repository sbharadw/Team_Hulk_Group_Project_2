module.exports = (sequelize, DataTypes) => {

    const Buyer = sequelize.define('Buyer', {
      
    });

    Buyer.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Buyer.belongsTo(models.User, {
          foreignKey: {
            allowNull: true,
          },
        });
      };


    Buyer.associate = () => {
        // Associating User with UserLogin
        // When a User is deleted, also delete the associated UserLogin
        Buyer.hasMany(models.Order, {
          onDelete: 'SET NULL',
        });
      };
    
    
    return Buyer;
  
  };