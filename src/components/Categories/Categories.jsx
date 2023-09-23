import React from 'react'

import {categories} from '../../api/data'

import CategoryItem from './CategoryItem'

import './styles/Categories.scss'

const Categories = () => (
    <div className='categories-container'>
        {categories.map(item => 
            <CategoryItem item={item} key={item.id}/>
        )}
    </div>
)

export default Categories
