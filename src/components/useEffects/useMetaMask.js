const metaMaskLogin = async () => {
  if (window.ethereum) {
    window.web3 = new window.Web3(window.ethereum);
    try {
      // ask user for permission
      window.ethereum.enable();
      window.provider = new window.ethers.providers.Web3Provider(
        window.ethereum
      );
      // The Metamask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      window.signer = window.provider.getSigner();
      return { provider: window.provider, signer: window.signer };
      // user approved permission
    } catch (error) {
      // user rejected permission
      console.log("user rejected permission");
    } finally {
    }
  } else if (window.web3) {
    window.web3 = new window.Web3(window.web3.currentProvider);
    // no need to ask for permission
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

export default metaMaskLogin;
