const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {validateUser, saveRedirectUrl, isLoggedIn} = require("../middlewares");
const userController = require("../controllers/users.js");


router.route("/signup")

// get signup
.get(userController.getSignup)

// post signup
.post(validateUser, wrapAsync(userController.postSignup));


router.route("/login")

// get login
.get(userController.getLogin)

// post login
.post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), wrapAsync(userController.postLogin));


// get logout
router.get("/logout",userController.getLogout)

module.exports = router;