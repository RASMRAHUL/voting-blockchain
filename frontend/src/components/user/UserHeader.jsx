import React from "react";
import logo from "../../assets/logo.jpeg";
import user from "../../assets/user.png";
import { useSelector } from "react-redux";
function UserHeader() {
  const address = useSelector((store) => store.address);
  return (
    <div className="fixed top-0 z-50 flex justify-between bg-green-100 w-full h-[80px] font-bold">
      <img src={logo} className="w-17 h-16 m-2 rounded-lg"></img>
      <div className="flex justify-center items-center">{address}</div>
      <div className=" flex justify-center items-center">
        Help
        <img src={user} className="px-4 w-17 h-16 m-2 rounded-full" />
      </div>
    </div>
  );
}

export default UserHeader;
