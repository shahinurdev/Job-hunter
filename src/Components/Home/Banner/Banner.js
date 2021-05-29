import React from 'react';
import './Banner.css'
import banner from '../../../img/banner.png'

const Banner = () => {
    return (
       <section className='container banner'>
           <div className="row">
               <div className="col-md-6">
               <h3>Find The Job <br />thats fits your culture</h3>
               <input  className="form-control mb-sm-3" placeholder="Search Job " type="text" />
               </div>
               <div className="col-md-6">
                   <img className="rounded" src={banner} alt="" />
               </div>
           </div>
       </section>
    );
};

export default Banner;