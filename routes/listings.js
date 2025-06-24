const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const {validateID, validateListing, isLoggedIn, addOwner, isOwner, setCoordinates, safeQuery} = require("../middlewares.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


router.route("/")

// index route
.get(safeQuery, wrapAsync(listingController.index))

// create route
.post(isLoggedIn, upload.single("image"), addOwner, validateListing, wrapAsync(listingController.create))

// new route
router.get("/new", isLoggedIn, listingController.new);

// end route
router.get("/end", listingController.end);

router.route("/:id")

// show route
.get(validateID, setCoordinates, wrapAsync(listingController.show))

// update route
.put(isLoggedIn, isOwner, upload.single("image"), addOwner, validateID, validateListing, wrapAsync(listingController.update))

// delete route
.delete(isLoggedIn, isOwner, validateID, wrapAsync(listingController.delete));

// edit route
router.get("/:id/edit", isLoggedIn, isOwner, validateID, wrapAsync(listingController.edit));

// reserve route
router.get("/:id/reserve", isLoggedIn, validateID, wrapAsync(listingController.reserve));


module.exports = router;