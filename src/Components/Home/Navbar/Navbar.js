import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container ">
            <h3>
            <Link to="/home" className="navbar-brand">
            Job Hunter</Link>
            </h3>
            
            <button type="button" name="button" className="navbar-toggler" data-toggle="collapse" data-target="#navBar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navBar" className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/jobs">Jobs</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/companies">Companies</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/signIn">Sign in</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/signOut">Sign Out</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;