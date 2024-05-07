import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { ethers } from "ethers";
import JSON from "../../contracts/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = JSON.abi;
import VoterCard from "./VoterCard";

const VoterDetails = () => {
  const [voters, setVoters] = useState([]);
  const getVoters = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const response = Object.values(await contract.getVoters());
    // console.log(response);

    setVoters(response);
  };
  return (
    <>
      <div className="flex justify-center gap-4 px-4 mt-2">
        {/* <Link
          to="/add-voter"
          className="py-2 px-5 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
        >
          add voter
        </Link> */}
        <div className="flex justify-center px-2 m-2">
          {voters.length == 0 && (
            <button
              className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 "
              onClick={getVoters}
            >
              Get Voters
            </button>
          )}
        </div>
      </div>

      <VoterCard voters={voters} />
    </>
  );
};

export default VoterDetails;
