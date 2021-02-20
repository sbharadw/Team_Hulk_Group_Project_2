module.exports = (sequelize, DataTypes) => {

    const ItemCategory = sequelize.define('ItemCategory', {
      category: DataTypes.STRING,
    });

    ItemCategory.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        ItemCategory.belongsTo(models.Item, {
          foreignKey: {
            allowNull: false,
          },
        });
      };


    ItemCategory.associate = () => {
        // Associating User with UserLogin
        // When a User is deleted, also delete the associated UserLogin
        ItemCategory.hasMany(models.Item, {
          onDelete: 'SET NULL',
        });
      };
    
    return ItemCategory;
  
  };