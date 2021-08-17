import "../App.css";
import useMetaMask from "./useEffects/useMetaMask";
import BackButton from "./BackButton";
const GettingStarted = () => {
  const MetaMaskButton = () => {
    useMetaMask().then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="text-light m-3">
      <br />
      <br />

      <div className="container btn btn-secondary bg-dark container px-3 py-0 my-5  ">
        <h2 className="text-left my-5">Getting Started with CryptoCrowdfund</h2>
        <div>
          <h3 className="text-left mx-5 pt-2 pb-4">Step 1: Install MetaMask</h3>
          <a href="https://metamask.io/">
            <div className="btn btn-primary pb-3">
              <h3 className="text-center pt-3">Install MetaMask </h3>
            </div>
          </a>
        </div>
        <div className="container-fluid my-4">
          <h5 className="text-bold p-2 my-4 mx-2 text-center">Why MetaMask?</h5>
          <ul className="mt-4 mx-2">
            <li className="pb-3">
              Having 1 Million users globally, MetaMask is one of the most
              popular Ethereum software wallets.
            </li>
            <li className="pb-3">
              Supports every major crypto (Web3) based website. Ex: Compound,
              Uniswap, OpenSea, Axie Infinity, etc.
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            MetaMaskButton();
          }}
        >
          <h3 className="text-left mx-5 pt-2 pb-4">
            Step 2: Connect MetaMask to CryptoCrowdfund
          </h3>
          <h5 className="text-bold p-2 my-4 mx-2 text-center">
            This should happen automatically when you visit CryptoCrowdfund.
            Click below to reconnect
          </h5>
          <div className="btn btn-primary pb-3">
            <h3 className="text-center pt-3">Connect to CryptoCrowdfund</h3>
          </div>
        </div>
        <div className="container-fluid my-5">
          <p>
            Connecting MetaMask to CryptoCrowdfund allows our site to
            cross-reference transactions on the blockchain. Currently we only
            are asking users for their public wallet addresses.{" "}
          </p>
        </div>
        <div
          onClick={() => {
            MetaMaskButton();
          }}
        >
          <h3 className="text-left mx-5 pt-2 pb-4">
            Step 3: Start using CryptoCrowdfund!
          </h3>
          <h5 className="text-bold p-2 my-4 mx-2 text-center">
            Get started either by viewing the active crowdfunds, or by creating
            your own!
          </h5>
          <a href="http://localhost:3000/new">
            <div className="btn btn-primary pb-3 mb-4 mx-2">
              <h3 className="text-center pt-3">Create a Crowdfund</h3>
            </div>
          </a>
          <a href="http://localhost:3000/crowdfunds">
            <div className="btn btn-secondary pb-3 mb-4 mx-2">
              <h3 className="text-center pt-3">View Crowdfunds</h3>
            </div>
          </a>
        </div>
      </div>
      <div>
        <BackButton href={"./"} />
      </div>
    </div>
  );
};

export default GettingStarted;
