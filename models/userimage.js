module.exports = (sequelize, DataTypes) => {

    const Userimage = sequelize.define('Userimage', {

      url: {
        type: DataTypes.STRING,
        validate:{
        isUrl: true,
        notEmpty: true
        }
      }

    });

    Userimage.associate = (models) => {
        
        Userimage.belongsTo(models.User, {
          foreignKey: {
            allowNull: true,
          },
        });
      };
    
    return Userimage;
  
};