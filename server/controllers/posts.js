const Post = require('../models/post');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPost = new Post({ title, message, selectedFile, creator, tags });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({message: error.message});
    }
}

module.exports = {getPosts, createPost}