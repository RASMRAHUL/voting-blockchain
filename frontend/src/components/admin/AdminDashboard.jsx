import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";
import CreateElection from "./CreateElection";
import ElectionDetails from "./ElectionDetails";
import CandidateDetails from "./CandidateDetails";
import AddCandidate from "./AddCandidate";
import DeleteCandidate from "./DeleteCandidate";
import StartVoting from "./StartVoting";
import ElectionResult from "./ElectionResult";
import HelpDesk from "./HelpDesk";
import VoterDetails from "./VoterDetails";
import AddVoter from "./AddVoter";
import Body from "../Body";
import { ownerAddress } from "../../assets/Constant";
import { useSelector } from "react-redux";
import AdminOrUser from "../AdminOrUser";
import ConnectWallet from "../ConnectWallet";
import ResetVoting from "./ResetVoting";
import UserHome from "../user/UserHome";
function AdminDashboard() {
  const address = useSelector((store) => store.address);
  return (
    <div>
      <Router>
        {/* <ConnectWallet /> */}
        <AdminHeader />
        <AdminSideBar />
        <div className="ml-[220px] mt-[80px] mb-6">
          <Routes>
            <Route path="/create-election" element={<CreateElection />} />
            <Route path="/" element={<Body />} />
            <Route path="/election-details" element={<ElectionDetails />} />
            <Route path="/candidate-details" element={<CandidateDetails />} />
            <Route path="/start-voting" element={<StartVoting />} />
            <Route path="/reset-voting" element={<ResetVoting />} />
            <Route path="/add-candidate" element={<AddCandidate />} />
            <Route path="/delete-candidate" element={<DeleteCandidate />} />
            <Route path="/winner" element={<ElectionResult />} />
            <Route path="/help" element={<HelpDesk />} />
            <Route path="/voter-details" element={<VoterDetails />} />
            {/* <Route path="/add-voter" element={<AddVoter />} /> */}
            <Route path="/user-home" element={<UserHome />} />
            {/* <Route path="/connection" element={<Proceed />} /> */}
          </Routes>
          <div className="bg-green-100 text-center fixed bottom-0 right-0 left-0">
            made with ❤️ in noida
          </div>
        </div>
      </Router>
    </div>
  );

  //   <Router>
  //     <AdminHeader />
  //     <Routes>
  //       <Route path="/help" element={<HelpDesk />} />
  //       <Route path="/" element={<Body />} />
  //     </Routes>
  //     <Body />
  //   </Router>
  // );
}

export default AdminDashboard;
