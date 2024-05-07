import React, { useState } from "react";
import { ethers } from "ethers";
import JSON from "../../../../backend/artifacts/contracts/Voting.sol/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = JSON.abi;
// import WinnerCard from "../user/WinnerCard";

// import { ethers } from "ethers";
// import JSON from "../../../../backend/artifacts/contracts/Voting.sol/Voting.json";
// const abi = JSON.abi;
// import { contractAddress } from "../../assets/Constant";

// import { connectToWallet } from "../Redux/slices/addressSlice";

const Results = () => {
  const [winner, setWinner] = useState(null);
  const winnerCandidate = async () => {
    try {
      let provider = new ethers.BrowserProvider(window.ethereum);
      let signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const response = await contract.electionWinner();
      console.log(response);
      setWinner(response);
    } catch (error) {
      console.log("Error occured in winner Result!", error);
    }
  };
  const showResult = () => {
    winnerCandidate();
  };

  return (
    <div className="flex flex-row items-center justify-center my-16">
      <div>
        {winner === null ? (
          <button
            className="border-2 rounded-md p-1 pr-1 mt-[10px] bg-blue-400 text-white"
            onClick={showResult}
          >
            Show Winner
          </button>
        ) : (
          <div>Winner Address: {winner}</div>
        )}
      </div>
    </div>
  );
};

export default Results;
