import "../App.css";

const DesktopHome = () => {
  return (
    <div className="container text-light px-4 my-5">
      <br />
      <br />
      <h1 className="display-1 font-weight-bold">CryptoCrowdfund</h1>
      <br />
      <br />
      <h3 className="">Crowdfunding for the 21st Century.</h3>
      <h3>
        Support anyone anywhere using some of the most popular Cryptocurrencies.
      </h3>
      <br />
      <br />
      <h4 className="text-left"></h4>
      <br />
      <div className="container">
        <div className="d-flex justify-content-center">
          <a href="/crowdfunds" className="btn btn-primary btn-block m-3">
            View Crowdfunds
          </a>
          <a href="/new" className="btn btn-secondary btn-block m-3">
            Create a Crowdfund
          </a>
          <a
            href="/getting-started"
            className="btn btn-secondary btn-block m-3"
          >
            Getting Started
          </a>
          <a href="/about-us" className="btn  btn-secondary btn-block m-3">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopHome;
