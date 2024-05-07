import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import UserHeader from "./UserHeader";
// import AddVoter from "../admin/AddVoter";
import JSON from "../../../../backend/artifacts/contracts/Voting.sol/Voting.json";
import { contractAddress } from "../../assets/Constant";
// import CandidateCard from "./CandidateCard";
import Polling from "./Polling";
const abi = JSON.abi;

const UserHome = () => {
  const address = useSelector((store) => store.address);
  const [candidates, setCandidates] = useState([]);
  const getCandidates = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    // const response = await contract.getAllCandiates();
    const response = Object.values(await contract.getAllCandiates());
    // const response1 = await contract.getVoters();
    // console.log(Object.values(response1));

    // console.log(response1.map((voter) => voter.map((v) => v)));

    setCandidates(response);
  };

  // State to track whether the form is open or not
  const [isOpen, setIsOpen] = useState(false);

  const [candData, setCandData] = useState({
    address: address,
    name: "",
  });

  // Function to handle button click and toggle the form's visibility
  const registerVoter = () => {
    setIsOpen(!isOpen); // Toggle the value of isOpen
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addVoterForm = async (candData) => {
    const { address, name } = candData;
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const response = await contract.voterRegistration(name, address);
      // console.log(response);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVoterForm(candData);
    // console.log(candData);
    setCandData({
      address: "",
      name: "",
    });
  };

  return (
    <div className="bg-green-100 w-full min-h-[100vh]">
      <UserHeader />

      <div className=" flex justify-center gap-10  pt-5 mt-[80px]  ">
        {!isOpen && (
          <button
            onClick={registerVoter}
            className="py-2 px-5  w-[200px] bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700"
          >
            Register Voter
          </button>
        )}

        {isOpen && (
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center h-auto my-10 ">
              <div className="border border-black p-4 flex flex-col rounded-lg">
                <div className="text-center font-bold text-2xl mb-4">
                  ADD VOTER
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="name">Voter Address</label>
                  <input
                    name="address"
                    value={candData.address}
                    onChange={handleChange}
                    type="text"
                    className="border border-black rounded-lg mt-1 px-2"
                    readOnly
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    value={candData.name}
                    onChange={handleChange}
                    type="text"
                    className="border border-black rounded-lg mt-1 px-2"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-300 hover:bg-blue-500 rounded-xl h-8 w-[380px] my-10"
                >
                  Register Voter
                </button>
              </div>
            </div>
            <button
              className="bg-blue-300 hover:bg-blue-500 rounded-xl h-8 w-[80px] my-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              Back
            </button>
          </form>
        )}
      </div>

      <div className="flex justify-center gap-10  pt-5">
        <div>
          {candidates.length === 0 && (
            <button
              className="py-2 px-5 ml-10 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 w-[200px]"
              onClick={getCandidates}
            >
              Get Candidates
            </button>
          )}
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
          {candidates.length > 0 && <Polling candidates={candidates} />}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
