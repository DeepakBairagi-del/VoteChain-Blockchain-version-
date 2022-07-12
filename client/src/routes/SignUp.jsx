import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import MainImage from '../components/MainImage'
import Form from '../components/Form'
import { useStateContext } from '../../context/stateContext'
import toast from 'react-hot-toast'

const SignUp = () => {
  
  const {email,chargeGas,setEmail,password, setPassword, username, setUsername,users,setUsers} = useStateContext()
  const handleSignUp = async () => {
    if(username == '' || email == '' || password == ''){
      toast.error('Please provide all necessary details')
    }else if (users.find((item)=> item.email == email)) {
      toast.error('Email already used!')
    } else if(password.length < 8){
      toast.error('Password should be of atleast 8 characters')
    } else{
      await chargeGas()
      const newUsers = [...users, { username: username, email: email, password: password , voted: false,verified: false, aadhar: 0}]
      setUsers(newUsers)
      window.localStorage.setItem('users3',JSON.stringify(newUsers))
      setEmail('')
      setPassword('')
      setUsername('')
      window.open('/LogIn')
    }
  }
  return (
    <div className="App ">
      <MainImage/>
      <div className='second-half'>
        <Form
          MainText='SignUp'
          ButtonText='SIGNUP'
          ShowUserName={true}
          handleSubmit= {handleSignUp}
        />
        <Link to='/LogIn'>
          <button  style={{fontSize:'12px',marginTop:'20px',background:'none',border:'none', fontWeight:'bold', color:'rgb(14, 88, 152)',}}>ALREADY HAVE AN ACCOUNT ?</button>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
