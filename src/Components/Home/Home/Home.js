import React from 'react';
import Banner from '../Banner/Banner';
import { FeaturedCategories } from '../FeaturedCategories/FeaturedCategories';
import Job from '../Job/Job';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <Job></Job>
        </div>
    );
};

export default Home;