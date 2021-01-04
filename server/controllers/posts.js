const mongoose = require('mongoose');
const Post = require('../models/post');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
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

const editPost = async (req, res) => {
    const {id} = req.params;
    const {title, message, creator, selectedFile, tags} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("Unrecognized id");
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    try {
        await Post.findByIdAndUpdate(id, updatedPost, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({message: error.message});
    }
}

const deletePost = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("Unrecognized id");

    try {
        await Post.findByIdAndRemove(id);
        res.status(200).json({message: 'Milestone deleted'});
    } catch (error) {
        console.log(error.message);
        res.status(409).json({message: error.message});
    }
}

module.exports = {getPosts, createPost, editPost, deletePost}