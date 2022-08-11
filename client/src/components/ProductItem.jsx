import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';
import '../styles/Products.css';

const linkStyle = {
  color: 'black',
};

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const updateCart = () => {
    dispatch(addProduct({ ...item, quantity: 1 }));
  };

  return (
    <div className="product-item-container">
      <img src={item.img} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{item.title}</h2>
        <div className="products-icons">
          <div className="cart-icon" onClick={updateCart}>
            <ShoppingCartOutlined />
          </div>
          <div className="cart-icon">
            <Link to={`/product/${item._id}`} style={linkStyle}>
              <SearchOutlined />
            </Link>
          </div>
          <div className="cart-icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
        <h2 className="product-price">{`${item.price} ₽`}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
