import React from 'react';
import Banner from '../Banner/Banner';
import { FeaturedCategories } from '../FeaturedCategories/FeaturedCategories';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            
        </div>
    );
};

export default Home;