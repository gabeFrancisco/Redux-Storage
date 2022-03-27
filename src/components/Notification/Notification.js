import React from 'react'

import './Notification.css'

export default function Notification(props){
  return(
    <div className={`Notification ${props.color}`}>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </div>
  )
}