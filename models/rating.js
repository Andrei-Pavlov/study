module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
    }, {
      timestamps: false,
    });
  
    // Rating.associate = function(models) {
    //   Rating.belongsTo(models.User, { foreignKey: 'UserId' });
    //   Rating.belongsTo(models.Material, { foreignKey: 'MaterialId' });
    // };
  
    return Rating;
  };
  