import React,{useEffect} from 'react'
import './LogIn'
import AdminNavOptions from '../components/AdminNavOptions'
import Navbar from '../components/Navbar'
import {  FormControlLabel,  Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { useStateContext } from '../../context/stateContext'

const CurrentState = () => {
  const {chargeGas,setState,state,admin,users,totalVotes, setUsers, SetTotalVotes,candidates, setCandidates} = useStateContext();
  const [value, setValue] = useState( 'Registration')
  const handleSubmit= async(e) =>{
    await chargeGas()
    if(value === 'Voting'){
      setState('Voting')
      window.localStorage.setItem('state','Voting')
    } else if (value === 'Registration'){
      setState('Registration')
      window.localStorage.setItem('state','Registration')
      window.localStorage.setItem('candidateList',JSON.stringify([]))
      window.localStorage.setItem('totalVotes', 0)
      const newUsers = users.map((item) => ({...item,voted: false} ))
      window.localStorage.setItem('users3', JSON.stringify(newUsers))
    } else {
      setState('Result')
      window.localStorage.setItem('state','Result')
    }
  }

  const handleRadioChange =(e) =>{
    setValue(e.target.value)
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
            <p>Current state</p>
          </div>
          <div style={{margin:'0px 15px'}}>
            
            
              
              <h2>Current State : <span style={{textDecorationLine:'underline'}}>{state}</span> </h2>
              <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Registration"
                    name="radio-buttons-group"
                    onChange={handleRadioChange}
              >
                    <FormControlLabel value="Voting" control={<Radio color='success'/>} label="Voting" />
                    <FormControlLabel value="Registration" control={<Radio color='success' />} label="Registration" />
                    <FormControlLabel value="Result" control={<Radio  color='success' />} label="Result" />
              </RadioGroup> 
              <button className='CandidateButton' style={{padding:'12px 20px'}} onClick={handleSubmit} >CHANGE STATE</button>
            
          </div>

        </div>
      </>:
      <h1>please login to view this page</h1>
    }
    </div>
  )
}

export default CurrentState