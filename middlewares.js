const ExpressError = require("./utils/ExpressError.js");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const User = require("./models/user.js")
const wrapAsync = require("./utils/wrapAsync.js");
const geocodeAddress = require("./utils/geoCoder.js");

module.exports.validateID = (req, res, next) => {
  let {id} = req.params;
  if (!mongoose.isValidObjectId(id)) {
  return next(new ExpressError(400, "Invalid Listing ID format"));
  }else{
    return next();
  }
}

module.exports.validateListing = async (req, res, next) => {
  try{
    await Listing.validate(req.body);
    return next();
  }catch(err){
    return next(new ExpressError(400, err.message));
  }
}

module.exports.validateReview = async (req, res, next) => {
  try{
    await Review.validate(req.body);
    return next();
  }catch(err){
    return next(new ExpressError(400, err.message));
  }
}

module.exports.validateRID = (req, res, next) => {
  let {id, rid} = req.params;
  if (!mongoose.isValidObjectId(rid)) {
  return next(new ExpressError(400, "Invalid Review ID format"));
  }else{
    return next();
  }
}

module.exports.validateUser = async (req, res, next) => {
    try{
        await User.validate(req.body);
        return next();
    }catch(err){
        return next(new ExpressError(400, err.message));
    }
}

module.exports.isLoggedIn = async (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  }else{
    req.session.redirectUrl = req.originalUrl;
    req.flash("failure", "You must be logged in for that");
    res.redirect("/login");
  }
}

module.exports.saveRedirectUrl = (req, res, next) => {
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  return next();
}

module.exports.addOwner = (req, res, next) => {
  req.body.owner = req.user._id;
  return next();
}

module.exports.isOwner = wrapAsync(async (req, res, next) => {
  let {id} = req.params;
  let listing = await Listing.findById(id);
  if(res.locals.currUser._id.equals(listing.owner._id)){
    return next();
  }else{
    req.flash("failure", "you are not The Owner of this Listing! you cannot do that.");
    res.redirect(`/listings/${id}`);
  }
});

module.exports.addAuthor = (req, res, next) => {
  req.body.author = req.user._id;
  next();
};

module.exports.isAuthor = wrapAsync(async (req, res, next) => {
  let {id, rid} = req.params;
  let review = await Review.findById(rid);
  if(review.author._id.equals(res.locals.currUser._id)){
    return next();
  }else{
    req.flash("failure", "you are not The Author of this Review! you cannot do that.");
    res.redirect(`/listings/${id}`);
  }
});

module.exports.setCoordinates = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate({path: "reviews", populate:{path: "author"}}).populate("owner");
  if(listing){
    if((!listing.coordinates) || (listing.coordinates.edited)){
      try{
        let result = await geocodeAddress(listing.location);
        listing.coordinates = {
          default: false,
          latitude: result.latitude,
          longitude: result.longitude
        }
        await listing.save();
      }catch(err){
        listing.coordinates = {
          default: true,
          latitude: 19.0760,
          longitude: 72.8777
        }
        await listing.save();
      }
    }else if(listing.coordinates.default){
        
    }
    return next();
  }else{
    return next();
  }
}