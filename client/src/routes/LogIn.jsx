import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import MainImage from '../components/MainImage'
import { useStateContext } from '../../context/stateContext'
import toast from 'react-hot-toast'

const LogIn = () => {
  const {users,email, setEmail, password, setPassword} = useStateContext()
  const founditem = users.find((item)=> item.email == email)
  const handleLogin = async() => {
    if (email == '' || password == ''){
      toast.error('Please provide all necessary data')
    }else if(founditem && password == founditem.password){
      window.localStorage.setItem('currentUser', JSON.stringify(founditem))
      setEmail('')
      setPassword('')
      window.open('/VotingArea')
    }else if (founditem && password != founditem.password){
      setPassword('')
      toast.error(`Wrong password for ${email}`)

    } else{
      toast.error('user not found! Lets signUp')
    }  
  }
  return (
    <div className="App ">
      <MainImage/>
      <div className='second-half'>
        <Form 
          MainText='LogIn'
          ButtonText='LOGIN'
          ShowUserName={false}
          handleSubmit={handleLogin}
        />
        <p style={{color: 'gray',marginTop:'5px',marginBottom:'7px'}}>or</p>
        <Link to='/SignUp'>
          <button  className='button3' >CREATE A NEW ACCOUNT</button>
        </Link>
      </div>
    </div>
  )
}

export default LogIn