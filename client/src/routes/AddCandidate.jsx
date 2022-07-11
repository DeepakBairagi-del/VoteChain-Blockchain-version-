import React, { useState } from 'react'
import './Login'
import AdminNavOptions from '../components/AdminNavOptions'
import Navbar from '../components/Navbar'
import { useStateContext } from '../../context/stateContext'
import toast from 'react-hot-toast'


const AddCandidate = () => {
  const {state, chargeGas,setCandidates, candidates,admin} = useStateContext()
  const [name,setName] =useState('')
  const [age,setAge] =useState(0)
  const [party,setParty] =useState('')
  const [link,setLink] =useState('')
  const [qualification,setQualification] =useState('')

  const handleAddCandidate = async() => {
    if (state != 'Registration') {
      toast.error('Registration is not open now!') 
    } else if (name == '' || age == 0 || party == '' || link == '' || qualification == ''){
      toast.error('Please provide all neccessary details!')
    } else if (age < 25){
      toast.error('Age criteria does not met')
    }else{
      await chargeGas()
      const newCandidates = [...candidates,{name : name, age: age, qualification: qualification, party: party, link: link, votes: 0}]
      setCandidates(newCandidates)
      window.localStorage.setItem('candidateList',JSON.stringify(newCandidates))
      toast.success('Candidate added successfully!')
      setName('')
      setAge(0)
      setLink('')
      setParty('')
      setQualification('')
    }
  }
  return (
    <div style={{display:'flex'}}>
    {admin ?
      <>
        <Navbar 
          style={{flex:'1'}}
          NavOptions={AdminNavOptions} 
          User= '0x9342.....84688'       
        />
        <div style={{flex:'4',marginLeft:'1px'}}>
          <div className='header'>
            <p>Add Candidates</p>
          </div>
          <div style={{justifyContent:'center'}} >
            <div className='AddCandidateContent'>
              <h4 style={{margin:'2px',fontWeight:'500'}}>Name<span style={{color:'red',margin:'5px'}}>*</span></h4>
              <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} style={{borderRadius: '5px', border:'none',padding:'10px 5px',margin:'10px 0px',width:'98.5%'}} />
              <h4 style={{margin:'2px',fontWeight:'500'}}>Age<span style={{color:'red',margin:'5px'}}>*</span></h4>
              <input placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} type='number' style={{borderRadius: '5px', border:'none',padding:'10px 5px',margin:'10px 0px',width:'98.5%'}} />
              <h4 style={{margin:'2px',fontWeight:'500'}}>Party<span style={{color:'red',margin:'5px'}}>*</span></h4>
              <input placeholder='Party' value={party} onChange={(e) => setParty(e.target.value)} style={{borderRadius: '5px', border:'none',padding:'10px 5px',margin:'10px 0px',width:'98.5%'}} />
              <h4 style={{margin:'2px',fontWeight:'500'}}>Party logo link<span style={{color:'red',margin:'5px'}}>*</span></h4>
              <input placeholder='Logo Link' value={link} onChange={(e) => setLink(e.target.value)} style={{borderRadius: '5px', border:'none',padding:'10px 5px',margin:'10px 0px',width:'98.5%'}} />
              <h4 style={{margin:'2px',fontWeight:'500'}}>Qualification<span style={{color:'red',margin:'5px'}}>*</span></h4>
              <input placeholder='Qualification' value={qualification} onChange={(e) => setQualification(e.target.value)} style={{borderRadius: '5px', border:'none',padding:'10px 5px',margin:'10px 0px',width:'98.5%'}} />
              <button className='CandidateButton' style={{width:'99.5%'}} onClick={handleAddCandidate}>ADD CANDIDATE</button>
            </div>
          </div>
        </div>
      </> :
      <h1>please login to view this page</h1>
    }  
    </div>
  )
}

export default AddCandidate