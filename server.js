const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const web3 = require("web3");
const path = require("path");
require("dotenv").config();
const {
  ensureOnlyOneListing,
  ensureUserOwnsListing,
} = require("./middleware/middleware");
const app = express();

// TURN OFF IN PRODUCTION
const allowedOrigins = ["http://localhost:3000", "http://localhost:5000"];
const cors = require("cors");
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.json());

// Connect to MongoDB
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Listing = require("./models/Listing");
const port = 5000;
app.use("/static", express.static("public"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/new", ensureOnlyOneListing, (req, res) => {
  const { userAddress, name, description, goalAmount } = req.body;
  const newListing = new Listing({
    userAddress,
    name,
    description,
    goalAmount,
  });
  newListing.save().then((listing) => {
    res.send(listing);
  });
});

app.post("/crowdfund/:userAddress", (req, res) => {
  const userAddress = req.params.userAddress;
  Listing.findOne({ userAddress: userAddress }, (err, listing) => {
    if (err) {
      console.log(err);
    } else {
      res.send(listing);
    }
  });
});

app.put("/crowdfund/:userAddress", (req, res) => {
  axios
    .post(
      `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      {
        jsonrpc: "2.0",
        method: "eth_getTransactionByHash",
        params: [req.body.transactionHash],
        id: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((x) => {
      if (x.data.result === null) {
      } else {
        const userAddress = req.params.userAddress;
        Listing.findOne({ userAddress: userAddress }, (err, listing) => {
          if (err) {
            console.log(err);
          } else {
            listing.goalAmount -= web3.utils.fromWei(x.data.result.value);
            listing.save();
            res.send(listing);
          }
        });
      }
    });
});

app.delete("/crowdfund/:userAddress", ensureUserOwnsListing, (req, res) => {
  const userAddress = req.body.userAddress;
  Listing.findOne({ userAddress: userAddress }, (err, listing) => {
    if (err) {
      console.log(err);
    } else {
      listing.deleteOne({ userAddress: userAddress });
    }
  });
});

app.post("/crowdfunds", (req, res) => {
  Listing.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(port);
console.log(`Server started on port ${port}!`);
