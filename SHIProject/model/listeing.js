const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingschem = new Schema({
    name:String,
    age: Number,
    location: String
});

const listing = mongoose.model("Listing", listingschem);
module.exports= listingschem;