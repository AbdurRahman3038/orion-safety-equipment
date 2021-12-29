import React from 'react';
import './Products.css';
import img1 from '../../images/product-1.png';
import img2 from '../../images/product-2.png';
import img3 from '../../images/product-3.png';
import img4 from '../../images/product-4.png';

const Products = () => {
    return (
        <>
            <div className="product-container">

                <div className="title-part">
                    <h1 className="title">PRODUCT</h1>
                    <h3 className="categories">CATEGORIES</h3>
                </div>

                <div className="product">
                    <img src={img1} alt="" />
                    <h4>Fire Suprresion</h4>
                    <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className="product">
                    <img src={img2} alt="" />
                    <h4>First Aid</h4>
                    <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className="product">
                    <img src={img3} alt="" />
                    <h4>Safety Apparel</h4>
                    <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className="product">
                    <img src={img4} alt="" />
                    <h4>Visibility Aids</h4>
                    <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div>
                <button className="view-more-btn">View More</button>
            </div>
        </>
    );
};

export default Products;