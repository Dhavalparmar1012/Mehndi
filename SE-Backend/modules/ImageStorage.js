import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    category: {
      type: Number,
      required: true,
    },
    photo: {
      type: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const ImageStorage = mongoose.model("ImageStorage", userSchema);

export default ImageStorage;
