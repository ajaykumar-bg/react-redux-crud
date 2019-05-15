import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main'
import Navbar from './components/Navbar'

import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Main/>
      </div>
    </div>
  );
}

export default App;
