const Sequelize = require("sequelize");

const sequelize = new Sequelize("expensetrackeraws", "root", "Amitbhand68@", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;