import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./admin/AdminDashboard";
import UserHome from "./user/UserHome";
import { ownerAddress } from "../assets/Constant";
import { ToastContainer } from "react-toastify";
import UserRegister from "./user/UserRegister";

const AdminOrUser = () => {
  const address = useSelector((store) => store.address);
  return address === ownerAddress ? (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AdminDashboard />
    </>
  ) : (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <UserHome />

      {/* USER GUIDE LINES */}
      {/* <UserRegister /> */}
    </>
  );
};

export default AdminOrUser;
