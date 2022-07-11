//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.14;
contract votechainApp{
    struct candidate{
        string name;
        string party;
        string qualification;
        uint age;
        string link;
        uint voteCount;
    }

    struct voter{
        string username;
        string email;
        string password;
        bool authorized;
        bool voted;
        uint256 aadhar;
    }
    string currentState;
    address public owner;
    uint public totalVotes;
    uint counter = 0 ;
    modifier ownerOnly(){
        require (msg.sender == owner);
        _;
    }
    address[] voters2;
    mapping (address => voter)public voters;
    mapping (uint => candidate)public candidates;

    function compareStrings (string memory a, string memory b) public  pure returns (bool) {
         return (keccak256 (abi.encodePacked ((a))) == keccak256 (abi.encodePacked ((b)))); 
    }

    function setOwner(address admin)  public{
        owner = admin;
    }

    function signUp (string memory username,string memory email, string memory password ) public{
        for(uint i; i<voters2.length; i++){
            if(compareStrings(voters[voters2[i]].email, email)){
              //  alert('email already exist')
                return;
            }
        }
        voters[msg.sender] = voter(username,email,password, false, false, 0);
        voters2.push(msg.sender);
    }

    function addCandidate(string memory name,string memory party, string memory qualification,uint age, string memory link ) ownerOnly public {
        if (age > 25){
            candidates[counter] = candidate(name,party,qualification,age,link,0);
            counter++;
        }else{
           // alert('candidate is not elegible for candidature')
        }
    } 

    function changeState(string memory state) ownerOnly public{
        if (compareStrings(state, "Registration")){
            counter = 0;
            totalVotes=0;
            for (uint256 i = 0; i < voters2.length; i++) {
                voters[voters2[i]].voted = false;
            }
        }
        currentState = state;
    }
    
    function vote(uint candidateNo) public{
        require(voters[msg.sender].authorized);
        require(!voters[msg.sender].voted);

        voters[msg.sender].voted == true;
        candidates[candidateNo].voteCount+=1;
        totalVotes +=1;
    }
    
    function verify(uint256 aadharNo, uint age) view  public{
        require(!voters[msg.sender].authorized);
        for (uint i=0; i< voters2.length; i++){
            if(voters[voters2[i]].aadhar == aadharNo){
                //alert('Aadhar already exist')
                return;
            }
        }
        if(age> 18){
            voters[msg.sender].aadhar == aadharNo;
            voters[msg.sender].authorized == true;
        }else {
            //alert('you are below 18')
        }
    }
}