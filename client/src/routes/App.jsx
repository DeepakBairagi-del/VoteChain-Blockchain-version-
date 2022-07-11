import './LogIn.css'
import { Link } from 'react-router-dom'
import MainImage from '../components/MainImage'
const App = () =>{

  return (
    <div className="App ">
      <MainImage/>
      <div className='second-half'>
        <h2 style={{fontWeight:'bold',color:'white',fontSize:'30px'}}>Vote-Chain</h2>
        <div className='login-buttons'>
          <Link to= '/LogIn'>
            <button className='button2' >USER LOGIN</button>
          </Link>
          <Link to='/AdminLogIn'>
              <button className='button2' >ADMIN LOGIN</button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default App
