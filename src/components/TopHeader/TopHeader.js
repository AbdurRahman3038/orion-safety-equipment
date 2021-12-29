import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
    return (
        <div class="top-header-container">

            <div class="address-contact">
                <div className="full-address">
                    <div class="address">
                        <i class="fas fa-map-marker-alt icon-design"></i>
                        <p>1161 40th Ave NE * Calgary, Alberto</p>
                    </div>

                    <div class="phone-email">
                        <div class="phone">
                            <i class="fas fa-phone-alt icon-design"></i>
                            <p>(403) 769 - 1799 </p>
                        </div>

                        <div class="email ">
                            <i class="far fa-envelope icon-design"></i>
                            <p>Email Us</p>
                        </div>
                    </div>
                </div>

                <div class="social-media">
                    <i class="fab fa-facebook-f icon-design-2"></i>
                    <i class="fab fa-instagram icon-design-2"></i>
                    <i class="fab fa-linkedin-in icon-design-2"></i>
                    <div class="bg-danger"></div>
                </div>
            </div>

        </div>
    );
};

export default TopHeader;