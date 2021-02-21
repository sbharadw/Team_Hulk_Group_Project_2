module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [2],
          notEmpty: true
        }
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [5],
          notEmpty: true
        }
      },
      cell_number: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
        unique: true,
        validate: {
          notEmpty: true,

          isPhoneNum = (value) => {
            if (!value) return value;

            var regexp = /^[0-9]+$/;
            var values = (Array.isArray(value)) ? value : [value];

            values.forEach(function(val) {
                if (!regexp.test(val)) {
                    throw new Error("Number only is allowed.");
                }
            });
            return value;
        }}
      }
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
