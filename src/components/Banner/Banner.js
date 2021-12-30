import React from 'react';
import './Banner.css';
import Header from '../Header/Header';

const Banner = () => {
    return (

        <div className="feature">

            {/* header component added here*/}

            <Header> </Header>

            {/* banner part */}
            <div className="banner-info">
                <h1 className="banner-title">PROTECTION</h1>
                <p className="banner-desc">IS WHAT WE DO BEST</p>
                <button className="learn-more-btn">Learn More</button>


            </div>
        </div>

    );
};

export default Banner;