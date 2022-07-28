import React, { useEffect } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Cart.css'
import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useState } from 'react'
import {userRequest} from '../requestMethods'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const KEY = process.env.REACT_APP_STRIPE;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-left: 10px;
`
const SummaruItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'}
`

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post('http://localhost:5000/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                })
                navigate('/success', {state: res.data});
            } catch (err) {

            }
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate]);

    return (
        <div className='cart-container'>
            <Navbar/>
            <Announcement/>
            <div className="cart-wrapper">
                <h1 className="main-cart-title">YOUR BAG</h1>
                <div className="top-cart">
                    <a href="#" className="cart-btn-back">GO BACK</a>
                    <div className="cart-desc">
                        <p className="cart-desc-title">Shopping Bag(0)</p>
                        <p className="cart-desc-title">Your WishList(0)</p>
                    </div>
                    <a href="#" className="cart-btn-checkout">CHECKOUT NOW</a>
                </div>
                <div className="bottom-cart">
                    <div className="cart-info">
                        {cart.products.map(product => (
                            <div className="cart-product-wrapper" key={product._id}>
                                <div className="cart-product-info-details">
                                    <img 
                                        src={product.img}
                                        className='cart-product-img'
                                    />
                                    <div className="cart-product-info-title">
                                        <div className="cart-product-id"><b>ID</b>: {product._id.slice(0,7)}</div>
                                        <div className="cart-product-title"><b>Product</b>: {product.title}</div>
                                        <div className="cart-product-desc">{product.desc}</div>
                                        <div className="cart-product-color">
                                            <div className="cart-product-color-title"><b>Color</b>: </div>
                                            <ProductColor color={product.color}></ProductColor>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-product-price-details">
                                    <div className="cart-product-amount-container">
                                        <Remove/>
                                        <div className="cart-product-amount">{product.quantity}</div>
                                        <Add/>
                                    </div>
                                    <div className="cart-product-price-wrapper">
                                        {product.price * product.quantity}₽
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr></hr>
                    </div>
                    <div className="cart-summary">
                        <h1 className="cart-product-summary-title">ORDER SUMMARY</h1>
                        <SummaruItem>
                            <div className="cart-product-summary-text">Subtotal: </div>
                            <div className="cart-product-summary-price">{cart.total} ₽</div>
                        </SummaruItem>
                        <SummaruItem>
                            <div className="cart-product-summary-text">Estimated Shipping:</div>
                            <div className="cart-product-summary-price">$ 5.90</div>
                        </SummaruItem>
                        <SummaruItem>
                            <div className="cart-product-summary-text">Shipping Discount: </div>
                            <div className="cart-product-summary-price">$ -5.90</div>
                        </SummaruItem>
                        <SummaruItem type="total">
                            <div className="cart-product-summary-text">Total: </div>
                            <div className="cart-product-summary-price">{cart.total} ₽</div>
                        </SummaruItem>
                        <StripeCheckout 
                            name='Get Shop' 
                            image='https://res.cloudinary.com/admitad-gmbh/image/upload/v1635931648/na3glepmpwzdqog5weww.jpg'
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total} ₽`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button className='cart-summary-btn-checkout'>Pay Now</button>
                        </StripeCheckout> 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
