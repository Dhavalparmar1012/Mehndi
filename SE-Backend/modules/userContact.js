import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserContact = mongoose.model("contact", userSchema);

export default UserContact;
