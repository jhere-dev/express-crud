const { DataTypes } = require("sequelize");
const dbconnection = require("../config/dbconnection");

const Post = dbconnection.define("post", {
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
});

module.exports = Post;
