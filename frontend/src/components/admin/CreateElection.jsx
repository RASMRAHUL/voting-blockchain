import React, { useState } from "react";
//import ElectionDetails from "./ElectionDetails";
import { useDispatch } from "react-redux";
import { setElectionDetails } from "../Redux/slices/electionSlice";
import { Link } from "react-router-dom";

function CreateElection() {
  const dispatch = useDispatch();
  const [elecData, setElecData] = useState({
    type: "",
    organiser: "",
    start_date: "",
    end_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElecData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(elecData);
    if (
      elecData.type !== "" &&
      elecData.organiser !== "" &&
      elecData.start_date !== "" &&
      elecData.end_date !== ""
    ) {
      dispatch(setElectionDetails(elecData));
      setElecData({
        type: "",
        organiser: "",
        start_date: "",
        end_date: "",
      });
      setError("Election has been created successfully!");
    } else {
      setError("Please provide valid data for all fields!");
    }
  };
  return error === null ? (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center h-[485px]">
        <div className="border border-black p-4 flex flex-col rounded-lg">
          <div className="font-bold text-2xl mb-4 text-center">
            Election Details
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="type">Type</label>
            <input
              name="type"
              value={elecData.type}
              onChange={handleChange}
              type="text"
              className="border border-black rounded-lg mt-1 px-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="organiser">Organiser</label>
            <input
              name="organiser"
              value={elecData.organiser}
              onChange={handleChange}
              type="text"
              className="border border-black rounded-lg mt-1 px-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="start_date">Start Date</label>
            <input
              name="start_date"
              value={elecData.start_date}
              onChange={handleChange}
              type="date"
              className="border border-black rounded-lg mt-1"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="end_date">End Date</label>
            <input
              name="end_date"
              value={elecData.end_date}
              onChange={handleChange}
              type="date"
              className="border border-black rounded-lg mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-300 hover:bg-blue-500 rounded-xl h-8 w-[300px]"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  ) : (
    <>
      <div className="flex justify-center pt-[120px] font-bold text-xl">
        {error}
      </div>
      <div className=" w-48 ml-[50%] flex justify-center bg-green-100  text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold rounded-lg shadow-md">
        {/* <Link to="/" className="text-center">
          Home
        </Link> */}
      </div>
    </>
  );
}

export default CreateElection;
