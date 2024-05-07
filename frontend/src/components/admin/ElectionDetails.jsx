import React from "react";
import CandidateCard from "../user/CandidateCard";
import Polling from "../user/Polling";
import UserRegister from "../user/UserRegister";
import Results from "./ElectionResult";
import { useSelector } from "react-redux";

function ElectionDetails() {
  // const { type, organiser, start_date, end_date } = props.data;
  const address = useSelector((store) => store.address);
  const electionDetail = useSelector((store) => store.electionDetail);
  const { type, organiser, start_date, end_date } = electionDetail;
  return (
    <>
      <div className="flex justify-center font-bold text-xl">
        Election Details
      </div>
      <div> {address}</div>
      <div> {type}</div>
      <div> {organiser}</div>
      <div> {start_date}</div>
      <div> {end_date}</div>
      {/* <CandidateCard />
      <Polling />
      <UserRegister />
      <Results /> */}
    </>
  );
}

export default ElectionDetails;
