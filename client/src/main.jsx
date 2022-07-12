import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import App from './routes/App'
import LogIn from './routes/LogIn'
import AdminLogIn from './routes/AdminLogIn'
import './index.css'
import SignUp from './routes/SignUp';
import CurrentState from './routes/CurrentState';
import AddCandidate from './routes/AddCandidate';
import Analytics from './routes/Analytics';
import CandidateDetails from './routes/CandidateDetails';
import VotingArea from './routes/VotingArea';
import VoterRegistration from './routes/VoterRegistration';
import Result from './routes/Result';
import About from './routes/About';
import { Toaster } from 'react-hot-toast'
import { StateContext } from '../context/stateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContext>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='LogIn' element={<LogIn/>}/>
          <Route path='AdminLogIn' element={<AdminLogIn/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='CurrentState' element={<CurrentState/>}/>
          <Route path='AddCandidate' element={<AddCandidate/>}/>
          <Route path='Analytics' element={<Analytics/>}/>
          <Route path='CandidateDetails' element={<CandidateDetails/>}/>
          <Route path='VotingArea' element={<VotingArea/>}/>
          <Route path='VoterRegistration' element={<VoterRegistration/>}/>
          <Route path='Result' element={<Result/>}/>
          <Route path='About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
)
