import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

import upload from "../middleware/upload.middleware.js";
import {
  createPost,
  deletePost,
  getPost,
  getposts,
  getUserPosts,
  likePost,
} from "../controllers/post.controller.js";

const router = express.Router();

//public routes
router.get("/", getposts);
router.get("/:postId", getPost);
router.get("/user/:username", getUserPosts);

//protected routes
router.post("/", protectRoute, upload.single("image"), createPost);
router.post("/:postId/like", protectRoute, likePost);
router.delete("/:postId", protectRoute, deletePost);

export default router;
