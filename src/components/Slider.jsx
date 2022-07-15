import React, { useState } from 'react'
import '../styles/Slider.css'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import {sliderItems} from '../data.js'
import styled from 'styled-components';
import SlideItem from './SlideItem';

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const hadleClick = (direction) => {
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1);
        } else {
            setSlideIndex(slideIndex < (sliderItems.length-1) ? slideIndex+1 : 0);  
        }
    }
    return (
        <div className='slider-container'>
            <div className="slider-left-arrow" onClick={() => hadleClick("left")}>
                <ArrowLeftOutlined/>
            </div>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(sliderItem => 
                    <SlideItem sliderItem={sliderItem} key={sliderItem.id}/>
                )}
            </Wrapper>
            <div className="slider-right-arrow" onClick={() => hadleClick("right")}>
                <ArrowRightOutlined/>
            </div>
        </div>
    )
}

export default Slider
