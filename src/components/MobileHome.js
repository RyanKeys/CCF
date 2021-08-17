import "../App.css";

const MobileHome = () => {
  return (
    <div className="container text-light px-4 my-5">
      <br />
      <br />
      <h1 className="font-weight-bold text-left">
        Crowdfunding for the 21st Century
      </h1>
      <br />
      <br />
      <h4 className="text-left">
        Support anyone anywhere using some of the most popular Cryptocurrencies.
      </h4>
      <br />
      <a
        href="/crowdfunds"
        className="btn btn-lg btn-primary btn-block py-3 my-3"
      >
        View Crowdfunds
      </a>
      <a href="/new" className="btn btn-lg btn-secondary btn-block py-3 my-3">
        Create a Crowdfund
      </a>
      <a
        href="/getting-started"
        className="btn btn-lg btn-secondary btn-block py-3 my-3"
      >
        Getting Started
      </a>
      <a
        href="/about-us"
        className="btn btn-lg btn-secondary btn-block py-3 my-3"
      >
        About Us
      </a>
    </div>
  );
};

export default MobileHome;
