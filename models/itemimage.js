module.exports = (sequelize, DataTypes) => {

    const Itemimage = sequelize.define('Itemimage', {

      url: {
        type: DataTypes.STRING,
        validate:{
        isUrl: true,
        notEmpty: false
        }
      }

    });

    Itemimage.associate = (models) => {
        
        Itemimage.belongsTo(models.Item, {
          foreignKey: {
            allowNull: true,
          },
        });
      };
    
    return Itemimage;
  
};