import metaMaskLogin from "./useMetaMask";

export default async function sendDonation(userAddress, donationAmount) {
  const handleSubmit = async (transactionHash) => {
    const url = window.location.href;
    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
        transactionHash: transactionHash,
        donationAmount: donationAmount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  metaMaskLogin().then((res) => {
    const signer = res["signer"];
    signer.getAddress().then((response) => {
      window.web3.eth.sendTransaction(
        {
          from: response,
          to: userAddress,
          value: window.web3.utils.toWei(donationAmount, "ether"),
        },
        (err, transactionHash) => {
          if (err) {
            console.log(err);
            return err;
          } else {
            handleSubmit(transactionHash).then((res) => {
              console.log(res);
              window.location.reload();
            });
          }

          // Use infura getTransactionByHash method to confirm donation and lower donation goal.
        }
      );
    });
  });
}
