import React from "react";
import Home from "../assets/voting.jpeg";

const Body = () => {
  return (
    <div className=" flex justify-center items-center bg-green-100 h-[485px] ">
      <img className="w-[50%] h-[90%]" src={Home} alt="Home Image" />
      {/* <h2>This the home page of the website</h2> */}
      {/* <div className="">
        <div
          className="bg-cover bg-no-repeat bg-center h-screen"
          style={{ backgroundImage: `url(${Home})` }}
        ></div>
      </div> */}
    </div>
  );
};

export default Body;
