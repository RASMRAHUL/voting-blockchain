import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function AdminSideBar() {
  const address = useSelector((store) => store.address);
  return address !== null ? (
    <div className="fixed top-0 flex justify-around items-center float-left bg-green-100 w-[220px] h-full pt-[70px] font-bold">
      <ul className=" p-4 m-4 bg-blend-hard-light shadow-md">
        <Link to="/create-election">
          <li className="py-4 text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold px-4 rounded-lg shadow-md">
            Create Election
          </li>
        </Link>
        <Link to="/election-details">
          <li className="py-4 text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold px-4 rounded-lg shadow-md">
            Election Details
          </li>
        </Link>
        <Link to="/candidate-details">
          <li className="py-4 text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold px-4 rounded-lg shadow-md">
            Candidate Details
          </li>
        </Link>
        <Link to="/voter-details">
          <li className="py-4 text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold px-4 rounded-lg shadow-md">
            Voter Details
          </li>
        </Link>

        <Link to="/start-voting">
          <li className="py-4 text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold px-4 rounded-lg shadow-md">
            Start Voting
          </li>
        </Link>
        <Link to="/reset-voting">
          <li className="py-4 text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold px-4 rounded-lg shadow-md">
            Restart Voting
          </li>
        </Link>
        <Link to="/winner">
          <li className="py-4 text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold px-4 rounded-lg shadow-md">
            Election Result
          </li>
        </Link>
      </ul>
    </div>
  ) : null;
}

export default AdminSideBar;
