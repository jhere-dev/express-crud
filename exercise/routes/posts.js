var express = require("express");
var router = express.Router();
const Post = require("../models/post");

router.post("/insert", async (req, res) => {
  const createPost = await Post.create(req.body);
  res.send(createPost.toJSON());
});

router.get("/all", async (req, res) => {
  const allPost = await Post.findAll();
  res.send(allPost);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundPost = await Post.findByPk(id);
  foundPost ? res.send(foundPost.toJSON()) : res.send("NOT post found");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const affectedPost = await Post.update(req.body, { where: { id } });

  affectedPost
    ? res.send(`the rows affected is ${affectedPost}`)
    : res.send("none  rows affected");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const destroyRow = await Post.destroy({ where: { id } });
  destroyRow
    ? res.send(`the number of destroys is ${destroyRow}`)
    : res.send("none row destroyed");
});

module.exports = router;
