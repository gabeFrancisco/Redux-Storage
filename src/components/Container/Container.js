import React from 'react'

function Container(props){
  return(
    <div style={{margin: '4rem'}}>
      {props.children}
    </div>
  )
}

export default Container