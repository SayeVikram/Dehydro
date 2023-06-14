import React from 'react';
import Navbar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import GeoLink from './GeoLink'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/geo' element={<GeoLink/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;