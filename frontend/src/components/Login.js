import React from 'react';
import './Login.css';

function Login() {

  function Log() {
    const login = document.getElementById('login').value
    const password = document.getElementById('pass').value

    const data = {
      login: login,
      password: password
    }

    console.log(data)

    const api = 'http://127.0.0.1:9001/login'

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((result) => result.json())
    .then((result) => {
      console.log(result)
      localStorage.setItem('token', result.token)
    })
  }

  return (
    <div className="Login">
      <h1>Логин:</h1>
      <input id='login' placeholder='Логин'/>
      <input id='pass' placeholder='Пароль'/>
      <button id='send' onClick={Log}>Войти</button>
    </div>
  );
}

export default Login;