const axios = require("axios");

module.exports = {
  ensureOnlyOneListing: (req, res, next) => {
    const Listing = require("../models/Listing");
    Listing.findOne({ userAddress: req.body.userAddress }).then((listing) => {
      if (!listing) {
        return next();
      } else {
        console.log("ERR: Only allowed one listing.");
        return "ERR: Only allowed one listing.";
      }
    });
  },
  ensureUserOwnsListing: (req, res, next) => {
    const Listing = require("../models/Listing");
    Listing.findOne({ userAddress: req.body.userAddress }).then((listing) => {
      if (listing) {
        console.log(
          `Confirmed ${req.params.userAddress} == ${req.body.userAddress}`
        );
        return next();
      } else {
        console.log("ERR: Not your listing");
        return "ERR: Not your listing";
      }
    });
  },
  
};
