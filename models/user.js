module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      cell_number: DataTypes.STRING
    });
  
    User.associate = () => {
      // Associating User with UserLogin
      // When a User is deleted, also delete the associated UserLogin
      User.hasOne(models.UserLogin, {
        onDelete: 'cascade',
      });
    };

    User.associate = () => {
        // Associating User with UserLogin
        // When a User is deleted, also delete the associated UserLogin
        User.hasOne(models.Seller, {
          onDelete: 'cascade',
        });
      };

    User.associate = () => {
        // Associating User with UserLogin
        // When a User is deleted, also delete the associated UserLogin
        User.hasOne(models.Buyer, {
          onDelete: 'cascade',
        });
      };

    User.associate = () => {
        // Associating User with UserLogin
        // When a User is deleted, also delete the associated UserLogin
        User.hasMany(models.Item, {
          onDelete: 'cascade',
        });
      };
  
    return User;
  };
