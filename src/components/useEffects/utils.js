export const weiToEth = (hexBalance) => {
  return parseInt(hexBalance).toString(10) * Math.pow(10, -18);
};

export const getUserAddress = (metaMask) => {
  if (metaMask !== undefined) {
    const signer = metaMask["signer"];
    if (signer !== undefined) {
      signer.getAddress().then((res) => {
        return res;
      });
    }
  }
  return "METAMASK UNDEFINED";
};
