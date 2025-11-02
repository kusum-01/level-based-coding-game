const express = require("express");
const router = express.Router();
const User = require("../models/User");

// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "User already exists" });

  const newUser = new User({ name, email, password });
  await newUser.save();

  res.json({ message: "User registered successfully ✅" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.password !== password)
    return res.status(400).json({ message: "Invalid password" });

  res.json({ message: "Login successful ✅", name: user.name });
});

module.exports = router;
