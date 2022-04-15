import React from 'react'

import "./Modal.css"

export default function Modal(props){
  const modalStyle = {
    opacity: (props.visibility ? "100%" : "0%"),
    display: (props.visibility ? "flex" : "none"),
  }

  const frameStyle = {
    width: `${props.vwidth}vw`,
    height: `${props.vheight}vh`
  }

  return(
    <div className="Modal animateContent" style={modalStyle}>
      <div className="Modal-Frame" style={frameStyle}>
        <div className="Modal-Title">
          <h2>{props.title}</h2>
          <button type="button" onClick={() => props.handleVisibility(false)}>X</button>
        </div>
        <div className="Modal-Content">
          {props.children}
        </div>
      </div>
    </div>
   )
}
