import './slider.scss';
import React, { useEffect, useState } from 'react';
import arrow from '../assets/arrow.svg';

const Slider = ({ logementData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const onNextSlide = () => {
        if (currentImageIndex === logementData.pictures.length) {
            setCurrentImageIndex(1);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    const onPrevSlide = () => {
        if (currentImageIndex === 1) {
            setCurrentImageIndex(logementData.pictures.length);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    const length = logementData.pictures.length;

    let showImages;
    if (logementData) {
        showImages = logementData.pictures.map((photo) => {
            return <img src={photo} alt={photo} key={photo} className="imageSlider"/>
        });
    } else {
        showImages = "loading";
    }
    
    let arrowRight = <img src={arrow} alt="fleche next" className="arrow-right" onClick={() => onNextSlide()} />;
    if (logementData.pictures.length === 1) {
        arrow = "";
    }

    let arrowLeft = <img src={arrow} alt="fleche previous" className="arrow-left" onClick={() => onPrevSlide()} />;
    if (logementData.pictures.length === 1) {
        arrow = "";
    }

    return (
        <div className="slider">
            <div className="slider-window">
                {arrow}
                {arrow}
                <p className="length-indicatif">{currentImageIndex}/{length}</p>
                <div className="slider-derouler" id="slider-derouler-id" style={{transform: `translateX(${-(currentImageIndex - 1) * 100}%)`}}>
                    {showImages}
                </div>
            </div>
        </div>
    );
}

export default Slider;