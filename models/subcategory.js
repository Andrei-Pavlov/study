module.exports = (sequelize, DataTypes) => {
    const Subcategory = sequelize.define('Subcategory', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
        timestamps: false, // Убираем автоматически добавляемые поля createdAt и updatedAt
      });
  
    // Subcategory.associate = function(models) {
    //   Subcategory.belongsTo(models.Category, { foreignKey: 'CategoryId' });
    // };
  
    return Subcategory;
  };
  