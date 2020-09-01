import React, { Fragment } from 'react';
import './Login.css';

function Login() {
  return (
      <Fragment>
        <div className="App-body" id="app_body">
        <p>Login to access the full dashboard</p>
        <label>Email: <input type="text" name="email"></input></label>
        <label>Password: <input type="password" name="password"></input></label>
        <button>OK</button>
        </div>
      </Fragment>
  );
}

export default Login;
