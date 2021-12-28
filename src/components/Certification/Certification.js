import React from 'react';
import './Certification.css';
import img1 from '../../images/certification 1.jpg';
import img2 from '../../images/certification 2.jpg';

const Certification = () => {
    return (
        <div className="certification-container">

            <div className="certification">
                <img src={img1} className="certication-img" alt="" />

                <h3 className="certification-title">Certification</h3>

                <p className="certification-desc">
                    We're not just your average safety store! Our experts know what you're looking for and we can show you how to use it - properly. We also recertify what we sell. Check out our list of what we can recertify in our shop.

                </p>
                <button className="certification-learn-btn"> Learn More</button>
            </div>

            <div className="certification">
                <img src={img2} className="certication-img" alt="" />

                <h3 className="certification-title">Calibration</h3>

                <p className="certification-desc">
                    You expect to receive accurate performance from your detectors and monitors so you can trust your readings. We can service, repair and calibrate all varieties of gas monitors such as MSA. BW. and Droger.
                </p>
                <button className="certification-learn-btn"> Learn More</button>
            </div>

        </div>
    );
};

export default Certification;