import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavbarLink = {
    display: 'block',
    textDecoration: 'none',
    color: 'black'
}

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);

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
                    <Link to='/register' style={NavbarLink}>
                        <div className="navbar-menu-item">REGISTER</div>
                    </Link>
                    <Link to='/login' style={NavbarLink}>
                        <div className="navbar-menu-item">SIGN IN</div>
                    </Link>
                    <Link to='/cart' style={NavbarLink}>
                        <Badge badgeContent={quantity} color="primary" className='cart-icon-wrapper'>
                            <ShoppingCartOutlined className='navbar-cart-icon'/>
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
