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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Details() {
  const [accordeon, setAccordeon] = useState(() => []);
  // Called when the component
  // first mounts, and called only once
  useEffect(() => {
    setAccordeon([false,false]);
  }, []);
  return (
    <div>

      <div className="Lodging">
        <Carousel showThumbs={false} infiniteLoop={true} showIndicators={false} statusFormatter={(current, total) => `${current}/${total}`}>
            <div>
                <img src={imageCarrousel} />
            </div>
            <div>
                <img src={imageCarrousel} />
            </div>
            <div>
                <img src={imageCarrousel} />
            </div>
            <div>
                <img src={imageCarrousel} />
            </div>
        </Carousel>

        <div className="title"> Cozy loft on the Canal Saint-Martin
        </div>

        <div className="country"> Paris, Ile-de-France
        </div>

        <div className="host">
          <img className="name" src={alexandreDumas} />
        </div>

        <div className="starsHost">
          <img src={starActive}></img>
          <img src={starActive}></img>
          <img src={starActive}></img>
          <img src={starInactive}></img>
          <img src={starInactive}></img>
        </div>

        <div>
          <i className="tag">Cozy</i>
          <i className="tag">Canal</i>
          <i className="tag">Paris 10</i>
        </div>

      </div>

      <div className='divAccordeon'>

        <div className="accordeonDetails">
        
          <div className="title" onClick={() => setAccordeon(() => [!accordeon[0],accordeon[1]])}>Description 
            <div className={`arrow ${accordeon[0] ? "open" : ''}`}>
              <img src={arrow}></img>
            </div>
          </div>
          
          <div className={`content ${accordeon[0] ? "open" : ''}`}>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </div>

        </div>

        <div className="accordeonDetails">

          <div className="title" onClick={() => setAccordeon(() => [accordeon[0],!accordeon[1]])}>Équipements 
            <div className={`arrow ${accordeon[1] ? "open" : ''}`}>
              <img src={arrow}></img>
            </div>
          </div>

          <div className={`content ${accordeon[1] ? "open" : ''}`}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
          </div>

        </div>

      </div>
    </div>
);
}

export default Details;