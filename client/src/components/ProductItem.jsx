import React from 'react'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import '../styles/Products.css'

const ProductItem = ({item}) => {
  return (
    <div className='product-item-container'>
        <img src={item.img} className='product-image'/>
        <div className="product-info">
            <h2 className='product-title'>{item.title}</h2>
            <div className="products-icons">
                <div className="cart-icon"><ShoppingCartOutlined/></div>
                <div className="cart-icon"><SearchOutlined/></div>
                <div className="cart-icon"><FavoriteBorderOutlined/></div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
