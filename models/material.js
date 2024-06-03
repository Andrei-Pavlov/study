module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define('Material', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false, // Убираем автоматически добавляемые поля createdAt и updatedAt
  });

  // Material.associate = function(models) {
  //   Material.belongsTo(models.User, { foreignKey: 'UserId' });
  //   Material.belongsTo(models.Category, { foreignKey: 'CategoryId' });
  //   Material.belongsTo(models.Subcategory, { foreignKey: 'SubcategoryId' });
  //   Material.hasMany(models.Rating);
  //   Material.hasMany(models.Comment);
  // };

  return Material;
};
