const mongoose = require("mongoose");
const ListingSchema = new mongoose.Schema({
  userAddress: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  goalAmount: { type: Number, required: true },
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
