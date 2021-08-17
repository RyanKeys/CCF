import { useState, useEffect } from "react";
const DeleteListing = (href) => {
  const [listingAddress, setListingAddress] = useState(href.href);
  const [userAddress, setUserAddress] = useState(href.walletAddress);

  async function deleteData() {
    const url =
      "http://" + window.location.hostname + "/crowdfund/" + listingAddress;
    console.log(url);
    const response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({ userAddress }),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = window.location.host;
    window.location.reload();
  }
  useEffect(() => {
    setListingAddress(href.href);
    setUserAddress(href.walletAddress);
  }, [listingAddress === undefined || userAddress === undefined]);
  return (
    <div>
      <button
        onClick={(e) => {
          deleteData().then((res) => {});
        }}
        className="btn btn-secondary"
      >
        Remove Listing
      </button>
      <p className="text-light pt-2">
        Hint: Only you can see this and remove your own listing.
      </p>
    </div>
  );
};

export default DeleteListing;
