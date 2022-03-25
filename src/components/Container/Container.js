import React from 'react'

export default function Container(props){
  return(
    <div style={{margin: '4rem'}}>
      {props.children}
    </div>
  )
}
