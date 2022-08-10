import React from 'react'
import { Link } from 'react-router-dom';

const SlideItem = ({sliderItem}) => {
  return (
    <div className="slide" key={sliderItem.id}>
        <div className="slide-image-container">
            <img src={sliderItem.img} className='slide-image'/>
        </div>
        <div className="slide-info-container">
            <h1 className="slider-main-title">
                {sliderItem.title}
            </h1>
            <p className="slider-price">
                {sliderItem.price} ₽
            </p>
            <p className="slider-discription">
                {sliderItem.desc}
            </p>
            <Link to={`/product/${sliderItem._id}`}>
                <div className="slider-button">SHOP NOW</div>
            </Link>
        </div>
    </div>
  )
}

export default SlideItem
