import React from 'react';
import { useState } from 'react';
import { addProduct } from '../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { publicRequest, userRequest } from '../requestMethods';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getProduct = async (id) => {
    try {
      const res = await publicRequest.get(`/products/find/${id}`);
      return res.data;
    } catch (err) {}
  };

  const handleClick = (e) => {
    e.preventDefault();
    const getCart = async (user) => {
      const res = await userRequest.get(`/carts/find/${user._id}`);
      const userCart = res.data;
      userCart.products.map(async (el) => {
        const response = await getProduct(
          el._id.includes('+') ? el._id.substr(0, el._id.indexOf('+')) : el._id
        );
        dispatch(
          addProduct({ ...response, quantity: el.quantity, size: el.size })
        );
      });
    };
    login(dispatch, { username, password }, getCart);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="main-login-title">SIGN IN</h1>
        <form action="#" className="login-form">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          type="button"
          className="login-btn"
          onClick={handleClick}
          disabled={isFetching}
        >
          LOGIN
        </button>
        {error && <p className="errorAuth">Invalid username or password...</p>}
        <div className="login-links">
          <a href="" className="forgot-password">
            DO NOT YOU REMEMBER THE PASSWARD?
          </a>
          <a className="login-create-account-link">CREATE A NEW ACCOUNT</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
