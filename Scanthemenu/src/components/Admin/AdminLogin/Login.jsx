import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "./Login.css"
const Login = () => {

  const history = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      if (response.data.success) {
        alert('Login successful!');
        history("/adminDash")
      } else {
        alert('Login failed: ' + response.data.message);
      }
    } catch (error) {
      alert('Error during login:', error);
    }

  };

  return (
    <>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

    </>
  )
}

export default Login