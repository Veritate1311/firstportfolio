import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About'; 
import CustomFooter from './components/Footer/myFooter';
import Skills from './components/skill/skill';
import Connect from './components/Connect/Connect';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Connect />
      <CustomFooter />
    </div>
  );
}

export default App;
