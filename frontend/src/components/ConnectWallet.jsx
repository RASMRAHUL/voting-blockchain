import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
// import JSON from "../../../backend/artifacts/contracts/Voting.sol/Voting.json";
// import { contractAddress } from "../assets/Constant";
const abi = JSON.abi;
import { setWalletAddress } from "./Redux/slices/addressSlice";

const ConnectWallet = () => {
  const dispatch = useDispatch();
  const address = useSelector((store) => store.address);

  const connectToWallet = async () => {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      dispatch(setWalletAddress(signer.address));
    }
  };
  // const connection = () => {};

  // const getCandidates = async () => {
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //   const contract = new ethers.Contract(contractAddress, abi, provider);
  //   const response = await contract.getAllCandiates();
  //   // console.log(response[0][1]);
  //   console.log(response[1][1]);
  // };

  // const getVotingStatus = async () => {
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //   const contract = new ethers.Contract(contractAddress, abi, provider);
  //   const response = await contract.getVotingStatus();
  //   console.log(response);
  // };

  // const addCandidate = async (name, party) => {
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //   const signer = await provider.getSigner();
  //   const contract = new ethers.Contract(contractAddress, abi, signer);
  //   const response = await contract.addCandidate(name, party);
  //   console.log(response);
  //   //console.log(response._Result);
  // };

  // const connectToWallet = () => {
  //   dispatch(setWalletAddress("Rahul Bhai"));
  // };

  return (
    <div className="flex justify-center items-center bg-green-100 font-bold">
      <div className="flex justify-between">
        <div>
          {address ? (
            <p>Connected to : {address}</p>
          ) : (
            <button onClick={connectToWallet}>Connect Wallet</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
