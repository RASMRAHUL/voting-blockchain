import React from "react";
import { ethers } from "ethers";
import JSON from "../../../../backend/artifacts/contracts/Voting.sol/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = JSON.abi;

const ResetVoting = () => {
  const reStartVoting = async () => {
    try {
      let signer = null;
      let provider;
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      await contract.resetVoting();
      console.log("Voting System Resetted!");
    } catch (error) {
      setErrorMessage(error.message);
      console.log("Delete candidate Error", error);
      console.log(errorMessage);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="py-2 mt-5 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700"
        onClick={reStartVoting}
      >
        Restart Voting
      </button>
    </div>
  );
};

export default ResetVoting;
