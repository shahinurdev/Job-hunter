import React from 'react';
import './Banner.css'
import banner from '../../../img/banner2.png'

const Banner = () => {
    return (
       <section className='container banner'>
           <div className="row">
               <div className="col-md-6 title mb-sm-3">
               <h3>Find The Job <br />thats fits your culture</h3>
               <input className="form-control" placeholder="Search Job " type="text" />
               </div>
               <div className="col-md-6">
                  <img className="img-fluid max-width: 100%" src={banner} alt="" />
               </div>
           </div>
       </section>
    );
};

export default Banner;