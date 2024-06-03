module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false, // Убираем автоматически добавляемые поля createdAt и updatedAt
    });
  

  
    return Comment;
  };
  