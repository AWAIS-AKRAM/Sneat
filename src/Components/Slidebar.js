import React from 'react'
import img26 from '../assets/sneat-logo.png'
import img27 from'../assets/handle.png'
import img28 from '../assets/Vector (11).png'
import img29 from '../assets/Vector (2).png'

export default function Slidebar(props) {
  return (
    <div style={{height:2340,width:260}}>
      <div style={{display:'flex'}}>
      <img style={{height:29,width:19,marginLeft:32,marginTop:29}} src={img26} alt="" />
      <h1 style={{color:'#32475C',marginLeft:10}}>Sneat</h1>
      <img style={{height:22,width:22 ,marginLeft:102,marginTop:32}} src={img27} alt="" />
      </div>


      <div style={{display:'flex' ,height:44,width:228,backgroundColor:'wheat',marginLeft:15}}>
      <img style={{height:20,width:20,marginLeft:18,marginTop:12}} src={img28} alt="" />
      <h3 style={{color:'#696CFF',marginLeft:20,marginTop:10}}>Dashboards</h3>
      <img style={{height:7,width:11,marginLeft:20,marginTop:19}} src={img29} alt="" />
      </div>

      <ul style={{color:'#32475C'}}>
        <li>eCommerce</li>
        <li>CRM</li>
        <li>Analytics</li>
      </ul>
      <p style={{color:'#32475C' ,marginLeft:32,marginTop:25}}>APPS & PAGES</p>
        
       <div style={{display:'flex'}}>
        <img style={{height:16,width:20,marginLeft:34,marginTop:14}} src={[props.smallpic]} alt="" />
        <p style={{marginLeft:15,marginTop:10,color:'#32475C'}}>{[props.ptag]}</p>
        <img style={{height:20,width:24,marginLeft:80,marginTop:10}} src={[props.lastpic]} alt="" />
       </div>
    </div>
  )
}
