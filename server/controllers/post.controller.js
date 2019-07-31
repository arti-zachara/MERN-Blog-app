const uuid = require("uuid");
const Post = require("../models/post.model");

// get all posts
exports.getPosts = async (req, res) => {
  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

// get a single post
exports.getSinglePost = async (req, res) => {
  try {
    res.status(200).json(await Post.findOne({ id: req.params.id }));
  } catch (error) {
    res.status(500).json(err);
  }
};

// add new post
exports.addPost = async function(req, res) {
  try {
    const { title, author, content } = req.body;

    let newPost = new Post(req.body);
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get posts by range

exports.getPostsByRange = async function(req, res) {
  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);

    const posts = await Post.find()
      .skip(startAt)
      .limit(limit);
    const postsNumber = await Post.countDocuments();

    res.status(200).json({
      posts,
      postsNumber
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
