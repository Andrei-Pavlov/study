const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    logging: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./user.js')(sequelize, Sequelize);
db.Material = require('./material.js')(sequelize, Sequelize);
db.Category = require('./category.js')(sequelize, Sequelize);
db.Subcategory = require('./subcategory.js')(sequelize, Sequelize);
db.Comment = require('./comment.js')(sequelize, Sequelize);
db.Rating = require('./rating.js')(sequelize, Sequelize);

// Define associations



// Define associations
db.User.hasMany(db.Material);
db.Material.belongsTo(db.User);




db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

db.Material.hasMany(db.Comment);
db.Comment.belongsTo(db.Material);

db.Material.hasMany(db.Rating);
db.Rating.belongsTo(db.Material);

db.User.hasMany(db.Rating);
db.Rating.belongsTo(db.User);


db.Category.hasMany(db.Subcategory);
db.Subcategory.belongsTo(db.Category);

db.Subcategory.hasMany(db.Material);
db.Material.belongsTo(db.Subcategory);

db.Category.hasMany(db.Material);
db.Material.belongsTo(db.Category);



module.exports = db;
