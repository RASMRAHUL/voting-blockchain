// SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// contract Voting {
//     struct Candidate {
//         address candidateAddress;  
//         string candidateName;
//         string candidateParty;
//         uint256 voteCount;
//     }
//     struct Voter{
//         string voterName;
//         address voterAddress;
       
//     }

//     Candidate[] public candidates;
//     Voter[] public voters;
//     address owner;

//     mapping(address => bool) public isVoted;
//     address[] private   votedList;

//     uint256 public  candidateCount;

//     // new concepts of start voting
//     bool public votingRunning; // true means voting has been started false means not started yet..

//     // starting point of the contract 
//     constructor() {
//         owner = msg.sender;
//     }
    

//     // it checks the owner of the contract 
//     modifier onlyOwner {
//         require(msg.sender == owner,"Only Owner is Allowed!");
//         _;
//     }

//     // return the status of the voting is runnig or ended =>  return true means ongoing voting || false means endeded
//     function getVotingStatus() public view returns (bool ) {
//        return votingRunning;
//     }

    
//     // to check the voter is already present in the voter list or not
//     function isVoterAllowed(address _add) public view returns(bool){
//         bool allowed = false;
//         for(uint256 i =0 ; i< voters.length;i++){
//             if(voters[i].voterAddress == _add){
//                 allowed = true;
//                 break ;
//             }
//         }
//         return allowed;
//     }

//     // check the candidate is already present or not
//     function isCandidateAllowed(address _candidateAddress) public view returns(bool){
//         bool allowed = false;
//         for(uint256 i = 0 ; i< candidates.length ; i++){
//             if(candidates[i].candidateAddress == _candidateAddress){
//                 allowed = true;
//                 break;
//             }
//         }
//         return allowed;
//     }
    

//     // add the new candidate to the candidate list only when voting is not ongoing
//     function addCandidate(address _candidateAddress, string calldata _name, string calldata _party ) public onlyOwner {
//         require(!getVotingStatus(),"You cannot add Candidate because voting is Ongoing now!");
//         require(!isCandidateAllowed(_candidateAddress), "Candidate is already present!");
//         candidateCount++;
//         candidates.push(Candidate({
//                 candidateAddress : _candidateAddress,
//                 candidateName: _name,
//                 candidateParty : _party,
//                 voteCount: 0
//         }));

//     }

    

//     // check the voter is already present or not => if not present the push into the array
//     function addVoter(string calldata _voterName , address _voterAddress) public  onlyOwner{
//         require(!getVotingStatus(),"You cannot add Voter because voting is Ongoing now!");
//         require(!isVoterAllowed(_voterAddress), "Voter is already listed in the voter list!");

//         // check the voter present or not in the mapping list of isVoted
//        // require(!isVoted[_voterAddress], "Voter is already listed in the voter list");
//         voters.push(Voter({
//             voterName: _voterName,
//             voterAddress: _voterAddress
//             //isVoted : false
//         }));

//         // to set the voter isVoted or not
//         isVoted[_voterAddress] = false;
        
//     }

    

//     // increase the vote of the candidate
//     function increaseVote(address _candidateAddress) private  {
//         for(uint256 i = 0 ;i< candidates.length; i++)
//         {
//             if(candidates[i].candidateAddress == _candidateAddress){
//                 candidates[i].voteCount++;
//                 break;
//             }
//         }
//     }
    
//     // for voting of the candidate to their respective candidate or party
//     function vote(address _candidateAddress) public {
//         require(getVotingStatus(),"You can't vote because voting is not live now!");
//         require(isVoterAllowed(msg.sender),"You are not allowed to vote");
//         require(!isVoted[msg.sender], "You have already voted!");
       


//         // increase the vote count of the candidate...
//         increaseVote(_candidateAddress);
       
//         votedList.push(msg.sender);
//         isVoted[msg.sender] = true;
//     }

//     // to get the all candidates value from the candidates list
//     function getAllCandiates() public view returns (Candidate[] memory){
//         return candidates;
//     }

//     // to get the all voters value from the voters list
//     function getVoters() public view returns (Voter[] memory){
//         return voters;
//     }


//     // to start the voting process by providing the duration of the election in minutes
//     function startVoting() public onlyOwner{
//         require(!getVotingStatus(),"You cannot start voting because voting is already Ongoing now!");
//         votingRunning = true;
//     }
//     function stopVoting() public onlyOwner{
//         require(getVotingStatus(),"You cannot stop voting because voting is already stop now!");
//         votingRunning = false;
//     }

