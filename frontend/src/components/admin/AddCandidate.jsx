import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
// import json_ from "../../../../backend/artifacts/contracts/Voting.sol/Voting.json";
import json_ from "../../contracts/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = json_.abi;

import showSuccessNotification from "./SuccessNotification";
import showErrorNotification from "./FailureNotification";

function AddCandidate() {
  const [candData, setCandData] = useState({
    address: "",
    name: "",
    party: "",
  });

  const [done, setDone] = useState();
  useEffect(() => {
    async function setup() {
      let provider = new ethers.BrowserProvider(window.ethereum);
      let signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      setDone(contract);
    }
    setup();
  }, []);

  const addCandidateForm = async (candData) => {
    const { address, name, party } = candData;
    try {
      // let provider = new ethers.BrowserProvider(window.ethereum);
      // let signer = await provider.getSigner();
      // const contract = new ethers.Contract(contractAddress, abi, signer);

      const response = await done.addCandidate(address, name, party);
      console.log(response);
      showSuccessNotification("Candidate Added Successfully!");

      // }
    } catch (e) {
      // setErrorMessage(error.message);
      const res = await JSON.parse(JSON.stringify(e));
      console.log(res.reason);
      showErrorNotification(res.reason);
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
    // console.log(candData);
    addCandidateForm(candData);
    setCandData({
      address: "",
      name: "",
      party: "",
    });
    // notify();
  };

  // const showSuccessNotification = (message) => {
  //   toast.success(message, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  // };

  // const showErrorNotification = (message) => {
  //   toast.error(message, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  // };

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
          <div className="text-center font-bold text-2xl mb-4">
            ADD CANDIDATE
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="name">Candidate Address</label>
            <input
              name="address"
              value={candData.address}
              onChange={handleChange}
              type="text"
              className="border border-black rounded-lg mt-1 px-2"
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
          <div className="flex flex-col mb-4">
            <label htmlFor="party">Party</label>
            <input
              name="party"
              value={candData.party}
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

export default AddCandidate;
