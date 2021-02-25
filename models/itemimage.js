module.exports = (sequelize, DataTypes) => {

    const Itemimage = sequelize.define('Itemimage', {

      url: {
        type: DataTypes.STRING,
        validate:{
        isUrl: true,
        notEmpty: true
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