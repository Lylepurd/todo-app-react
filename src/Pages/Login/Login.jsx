import React from 'react';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import './Login.css';



export function Login({ setIsAuth }) {

  
  
  

  return(
    <>
    <h1>Login</h1>
    <form className='login-form'>
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
      <button id='login-btn'>Login</button>
    </form>

    <Link className='admin-link' to="/admin-Login">Admin</Link>
    </>
  )
}