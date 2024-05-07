import React from "react";
import { useSelector } from "react-redux";
import ConnectWallet from "./components/ConnectWallet";
// import { ownerAddress } from "./assets/Constant";
import Design from "./assets/Designer.png";
import AdminOrUser from "./components/AdminOrUser";

function App() {
  const address = useSelector((store) => store.address);

  return address === null ? (
    <div className="h-screen flex flex-col justify-center items-center bg-[#1fadff] m-0 p-0 box-border">
      <ConnectWallet />
      <div className="relative">
        <img
          className="w-[80vw] h-[96vh] blur-sm"
          src={Design}
          alt="Home Image"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#1fadff] font-bold text-8xl [text-shadow:_0_4px_0_rgb(33_255_55_/_100%)]">
          Blockchain Voting System
        </h1>
      </div>
    </div>
  ) : (
    <AdminOrUser />
  );
}

export default App;
