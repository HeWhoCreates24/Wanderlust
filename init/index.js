if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

const ATLAS_URL = process.env.ATLAS_URL;

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((e) => {
    console.log(e);
  });

async function main() {
  await mongoose.connect(ATLAS_URL);
}

async function initDb() {
  await Listing.deleteMany({});
  await Review.deleteMany({});
  await User.deleteMany({});
  let firstUser = new User({
    email: "tanmayhatkar240@gmail.com",
    username: "tanmay240",
  })
  let registeredUser = await User.register(firstUser, "123456");
  let reviewIds = [];
  for(let review of initData.reviews){
    let newReview = new Review(review);
    newReview.author = registeredUser._id;
    reviewIds.push(newReview._id);
    await newReview.save();
  }
  let i = 0;
  for(let listing of initData.listings){
    let newListing = new Listing(listing);
    newListing.reviews = reviewIds.slice(i, i+5);
    newListing.owner = registeredUser._id;
    i+=5;
    await newListing.save();
  }
  console.log("data initialised");
}

initDb();
