import React from 'react';
import './OneStop.css';
import img from '../../images/safety equipment 2.jpg';

const OneStop = () => {
    return (

        <div className="one-stop-container">

            {/* images part  */}

            <div >
                <img src={img} className="one-stop-img" alt="" />
            </div>

            {/* description part  */}

            <div className="one-stop-desc">

                <h1 className="one-stop-title">Your One Stop Safety Shop</h1>
                
                <p className="one-stop-details">
                    Accidents or injuries are easily avoided with the right knowledge, advice. and equipment In the workplace. Orion Safety Ltd. located In Calgary. Al-berta is an established Western Canadian leader in safety products and services since 2007. With over 30 years of safety experience, our experts work closely with you to ensure you have the tools, knowledge, and proce-dures needed to ensure the well-being of your staff. <br /> <br />
                    Whether it's personal protective equipment. SCBA, fire prevention, gas de-tection, fall protection or emergency rescue gear, safety In your environment is our goal. Give us a call anytime. We appreciate your business and look forward to hearing from you!  <br /> <br />

                </p>

                {/* buttons */}

                <button className="learn-btn">Learn More</button>
                <button className="get-in-btn">Get In Touch</button>

            </div>
        </div>
    );
};

export default OneStop;