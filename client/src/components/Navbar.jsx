import React from 'react'
import '../routes/LogIn'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { useStateContext } from '../../context/stateContext';

const Navbar = ({NavOptions,User}) => {
  const {currentUser, setCurrentAccount,admin} = useStateContext()
  const handleLogOut = (item) => {
    if(item.link == '/' && currentUser){
      window.localStorage.setItem('currentUser' , JSON.stringify({}))
      setCurrentAccount(null);
      window.localStorage.setItem('currentAccount1', JSON.stringify(null))
    } else if (item.link == '/' && admin){
      window.localStorage.setItem('admin', '')
      setCurrentAccount(null);
      window.localStorage.setItem('currentAccount1', JSON.stringify(null))
    }
  }
  return (
    
      <div className='SideBar'>
        <div className='SideBarTop'>
          <Avatar style={{marginLeft:'10px'}}/>
          
          <p style={{marginLeft:'10px', marginRight:'10px',color:'white',fontWeight:'bold',fontFamily:'sans-serif'}}>{User}</p>
        </div>
        {NavOptions.map((item,key) => (
          <Link key={key} to={item.link} style={{textDecoration:'none'}}>
            <div className='Option' onClick={() => handleLogOut(item)} id={window.location.pathname == item.link ? 'active' : ''}>
              {<item.icon style={{marginLeft:'10px',color:'white'}}/>}
              <p style={{marginLeft:'20px', marginRight:'10px',color:'white'}}>{item.title}</p>
            </div>
          </Link>
         
        ))}
      </div>

    
  )
}

export default Navbar