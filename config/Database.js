const {
    Sequelize
  } = require('sequelize');
 
const db = new Sequelize('project_study_react', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
module.exports = db;