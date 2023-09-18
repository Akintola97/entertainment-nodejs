const mongoose = require("mongoose");
const User = require("../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(401).json({ message: "Please Provide Credentials" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please Login." });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashPassword,
    });
    
    await newUser.save();

    res.status(200).json({ message: "Profile Created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1hr" });

    res.cookie('authToken', token, {
      httpOnly: true,
      sameSite: "Strict",
      maxAge: 3600000, // 1hr in milliseconds
    });

    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.authenticate = async (req, res, next) => {
  const authToken = req.cookies.authToken;
  console.log(authToken)

  if (!authToken) {
    return res.status(401).json({ message: "Authentication failed - Token missing" });
  }

  try {
    const decodedToken = jwt.verify(authToken, secret);
    const userId = decodedToken.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.userInfo = async (req, res) => {
  const userId = req.id; // Ensure you have a way to get the user's ID
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
