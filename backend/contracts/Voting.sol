// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint256 id;
        string name;
        string party;
        uint256 voteCount;
    }
    struct Voter{
        string vname;
        address vaddress;
        bool isVoted;
    }

    Candidate[] public candidates;
    Voter[] public voters;
    address owner;
    // mapping(address => bool) public voters;
     uint256 public  candidateCount;

    uint256 public votingStart;
    uint256 public votingEnd;

    // starting point of the contract 
    constructor() {
        owner = msg.sender;
    }
    

    // it checks the owner of the contract 
    modifier onlyOwner {
        require(msg.sender == owner,"Only Owner is Allowed!");
        _;
    }

    // add the new candidate to the candidate list only when voting is not ongoing
    function addCandidate(string calldata _name, string calldata _party ) public onlyOwner {
        require(!getVotingStatus(),"You cannot add Candidate because voting is Ongoing now!");
        candidateCount++;
        candidates.push(Candidate({
                id : candidateCount,
                name: _name,
                party : _party,
                voteCount: 0
        }));
    }

    // to check the voter is already present in the voter list or not
    function isAllow(address _add) public view returns(bool){
        bool allowed = false;
        for(uint256 i =0 ; i< voters.length;i++){
            if(voters[i].vaddress == _add)
                allowed = true;
        }

        return allowed;
    }

    // to check the candidate is present in the candidate list or not using ID value
    function checkIndex(uint256 ID) public view returns(bool){
        return (ID > 0 && ID <= candidates.length) ? true : false;
    }

    // check the voter is already present or not => if not present the push into the array
    function addVoter(string calldata _vname , address _vaddress) public  onlyOwner{
        require(!getVotingStatus(),"You cannot add Voter because voting is Ongoing now!");
        require(!isAllow(_vaddress), "Voter is already listed in the voter list!");
        voters.push(Voter({
            vname: _vname,
            vaddress: _vaddress,
            isVoted : false
        }));
    }

    // to check the voter is already voted their vote or not
    function isVoterVoted(address _add) public view returns(bool ) {
        require(isAllow(_add), "You are not allowed to vote!");
        bool alreadyVoted  = true;
        for(uint256 i = 0 ;i< voters.length; i++)
        {
            if( !voters[i].isVoted )  
                alreadyVoted = false;
                
        }

        return alreadyVoted;

    }


    // to mark the voter => he/she is voted his/her vote.
    function voterVoted(address _add) internal   {
        for(uint256 i = 0 ;i< voters.length; i++)
        {
            if(voters[i].vaddress == _add)
                voters[i].isVoted = true;
        }
    }
    
    // for voting of the candidate to their respective candidate or party
    function vote(uint256 _candidateId) public {
        require(!isVoterVoted(msg.sender), "You have already voted!");
        require(checkIndex(_candidateId), "Invalid candidate ID!");

        candidates[_candidateId - 1].voteCount++;
        voterVoted(msg.sender);
    }

    // to get the all candidates value from the candidates list
    function getAllCandiates() public view returns (Candidate[] memory){
        return candidates;
    }

    // to get the particular candidates details from their id 
    function getCandidate(uint256 ID ) public view returns(Candidate memory){
        require(checkIndex(ID), "Candidate is not present of this ID number!");
        return candidates[ID-1];
    }

    // return the status of the voting is runnig or ended =>  return true means ongoing voting || false means endeded
    function getVotingStatus() public view returns (bool ) {
        return (block.timestamp >= votingStart && block.timestamp < votingEnd) ? true : false;
    }

    // to get the remaining time left to end in the voting process
    function getRemainingTime() public view returns (uint256) {
        require(block.timestamp >= votingStart, "Voting has not started yet.");
        if (block.timestamp >= votingEnd) {
            return 0;
        }
        return votingEnd - block.timestamp;
    }

    // to start the voting process by providing the duration of the election in minutes
    function startVoting(uint256 _durationInMinutes) public onlyOwner{
        require(!getVotingStatus(),"You cannot start voting because voting is already Ongoing now!");
        votingStart = block.timestamp;
        votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
    }


    // to delete one voter from the voter list
    function deleteOneVoter(address _add) public onlyOwner{
        require(!getVotingStatus(),"You cannot delete Voter because voting is Ongoing now!");
        require(isAllow(_add), "This voter is not added in the voters List!");
        for(uint256 i = 0 ; i< voters.length;i++){
            if(voters[i].vaddress == _add)
            {
                voters[i] = voters[voters.length - 1];
                break;
            }
        }

        voters.pop();
    }

    // for deleting election candidate  who is registered from the candidate list
    function deleteOneCandidate(uint256 Id) public onlyOwner{
        require(!getVotingStatus(),"You cannot delete Candidate because voting is Ongoing now!");
        for(uint256 i = 0 ; i< candidates.length;i++){
            if(candidates[i].id == Id)
            {
                candidates[i] = candidates[candidates.length - 1];
                candidates[i].id = Id;
                break;
            }
            candidateCount--;

        }

        candidates.pop();
    }

    // to announce the winner of the election after the over of the election
    function electionWinner() public  view onlyOwner returns(Candidate memory) {
        require(!getVotingStatus(), "Voting is still Ongoing!");
        uint256 maxVoteID = 0;
        for(uint256 i = 0 ;i< candidates.length;i++){
            if(candidates[i].voteCount > maxVoteID)
                maxVoteID = candidates[i].id ;
        }

        return candidates[maxVoteID - 1];
    }

    // to restart the election process again and the candidate list will be deleted
    function restartVoting() public  onlyOwner returns (string memory) {
        require(!getVotingStatus(),"Voting is still ongoing");
        delete  candidates;
        for(uint256 i = 0 ;i< voters.length;i++){
            voters[i].isVoted = false;
        }
        candidateCount = 0;
        votingEnd = 0;
        votingStart = 0;
        return "You can Start the Election from the beginning now!";
    }

}