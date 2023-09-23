import React from 'react';

import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Slider from '../components/Slider/Slider';
import Announcement from '../components/Static/Announcement/Announcement';
import Footer from '../components/Static/Footer/Footer';
import Navbar from '../components/Static/Navbar/Navbar';
import NewsLetter from '../components/Static/NewsLetter/NewsLetter';
import SecNavbar from '../components/Static/SecNavbar/SecNavbar';

const Home = () => (
    <div>
        <Announcement />
        <Navbar />
        <SecNavbar />
        <Slider />
        <Categories />
        <Products page="HomePage" />
        <NewsLetter />
        <Footer />
    </div>
);

export default Home;
