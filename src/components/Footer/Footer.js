import React from 'react';
import img1 from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="newsletter">
                <h2>Newsletter</h2>
                <p>Stay connected! Subscribe to our newsletter to stay informed of all the latest products and services</p>
                <button className="sign-up-btn">Sign Up</button>
            </div>

            <div className="main-footer">
                <div className="footer-contact">

                    <div className="contact-us">
                        <p><span className="footer-design">Office</span> 1161 40th Avenue NE <br />
                            <span className="footer-address">Calgary, Alberta, T2E 6M9</span> </p>
                        <p className="footer-style"><span className="footer-design">Phone</span>(403) 769 - 1799</p>
                        <p className="footer-style-2"><span className="footer-design">Email</span> info@orionsafety.ca </p>
                    </div>

                    <div className="contact-us">

                        <p className="footer-style"><span className="footer-design">Weekdays</span> 8:00am - 4:30pm</p>
                        <p className="footer-style-2"><span className="footer-design">Weekends</span> Call for hours</p>

                        <div className="social">
                            <p><span className="footer-design">Social Media</span></p>
                            <div className="footer-social-media">
                                <i class="fab fa-facebook-f icon-design-2"></i>
                                <i class="fab fa-instagram icon-design-2"></i>
                                <i class="fab fa-linkedin-in icon-design-2"></i>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <img src={img1} className="footer-img" alt="" />
                </div>
            </div>

            <div className="copyright-part">
                <p>Powered by Instalogic Inc.</p>
                <p> &copy; 2020 Orion Safety Equipement Ltd.</p>
            </div>


        </div>
    );
};

export default Footer;