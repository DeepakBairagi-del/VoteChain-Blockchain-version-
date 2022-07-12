import React from 'react'
import { useStateContext } from '../../context/stateContext'

const Form = ({MainText,ShowUserName,ButtonText,NextRoute,handleSubmit}) => {   
  const {email, setEmail, username, setUsername, password, setPassword} = useStateContext()
  return (
    <div className='form'>

        <h2 style={{color: 'white',fontSize:'25px', fontWeight: 'bold', marginBottom: '20px',}}>{MainText}</h2>
        {ShowUserName && <> <h3  style={{color: 'white', fontWeight: '600',marginBottom:'10px'}} className="">Username<span style={{color: 'red',}}> *</span></h3>
        <input className='input' value={username} onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='Username'/></>}
        <h3  style={{color: 'white',marginTop:'5px', fontWeight: '600',marginBottom:'10px'}} className="">Email<span style={{color: 'red',}}> *</span></h3>
        <input className='input' value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Type your email'/>
        <h3  style={{color: 'white',marginTop:'5px', fontWeight: '600',marginBottom:'10px'}} className="">Password<span style={{color: 'red',}}> *</span></h3>
        <input className='input' value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password'/>
        
        <button className='button'  onClick={handleSubmit} >{ButtonText}</button>
        
    </div>
        
  )
}

export default Form