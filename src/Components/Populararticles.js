import React from 'react'

export default function Populararticles(props) {
  return (
    <div className='container'>
        <div  style={{height:276,width:308,alignItems:'center',justifyContent:'center',textAlign:'center'}}>
            <img style={{marginTop:24}} src={[props.Rocket]} alt="" />
            <h3 style={{color:props.htagcolor}}>{[props.htag]}</h3>
            <p style={{color:props.textcolor}}>{[props.ptag]}</p>
            <button style={{width:90,height:24 ,color:props.buttoncolor}}>{[props.button]} Read More</button>

        </div>
    </div>
    
  )
}
