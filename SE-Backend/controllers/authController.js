import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import ImageStorage from "../modules/ImageStorage.js";
import userModel from "../modules/userModel.js";
import DetailsUser from "../modules/userReview.js";
import UserContact from "../modules/userContact.js";
import JWT from "jsonwebtoken";

// Registration
export const registerController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }

    // check user
    const existingUser = await userModel.findOne({ email });

    // existingUser user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }

    // register user
    const hashedPassword = await hashPassword(password);

    // save
    const user = await new userModel({
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

// Login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Username and password",
      });
    }

    // check user
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registred",
      });
    }
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invaild password",
      });
    }

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login Successfully",
      user: {
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// Review
export const submitReviewController = async (req, res) => {
  try {
    const { email, fname, rating, review, country } = req.body;
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!fname) {
      return res.send({ error: "First name is required" });
    }
    if (!rating) {
      return res.send({ error: "Rating is required" });
    }
    if (!review) {
      return res.send({ error: "Review is required" });
    }
    if (!country) {
      return res.send({ error: "Country is required" });
    }

    // check user
    const existingUser = await DetailsUser.findOne({ email });

    // existingUser user
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already exists",
      });
    }

    const newUser = await new DetailsUser({
      email,
      fname,
      rating,
      review,
      country,
    }).save();

    res.status(201).send({
      success: true,
      message: "Review submitted successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to submit review",
      error,
    });
  }
};

export const getReviewController = async (req, res) => {
  try {
    const reviewsList = await DetailsUser.find(req.query);
    res.status(200).json({ reviewsList, nbHits: reviewsList.length });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
};

export const deleteReviewController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await DetailsUser.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Review Deleted Successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while deleting Review",
      error,
    });
  }
};

// Upload Image
export const submitUploadController = async (req, res) => {
  try {
    const { category } = req.body;

    // Handle file upload if present
    let photo;
    if (req.file) {
      photo = req.file.buffer;
    }

    const newUser = await new ImageStorage({
      category,
      photo,
    }).save();

    res.status(201).send({
      success: true,
      message: "Mehndi list submitted successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to submit Mehndi list",
      error,
    });
  }
};

export const getUploadController = async (req, res) => {
  try {
    const customerList = await ImageStorage.find(req.query);
    res.status(200).json({ customerList, nbHits: customerList.length });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch Mehndi details",
      error: error.message,
    });
  }
};

export const getUploadPhotoController = async (req, res) => {
  try {
    const MehndiId = req.params.id;
    const customer = await ImageStorage.findById(MehndiId);

    if (!customer || !customer.photo) {
      return res.status(404).send({
        success: false,
        message: "Customer not found or photo missing",
      });
    }

    // Set the appropriate Content-Type header for the image
    res.set("Content-Type", "image/*");
    res.send(customer.photo);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch customer photo",
      error,
    });
  }
};

export const deleteUploadController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await ImageStorage.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Mehndi list not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Mehndi list Deleted Successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while deleting Mehndi list",
      error,
    });
  }
};

// Contact
export const getContactController = async (req, res) => {
  try {
    const reviewsList = await UserContact.find(req.query);
    res.status(200).json({ reviewsList, nbHits: reviewsList.length });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch contact",
      error: error.message,
    });
  }
};

export const submitContactController = async (req, res) => {
  try {
    const { email, fname, lname, telephone, message } = req.body;
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!fname) {
      return res.send({ error: "First name is required" });
    }
    if (!lname) {
      return res.send({ error: "last name is required" });
    }
    if (!telephone) {
      return res.send({ error: "Telephone is required" });
    }
    if (!message) {
      return res.send({ error: "Message is required" });
    }
    // check user
    const existingUser = await UserContact.findOne({ email });

    // existingUser user
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already exists",
      });
    }

    const newUser = await new UserContact({
      email,
      fname,
      lname,
      telephone,
      message,
    }).save();

    res.status(201).send({
      success: true,
      message: "Contact submitted successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to submit contact",
      error,
    });
  }
};

export const deleteContactController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserContact.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Review Deleted Successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while deleting Review",
      error,
    });
  }
};

// test controller
export const testController = (req, res) => {
  console.log("Protected Route");
  res.send("Protected Route");
};
