import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {useNavigate} from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <button class="nav-link active" aria-current="page" onClick = {() => {navigate('/')}}>
            Home
            </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" onClick = {() => {navigate('/geo')}} >
                Geo
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;