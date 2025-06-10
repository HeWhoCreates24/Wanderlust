const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: {
      filename: {
        type: String,
      },
      url: {
        type: String
      },
    },
    default: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.vfXY3J1CNQVF9rat2-mGFAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    set: (v) =>
      v.url === ""
        ? {
            filename: "listingimage",
            url: "https://th.bing.com/th/id/OIP.vfXY3J1CNQVF9rat2-mGFAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          }
        : v,
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Why are you renting for free? contact me personally!"]
  },
  location: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  reviews:[
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  coordinates: {
    type: {
      default:{
        type: Boolean
      },
      edited:{
        type: Boolean
      },
      latitude:{
        type: Number
      },
      longitude:{
        type: Number
      },
    }
  },
  category:{
    type: String,
    enum: ["trending", "rooms", "iconic-cities", "mountains", "castles", "amazing-pools", "camping", "farms", "arctic"],
    default: "trending"
  }
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing){
    await Review.deleteMany({_id: {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
