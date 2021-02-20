module.exports = (sequelize, DataTypes) => {

    const Item = sequelize.define('Item', {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      item_type: DataTypes.STRING,
    });

    Item.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Item.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };


    Item.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Item.belongsTo(models.ItemCategory, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    
    return Item;
  
  };