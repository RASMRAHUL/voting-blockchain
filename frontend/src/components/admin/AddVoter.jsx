import React, { useState } from "react";
import { ethers } from "ethers";
import JSON from "../../../../backend/artifacts/contracts/Voting.sol/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = JSON.abi;

// extra components by the time now !!!!!!!

function AddVoter() {
  const [candData, setCandData] = useState({
    address: "",
    name: "",
  });

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
      const response = await contract.addVoter(name, address);
      console.log(response);
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
    addVoterForm(candData);
    // console.log(candData);
    setCandData({
      address: "",
      name: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <div className='border border-black'>
        <div className='font-bold text-2xl p-4'>ADD CANDIDATE</div>
        <div className='flex justify-center mb-4'>
            <div>Name</div>
            <input type='text' className='border border-black rounded-lg ml-4'/>
        </div>
        <div className='flex justify-center mb-4'>
            <div>Party</div>
            <input type='text' className='border border-black rounded-lg ml-4'/>
        </div>
        <div className='flex justify-evenly mb-4'>
            <div>Age </div>
            <input type='text' className='border border-black rounded-lg ml-4'/>
        </div>
        <div className='flex justify-center mb-4'>
            <div>Experience</div>
            <input type='text' className='border border-black rounded-lg ml-4'/>
        </div>
        <button type='submit' className='bg-blue-300 hover:bg-blue-500 rounded-xl h-8 w-[300px]'>ADD CANDIDATE</button>
    </div> */}
      <div className="flex justify-center h-auto my-10 ">
        <div className="border border-black p-4 flex flex-col rounded-lg">
          <div className="text-center font-bold text-2xl mb-4">ADD VOTER</div>

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

          <div className="flex flex-col mb-4">
            <label htmlFor="name">Voter Address</label>
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
            className="bg-blue-300 hover:bg-blue-500 rounded-xl h-8 w-[380px] my-10"
          >
            ADD CANDIDATE
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddVoter;
