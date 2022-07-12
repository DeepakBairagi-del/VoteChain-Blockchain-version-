import React from 'react'
import Form from '../components/Form'
import MainImage from '../components/MainImage'
import { useStateContext } from '../../context/stateContext'
import toast from 'react-hot-toast'

const AdminLogIn = () => {
  const { email, password, setEmail, setPassword} = useStateContext()
  const handleSubmit = async () => {
    if (email === 'admin@gmail.com' && password === 'Admin@123'){
      window.localStorage.setItem('admin', email)
      setEmail('')
      setPassword('')
      window.open('/CurrentState')
    }else{
      toast.error('Wrong email or password please check about section in user login')
    }
  }
  
  
  
  return (
    <div className="App ">
      <MainImage/>
      <div className='second-half'>
        <Form
          handleSubmit= {handleSubmit}
          MainText='Admin LogIn'
          ShowUserName={false}
          ButtonText= 'LOGIN'
        />
       
        <h5>Admin email: admin@gmail.com</h5>
        <h5 style={{marginTop:'-20px'}}>Admin password: Admin@123</h5>
      </div>
    </div>
  )
}

export default AdminLogIn