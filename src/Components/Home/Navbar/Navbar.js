import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-md " uk-sticky="top: 100; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
        <div className="container ">
            <Link to="/home" className="navbar-brand text-dark">
            Job Hunter</Link>
            <button type="button" name="button" className="navbar-toggler" data-toggle="collapse" data-target="#navBar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navBar" className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link text-dark" to="/jobs">Jobs</Link></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/pricing">Pricing</Link></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/companies">Companies</Link></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/signIn">Sign in</Link></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/signOut">Sign Out</Link></li>
                    
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;