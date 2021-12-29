import React from 'react';
import './Header.css';
import img from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const handleScroll = () => {
        document.getElementsByClassName('header-container').style.top = 0;
    }

    return (

        <div className="feature">
            <div onScroll={handleScroll} className="header-container">
                <div className="">
                    <Link to="/"> <img src={img} className="header-img" alt="" /></Link>
                </div>
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

            <div className="banner-info">

                <h1 className="banner-title">PROTECTION</h1>
                <p className="banner-desc">IS WHAT WE DO BEST</p>
                <button className="learn-more-btn">Learn More</button>


            </div>
        </div>
    );
};

export default Header;