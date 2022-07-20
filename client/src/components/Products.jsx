import React, { useEffect, useState } from 'react'
import '../styles/Products.css'
import MySlider from './UI/MySlider'
import { productsList } from '../data'
import ProductItem from './ProductItem'
import axios from 'axios'

const Products = ({page, category, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( 
          category 
            ? `http://localhost:5000/api/products?category=${category}` 
            : 'http://localhost:5000/api/products'
        );
        setProducts(res.data);
      } catch (err) {

      }
    }
    getProducts();
  }, [category])

  useEffect(() => {
    category && setFilteredProducts(
        products.filter(item => Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [category, filters, products])

  return (
    <div className='prosuct-list-container'>
        {page === 'HomePage'
          ? <h2 className='main-products-title'>MOST OF ALL BUY!</h2>
          : <div></div>
        }
        <div className='products-container'>
          {(page === 'HomePage')
            ? <MySlider/>
            :
              filteredProducts.map(item => 
                <ProductItem item={item} key={item.id}/>
              )
          } 
        </div>
    </div>
  )
}

export default Products
