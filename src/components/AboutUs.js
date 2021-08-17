import "../App.css";
import BackButton from "./BackButton";
const AboutUs = () => {
  return (
    <div className="text-light m-3">
      <br />
      <br />
      <div className="container btn btn-secondary bg-dark container px-3 py-0 my-5  ">
        <h2 className="text-left mt-4 mb-3">About Us</h2>
        <h4 className="mb-3">Our Mission</h4>
        <p className="text-left">
          CryptoCrowdfund wants to make international donations as affordable
          and safe as possible, we believe the transparency and decentralization
          of the Ethereum blockchain is the simplest way to do so. Using
          Ethereum all transactions are publicly posted to the blockchain. This
          allows for CryptoCrowdfund users to research the assets of anyone
          requesting Crowdfunding without sharing any personal information of
          either party.
        </p>
        <h4 className="mt-5 mb-3">Our Team</h4>
        <p>
          CryptoCrowdfund is developed and maintained by two college students
          from San Francisco.
        </p>
      </div>
      <div>
        <BackButton href={"./"} />
      </div>
    </div>
  );
};
export default AboutUs;
