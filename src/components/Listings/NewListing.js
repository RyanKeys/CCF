import React, { useState, useEffect } from "react";
import BackButton from "../BackButton";
export default function NewListing(walletAddress) {
  const [name, setName] = useState();
  const [goalAmount, setGoalAmount] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async (e) => {
    const userAddress = walletAddress.walletAddress;
    const requestBody = { userAddress, name, description, goalAmount };
    e.preventDefault();
    const url = window.location.href;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((data) => {
      console.log(data);
    });
    window.location.hostname = url + "/crowdfunds";
  };

  return (
    <div className="text-light mt-5 pt-5">
      <div className="container btn btn-secondary bg-dark">
        <br />
        <h1>New Crowdfund</h1>
        <form onSubmit={handleSubmit} className="mx-5 my-2">
          <div class="d-flex justify-content-around">
            <div className="mx-2">
              <h5 className="text-bold">Crowdfund Name</h5>
              <div className="d-flex justify-content-center">
                <input
                  className="text-light form-control bg-transparent border-secondary"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="mx-2">
              <h5 className="text-bold">Goal Amount</h5>
              <div className="input-group mb-3">
                <input
                  type="float"
                  className="text-light form-control bg-transparent border-secondary"
                  onChange={(e) => setGoalAmount(e.target.value)}
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
          <br />
          <h5 className="text-bold">Description</h5>
          <div className="d-flex  justify-content-center">
            <textarea
              className="bg-transparent border-secondary text-light"
              rows="10"
              cols="500"
              id="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div>
            <br />

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mt-3">
        <BackButton href={"./"} />
      </div>
    </div>
  );
}
