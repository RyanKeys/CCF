import { useState, useEffect } from "react";
import BackButton from "../BackButton";

import Listing from "./Listing";
const AllListings = () => {
  const [listings, setListings] = useState();
  // Example POST method implementation:

  useEffect(() => {
    const url = "http://" + window.location.hostname + "/crowdfunds";
    console.log(url);
    async function postData(url, data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData().then((res) => {
      setListings(res);
      console.log(listings);
    });
  }, [listings === undefined]);

  return (
    <div className="container text-light my-5 py-5">
      <h1 className="p-5">Active Crowdfunds</h1>
      {listings && listings.map((listing) => <Listing props={listing} />)}
      <BackButton href={"./"} />
    </div>
  );
};
export default AllListings;
