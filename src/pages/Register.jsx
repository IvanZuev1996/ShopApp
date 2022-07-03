import React from 'react'
import '../styles/Register.css'

const Register = () => {
  return (
    <div className='register-container'>
        <div className="resister-wrapper">
            <h1 className="main-ragister-title">CREATE AN ACCOUNT</h1>
            <form action="#" className='register-form'>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Last name'/>
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm password'/>
            </form>
            <div className="regiser-aggreement">
                By creating an account, I consent to the proccessing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </div>
            <div className="register-btn-wrapper">
                <button type='button' className='register-btn'>CREATE</button>
            </div>
        </div>
    </div>
  )
}

export default Register
