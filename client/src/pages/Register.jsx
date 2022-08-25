import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';
import { publicRequest, userRequest } from '../requestMethods';
import '../styles/Register.scss';

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isEmail':
          const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
          regex.test(value) ? setEmailError(false) : setEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, emailError]);

  return { isEmpty, emailError, inputValid };
};

const useInput = (initionalVlue, validations) => {
  const [value, setValue] = useState(initionalVlue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
};

const Register = () => {
  const name = useInput('', { isEmpty: true });
  const lastName = useInput('', { isEmpty: true });
  const userName = useInput('', { isEmpty: true });
  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true });
  const confirmPassword = useInput('', { isEmpty: true });
  const { isFetching, userError } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const createCart = async (user) => {
      const res = await userRequest(user.accessToken).post('/carts', {
        _id: user._id,
        userId: user._id,
        products: [],
      });
    };
    register(dispatch, { userName, password, email }, createCart);
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
            {name.isDirty && name.isEmpty && (
              <div className="not-valid-massange">
                Поле не может быть пустым
              </div>
            )}
            <input
              value={name.value}
              onChange={name.onChange}
              onBlur={name.onBlur}
              type="text"
              className="input-field"
              required
            />
            <label className="input-label">Name</label>
          </div>
          <div className="input">
            {lastName.isDirty && lastName.isEmpty && (
              <div className="not-valid-massange">
                Поле не может быть пустым
              </div>
            )}
            <input
              value={lastName.value}
              onChange={lastName.onChange}
              onBlur={lastName.onBlur}
              type="text"
              className="input-field"
              required
            />
            <label className="input-label">Last Name</label>
          </div>
          <div className="input">
            {userName.isDirty && userName.isEmpty && (
              <div className="not-valid-massange">
                Поле не может быть пустым
              </div>
            )}
            <input
              type="text"
              className="input-field"
              required
              value={userName.value}
              onChange={userName.onChange}
              onBlur={userName.onBlur}
            />
            <label className="input-label">UserName</label>
          </div>
          <div className="input">
            {email.isDirty && email.isEmpty && (
              <div className="not-valid-massange">
                Поле не может быть пустым
              </div>
            )}
            {email.isDirty && email.emailError && !email.isEmpty && (
              <div className="not-valid-massange">Введите корректный email</div>
            )}
            <input
              type="text"
              className="input-field"
              required
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
            />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            {password.isDirty && password.isEmpty && (
              <div className="not-valid-massange">
                Поле не может быть пустым
              </div>
            )}
            <input
              type="password"
              className="input-field"
              required
              value={password.value}
              onChange={password.onChange}
              onBlur={password.onBlur}
            />
            <label className="input-label">Password</label>
          </div>
          <div className="input">
            {confirmPassword.isDirty && confirmPassword.isEmpty && (
              <div className="not-valid-massange">
                Поле не может быть пустым
              </div>
            )}
            <input
              type="password"
              className="input-field"
              required
              value={confirmPassword.value}
              onChange={confirmPassword.onChange}
              onBlur={confirmPassword.onBlur}
            />
            <label className="input-label">Confirm password</label>
          </div>
          <div className="action">
            <button
              className="action-button"
              onClick={handleClick}
              disabled={
                isFetching ||
                !name.inputValid ||
                !lastName.inputValid ||
                !userName.inputValid ||
                !email.inputValid ||
                !password.inputValid ||
                !confirmPassword.inputValid
              }
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
