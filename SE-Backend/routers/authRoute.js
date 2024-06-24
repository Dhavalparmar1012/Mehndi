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
  getContactController,
  submitContactController,
  deleteContactController,
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

// Review
router.post("/review", submitReviewController);

router.get("/reviews", getReviewController);

router.delete("/delete-review/:id", deleteReviewController);

// Upload
router.get("/uploads", getUploadController);

router.get("/upload/photo/:id", getUploadPhotoController);

router.post("/upload", upload.single("photo"), submitUploadController);

router.delete("/delete-customer/:id", deleteUploadController);

// Contact
router.get("/contacts", getContactController);

router.post("/contact", submitContactController);

router.delete("/delete-contact/:id", deleteContactController);
export default router;
