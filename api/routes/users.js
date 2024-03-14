const express = require("express");
const { userSignUp, userSignIn, userDelete } = require("../controllers/users");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")



router.post("/signup", userSignUp);

router.post("/login", userSignIn);

router.delete("/delete/:id", userDelete)


module.exports= router;