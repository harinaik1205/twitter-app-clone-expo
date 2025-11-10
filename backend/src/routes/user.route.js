import express from "express";
import {
  followUser,
  getCurrentUser,
  getUserProfile,
  syncUser,
  updateProfile,
} from "../controllers/user.controller.js";
import { protecteRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

//public route
router.get("/profile/:username", getUserProfile);

//protected routes

//upate profile
router.post("/sync", protecteRoute, syncUser);
router.get("/me", protecteRoute, getCurrentUser);
router.put("/profile", protecteRoute, updateProfile);
router.post("/follow/:targetUserId", protecteRoute, followUser);

export default router;
