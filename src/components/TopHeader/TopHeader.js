import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
    return (
        <div className="top-header-container">

            <div className="address-contact">

                <div className="address">
                    <i class="fas fa-map-marker-alt icon-design"></i>
                    <p>1161 40th Ave NE * Calgary, Alberto</p>
                </div>

                <div className="phone-email">
                    <div className="phone">
                        <i class="fas fa-phone-alt icon-design"></i>
                        <p>(403) 769 - 1799 </p>
                    </div>

                    <div className="email">
                        <i class="far fa-envelope icon-design"></i>
                        <p>Email Us</p>
                    </div>
                </div>

            </div>

            <div className="social-media">
                <i class="fab fa-facebook-f icon-design-2"></i>
                <i class="fab fa-instagram icon-design-2"></i>
                <i class="fab fa-linkedin-in icon-design-2"></i>
            </div>




        </div>
    );
};

export default TopHeader;