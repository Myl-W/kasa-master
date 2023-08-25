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
          
          <Dropdown title="Description">
            <p>
              Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au coeur de Paris avec 5 lignes de météo et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à la station de la gare de l'Est (7 minutes à pied).
            </p>
          </Dropdown>

          <Dropdown title="Équipements">
            <ul>
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          </Dropdown>

        </div>

      </div>
    </div>
);
}

export default Details;