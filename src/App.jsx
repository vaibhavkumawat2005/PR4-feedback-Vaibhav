import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider from './components/Slider';
import Card from './components/Card';










function App() {
  return (
    <>
    <div className='bg-dark'>
      <Navbar/>
      <div className='mb-1'></div>
     
      <Slider />
      <Card/>

   
     
      
      
      </div>
    </>
  )
}

export default App
