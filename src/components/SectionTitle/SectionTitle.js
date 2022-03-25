import React from 'react'

import './SectionTitle.css'

export default function SectionTitle(props){
  return(
    <div className='SectionTitle'>
      <h1>{props.title}</h1>
      <hr/>
      <h3>{props.subtitle}</h3>
    </div>
  )
}

