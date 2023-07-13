import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  let [mode, setMode] = useState('light')
  let [alert, setAlert] = useState(null)
  // let showAlert=(message,type)=>{
  //       setAlert={
  //         message:alert,
  //         type:
  //       }
  // }
  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      setAlert("Dark mode enabled");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setAlert("Light mode enabled");
    }
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }
  return (
    <div>
      <div>
        <Navbar title="Wordapp" about="About" mode={mode} toggleMode={toggleMode} />
        <div>
          {alert !== null &&
            <Alert alert={alert} />}
        </div>
        <div className="container my-5">
          <TextForm heading="Write to Convert in UpperCase" mode={mode} />
        </div >
      </div>
    </div>
  );
}

export default App;
