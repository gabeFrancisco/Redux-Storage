import React from "react";

import './Header.css'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="Header">
      <div className="Icons">
        <img src="https://icon-library.com/images/react-icon/react-icon-15.jpg" alt="React Logo"/>
        <img id="redux" src="https://cdn.iconscout.com/icon/free/png-256/redux-3628430-3032265.png" alt="Redux logo"/>
      </div>
      <div className="Title">
        <h1>Redux-Storage</h1>
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
        <li>
          <Link to="/customers">CUSTOMERS</Link>
        </li>
        <li>
          <Link to="/sales">SALES</Link>
        </li>
        <li>
          <Link to="/notifications">NOTIFICATIONS</Link>
        </li>
      </ul>
    </div>
  );
}