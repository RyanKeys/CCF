import { useState, useEffect } from "react";
import { weiToEth } from "./utils";

export default function UserBalance(metaMask) {
  const [userBalance, setUserBalance] = useState();

  const getUserBalance = async (metaMask, userAddress) => {
    metaMask["provider"].getBalance(userAddress).then((res) => {
      setUserBalance(weiToEth(res._hex));
    });
  };
  useEffect(() => {
    getUserBalance(metaMask.metaMask, metaMask.userAddress);
  });
  return (
    <div>
      <h1>{userBalance}</h1>
    </div>
  );
}
