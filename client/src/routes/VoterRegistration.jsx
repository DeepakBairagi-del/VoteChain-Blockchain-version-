import React,{useState} from 'react'
import './LogIn'
import UserNavOptions from '../components/UserNavOptions'
import Navbar from '../components/Navbar'
import { useStateContext } from '../../context/stateContext'
import toast from 'react-hot-toast'

const VoterRegistration = () => {
  const {currentUser,users,setUsers,setCurrentUser,chargeGas} = useStateContext()
  const [aadhar, setAadhar] = useState(0)
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)
  const handleVerify = async() => {
    if(!currentUser.verified){
      if(aadhar == 0 || name == '' || age == 0){
        toast.error('Please provide all necessary details')
      }else if (users.find((item)=> item.aadhar == aadhar)) {
        toast.error('Aadhar already exist!')
      } else if(age < 18){
        toast.error('Your age is less than the valid age to vote! grow up kid.')
      } else{
        await chargeGas()
        const updatedUsers = users.filter((item)=> item.email !==  currentUser.email  );
        const updatedCurrentUser = {...currentUser, verified: true, aadhar: aadhar}
        const newUsers = [...updatedUsers, updatedCurrentUser]
        setUsers(newUsers)
        window.localStorage.setItem('users3',JSON.stringify(newUsers))
        setCurrentUser(updatedCurrentUser)
        window.localStorage.setItem('currentUser',JSON.stringify(updatedCurrentUser))
        toast.success(`Thank you ${name}! Verified successfully`)
        setAadhar(0)
        setName('')
        setAge(0)
      }
    }else {
      toast.error(`You are already verified with aadhar no. ${currentUser.aadhar}`)
    }
  }
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
            <p>Register Yourself</p>
          </div>
          <div style={{justifyContent:'center'}} >
            <div style={{margin:'15px 20px',display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
              <h2 style={{color:'rgb(14, 88, 152)',fontSize:'40px'}}>Aadhar Details</h2>
              <img src='https://indiadesignsystem.bombaydc.com/assets/india-designs/display/Aadhar/color.svg' style={{height:'20vh', width:'20vw'}} alt='Voting Image'/>
              <div style={{width:'85%'}}>
                <p style={{fontWeight:'650', marginBottom:'0px'}}>Aadhar Number <span style={{color:'red'}}  >*</span></p>
                <input value={aadhar} onChange={(e) => setAadhar(e.target.value)} placeholder='Aadhar Number' type='number' style={{borderRadius: '5px', border:'2px solid rgb(14, 88, 152)',padding:'10px 5px',outline:'0',margin:'5px 0px',width:'98.5%'}} />
              </div>
              <div style={{width:'85%'}}>
                <p style={{fontWeight:'650', marginBottom:'0px'}}>Name as per Aadhar <span style={{color:'red'}}  >*</span></p>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' style={{borderRadius: '5px', border:'2px solid rgb(14, 88, 152)',padding:'10px 5px',outline:'0',margin:'5px 0px',width:'98.5%'}} />
              </div>
              <div style={{width:'85%'}}>
                <p style={{fontWeight:'650', marginBottom:'0px'}}>Age as per Aadhaar<span style={{color:'red'}}  >*</span></p>
                <input value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' type='number' style={{borderRadius: '5px', border:'2px solid rgb(14, 88, 152)',padding:'10px 5px',outline:'0',margin:'5px 0px',width:'98.5%'}} />
              </div>
              <button onClick={ handleVerify  } className='CandidateButton' style={{width:'85%'}}>VERIFY</button>
            </div>
          </div>
        </div>
      </>:
      <h1>please login to view this page</h1>
    }
    </div>
  )
}

export default VoterRegistration
