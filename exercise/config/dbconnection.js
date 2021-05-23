const { Sequelize } = require("sequelize");

const { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST } = process.env;

const dbconnection = new Sequelize(DB_USER, DB_NAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

dbconnection.sync().then(() => console.log("All models loaded"));

module.exports = dbconnection;
