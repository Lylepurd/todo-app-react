import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { db } from './db';
import './adminLogin.css';

export function AdminLogin({ setIsAuth }) {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  let navigate = useNavigate();

  const adminSignin = (event) => {
    event.preventDefault();
    const { userName, password } = formData;

    for (let i = 0; i < db.length; i++) {
      let admin = db[i];
      if (userName === admin.userName && password === admin.password) {
        setIsAuth(true);
        
        // Save authentication status to local storage
        localStorage.setItem('isAuth', 'true');
        
        // Navigate to the home page
        navigate('/home');
        break;
      }
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <h1>Admin Login</h1>
      <form className='login-form' onSubmit={adminSignin}>
        <input 
          type="text" 
          placeholder='username' 
          name='userName' 
          value={formData.userName} 
          onChange={handleInputChange}
          autoComplete='off'
        />
        <input 
          type="password" 
          placeholder='password' 
          name='password' 
          value={formData.password} 
          onChange={handleInputChange}
          autoComplete='off'
        />
        <button type='submit' id='log-btn'>Login</button>
      </form>
    </>
  )
}
