import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../modules/userModel.js";
import DetailsUser from "../modules/userReview.js";
import JWT from "jsonwebtoken";

//get instead post register
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

export const submitReview = async (req, res) => {
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

    //check user
    const existingUser = await DetailsUser.findOne({ email });

    // existingUser check
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already exists",
      });
    }

    const newUser = new DetailsUser({
      email,
      fname,
      rating,
      review,
      country,
    });

    await newUser.save();

    res.status(201).json({ message: "Review submitted successfully", newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to submit review", error: error.message });
  }
};

// Controller function to fetch all reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await DetailsUser.find({});
    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch reviews", error: error.message });
  }
};

// test controller
export const testController = (req, res) => {
  console.log("Protected Route");
  res.send("Protected Route");
};
