import React,{useState, useEffect} from 'react'
import UserNavOptions from '../components/UserNavOptions'
import Navbar from '../components/Navbar'
import { runFireworks } from '../lib/utils'
import { useStateContext } from '../../context/stateContext'

const Result = () => {
  const {state,candidates,currentUser} = useStateContext()
  useEffect(() => {
    {state == 'Result' && runFireworks();}
    
  }, [])
  candidates?.sort(function(a,b){
    return a.votes - b.votes;
  })
  
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
            <p>Results</p>
          </div>
          <div style={{justifyContent:'center'}} >
            <div style={{margin:'15px 20px',display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
              {state != 'Result' ? 
                <>
                  <h2 style={{color:'rgb(14, 88, 152)'}}>Hold On! Polling is not done yet</h2>
                  <img src='https://static.vecteezy.com/system/resources/previews/000/401/738/original/character-illustration-of-people-with-vote-icons-vector.jpg' className='WaitingImage' alt='Voting Image'/>
                </>
                : <>
                  <h2 >Winner!</h2>
                  <img src={candidates[candidates?.length-1]?.link} alt='voting image' style={{height:'30vh',margin:'5px'}}/>
                  <h1 style={{color:'rgb(14, 88, 152)',borderLeft:'1px solid lightgray',borderRight:'1px solid lightgray',marginBottom:'-10px',borderBottom:'3px solid lightgray',padding:'10px',borderRadius:'10px'}}>{candidates[candidates?.length-1]?.party}</h1>
                  <h2 style={{borderBottom:'3px solid lightgray',borderLeft:'1px solid lightgray',borderRight:'1px solid lightgray',padding:'10px',borderRadius:'10px'}}>{candidates[candidates?.length-1]?.votes} Votes</h2>
                  <div style={{width:'90%'}}>
                    <div className='AddCandidateContent' style={{display:'flex'}}>

                      <h4 style={{margin:'2px',fontWeight:'500',flex:'3'}}>Name</h4>
                      <h4 style={{margin:'2px',fontWeight:'500',flex:'2'}}>Age</h4>
                      <h4 style={{margin:'2px',fontWeight:'500',flex:'3'}}>Party</h4>
                      <h4 style={{margin:'2px',fontWeight:'500',flex:'2'}}>Qualification</h4>
                      <h4 style={{margin:'2px',fontWeight:'500',flex:'1'}}>Votes</h4>
                      
                    </div>
                    {candidates?.map((candidate,key) => (
                      <div className='AddCandidateContent' style={{color:'black',backgroundColor:'white',display:'flex'}}>

                        <h4 style={{margin:'2px',fontWeight:'500',flex:'3'}}>{candidate.name}</h4>
                        <h4 style={{margin:'2px',fontWeight:'500',flex:'2'}}>{candidate.age}</h4>
                        <h4 style={{margin:'2px',fontWeight:'500',flex:'3'}}>{candidate.party}</h4>
                        <h4 style={{margin:'2px',fontWeight:'500',flex:'2'}}>{candidate.qualification}</h4>
                        <h4 style={{margin:'2px',fontWeight:'500',flex:'1'}}>{candidate.votes}</h4>
                        
                      </div>
                    ))}
                  </div>
                </>
              }
              
            </div>
          </div>
        </div>
      </>:
      <h1>please login to view this page</h1>
    }
    </div>
  )
}

export default Result