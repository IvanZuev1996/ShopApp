import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import SecNavbar from '../components/UI/SecNavbar/SecNavbar';
import { useInput } from '../hooks/useInput';
import { userRequest } from '../requestMethods';
import '../styles/UserAccount.css';

const UserAccount = () => {
  const user = useSelector((state) => state.user.currentUser);
  const name = useInput('', {});
  const lastName = useInput('', {});
  const userName = useInput(`${user.username}`, { isEmpty: false });
  const email = useInput(`${user.email}`, { isEmpty: false, isEmail: true });

  const [modal, setModal] = useState(false);

  const updateUser = async () => {
    try {
      await userRequest(user.accessToken).put(`/users/${user._id}`, {
        username: userName.value,
        email: email.value,
      });
      setModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {modal && (
        <div className="update-user-modal" onClick={() => setModal(false)}>
          <div className="modal-message" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">Ваши изменения успешно сохранены</div>
            <div className="close-modal-btn">
              <CloseOutlinedIcon
                style={{ width: '30px', height: '30px' }}
                onClick={() => setModal(false)}
              />
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <SecNavbar />
      <div className="user-account-wrapper">
        <div className="user-tabs-wrapper">
          <div className="user-tab active-tab">Profile</div>
          <div className="user-tab">Orders</div>
          <div className="user-tab">Love</div>
          <div className="user-tab">Address</div>
        </div>
        <div className="user-info-wrapper">
          <h2 className="tabs-name">Profile</h2>
          <div className="user-info">
            <p className="user-input-title">Name</p>
            <input
              type="text"
              className="user-input"
              placeholder="Name"
              value={name.value}
              onChange={name.onChange}
              onBlur={name.onBlur}
            />
          </div>
          <div className="user-info">
            <p className="user-input-title">LastName</p>
            <input
              type="text"
              className="user-input"
              placeholder="LastName"
              value={lastName.value}
              onChange={lastName.onChange}
              onBlur={lastName.onBlur}
            />
          </div>
          <div className="user-info">
            <p className="user-input-title">UserName</p>
            <input
              type="text"
              className="user-input"
              placeholder="UserName"
              value={userName.value}
              onChange={userName.onChange}
              onBlur={userName.onBlur}
            />
          </div>
          {userName.isDirty && userName.isEmpty && (
            <div
              className="not-valid-massange"
              style={{ textAlign: 'center', marginTop: '10px' }}
            >
              Поле не может быть пустым
            </div>
          )}
          <div className="user-info">
            <p className="user-input-title">Email</p>
            <input
              type="text"
              className="user-input"
              placeholder="Email"
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
              required
            />
          </div>
          {email.isDirty && email.emailError && (
            <div
              className="not-valid-massange"
              style={{ textAlign: 'center', marginTop: '10px' }}
            >
              Введите корректный email
            </div>
          )}
          <div className="save-btn-wrapper">
            <button
              className="save-info-btn"
              disabled={!email.inputValid || !userName.inputValid}
              onClick={updateUser}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
