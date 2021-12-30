import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
    return (

        // container starts from here 

        <div className="top-header-container">

            <div className="address-contact">

                {/* address part  */}

                <div className="full-address">
                    <div className="address">
                        <i className="fas fa-map-marker-alt icon-design"></i>
                        <p>1161 40th Ave NE * Calgary, Alberto</p>
                    </div>

                    <div className="phone-email">
                        <div className="phone">
                            <i className="fas fa-phone-alt icon-design"></i>
                            <p>(403) 769 - 1799 </p>
                        </div>

                        <div className="email ">
                            <i className="far fa-envelope icon-design"></i>
                            <p>Email Us</p>
                        </div>
                    </div>
                </div>

                {/* social media part  */}
                <div className="social-media">
                    <i className="fab fa-facebook-f icon-design-2"></i>
                    <i className="fab fa-instagram icon-design-2"></i>
                    <i className="fab fa-linkedin-in icon-design-2"></i>
                    <div className="bg-danger"></div>
                </div>
            </div>

        </div>
    );
};

export default TopHeader;