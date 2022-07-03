import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import '../styles/Product.css'
import { colors } from '../data.js'
import { selectSizeItems } from '../data.js'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'

const FilterColor = styled.div`
    margin-left: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`

const FilterSize = styled.div`
    margin-left: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    user-select: none;
`

const Product = () => {
  return (
    <div className='product-container'>
        <Navbar/>
        <Announcement/>
        <div className="product-content-wrapper">
            <div className="product-image-wrapper">
                <img 
                    src="https://static.street-beat.ru/upload/iblock/9d9/9d9ab554055b93912bc33d68bccf2190.jpg"
                    className='product-image'
                />
            </div>
            <div className="product-info-wrapper">
                <h1 className="main-product-title">Reebok Classic x Card B Classic Leather Volume 2</h1>
                <p className="product-desc">Material:Textile 60%, Leather 40%. * The quality of the product, its safety for life, health of consumers, the environment, is confirmed in accordance with the requirements of legislation.</p>
                <div className="product-price">$399</div>
                <div className="product-filter-container">
                    <div className="product-filter">
                        <div className="product-filter-title">Color</div>
                        {colors.map(color =>
                            <FilterColor color={color.title} key={color.id}></FilterColor>
                        )}
                    </div>
                    <div className="product-filter">
                        <div className="product-filter-title">Size</div>
                        {selectSizeItems.map(item =>
                            <FilterSize key={item.id}>{item.title}</FilterSize>
                        )}
                    </div>
                </div>
                <div className="product-add-to-cart">
                    <div className="product-amount-wrapper">
                        <div className="dicrement"><Remove/></div>
                        <div className="product-amount">1</div>
                        <div className="increment"><Add/></div>
                    </div>
                    <a href="#" className="btn-add-to-cart">ADD TO CART</a>
                </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Product
