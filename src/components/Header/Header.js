import React from 'react';
import './Header.css';
import img from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <div className="header-container">

            {/* header logo  */}

            <div className="">
                <Link to="/"> <img src={img} className="header-img" alt="" /></Link>
            </div>

            {/* header menu */}
            
            <div className="menu-container">
                <Link to="/" className="nav">Home</Link>
                <Link to="/about" className="nav">About </Link>
                <Link to="/products" className="nav">Products</Link>
                <Link to="/rentals" className="nav">Rentals</Link>
                <Link to="/services" className="nav">Services</Link>
                <Link to="/resources" className="nav">Resources</Link>
                <Link to="/contact" className="nav">Contact</Link>
            </div>

        </div>

    );
};

export default Header;