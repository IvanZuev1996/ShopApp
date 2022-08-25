import React from 'react';
import classes from './SecNavbar.module.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SecNavbar = () => {
  return (
    <div className={classes.secondNavbarWrapper}>
      <div className={classes.secondNavbarLeftContent}>
        <p className={classes.secondNavbarLink}>For men</p>
        <p className={classes.secondNavbarLink}>For women</p>
        <p className={classes.secondNavbarLink}>For children</p>
      </div>
      <div className={classes.secondNavbarRightContent}>
        <div className={classes.accountLink}>
          <p className={classes.secondNavbarLink}>Personal account</p>
          <AccountCircleOutlinedIcon />
        </div>
        <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default SecNavbar;
