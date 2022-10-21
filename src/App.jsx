
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
      
    <Navbar title="TEXTDEC"/>
    <Routes>
      <Route exact path="/" element={<TextForm heading="Enter text to analyze"/>}/>
      <Route exact path="about" element={<About />} />
    </Routes>
    
 
    </>
  );
}

export default App;
