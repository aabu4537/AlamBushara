import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import PreLoader from './components/PreLoader'; 

function App() {
  return (
    <Router>
          <PreLoader />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;