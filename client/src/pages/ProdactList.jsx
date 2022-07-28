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
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const ProdactList = () => {
    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

  return (
    <div className='prodact-list-container'>
        <Navbar/>
        <Announcement/>
        <h1 className="prodact-list-title">{category}</h1>
        <div className="filter-container">
            <div className="filter">
                <div className='filter-text'>Filter Products</div>
                <select name='categories' className='filter-select-company' onChange={handleFilters}>
                    <option disabled className='filter-option'>Company</option>
                    {selectCompanyItems.map(item => 
                         <option className='filter-option' key={item.id}>{item.title}</option>
                    )}
                </select>
                <select name='size' className='filter-select-size' onChange={handleFilters}>
                    <option disabled className='filter-option'>Size</option>
                    {selectSizeItems.map(item => 
                         <option className='filter-option' key={item.id}>{item.title}</option>
                    )}
                </select>
            </div>
            <div className="filter">
                <div className='filter-text'>Sort Products</div>
                <select className='filter-select-size' onChange={(e) => setSort(e.target.value)}>
                    {selectSortItems.map(item => 
                         <option value={item.value} className='filter-option' key={item.id}>{item.title}</option>
                    )}
                </select>
            </div>
        </div>
        <Products page='ProductList' category={category} filters={filters} sort={sort}/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default ProdactList
