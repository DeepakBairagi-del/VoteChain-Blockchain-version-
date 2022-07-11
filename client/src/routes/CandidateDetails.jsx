import React from 'react'
import './LogIn'
import AdminNavOptions from '../components/AdminNavOptions'
import Navbar from '../components/Navbar'
import { useStateContext } from '../../context/stateContext'
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast'

const CandidateDetails = () => {
  const {candidates,admin,chargeGas, state} = useStateContext()
  let newCandidates 
  const handleRemove =async(candidate) => {
    if (state == "Registration"){
      await chargeGas()
      newCandidates = candidates.filter((item)=> item.party != candidate.party )
      window.localStorage.setItem('candidateList',JSON.stringify(newCandidates))
      toast.success('Candidature Discarded , Please refresh')
    }else{toast.error('Last date to removal of Candidature has been passed!')}
  }
  return (
    <div style={{display:'flex'}}>
    {admin ? 
      <>
        <Navbar 
          style={{flex:'1'}}
          NavOptions={AdminNavOptions} 
          User= '0x934857892984688'       
        />
        <div style={{flex:'4',marginLeft:'1px'}}>
          <div className='header'>
            <p>Candidate details</p>
          </div>
          <div style={{justifyContent:'center'}} >
            <div className='AddCandidateContent' style={{display:'flex'}}>

              <h4 style={{margin:'2px',fontWeight:'500',flex:'3'}}>Name</h4>
              <h4 style={{margin:'2px',fontWeight:'500',flex:'2'}}>Age</h4>
              <h4 style={{margin:'2px',fontWeight:'500',flex:'3'}}>Party</h4>
              <h4 style={{margin:'2px',fontWeight:'500',flex:'2'}}>Qualification</h4>
              <h4 style={{margin:'2px',fontWeight:'500',flex:'1'}}>Remove</h4>
              
            </div>
            {candidates?.map((candidate, key)=> (<div key={key} className='AddCandidateContent' style={{color:'black',backgroundColor:'white',display:'flex'}}>

              <h4 style={{margin:'2px',fontWeight:'500',flex:'3'}}>{candidate.name}</h4>
              <h4 style={{margin:'2px',fontWeight:'500',flex:'2'}}>{candidate.age}</h4>
              <h4 style={{margin:'2px',fontWeight:'500',flex:'3'}}>{candidate.party}</h4>
              <h4 style={{margin:'2px',fontWeight:'500',flex:'2'}}>{candidate.qualification}</h4>
              <h4 style={{margin:'2px',fontWeight:'500',flex:'1'}}><DeleteIcon onClick={()=> handleRemove(candidate)}/></h4>
              
            </div>) )}

          </div>
        </div>
      </>:
      <h1>please login to view this page</h1>
    }
    </div>
    )
}

export default CandidateDetails