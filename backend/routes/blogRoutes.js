const express = require("express");
const Blog = require("../models/Blog");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, async(req,res)=>{
  const blog = new Blog({
    username:req.user.username,
    text:req.body.text,
    image:req.body.image
  });
  await blog.save();
  res.json(blog);
});

router.get("/", async(req,res)=>{
  const blogs = await Blog.find().sort({createdAt:-1});
  res.json(blogs);
});

router.post("/:id/like", auth, async(req,res)=>{
  const blog = await Blog.findById(req.params.id);
  if(!blog.likes.includes(req.user._id)){
    blog.likes.push(req.user._id);
  }
  await blog.save();
  res.json(blog);
});

router.post("/:id/comment", auth, async(req,res)=>{
  const blog = await Blog.findById(req.params.id);
  blog.comments.push({user:req.user.username,text:req.body.text});
  await blog.save();
  res.json(blog);
});

module.exports = router;
