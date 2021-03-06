const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    const Userimage = sequelize.define('Userimage', {

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


    Userimage.associate = (models) => {
        
        Userimage.belongsTo(models.User, {
          foreignKey: {
            allowNull: true,
          },
        });
      };
    
    return Userimage;
  
};