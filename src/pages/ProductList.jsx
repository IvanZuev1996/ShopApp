import { West } from '@mui/icons-material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { selectCompanyItems , selectSizeItems , selectSortItems } from '../api/data';
import Products from '../components/Products/Products';
import Announcement from '../components/Static/Announcement/Announcement';
import Footer from '../components/Static/Footer/Footer';
import Navbar from '../components/Static/Navbar/Navbar';
import NewsLetter from '../components/Static/NewsLetter/NewsLetter';

import '../styles/ProductList.scss';

const BackButton = {
    cursor: 'pointer',
};

const ProdactList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const category = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = (e) => {
        const {value} = e.target;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <div className="prodact-list-container">
            <Navbar />
            <Announcement />
            <div className="product-list-header">
                <West style={BackButton} onClick={() => navigate(-1)} />
                <h1 className="prodact-list-title">{category}</h1>
            </div>
            <div className="filter-container">
                <div className="filter">
                    <div className="filter-text">Filter Products</div>
                    <select
                        name="categories"
                        className="filter-select-company"
                        onChange={handleFilters}
                    >
                        <option disabled className="filter-option">
                            Company
                        </option>
                        {selectCompanyItems.map((item) => (
                            <option className="filter-option" key={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    <select
                        name="size"
                        className="filter-select-size"
                        onChange={handleFilters}
                    >
                        <option disabled className="filter-option">
                            Size
                        </option>
                        {selectSizeItems.map((item) => (
                            <option className="filter-option" key={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter">
                    <div className="filter-text">Sort Products</div>
                    <select
                        className="filter-select-size"
                        onChange={(e) => setSort(e.target.value)}
                    >
                        {selectSortItems.map((item) => (
                            <option
                                value={item.value}
                                className="filter-option"
                                key={item.id}
                            >
                                {item.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <Products
                page="ProductList"
                category={category}
                filters={filters}
                sort={sort}
            />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default ProdactList;
