import { Router } from "express";
import { addBlog, getAllBlogs } from "./blog.service.js";

const blogRouter= Router()



blogRouter.post("/", addBlog)
blogRouter.get("/", getAllBlogs)


export default blogRouter