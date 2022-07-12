import React,{useState} from 'react'
import UserNavOptions from '../components/UserNavOptions'
import Navbar from '../components/Navbar'
import { useStateContext } from '../../context/stateContext'
import toast from 'react-hot-toast'


const VotingArea = () => {
  const {currentAccount,state,chargeGas,candidates,setCandidates,setUsers,setTotalVotes,totalVotes,currentUser,users,setCurrentUser} = useStateContext()
  const handleVote = async(candidate) => {
    if(!currentUser.voted && currentUser.verified){
      await chargeGas();
      let foundCandidate = candidates.find((item) => item.party === candidate.candidate.party)
      const updatedCandidates = candidates.filter((item)=> item.party !==  candidate.candidate.party  );
      setCandidates([...updatedCandidates, {...foundCandidate, votes: foundCandidate.votes + 1}])
      window.localStorage.setItem('candidateList',JSON.stringify([...updatedCandidates, {...foundCandidate, votes: foundCandidate.votes + 1}]))
      const updatedUsers = users.filter((item)=> item.email !==  currentUser.email  );
      const updatedCurrentUser = {...currentUser, voted: true}
      const newUsers = [...updatedUsers, updatedCurrentUser]
      setUsers(newUsers)
      window.localStorage.setItem('users3',JSON.stringify(newUsers))
      setCurrentUser(updatedCurrentUser)
      window.localStorage.setItem('currentUser',JSON.stringify(updatedCurrentUser))
      toast.success('Thank you! Voted successfully')
      let newTotalVotes = totalVotes + 1
      setTotalVotes(newTotalVotes)
      window.localStorage.setItem('totalVotes',newTotalVotes)
    }else if (!currentUser.verified){
      toast.error('Please Verify Yourself!')
    }else{
      toast.error('You have already voted!')
    } 
  }
  console.log(currentAccount)
  return (
    <div style={{display:'flex'}}>
    {currentUser ? 
      <>
      <Navbar 
        style={{flex:'1'}}
        NavOptions={UserNavOptions} 
        User= {currentUser.username}       
      />
      <div style={{flex:'4',marginLeft:'1px'}}>
          <div className='header'>
            <p>Voting Area</p>
          </div>
          { state != 'Voting' ?
          <div style={{justifyContent:'center'}} >
            <div style={{margin:'15px 20px',display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
              <h2 style={{color:'rgb(14, 88, 152)'}}>Hold On! Voting has not been started yet</h2>
              <img src='https://static.vecteezy.com/system/resources/previews/000/401/738/original/character-illustration-of-people-with-vote-icons-vector.jpg' className='WaitingImage' alt='Voting Image'/>
            </div>
          </div>  : 
          <div style={{display:'flex',margin:' 30px',justifyContent:'space-evenly',alignItems:'center'}}>
            {candidates?.length == 0 &&
              <div style={{justifyContent:'center'}} >
                <div style={{margin:'15px 20px',display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
                  <h2 style={{color:'rgb(14, 88, 152)'}}> Luckily no candidates are figthing this time</h2>
                  <img src='https://static.vecteezy.com/system/resources/previews/000/401/738/original/character-illustration-of-people-with-vote-icons-vector.jpg' className='WaitingImage' alt='Voting Image'/>
                </div>
              </div> 
            }
            {candidates?.map((candidate,key)=> (
              <div key={key} style={{ display:'flex',alignItems:'center',flexDirection:'column',margin:'15px'}}>
                <img src={candidate.link} style={{height:'30vh',margin:'5px'}} alt='voting image'/>
                <button  style={{backgroundColor:'rgb(36, 37, 46)',alignItems:'center',color:'white',padding:'15px',width:'100%',border:'none'}} > {candidate.name} ({candidate.party})</button>
                <button  style={{backgroundColor:'rgb(14, 88, 152)',alignItems:'center',color:'white',padding:'15px',width:'100%',border:'none'}} onClick={() => handleVote({candidate})} >{currentUser.voted? "VOTED" : "VOTE"}</button>
              </div>
            ))}
           
          </div>
          }
        </div>
      </>:
      <h1>please login to view this page</h1>
    }
    </div>
  )
}

export default VotingArea