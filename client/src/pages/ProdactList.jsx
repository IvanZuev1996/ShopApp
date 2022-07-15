import React from 'react'
import '../styles/ProdactList.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { selectCompanyItems } from '../data.js'
import { selectSizeItems } from '../data.js'
import { selectSortItems } from '../data.js'

const ProdactList = () => {
  return (
    <div className='prodact-list-container'>
        <Navbar/>
        <Announcement/>
        <h1 className="prodact-list-title">Sneackers</h1>
        <div className="filter-container">
            <div className="filter">
                <div className='filter-text'>Filter Products</div>
                <select className='filter-select-company'>
                    <option disabled selected className='filter-option'>Company</option>
                    {selectCompanyItems.map(item => 
                         <option className='filter-option' key={item.id}>{item.title}</option>
                    )}
                </select>
                <select className='filter-select-size'>
                    <option disabled selected className='filter-option'>Size</option>
                    {selectSizeItems.map(item => 
                         <option className='filter-option' key={item.id}>{item.title}</option>
                    )}
                </select>
            </div>
            <div className="filter">
                <div className='filter-text'>Sort Products</div>
                <select className='filter-select-size'>
                    <option disabled selected className='filter-option'>Sort</option>
                    {selectSortItems.map(item => 
                         <option className='filter-option' key={item.id}>{item.title}</option>
                    )}
                </select>
            </div>
        </div>
        <Products page='ProductList'/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default ProdactList
