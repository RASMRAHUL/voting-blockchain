import React, { useEffect, useState } from "react";
// import { setWinnerAddress } from "../Redux/slices/winnerAddress";
import { ethers } from "ethers";
import JSON from "../../../../backend/artifacts/contracts/Voting.sol/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = JSON.abi;

const StartVoting = () => {
  const [votingStatus, setVotingStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fn = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const status = await contract.getVotingStatus();
      setVotingStatus(status);
    };
    fn();
  }, []);

  const startVotes = async () => {
    try {
      let signer = null;
      let provider;
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const res = await contract.startVoting();
      // console.log(res);

      const status = await contract.getVotingStatus();
      setVotingStatus(status);
    } catch (error) {
      setErrorMessage(error.message);
      console.log("Error occured during Start Voting", error);
      console.log(errorMessage);
    }
  };

  const stopVotes = async () => {
    try {
      let signer = null;
      let provider;
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const res = await contract.stopVoting();
      console.log(res);
      const status = await contract.getVotingStatus();
      // console.log(status);
      setVotingStatus(status);
    } catch (error) {
      setErrorMessage(error.message);
      console.log("Error occured during Stop Voting", error);
      console.log(errorMessage);
    }
  };
  const changeVoting = () => {
    if (!votingStatus) startVotes();
    else stopVotes();
    // setVotingStatus(!votingStatus);
  };

  return (
    <div className=" flex justify-center mt-[100px]">
      <div className="flex ">
        <button
          className="border-2 rounded-md p-1 pr-1 bg-blue-400 text-white"
          onClick={changeVoting}
        >
          {votingStatus === false ? "Start Voting" : "Stop Voting"}
        </button>
      </div>
    </div>
  );
};

export default StartVoting;
