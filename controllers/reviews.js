const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.new = async (req, res, next) => {
    const {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("reviews/new.ejs", {listing});
}

module.exports.create = async (req, res, next) => {
  const {id} = req.params;
  const newReview = new Review(req.body);
  await newReview.save();
  req.flash("success", "New Review Created Sccessfully!");

  const listing = await Listing.findById(id);
  listing.reviews.push(newReview._id);
  await listing.save();
  req.flash("success", "New Review Added Sccessfully!");

  res.redirect(`/listings/${id}`);
}

module.exports.edit = async (req, res, next) => {
  const {id, rid} = req.params;
  let review = await Review.findById(rid);
  if(review){
    res.render("reviews/edit.ejs", {review, listing:{_id: id}});
  }else{
    req.flash("error", "Review Does Not Exist!");
    res.redirect(`/listings/${id}`);
  }
}

module.exports.update = async (req, res, next) => {
  const {id, rid} = req.params;
  let newReview = req.body;
  await Review.findByIdAndUpdate(rid, newReview, {runValidators: true});
  req.flash("success", "Review Updated Sccessfully!");
  res.redirect(`/listings/${id}`);
}

module.exports.delete = async (req, res, next) => {
  const {id, rid} = req.params;
  await Listing.findByIdAndUpdate(id, {$pull: {reviews: rid}});
  await Review.findByIdAndDelete(rid);
  req.flash("success", "Review Deleted Sccessfully!");
  res.redirect(`/listings/${id}`);
}