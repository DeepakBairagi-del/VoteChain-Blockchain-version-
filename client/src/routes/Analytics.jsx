import React from 'react'
import Navbar from '../components/Navbar'
import AdminNavOptions from '../components/AdminNavOptions'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useStateContext } from '../../context/stateContext';

const Analytics = () => {
  const {state,candidates,totalVotes,admin} = useStateContext()
  const chartData = candidates?.map((item)=>{
      return{
        label: item.name,
        value: item.votes
      }
  })
  
  
  const chartConfigs = {
    type: "column2d", 
    width: "700", 
    height: "400", 
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Election Result Analytics",    
        xAxisName: "Candidates",           
        yAxisName: "Votes",  
        theme: "fusion"              
      },
      data: chartData
    }
  };
  console.log(totalVotes)
  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
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
            <p>Analytics</p>
          </div>
          
          <div style={{ display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}} >
          { state != 'Result' ?
            <div style={{justifyContent:'center'}} >
              <div style={{margin:'15px 20px',display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
                <h2 style={{color:'rgb(14, 88, 152)'}}>Hold On! Analytics will be available when voting is done</h2>
                <img src='https://static.vecteezy.com/system/resources/previews/000/401/738/original/character-illustration-of-people-with-vote-icons-vector.jpg' className='WaitingImage' alt='Voting Image'/>
              </div>
            </div>  : 
            <div>
              <div style={{display:'flex',margin:'30px 30px 60px 30px',width:'100%' ,alignItems:'center' ,justifyContent:'space-evenly'}}>
                <div style={{display:'flex',padding:'15px',backgroundColor:'#00bbff',borderRadius:'3px',alignItems:'center' ,justifyContent:'center'}}>
                  <div>
                    <p style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>{candidates?.length}</p> 
                    <p style={{color:'white', fontWeight:'bold'}}>Candidates</p>
                  </div>
                  <img style={{ width:'10vw', marginLeft:'10px'}} src='https://cdn-icons-png.flaticon.com/128/927/927305.png' alt='image'/>
                </div>
                <div style={{display:'flex',padding:'15px',backgroundColor:'#33dd44',borderRadius:'3px',alignItems:'center' ,justifyContent:'center'}}>
                  <div>
                    <p style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>{totalVotes}</p> 
                    <p style={{color:'white', fontWeight:'bold'}}>Voters</p>
                  </div>
                  <img style={{ width:'10vw', marginLeft:'10px'}} src='https://cdn-icons-png.flaticon.com/128/2473/2473139.png' alt='image'/>
                </div>
              </div>
              
              <ReactFC {...chartConfigs} />
            </div>
          }
          </div>
        </div>
      </>:
      <h1>please login to view this page</h1>
    }  
    </div>
  )
}

export default Analytics