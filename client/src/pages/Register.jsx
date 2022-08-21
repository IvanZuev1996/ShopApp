import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';
import { publicRequest, userRequest } from '../requestMethods';
import '../styles/Register.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { isFetching, userError } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const createCart = async (user) => {
      const res = await userRequest.post('/carts', {
        _id: user._id,
        userId: user._id,
        products: [],
      });
    };
    register(dispatch, { username, password, email }, createCart);
  };

  return (
    <div className="register-container">
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            REGISTER
            <small>Welcome...</small>
          </h2>
        </div>
        <form className="card-form">
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Name</label>
          </div>
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Last Name</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="input-label">NickName</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input
              type="password"
              className="input-field"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="input-label">Password</label>
          </div>
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Confirm password</label>
          </div>
          <div className="action">
            <button
              className="action-button"
              onClick={handleClick}
              disabled={isFetching}
            >
              GET STARTED!
            </button>
          </div>
          <div className="regiser-aggreement">
            By creating an account, I consent to the proccessing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
