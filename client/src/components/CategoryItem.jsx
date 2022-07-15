import React from 'react'
import '../styles/CategoryItem.css'

const CategoryItem = ({item}) => {
  return (
    <div className='category-item-container'>
        <img src={item.img} className='category-image'/>
        <div className="category-info">
            <h2 className='category-title'>{item.title}</h2>
        </div>
    </div>
  )
}

export default CategoryItem
