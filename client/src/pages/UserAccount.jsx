import React from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import SecNavbar from '../components/UI/SecNavbar/SecNavbar';
import { useState } from 'react';
import '../styles/UserAccount.css';
import MyModal from '../components/UI/MyModal/MyModal';
import Orders from '../components/Orders';
import LoveList from '../components/LoveList';
import Address from '../components/Address';
import ChangePasswordModal from '../components/UI/MyModal/ChangePasswordModal';

const UserAccount = () => {
  const [modal, setModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [activeBtn, setActiveBtn] = useState('Profile');

  const updateActiveBtn = (e) => {
    setActiveBtn(e.target.innerHTML);
  };

  const changeClass = (component) =>
    activeBtn === component ? 'user-tab active-tab' : 'user-tab';

  return (
    <div>
      <MyModal modal={modal} setModal={setModal} />
      <ChangePasswordModal modal={passwordModal} setModal={setPasswordModal} />
      <Navbar />
      <SecNavbar />
      <div className="user-account-wrapper">
        <div className="user-tabs-wrapper">
          <div
            className={changeClass('Profile')}
            onClick={(e) => updateActiveBtn(e)}
          >
            Profile
          </div>
          <div
            className={changeClass('Orders')}
            onClick={(e) => updateActiveBtn(e)}
          >
            Orders
          </div>
          <div
            className={changeClass('Love')}
            onClick={(e) => updateActiveBtn(e)}
          >
            Love
          </div>
          <div
            className={changeClass('Address')}
            onClick={(e) => updateActiveBtn(e)}
          >
            Address
          </div>
        </div>
        {activeBtn === 'Profile' && (
          <Profile setModal={setModal} setPasswordModal={setPasswordModal} />
        )}
        {activeBtn === 'Orders' && <Orders />}
        {activeBtn === 'Love' && <LoveList />}
        {activeBtn === 'Address' && <Address />}
      </div>
    </div>
  );
};

export default UserAccount;
