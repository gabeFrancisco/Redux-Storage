import React from "react";

import './Header.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
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
      </ul>
    </div>
  );
}

export default Header;
