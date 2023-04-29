import React from 'react'

export default function Knowledgebase(props) {
  return (
    <div className='container2' style={{height:209,width:308,}}>
        <div style={{display:'flex'}}>
            <img style={{height:34,width:34,marginTop:16}} src={[props.alpha]} alt="" />
            <h3 style={{marginLeft:10,color:'#32475C'}}>{[props.htag]}</h3>
        </div>
        <ul style={{color:'#696CFF'}}>
        <li>{[props.li]}</li>
        <li>{[props.li2]}</li>
        <li>{[props.li3]}</li>
        </ul>
        <p style={{color:'#696CFF',marginLeft:20}}>{[props.ptag]}</p>

    </div>
  )
}
