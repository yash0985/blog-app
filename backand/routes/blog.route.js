// import express from "express";
// import { createBlog, deletBlog, getAllBlogs, getmyBlogs, getSingleBlogs,updateBlog,  } from "../controller/blog.controller.js";
// import {isAuthenticated,isAdmin } from "../middleware/authUser.js"
// const router = express.Router()

 
// router.post("/create",isAuthenticated,isAdmin("admin"),createBlog)
// router.delete("/delete/:id",isAuthenticated,isAdmin("admin"),deletBlog)
// router.get("/all-blogs",getmyBlogs)
// router.get("/single-blog/:id",isAuthenticated,getSingleBlogs)
// router.get("/my-blog",isAuthenticated, isAdmin("admin"),getmyBlogs )
// router.put("/update/:id", isAuthenticated, isAdmin("admin"), updateBlog);

// export default router;



import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getMyBlogs,
  getSingleBlogs,
  updateBlog,
} from "../controller/blog.controller.js";
import { isAdmin, isAuthenticated } from "../middleware/authUser.js";

const router = express.Router();

router.post("/create", isAuthenticated, isAdmin("admin"), createBlog);
router.delete("/delete/:id", isAuthenticated, isAdmin("admin"), deleteBlog);
router.get("/all-blogs", getAllBlogs);
router.get("/single-blog/:id", isAuthenticated, getSingleBlogs);
router.get("/my-blog", isAuthenticated, isAdmin("admin"), getMyBlogs);
router.put("/update/:id", isAuthenticated, isAdmin("admin"), updateBlog);

export default router;