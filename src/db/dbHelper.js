const Sequelize = require("sequelize");
const dbConfig = require("../config/dbConfig");
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  }
);

module.exports = sequelize;
