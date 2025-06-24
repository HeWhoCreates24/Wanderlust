const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const {q} = req.query;
  let allListings;
   if (q) {
    allListings = await Listing.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { location: { $regex: q, $options: "i" } },
        { country: { $regex: q, $options: "i" } },
      ],
    });
  } else {
    allListings = await Listing.find({});
  }
  if(allListings.length == 0){
    req.flash("error", `No listings found for "${q}"`);
    return res.redirect("/listings");
  }
  res.render("listings/index.ejs", { allListings, searchQuery: q || "" });
}

module.exports.new = (req, res) => {
  res.render("listings/new.ejs");
}

module.exports.create = async (req, res, next) => {
  const newListing = req.body;
  if(req.file){
    let { path: url, filename} = req.file;
    newListing.image = {filename, url};
  }else{
    newListing.image = {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.vfXY3J1CNQVF9rat2-mGFAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    }
  }
  await Listing.insertOne(newListing);
  req.flash("success", "New Listing Created Successfully!");
  res.redirect("/listings");
}

module.exports.show = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate({path: "reviews", populate:{path: "author"}}).populate("owner");
  if(listing){
    res.render("listings/show.ejs", { listing });
  }else{
    req.flash("error", "Listing Does Not Exist!");
    res.redirect("/listings");
  }
}

module.exports.edit = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if(listing){
    let previewUrl = listing.image.url.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, previewUrl });
  }else{
    req.flash("error", "Listing Does Not Exist!");
    res.redirect("/listings");
  }
}

module.exports.update = async (req, res, next) => {
  const { id } = req.params;
  const newListing = req.body;
  if(req.file){
    let { path: url, filename} = req.file;
    newListing.image = {filename, url};
  }
  newListing.coordinates = {
    edited: true
  }
  await Listing.findByIdAndUpdate(id, newListing, {runValidators: true});
  req.flash("success", "Listing Updated Sccessfully!");
  res.redirect(`/listings/${id}`);
}

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Sccessfully!");
    res.redirect("/listings");
}

module.exports.reserve = async (req, res, next) => {
  const {id} = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/reserve.ejs", {listing})
}

module.exports.end = (req, res, next) => {
  res.render("listings/end.ejs");
}