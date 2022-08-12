import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';
import '../styles/Register.css'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { isFetching, error } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, {username, password, email})
        console.log(username, password, email);
    }

  return (
    <div className='register-container'>
        <div className="resister-wrapper">
            <h1 className="main-ragister-title">CREATE AN ACCOUNT</h1>
            <form action="#" className='register-form'>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Last name'/>
                <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder='Confirm password'/>
            </form>
            <div className="regiser-aggreement">
                By creating an account, I consent to the proccessing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </div>
            <div className="register-btn-wrapper">
                <button 
                    type='button' 
                    className='register-btn' 
                    disabled={isFetching}
                    onClick={handleClick}
                >
                    CREATE
                </button>
            </div>
            {error && <p className="errorAuth">Invalid username or password...</p>}
        </div>
    </div>
  )
}

export default Register
