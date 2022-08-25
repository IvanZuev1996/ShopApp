import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import SecNavbar from '../components/UI/SecNavbar/SecNavbar';

const Home = () => {
  return (
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
};

export default Home;
