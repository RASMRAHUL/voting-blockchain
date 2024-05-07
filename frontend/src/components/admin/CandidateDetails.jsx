import React, { useState } from "react";
import { Link } from "react-router-dom";
// import AddCandidate from "./AddCandidate";
import { ethers } from "ethers";
import json_ from "../../contracts/Voting.json";
import { contractAddress } from "../../assets/Constant";
import Polling from "../user/Polling";
// import CandidateCard from "../user/CandidateCard";
const abi = json_.abi;

function CandidateDetails() {
  const [candidates, setCandidates] = useState([]);
  const getCandidates = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const response = await contract.getAllCandiates();

    setCandidates(response);
  };

  return (
    <>
      <div className="flex justify-center gap-4">
        <Link
          to="/add-candidate"
          className="py-2 px-5 bg-green-500 text-white text-center font-semibold rounded-full shadow-md hover:bg-green-700"
        >
          add candidate
        </Link>
        <Link
          to="/delete-candidate"
          className="py-2 px-5 bg-red-500 text-white text-center font-semibold rounded-full shadow-md hover:bg-red-700 "
        >
          delete candidate
        </Link>
      </div>

      <div className="flex justify-center px-4 m-2">
        {candidates.length == 0 && (
          <button
            className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 "
            onClick={getCandidates}
          >
            Get Candidates
          </button>
        )}
      </div>
      <div className="px-2 mt-2">
        {candidates.length > 0 && <Polling candidates={candidates} />}
        {/* {candidates.length > 0 && <Polling name={candidates} />} */}
      </div>
      {/* {candidates.length > 0 && (
        <CandidateCard name={candidates[0][1]} party={candidates[0][2]} />
      )} */}
    </>
  );
}

export default CandidateDetails;
