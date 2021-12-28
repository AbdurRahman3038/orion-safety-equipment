import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="service-container">
            
            <div className="service sales">
                <i class="fas fa-hand-holding-usd service-icon-design"></i>
                <h3 className="service-title">Sales</h3>
                <p>We believe in providing our customers with a high quality product at an affordable price. We use only quality name brand products.</p>
            </div>


            <div className="service rentals">
                <i class="fas fa-box-open service-icon-design"></i>
                <h3 className="service-title">Rentals</h3>
                <p>We know it isa not always economical to purchase new equipment, that's why we offer a variety of rental options with daily, weekly and monthly rates.</p>
            </div>


            <div className="service services">
                <i class="fas fa-wrench service-icon-design"></i>
                <h3 className="service-title">Services</h3>
                <p>We're not just your average safety store! Our experts know what you're looking for and we can show you how to use it.</p>
            </div>
        </div>
    );
};

export default Services;