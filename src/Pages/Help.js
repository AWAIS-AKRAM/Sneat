import React from 'react'
import Slidebar from '../Components/Slidebar'
import Centerbar from '../Components/Centerbar'
import img30 from '../assets/Vector (12).png'
import img31 from'../assets/Container.png'


export default function Help() {
  return (
    <div style={{display:'flex'}}>
        <div style={{flexDirection:'column',gap:10}}>
        <Slidebar smallpic={img30} ptag={'Email'} lastpic={img31}/>  
         
        </div>
        <Centerbar/>    
    </div>
  )
}
