import React from 'react'

export default function Container(props){
  return(
    <div style={{margin: '2rem'}}>
      {props.children}
    </div>
  )
}
