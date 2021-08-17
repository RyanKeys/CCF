import { useState, useEffect } from "react";
import metaMaskLogin from "./components/useEffects/useMetaMask";
import GettingStarted from "./components/GettingStarted";
import ListingDetail from "./components/Listings/ListingDetail";
import NewListing from "./components/Listings/NewListing";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AllListings from "./components/Listings/AllListings";
import AboutUs from "./components/AboutUs";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

export default function App() {
  const [userAddress, setUserAddress] = useState();

  useEffect(() => {
    metaMaskLogin().then((res) => {
      if (res !== undefined) {
        const sig = res["signer"];
        sig.getAddress().then((res) => {
          setUserAddress(res);
        });
      }
    });
  }, [userAddress === undefined]);
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/new"
            component={() => <NewListing walletAddress={userAddress} />}
          />
          <Route
            exact
            path="/crowdfund/:walletAddress"
            component={() => <ListingDetail walletAddress={userAddress} />}
          />
          <Route exact path="/getting-started" component={GettingStarted} />
          <Route exact path="/crowdfunds" component={AllListings}></Route>
          <Route exact path="/about-us" component={AboutUs}></Route>
        </div>
      </Switch>
    </Router>
  );
}
