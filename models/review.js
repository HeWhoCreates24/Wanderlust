const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment:{
        type: String,
        required: true,
        max: [1000, "Try writing books instead of reviews!"]
    },
    rating:{
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Review", reviewSchema);