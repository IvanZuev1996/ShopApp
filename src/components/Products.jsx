import React from 'react'
import { popularProducts } from '../data'
import ProductItem from './ProductItem'
import '../styles/Products.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Products = () => {
  const { width } = useWindowDimensions();
  console.log(width);
  return (
    <div>
        <h2 className='main-products-title'>MOST OF ALL BUY!</h2>
        <div className='products-container'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={(width >= 1400) ? 5 : 
                           (width >= 1100) ? 4 :
                           (width >= 860 ? 3 : 2)
                          }
            navigation
            grabCursor = {true}
            pagination={{ clickable: true }}
          >
            {popularProducts.map(item => 
              <SwiperSlide>
                  <ProductItem item={item} key={item.id}/>
              </SwiperSlide>
            )}
          </Swiper> 
        </div>
    </div>
  )
}

export default Products
