import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import FeadbackModel from "../models/FeadbackModel.js";
//import auth from "../middlewares/auth.js";

const router = express.Router();
router.use(express.json());

// Register
router.post("/user", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const user = new User({ name, email, mobile, password });
    await user.save();
    const token = generateToken(user._id);
    res.status(201).json({ message: "User created successfully", token, user });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Failed to register user 😞" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid email or password  😕 " });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password 😞" });
    }
    const token = generateToken(user._id);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error " });
  }
});

router.post("/feedback", async (req, res) => {
  try {
    const feadData = req.body;
    if (!feadData || Object.keys(feadData).length === 0) {
      return res
        .status(400)
        .json({ message: "Unable to Receive your Feedback. 😕" });
    }
    // Assuming you have defined a MongoDB model named FeedbackModel
    const feedback = new FeadbackModel(feadData);
    await feedback.save();
    return res
      .status(200)
      .json({ message: "Your Feedback Received Successfully! 👍" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Issue 🦿" });
  }
});

router.post("/logout", (req, res) => {
  localStorage.removeItem("token");
  res.status(200).json({ message: "Logout successful" });
});

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, "thisisnodecourse", {
    expiresIn: "1h",
  });
};

export default router;
