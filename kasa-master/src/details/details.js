import './details.scss';
import React, { useEffect, useState } from 'react';
import arrow from '../assets/arrow.svg';
import star from '../assets/star.svg';
import imageCarrousel from '../assets/imageCarrousel.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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

        <div className="carrousel">
          <img className="background"src={imageCarrousel}></img>
        </div>

        <div className="title"> Cozy loft on the Canal Saint-Martin
        </div>

        <div className="country"> Paris, Ile-de-France
        </div>

        <div className="host">
          <p className="name">Alexandre Dumas</p>
          <img className="circle"></img>
        </div>

        <div className="starsHost">
          <i className="full"src={star}></i>
          <i className="full"src={star}></i>
          <i className="full"src={star}></i>
          <i className="empty"src={star}></i>
          <i className="empty"src={star}></i>
        </div>

        <div>
          <i className="tag">Cozy</i>
          <i className="tag">Canal</i>
          <i className="tag">Paris 10</i>
        </div>

      </div>

      <div className="accordeon">
        
          <div className="title" onClick={() => setAccordeon(() => [!accordeon[0],accordeon[1]])}>Description 
            <div className={`arrow ${accordeon[0] ? "open" : ''}`}>
              <img src={arrow}></img>
            </div>
          </div>
          
          <div className={`content ${accordeon[0] ? "open" : ''}`}>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </div>

      </div>

      <div className="accordeon">

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
);
}

export default Details;