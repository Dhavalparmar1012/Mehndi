import express from "express";
import {
  registerController,
  loginController,
  submitReview,
  getReviews,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// LOGIN || METHOD GET
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/review", submitReview);

// GET route to fetch all reviews
router.get("/reviews", getReviews);

export default router;
