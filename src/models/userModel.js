const sequelize = require("../db/dbHelper");
const Sequelize = require("sequelize");

const userModel = sequelize.define("user", {
  id: {
    type: Sequelize.STRING(11),
    primaryKey: true
  },
  username: Sequelize.STRING(255),
  password: Sequelize.STRING(255)
});
module.exports = userModel;
