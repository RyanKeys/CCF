import { useState, useEffect } from "react";
import DeleteListing from "./DeleteListing";
import BackButton from "../BackButton";

import "../../App.css";
import sendDonation from "../useEffects/sendDonation";
export default function ListingDetail(walletAddress) {
  const [userAddress, setUserAddress] = useState(walletAddress);
  const [listing, setListing] = useState();
  const [listingAddress, setListingAddress] = useState();
  const [donationAmount, setDonationAmount] = useState();

  useEffect(() => {
    setUserAddress(walletAddress.walletAddress);
    let href = window.location.href;
    href = href.split("/");
    setListingAddress(href[href.length - 1]);
    async function postData(url = window.location.href) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ url }),
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData().then((res) => {
      setListing(res);
    });
  }, [listing === undefined || userAddress === undefined]);
  return (
    <div className="container text-light my-5 py-5">
      <div>
        {listing && (
          <div className="card bg-dark btn btn-secondary bg-transparent mb-3">
            <div className="card-header d-flex justify-content-between">
              <h3 className="card-title">{listing.name}</h3>
            </div>
            <h5 className="mx-4">Donation Goal: {listing.goalAmount} ETH</h5>
            <div className="card-body">
              <h5 className="mb-5" style={{ overflow: "hidden" }}>
                Recipient {listingAddress}
              </h5>
              <p className="text-left">Description:</p>
              <p className="text-left">{listing.description}</p>
            </div>
            <div className="container">
              {userAddress !== listingAddress && (
                <div>
                  <div className="d-flex justify-content-center form-group row">
                    <div className="col-xs-2">
                      <div className="input-group mb-3">
                        <input
                          type="float"
                          className="text-light form-control bg-transparent border-secondary"
                          onChange={(e) => setDonationAmount(e.target.value)}
                        />
                        <span
                          className="btn-primary text-light rounded-right rounded-0  input-group-text"
                          id="basic-addon2"
                        >
                          ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      sendDonation(listingAddress, donationAmount);
                    }}
                    className="btn btn-primary mb-3"
                  >
                    Donate
                  </button>
                </div>
              )}

              {userAddress === listingAddress && (
                <div>
                  {
                    <DeleteListing
                      href={listingAddress}
                      walletAddress={userAddress}
                    />
                  }
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <BackButton href={"../crowdfunds"} />
    </div>
  );
}
