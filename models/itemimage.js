const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    const Itemimage = sequelize.define('Itemimage', {
    type: {
            type: DataTypes.STRING,
    },

    name: {
            type: DataTypes.STRING,
    },

    data: {
            type: DataTypes.BLOB("long"),
    },

    createdAt: { 
        type: DataTypes.DATE, 
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
    },

    updatedAt: { 
        type: DataTypes.DATE, 
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
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


