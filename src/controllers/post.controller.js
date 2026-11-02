
import mongoose from "mongoose";
import { Post } from "../models/post.model.js";

// CREATE POST
export const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body || {};

        if (
            typeof name !== "string" ||
            !name.trim() ||
            typeof description !== "string" ||
            !description.trim() ||
            age === undefined ||
            age === null
        ) {
            return res.status(400).json({
                message: "Please provide valid name, description and age"
            });
        }

        const post = await Post.create({
            name: name.trim(),
            description: description.trim(),
            age
        });

        return res.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        return res.status(400).json({
            message: "Unable to create post",
            error: error.message
        });
    }
};

// GET ALL POSTS
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        return res.status(200).json({
            count: posts.length,
            posts
        });

    } catch (error) {
        return res.status(500).json({
            message: "Unable to retrieve posts"
        });
    }
};

// UPDATE POST
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid post ID"
            });
        }

        const { name, description, age } = req.body || {};
        const updates = {};

        if (name !== undefined) updates.name = name;
        if (description !== undefined) updates.description = description;
        if (age !== undefined) updates.age = age;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                message: "No valid data provided for update"
            });
        }

        const post = await Post.findByIdAndUpdate(
            id,
            updates,
            {
                new: true,
                runValidators: true
            }
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        return res.status(200).json({
            message: "Post updated successfully",
            post
        });

    } catch (error) {
        return res.status(400).json({
            message: "Unable to update post",
            error: error.message
        });
    }
};

// DELETE POST
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid post ID"
            });
        }

        const deleted = await Post.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        return res.status(200).json({
            message: "Post successfully deleted"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Unable to delete post"
        });
    }
};
