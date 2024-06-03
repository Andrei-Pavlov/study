module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
        timestamps: false, // Убираем автоматически добавляемые поля createdAt и updatedAt
        
    
      });
  
      
    return Category;
  };
  