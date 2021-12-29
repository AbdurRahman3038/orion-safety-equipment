import React from 'react';
import './Protection.css';
import img from '../../images/protection.jpg';

const Protection = () => {
    return (
        <div className="protection-container">

            <div className="protection-desc">

                <h1 className="protection-title">Protection Is What We Do Best</h1>
                <p className="protection-details">
                    Occupational hazards can be controlled and minimized in even the most dangerous situations: we know what's needed to outfit your space for hazard detection, safety and response, and are experienced in a range of environments, including gasplants, schools, warehouses, factories, retail outlets, mines, laboratories, and everyday work spaces. <br /> <br />
                    We work with an elite group of safety equipment suppliers to ensure we can provide you with a range of quality products. Over eighty percent of what we sell is made and sourced locally or domestically. We also recertify what we sell. Without compromise: the personal safety of yourself and those around you deserve nothing less.   <br /> <br />

                </p>
                <button className="learn-btn">Learn More</button>
                <button className="get-in-btn">Get In Touch</button>

            </div>
            <div >
                <img src={img} className="protection-img" alt="" />
            </div>
        </div>
    );
};

export default Protection;