import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {useNavigate} from 'react-router-dom';
import './NavBar.css';


function Navbar() {
  const navigate = useNavigate();
  return(
  <nav>
  <div>
      <ul >
        <li >
          <button class="as-text" onClick = {() => {navigate('/')}}>
            Home
            </button>
        </li>
        <li >
          <button class="as-text" onClick = {() => {navigate('/geo')}} >
                Geo
          </button>
        </li>
      </ul>
    
  </div>
  </nav>
  );
}

export default Navbar;