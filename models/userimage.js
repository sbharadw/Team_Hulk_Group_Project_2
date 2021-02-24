module.exports = (sequelize, DataTypes) => {

    const Userimage = sequelize.define('Userimage', {

      url: {
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
    
    return Userimage;
  
};