const Post = require("../models/post.model");

// get all posts
exports.getPosts = async (req, res) => {
  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSinglePost = async (req, res) => {
  try {
    res.status(200).json(await Post.findById(req.params.id));
  } catch (error) {
    res.status(500).json(err);
  }
};
