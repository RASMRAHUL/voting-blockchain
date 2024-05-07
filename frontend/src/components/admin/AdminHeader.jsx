import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import blog from "../../assets/blog.jpg";
import user from "../../assets/user.png";
import { ethers } from "ethers";
// import Home from "../../assets/voting.jpeg";
import json_ from "../../contracts/Voting.json";
const abi = json_.abi;
import { contractAddress } from "../../assets/Constant";
import ConnectWallet from "../ConnectWallet";
// const contractAddress = "0x4ce8948f3349186508CBFB34e53fAb5a9B215e0C";

// import { setWalletAddress } from "../Redux/slices/addressSlice";

function AdminHeader() {
  const dispatch = useDispatch();

  const connectToWallet = async () => {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      setAddress(signer.address);
    }
  };

  const getCandidates = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const response = await contract.getAllCandiates();
    console.log(response[0][1]);
  };

  const getVotingStatus = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const response = await contract.getVotingStatus();
    console.log(response);
  };

  const addCandidate = async (candidateAddress, name, party) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const response = await contract.addCandidate(candidateAddress, name, party);
    console.log(response);
    //console.log(response._Result);
  };

  return (
    <div className="fixed top-0 z-50 flex justify-between bg-green-100 w-full h-[80px] font-bold">
      <Link to="/">
        <img src={logo} className="w-17 h-16 m-2 rounded-lg"></img>
      </Link>
      <div className="flex justify-center items-center">
        <ConnectWallet />
      </div>
      <div className=" flex justify-center items-center">
        <Link to="/help" className="px-4 ">
          Help
        </Link>

        {/* <div className="px-4 border-solid border-2 border-black">
          {address ? (
            <p>Connected to : {address}</p>
          ) : (
            <button onClick={connectToWallet}>Connect Wallet</button>
          )}
        </div> */}
        {/* <div>
          <button onClick={getVotingStatus}>Add Candidates</button> 
          <button
            onClick={() =>
              addCandidate(
                "0x672C37Ea3891B10fB1263Cc2c1D16d542fEa1F1a",
                "Rahul",
                "AAP"
              )
            }
          >
            Add Candidates
          </button>
          <button onClick={fixAddress}>Set Address</button>
        </div> */}
        <img src={user} className="px-4 w-17 h-16 m-2 rounded-full" />
      </div>
    </div>
  );
}

export default AdminHeader;
