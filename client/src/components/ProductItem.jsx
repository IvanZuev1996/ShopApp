import React from 'react'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import '../styles/Products.css'
import { Link } from 'react-router-dom';

const linkStyle = {
  color: 'black'
};

const ProductItem = ({item}) => {
  return (
    <div className='product-item-container'>
        <img src={item.img} className='product-image'/>
        <div className="product-info">
            <h2 className='product-title'>{item.title}</h2>
            <div className="products-icons">
                <div className="cart-icon"><ShoppingCartOutlined/></div>
                <div className="cart-icon">
                  <Link to={`/product/${item._id}`} style={linkStyle}>
                    <SearchOutlined/>
                  </Link>
                </div>
                <div className="cart-icon"><FavoriteBorderOutlined/></div>
            </div>
            <h2 className='product-price'>{`${item.price} ₽`}</h2>
        </div>
    </div>
  )
}

export default ProductItem
