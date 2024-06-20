import express from "express";
import {
  registerController,
  loginController,
  submitReviewController,
  getReviewController,
  submitUploadController,
  deleteReviewController,
  getUploadController,
  getUploadPhotoController,
  deleteUploadController,
} from "../controllers/authController.js";
import multer from "multer";

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// router object
const router = express.Router();

// routing
// LOGIN || METHOD GET
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/review", submitReviewController);

// GET route to fetch all reviews
router.get("/reviews", getReviewController);

//delete
router.delete("/delete-review/:id", deleteReviewController);

router.post("/upload", upload.single("photo"), submitUploadController);

router.get("/uploads", getUploadController);

router.get("/upload/photo/:id", getUploadPhotoController);

//delete
router.delete("/delete-customer/:id", deleteUploadController);

export default router;
