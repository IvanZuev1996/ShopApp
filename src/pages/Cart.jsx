import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Cart.css'
import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'

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
  return (
    <div className='cart-container'>
        <Navbar/>
        <Announcement/>
        <div className="cart-wrapper">
            <h1 className="main-cart-title">YOUR BAG</h1>
            <div className="top-cart">
                <a href="#" className="cart-btn-back">GO BACK</a>
                <div className="cart-desc">
                    <p className="cart-desc-title">Shopping Bag(2)</p>
                    <p className="cart-desc-title">Your WishList(0)</p>
                </div>
                <a href="#" className="cart-btn-checkout">CHECKOUT NOW</a>
            </div>
            <div className="bottom-cart">
                <div className="cart-info">
                    <div className="cart-product-wrapper">
                        <div className="cart-product-info-details">
                            <img 
                                src="https://static.street-beat.ru/upload/iblock/9d9/9d9ab554055b93912bc33d68bccf2190.jpg"
                                className='cart-product-img'
                            />
                            <div className="cart-product-info-title">
                                <div className="cart-product-id"><b>ID</b>: 421321</div>
                                <div className="cart-product-title"><b>Product</b>: Reebok Classic x Card B Classic Leather Volume 2</div>
                                <div className="cart-product-desc">Material:Textile 60%, Leather 40%.</div>
                                <div className="cart-product-color">
                                    <div className="cart-product-color-title"><b>Color</b>: </div>
                                    <ProductColor color='pink'></ProductColor>
                                </div>
                            </div>
                        </div>
                        <div className="cart-product-price-details">
                            <div className="cart-product-amount-container">
                                <Remove/>
                                <div className="cart-product-amount">1</div>
                                <Add/>
                            </div>
                            <div className="cart-product-price-wrapper">
                                $199.99
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="cart-product-wrapper">
                        <div className="cart-product-info-details">
                            <img 
                                src="https://static.street-beat.ru/upload/iblock/20c/20cfa45677f768a27ef34d71026ad9cf.jpg"
                                className='cart-product-img'
                            />
                            <div className="cart-product-info-title">
                                <div className="cart-product-id"><b>ID</b>: 4213211</div>
                                <div className="cart-product-title"><b>Product</b>:  Reebok Classic Club C 85</div>
                                <div className="cart-product-desc">Surround yourself with the present.</div>
                                <div className="cart-product-color">
                                    <div className="cart-product-color-title"><b>Color</b>: </div>
                                    <ProductColor color='gray'></ProductColor>
                                </div>
                            </div>
                        </div>
                        <div className="cart-product-price-details">
                            <div className="cart-product-amount-container">
                                <Remove/>
                                <div className="cart-product-amount">1</div>
                                <Add/>
                            </div>
                            <div className="cart-product-price-wrapper">
                                $249.99
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-summary">
                    <h1 className="cart-product-summary-title">ORDER SUMMARY</h1>
                    <SummaruItem>
                        <div className="cart-product-summary-text">Subtotal: </div>
                        <div className="cart-product-summary-price">$ 199.99</div>
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
                        <div className="cart-product-summary-price">$ 249.99</div>
                    </SummaruItem>
                    <SummaruItem>
                        <a href="#" className="cart-summary-btn-checkout">CHECKOUT NOW</a>
                    </SummaruItem>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart
