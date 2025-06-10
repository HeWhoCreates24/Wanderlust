const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");
const {validateID, validateRID, validateReview, isLoggedIn, isAuthor, addAuthor} = require("../middlewares.js");
const reviewController = require("../controllers/reviews.js");

router.route("/")

// new route
.get(isLoggedIn, validateID, wrapAsync(reviewController.new))

// create review route
.post(isLoggedIn, validateID, addAuthor, validateReview, wrapAsync(reviewController.create));

router.route("/:rid")

// edit review
.get(isLoggedIn, validateID, validateRID, isAuthor, wrapAsync(reviewController.edit))

// update review
.put(isLoggedIn, validateID, validateRID, isAuthor, addAuthor, validateReview, wrapAsync(reviewController.update))

// delete review
.delete(isLoggedIn, validateID, validateRID, isAuthor, wrapAsync(reviewController.delete));

module.exports = router;