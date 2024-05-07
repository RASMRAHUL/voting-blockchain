import React, { useState } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import showSuccessNotification from "./SuccessNotification";
import showErrorNotification from "./FailureNotification";

import JSON from "../../../../backend/artifacts/contracts/Voting.sol/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = JSON.abi;

function DeleteCandidate() {
  const [candData, setCandData] = useState({
    address: "",
  });

  // const [errorMessage, setErrorMessage] = useState(null);

  const delCandidate = async ({ address }) => {
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
      await contract.deleteOneCandidate(address);
      showSuccessNotification("Candidate Deleted Successfully!");
    } catch (error) {
      // setErrorMessage(error.message);
      // console.log("Delete candidate Error", error);
      // console.log(errorMessage);
      // showErrorNotification("Candidate is Not Present in the list!");
      showErrorNotification(error && "Candidate is not present!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    delCandidate(candData);
    // console.log(candData);
    setCandData({
      address: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center h-auto my-10 ">
        <div className="border border-black p-4 flex flex-col rounded-lg">
          <div className="text-center font-bold text-2xl mb-4">
            DELETE CANDIDATE
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="name">candidate wallet address</label>
            <input
              name="address"
              value={candData.address}
              onChange={handleChange}
              type="text"
              className="border border-black rounded-lg mt-1 px-2"
            />
          </div>

          <button
            type="submit"
            className="bg-red-400 hover:bg-red-500 rounded-xl h-8 w-[380px] my-10"
          >
            DELETE CANDIDATE
          </button>
        </div>
      </div>
    </form>
  );
}

export default DeleteCandidate;
