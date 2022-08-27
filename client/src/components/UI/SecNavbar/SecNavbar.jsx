import React, { useState } from 'react';
import classes from './SecNavbar.module.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SecNavbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className={classes.secondNavbarWrapper}>
      <div className={classes.secondNavbarLeftContent}>
        <p className={classes.secondNavbarLink}>For men</p>
        <p className={classes.secondNavbarLink}>For women</p>
        <p className={classes.secondNavbarLink}>For children</p>
      </div>
      <div className={classes.secondNavbarRightContent}>
        <Link to={user ? `/personal` : '/login'} style={{ color: 'black' }}>
          <div className={classes.accountLink}>
            <p className={classes.secondNavbarLink}>Personal account</p>
            <AccountCircleOutlinedIcon />
          </div>
        </Link>
        <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default SecNavbar;
