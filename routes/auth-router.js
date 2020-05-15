const express = require("express");
const router = express.Router();

// User model
const User = require("../models/user-model");

//! ************************
//*          SIGNUP
//! ************************

router.post("/signup", (req, res, next) => {
  const email = req.body;

  User.create(email, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });

  if (email === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate an email to sign up",
    });
    return;
  }

  // User.findOne({ email: email })
  //   .then((user) => {
  //     if (user !== null) {
  //       res.render("auth/signup", {
  //         errorMessage: "This email already exists!",
  //       });
  //       return;
  //     }

  //     User.create({
  //       email,
  //     })
  //       .then(() => {
  //         res.redirect("/");
  //         res.json(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   })
  //   .catch((error) => {
  //     next(error);
  //   });
});

module.exports = router;
