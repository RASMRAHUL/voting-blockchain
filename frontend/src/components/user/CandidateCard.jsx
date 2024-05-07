import React from "react";
import candidate from "../../assets/candidate.png";
import { ethers } from "ethers";
import JSON from "../../contracts/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = JSON.abi;
function CandidateCard({ address, name, party }) {
  const voteCandidate = async (address) => {
    try {
      let signer = null;
      let provider;
      // if (window.ethereum == null) {
      //   console.log("MetaMask not installed; using read-only defaults");
      //   provider = ethers.getDefaultProvider();
      // } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const response = await contract.vote(address);
      console.log(response);
      // }
    } catch (error) {
      setErrorMessage(error.message);
      console.log("Vote candidate Error", error);
      console.log("Bhag behenchod!!!");
      console.log(errorMessage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    voteCandidate(address);
    console.log("You have voted to: " + name);
    // You can perform any other actions here, like sending the data to a server
  };

  return (
    <form onSubmit={handleSubmit} className="col-span-1">
      <div className="flex flex-col border border-black rounded-xl bg-gray-200">
        <img
          src={candidate}
          alt="candiate image"
          className="h-[200px] rounded-xl"
        ></img>
        <div className="p-2 ">
          <h1 className="font-bold">{name}</h1>
          <p className="font-semibold">{party}</p>
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-white font-bold h-8 hover:bg-blue-500 rounded-lg m-3"
        >
          Vote
        </button>
      </div>
    </form>
  );
}

export default CandidateCard;
