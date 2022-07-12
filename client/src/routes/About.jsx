import React from 'react'
import UserNavOptions from '../components/UserNavOptions'
import Navbar from '../components/Navbar'
import { useStateContext } from '../../context/stateContext'

const About = () => {
  const {currentUser}= useStateContext()
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
              <p>About this WebApp</p>
            </div>
            <div style={{justifyContent:'center'}} >
              <div style={{margin:'15px 20px',fontSize:'25px',display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
                <p>
                  This WebApp is designed to conduct various elections weather it is for any post or anything.
                  There are two types of logins in this app . First one is for admin to conduct the elections and add condidates, change the state to voting, registration or results
                  and the second one is for users who can first verify themselves whether they are eligible to vote or not
                  by providing their aadhar info which is then verify using the local storage for now. If eligible and the state is voting now then they can vote 
                  for their favorite person and see the result when the voting is done.
                </p>
                <p>
                  So basically its the traditional voting system but what's new here is the immutability of the data
                  which is being possible by introducing the smart contract in this webApp which is written in solidity language on etherium blockchain
                  and which makes this WebApp a web 3.0 webApp. 
                </p>
                <p>
                  For any queries or help, feel free to mail me at <a style={{color:'#ff1133'}} href='mailto:deepakba846@gmail.com'> deepakba846@gmail.com</a> , Dm me on insta at <a style={{color:'#ff1133'}} href='https://www.instagram.com/deep_133vaishnav/'>deep_133vaishnav</a>, or chat with me on whatsApp on  7247294834.
                </p>
                <h5>Admin email: admin@gmail.com</h5>
                <h5 style={{marginTop:'-20px'}}>Admin password: Admin@123</h5>
              </div>
            </div>
          </div>
        </>:
        <h1>please login to view this page</h1>
      }
    </div>
  )
}

export default About