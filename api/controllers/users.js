const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    const doc = await user.save();
    console.log(doc);
    res.status(201).json({
      message: "User Registered",
      user: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const userSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User not found",
      })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({
        message: "Invalid Crendtial",
      });
    }
    const token = jwt.sign({ _id: user._id }, `${process.env.JWT_KEY}`, {
      expiresIn: "1h",
    });
    res.status(200).json({ token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const userDelete = async (req, res, next) => {
  try {
    const userDelete = await User.findOneAndDelete(req.params.id);
    if (!userDelete) {
      res.status(404).json({
        message: "User Not Found",
      });
    } else {
      console.log(userDelete);
      res.status(201).json({
        message: "User Deleted",
        user: userDelete,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  userSignUp,
  userSignIn,
  userDelete,
};
