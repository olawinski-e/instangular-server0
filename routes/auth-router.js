const express = require("express");
const router = express.Router();

// User model
const User = require("../models/user-model");

// BCrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/", (req, res, next) => {
  res.render("auth/signup");
});

// Add user
router.post("/signup", (req, res, next) => {
  const userData = req.body;
  const encryptedpw = bcrypt.hashSync(userData.password, 10);

  userData.password = encryptedpw;

  User.create(userData, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
