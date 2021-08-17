import { useState, useEffect } from "react";
const Listing = (props) => {
  const [listing, setListing] = useState();
  const [href, setHref] = useState();
  const [etherscan, setEtherscan] = useState();

  useEffect(() => {
    setListing(props["props"]);
    console.log(listing);
    if (listing !== undefined) {
      setHref("crowdfund/" + listing.userAddress);
      setEtherscan("https://etherscan.io/address/" + listing.userAddress);
    }
  }, [listing === undefined]);

  return (
    <div>
      {listing && (
        <a
          href={href}
          className="card bg-dark btn btn-secondary bg-transparent mb-3"
        >
          <div className="card-header d-flex justify-content-between">
            <h3 className="card-title">{listing.name}</h3>
          </div>
          <h5 className="mx-4">Donation Goal: {listing.goalAmount} ETH</h5>
          <div className="card-body">
            <a href={etherscan}>
              <h5>Recipient: {listing.userAddress}</h5>
            </a>
            <br />
            <p className="text-left">Description:</p>
            <p className="text-left">{listing.description}</p>
            <a href={href} className="btn btn-primary">
              Read More
            </a>
          </div>
        </a>
      )}
    </div>
  );
};

export default Listing;
