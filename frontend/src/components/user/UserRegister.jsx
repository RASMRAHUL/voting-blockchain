// import { useState } from "react";

// const UserRegister = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     voterId: "",
//     aadhar: "",
//     gender: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // You can perform any other actions here, like sending the data to a server
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="bg-green-100 w-1/2 p-10 ml-[35%] rounded-md">
//         {/* <div className="flex flex-col items-center justify-center bg-teal-300  p-10 mx-auto h-screen border border-teal-600 rounded-md"> */}
//         <h1 className="text-2xl font-bold p-4">USER REGISTRATION FORM</h1>
//         <div className="">
//           <div className="font-semibold my-2">Full Name</div>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             type="text"
//             className="border border-black rounded-lg w-[250px] h-8"
//           ></input>
//         </div>
//         <div>
//           <div className="font-semibold my-2">Voter Id</div>
//           <input
//             name="voterId"
//             value={formData.voterId}
//             onChange={handleChange}
//             type="text"
//             className="border border-black rounded-lg w-[250px] h-8"
//           ></input>
//         </div>
//         <div>
//           <div className="font-semibold my-2">Aadhar Number</div>
//           <input
//             name="aadhar"
//             value={formData.aadhar}
//             onChange={handleChange}
//             type="text"
//             className="border border-black rounded-lg w-[250px] h-8"
//           ></input>
//         </div>
//         <div>
//           <div className="font-semibold my-2">Gender</div>
//           <select
//             className="border border-black rounded-lg w-[250px] h-8"
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//           >
//             <option value="select">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <div>
//           <div className="font-semibold my-2">Phone Number</div>
//           <input
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             type="text"
//             className="border border-black rounded-lg w-[250px] h-8"
//           ></input>
//         </div>
//         <div className="my-2">
//           <input className="mx-2 " type="checkbox" />
//           <span className="size-5">I agreed to the terms and conditions</span>
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="bg-sky-400 border px-4 my-2 rounded-lg w-[250px] h-8 font-semibold border-slate-700"
//           >
//             REGISTER
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default UserRegister;

import React from "react";
import { useSelector } from "react-redux";
import UserHeader from "./UserHeader";
import { Link } from "react-router-dom";

const UserRegister = () => {
  // const address = useSelector((store) => store.address);
  return (
    <div className=" ">
      <UserHeader />
      <div className="font-semibold p-2 text-center mt-[80px]"></div>
      <div className="flex items-center flex-col">
        <h1 className="  p-2 font-bold text-2xl">User Manual</h1>
        <p>Kindly follow the below guidlines before vote.</p>
      </div>
      <div className="flex flex-col items-center mx-auto border border-sky-300 p-4 w-3/4  text-left bg-cyan-100">
        <div className="p-2">
          1. Registration: Ensure that you are properly registered as a voter in
          the decentralized voting system. Follow the registration process
          provided by the system administrator or election authorities.
        </div>
        <div className="p-2">
          2. Identity Verification: Verify your identity using the designated
          method provided by the system. This may involve presenting
          government-issued identification, biometric verification, or other
          authentication measures.
        </div>
        <div className="p-2">
          3. Accessing the Voting Interface: Log in to the voting interface
          using your registered credentials. Ensure that you are accessing the
          official voting platform provided by the decentralized voting system.
        </div>
        <div className="p-2">
          4. Making Your Selections: Carefully select your preferred candidates
          or options on the voting interface. Double-check your selections to
          ensure accuracy before proceeding.
        </div>
        <div className="p-2">
          5. Submitting Your Vote: Once you have made your selections, follow
          the prompts on the voting interface to submit your vote securely.
          Verify that your vote has been recorded correctly before finalizing
          the submission.
        </div>
        <div className="p-2">
          6. Confidentiality: Maintain the confidentiality of your voting
          choices. Do not share your login credentials or voting selections with
          others to ensure the integrity of the voting process.
        </div>
        <div className="p-2">
          7. Avoiding Coercion: Refrain from engaging in or being subject to any
          form of coercion or undue influence during the voting process. Make
          your voting decisions independently and based on your own preferences.
        </div>
        <div className="p-2">
          8. Respecting Voting Deadlines: Adhere to any deadlines specified for
          casting your vote. Ensure that you submit your vote within the
          designated timeframe to have it counted in the election results.
        </div>
        <div className="p-2">
          10 . Review Candidate Information: Familiarize yourself with the
          candidates or options available for voting. Review their profiles,
          platforms, and any other relevant information provided by the system.
        </div>
        <div className="p-2">
          11. Verifying Your Vote: After submitting your vote, verify that it
          has been recorded accurately on the blockchain. Use any verification
          mechanisms provided by the system to ensure the integrity of the
          voting process.
        </div>
        <div className="p-2">
          12. Participating Responsibly: Participate in the voting process
          responsibly and in accordance with the rules and guidelines
          established by the decentralized voting system. Help promote
          transparency, integrity, and fairness in the electoral process.
        </div>
      </div>
      {/* <div className="flex justify-center">
        <Link to="/user-home">
          <div className="py-2 mt-5 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700">
            Proceed Voting
          </div>
        </Link>
      </div> */}

      <Link to="/winner">
        <li className="py-4 text-green-800 bg-blend-hard-light hover:bg-green-400 hover:text-white font-bold px-4 rounded-lg shadow-md">
          Election Result
        </li>
      </Link>
    </div>
  );
};

export default UserRegister;