//     // for deleting election candidate  who is registered from the candidate list
//     function deleteOneCandidate(address _candidateAddress) public onlyOwner{
//         require(!getVotingStatus(),"You cannot delete Candidate because voting is Ongoing now!");
//         require(isCandidateAllowed(_candidateAddress),"Candidate is not present in the candidate List!");
//         for(uint256 i = 0 ; i< candidates.length;i++){
            
//             if (candidates[i].candidateAddress == _candidateAddress) {
//                 candidates[i] = candidates[candidates.length - 1];
//                 candidates.pop();
//                 candidateCount--; // Decrement candidateCount when candidate is deleted
//                 break;
//             }
//         }

//     }

//     // to announce the winner of the election after the over of the election
//     function electionWinner() public  view onlyOwner returns(address ) {
//         require(!getVotingStatus(), "Voting is still Ongoing!");
//         uint256 maxVoteCount = 0 ;
//         address winner;
//         for(uint256 i = 0 ;i< candidates.length;i++){
//             if(candidates[i].voteCount > 0 && candidates[i].voteCount >= maxVoteCount ){
//                 maxVoteCount = candidates[i].voteCount;
//                 winner=candidates[i].candidateAddress;
//             }
//         }
//         return winner;
//     }

//     // to restart the election process again and the candidate list will be deleted
//     function resetVoting() public  onlyOwner returns (string memory) {
//         require(!getVotingStatus(),"Voting is still ongoing");
//         delete  candidates;
        
//         for(uint256 i = 0 ;i< votedList.length;i++){
//            isVoted[votedList[i]] = false;
//         }
//         candidateCount = 0;
//         votingRunning = false;
//         delete votedList;
//         return "You can Start the Election from the beginning now!";
//     }

// }



pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        address candidateAddress;  
        string candidateName;
        string candidateParty;
        uint256 voteCount;
    }

    // voter will able to register ourself
    struct Voter{
        string voterName;
        address voterAddress;
        bool isRegistered;
       
    }

    Candidate[] public candidates;
    Voter[] public voters;
    address owner;

    mapping(address => bool) public isVoted;
    address[] public  votedList;

    uint256 public  candidateCount;

    // uint256 public votingStart;
    // new concepts of start voting
    bool public votingRunning; // true means voting has been started false means not started yet..

    // starting point of the contract 
    constructor() {
        owner = msg.sender;
    }
    

    // it checks the owner of the contract 
    modifier onlyOwner {
        require(msg.sender == owner,"Only Owner is Allowed!");
        _;
    }

    // return the status of the voting is runnig or ended =>  return true means ongoing voting || false means endeded
    function getVotingStatus() public view returns (bool ) {
       return votingRunning;
    }

    
    // to check the voter is already present in the voter list or not
    function isVoterRegistered(address _add) public view returns(bool){
        bool allowed = false;
        for(uint256 i =0 ; i< voters.length;i++){
            if(voters[i].voterAddress == _add){
                allowed = true;
                break ;
            }
        }
        return allowed;
    }

    // check the candidate is already present or not
    function isCandidateAllowed(address _candidateAddress) public view returns(bool){
        bool allowed = false;
        for(uint256 i = 0 ; i< candidates.length ; i++){
            if(candidates[i].candidateAddress == _candidateAddress){
                allowed = true;
                break;
            }
        }
        return allowed;
    }

    // add the new candidate to the candidate list only when voting is not ongoing
    function addCandidate(address _candidateAddress, string calldata _name, string calldata _party ) public onlyOwner {
        require(!getVotingStatus(),"You cannot add Candidate because voting is Ongoing now!");
        require(!isCandidateAllowed(_candidateAddress), "Candidate is already present!");
        candidateCount++;
        candidates.push(Candidate({
                candidateAddress : _candidateAddress,
                candidateName: _name,
                candidateParty : _party,
                voteCount: 0
        }));

    }

    

    // check the voter is already present or not => if not present the push into the array
    function voterRegistration(string calldata _voterName , address _voterAddress) public {
        require(!getVotingStatus(),"You can't register because voting is Ongoing now!");
        require(!isVoterRegistered(_voterAddress), "Voter is already listed in the voter list!");

        // check the voter present or not in the mapping list of isVoted
        voters.push(Voter({
            voterName: _voterName,
            voterAddress: _voterAddress,
            isRegistered : false
        }));

        // // to set the voter isVoted or not
        // isVoted[_voterAddress] = false;
        
    }

    

    // increase the vote of the candidate
    function increaseVote(address _candidateAddress) private  {
        for(uint256 i = 0 ;i< candidates.length; i++)
        {
            if(candidates[i].candidateAddress == _candidateAddress){
                candidates[i].voteCount++;
                break;
            }
        }
    }


    // voter have permission to vote or not
    function votingPermission(address _voterAddress) public view returns(bool)
    {
        // check the voter registered or not
        require(isVoterRegistered(_voterAddress),"You are not registered yet! Plz Register first!!");

        for(uint256 i = 0 ;i< voters.length;i++){
            // voter should be registered already
            if(voters[i].voterAddress == _voterAddress && voters[i].isRegistered == true)
                return true;
        }

        return false;
    }
    
    // voter already voted or not
    function voteCasted (address _voterAddress)public view returns (bool)
    {
        return isVoted[_voterAddress] ;
    }

    // for voting of the candidate to their respective candidate or party
    function vote(address _candidateAddress) public {
        require(getVotingStatus(),"You can't vote because voting is not live now!");
        require(votingPermission(msg.sender), "You don't have permission to vote!");
        require(!voteCasted(msg.sender), "You have already voted!");
        
        // increase the vote count of the candidate...
        increaseVote(_candidateAddress);
       
        votedList.push(msg.sender);
        isVoted[msg.sender] = true;
    }

    // to get the all candidates value from the candidates list
    function getAllCandiates() public view returns (Candidate[] memory){
        return candidates;
    }

    // to get the all voters value from the voters list
    function getVoters() public view returns (Voter[] memory){
        return voters;
    }

    // to validate the voter to voter 
    function validateVoter(address _voterAddress) public onlyOwner{
        require(!getVotingStatus(),"You can't validate because voting is live now!");
        require(isVoterRegistered(_voterAddress),"Voter is not Registered Yet!");
        
        for(uint256 i = 0 ;i< voters.length;i++)
        {
            if(voters[i].voterAddress == _voterAddress)
            {
                voters[i].isRegistered = true;
                break;
            }
        }

         // to set the voter isVoted or not
        isVoted[_voterAddress] = false;
        
    }

    


    // to start the voting process by providing the duration of the election in minutes
    function startVoting() public onlyOwner{
        require(!getVotingStatus(),"You cannot start voting because voting is already Ongoing now!");
        // votingStart = block.timestamp;
        // votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
        votingRunning = true;
    }
    function stopVoting() public onlyOwner{
        require(getVotingStatus(),"You cannot stop voting because voting is already stop now!");
        // votingStart = block.timestamp;
        // votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
        votingRunning = false;
    }



    // for deleting election candidate  who is registered from the candidate list
    function deleteOneCandidate(address _candidateAddress) public onlyOwner{
        require(!getVotingStatus(),"You cannot delete Candidate because voting is Ongoing now!");
        require(isCandidateAllowed(_candidateAddress),"Candidate is not present in the candidate List!");
        for(uint256 i = 0 ; i< candidates.length;i++){
            
            if (candidates[i].candidateAddress == _candidateAddress) {
                candidates[i] = candidates[candidates.length - 1];
                candidates.pop();
                candidateCount--; // Decrement candidateCount when candidate is deleted
                break;
            }
        }

    }

    // to announce the winner of the election after the over of the election
    function electionWinner() public  view onlyOwner returns(address ) {
        require(!getVotingStatus(), "Voting is still Ongoing!");
        uint256 maxVoteCount = 0 ;
        address winner;
        for(uint256 i = 0 ;i< candidates.length;i++){
            if(candidates[i].voteCount > 0 && candidates[i].voteCount > maxVoteCount ){
                maxVoteCount = candidates[i].voteCount;
                winner=candidates[i].candidateAddress;
            }
        }
        return winner;
    }

    // to restart the election process again and the candidate list will be deleted
    function resetVoting() public  onlyOwner returns (string memory) {
        require(!getVotingStatus(),"Voting is still ongoing");
        delete  candidates;
        
        for(uint256 i = 0 ;i< votedList.length;i++){
           isVoted[votedList[i]] = false;
        }
        candidateCount = 0;
        votingRunning = false;
        delete votedList;
        return "You can Start the Election from the beginning now!";
    }

}