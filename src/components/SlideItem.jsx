import React from 'react'

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
                {sliderItem.price}
            </p>
            <p className="slider-discription">
                {sliderItem.desc}
            </p>
            <a href="#" className="slider-button">SHOP NOW</a>
        </div>
    </div>
  )
}

export default SlideItem
