import React, { useState } from 'react';

import Address from '../components/ProfileTabs/Address';
import LoveList from '../components/ProfileTabs/LoveList';
import Orders from '../components/ProfileTabs/Orders';
import Profile from '../components/ProfileTabs/Profile';
import Navbar from '../components/Static/Navbar/Navbar';
import SecNavbar from '../components/Static/SecNavbar/SecNavbar';
import ChangePasswordModal from '../components/UI/MyModal/ChangePasswordModal';
import MyModal from '../components/UI/MyModal/MyModal';

import '../styles/UserAccount.scss';

const UserAccount = ({ activeRoute = 'Profile' }) => {
    const [modal, setModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);
    const [activeBtn, setActiveBtn] = useState(activeRoute);

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
