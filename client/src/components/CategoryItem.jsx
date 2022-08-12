import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CategoryItem.css'

const CategoryItem = ({item}) => {
  return (
    <div className='category-item-container'>
        <Link to = {`/products/${item.category}`}>
          <img src={item.img} className='category-image'/>
          <div className="category-info">
              <h2 className='category-title'>{item.title}</h2>
          </div>
        </Link>
    </div>
  )
}

export default CategoryItem
