import React from 'react'
import '../styles/ProdactList.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Select } from '@mui/material'
import { selectItems } from '../data'

const ProdactList = () => {

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? 'red' : 'blue',
          padding: 20,
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 200,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }
      
  return (
    <div className='prodact-list-container'>
        <Navbar/>
        <Announcement/>
        <h1 className="prodact-list-title">Sneackers</h1>
        <div className="filter-container">
            <div className="filter">
                <div className='filter-text'>Filter Products</div>
                <select className='filter-select'>
                    <option disabled selected className='filter-option'>Company</option>
                    <option className='filter-option'>Adidas</option>
                    <option className='filter-option'>Nike</option>
                    <option className='filter-option'>Reebook</option>
                    <option className='filter-option'>Puma</option>
                    <option className='filter-option'>Gucci</option>
                </select>
            </div>
            <div className="filter">
                <div className='filter-text'>Sort Products</div>
            </div>
        </div>
        <Products page='ProductList'/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default ProdactList
