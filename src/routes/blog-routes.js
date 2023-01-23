import express from 'express';
import { getAllBlogs, createBlog, updateBlog, getById, deleteBlog, getByUserId } from  '../controllers/blog-controller';

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/createBlog", createBlog);
blogRouter.put("/updateBlog/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByUserId)

export default blogRouter;