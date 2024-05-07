import React from "react";
import { ethers } from "ethers";
import JSON from "../../contracts/Voting.json";
import { contractAddress } from "../../assets/Constant";
const abi = JSON.abi;

const VoterCard = ({ voters }) => {
  const approved = async (_address) => {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const response = await contract.validateVoter(_address);
      // console.log(response);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <table>
          <caption style={{ fontWeight: "bold" }}> Voter Details</caption>
          <thead>
            <tr>
              <th className="border border-black p-2">Name</th>
              <th className="border border-black p-2">Address</th>
              <th className="border border-black p-2">Approved</th>
            </tr>
          </thead>

          <tbody>
            {voters.map((v, i) => (
              <tr key={i} className="border border-black p-4 pb-0">
                <td className="border border-black p-2">{v[0]}</td>
                <td className="border border-black p-2">{v[1]}</td>
                <td className="border border-black p-2">
                  {v[2] ? (
                    "Yes"
                  ) : (
                    <button
                      className="border-2 rounded-md pl-1 pr-1 bg-blue-400 text-white"
                      onClick={() => approved(v[1])}
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoterCard;
