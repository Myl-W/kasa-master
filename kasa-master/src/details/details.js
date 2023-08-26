import './details.scss';
import React, { useEffect, useState } from 'react';
import arrow from '../assets/arrow.svg';
import starActive from '../assets/star-active.png';
import starInactive from '../assets/star-inactive.png';
import imageCarrousel from '../assets/imageCarrousel.png';
import alexandreDumas from '../assets/alexandreDumas.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dropdown from '../components/Dropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from '../components/data.json';

function Details() {
  const accommodationData = data[0];

  return (
    <div>

      <div className="Lodging">
        <Carousel showThumbs={false} infiniteLoop={true} showIndicators={false} statusFormatter={(current, total) => `${current}/${total}`}>
          {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <img src={imageCarrousel} alt={`Carousel Image ${index}`} />
              </div>
          ))}
        </Carousel>
        
        <div className="title"> {accommodationData.title}
        </div>

        <div className="country"> {accommodationData.location}
        </div>

        <div className="host">
          <img className="name" src={alexandreDumas} alt='"Host'/>
        </div>

        <div className="starsHost">
          <img src={starActive} alt="Active Star"/>
          <img src={starActive} alt="Active Star"/>
          <img src={starActive} alt="Active Star"/>
          <img src={starInactive} alt="Inactive Star"/>
          <img src={starInactive} alt="Inactive Star"/>
        </div>

        <div>
          {accommodationData.tags.map((tag, index) => (
            <i className="tag" key={index}>
              {tag}
            </i>
          ))}
        </div>

      </div>

      <div className='divAccordeon'>

        <div className="accordeonDetails">
          
          <Dropdown title="Description"> 
            <p>{accommodationData.description}</p>
          </Dropdown>

          <Dropdown title="Équipements"> 
            <ul>
              {accommodationData.équipements.map((équipement, index) => (
                <li key={index}>{équipement}</li>
              ))}       
            </ul>
          </Dropdown>

        </div>
      </div>
    </div>
)
}

export default Details;