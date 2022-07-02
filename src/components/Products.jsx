import React from 'react'
import '../styles/Products.css'
import MySlider from './UI/MySlider'
import { productsList } from '../data'
import ProductItem from './ProductItem'

const Products = ({page}) => {
  return (
    <div>
        {page === 'HomePage'
          ? <h2 className='main-products-title'>MOST OF ALL BUY!</h2>
          : <div></div>
        }
        <div className='products-container'>
          {(page === 'HomePage')
            ? <MySlider/>
            :
              productsList.map(item => 
                <ProductItem item={item} key={item.id}/>
              )
          } 
        </div>
    </div>
  )
}

export default Products
