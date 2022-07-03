import React from 'react'
import '../styles/Login.css'

const Login = () => {
  return (
    <div className='login-container'>
        <div className="login-wrapper">
            <h1 className="main-login-title">SIGN IN</h1>
            <form action="#" className='login-form'>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
            </form>
            <button type='button' className='login-btn'>LOGIN</button>
            <div className="login-links">
              <a href="" className="forgot-password">
                DO NOT YOU REMEMBER THE PASSWARD?
              </a>
              <a href="" className="login-create-account-link">
                CREATE A NEW ACCOUNT
              </a>
            </div>
        </div>
    </div>
  )
}

export default Login
