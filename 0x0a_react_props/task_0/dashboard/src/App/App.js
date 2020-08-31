import React from 'react';
import logo from '../assets/logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body" id="app_body">
        <p>Login to access the full dashboard</p>
        <label>Email: <input type="text" name="email"></input></label>
        <label>Password: <input type="password" name="password"></input></label>
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
