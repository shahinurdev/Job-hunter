import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import { FeaturedCategories } from '../FeaturedCategories/FeaturedCategories';
import Footer from '../Footer/Footer';
import Job from '../Job/Job';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <Job></Job>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;