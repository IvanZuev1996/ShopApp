import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-wrapper'>
            <div className="left-navbar-content">
                <span className="navbar-lan">
                    EN
                </span>
                <div className="navbar-search-container">
                    <input type="text" className='navbar-input' placeholder='Search'/>
                    <Search className='navbar-search-icon'/>
                </div>
            </div>
            <div className="center-navbar-content">
                <h1 className='navbar-logo'>GET. YOUR. SNEAKERS</h1>
                <h1 className='navbar-logo-mobile'>GET.</h1>
            </div>
            <div className="right-navbar-content">
                <div className="navbar-menu-item">REGISTER</div>
                <div className="navbar-menu-item">SIGN IN</div>
                <Badge badgeContent={5} color="primary" className='cart-icon-wrapper'>
                    <ShoppingCartOutlined className='navbar-cart-icon'/>
                </Badge>
            </div>
        </div>
    </div>
  )
}

export default Navbar
