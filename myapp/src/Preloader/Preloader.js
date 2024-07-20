import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="stars"></div>
            <div className="meteorite"></div>
            <div className="big-meteorite"></div>
            <div className="preloader-inner">
                <div className="rotating-preloader"></div>
            </div>
        </div>
    );
};

export default Preloader;
