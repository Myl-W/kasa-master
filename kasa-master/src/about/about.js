import './about.scss';
import React, { useEffect, useState } from 'react';
import arrow from '../assets/arrow.svg';


function About(props) {
  const [accordeon, setAccordeon] = useState(() => []);
  // Called when the component
  // first mounts, and called only once
  useEffect(() => {
    setAccordeon([false,false,false,false]);
  }, []);

  return (
    <div>
      {/* image bannière */}
      <div>
        <p className='photoAbout'></p>
      </div>
      <div className="accordeon">

        <div className="title">Fiabilité 
          <div onClick={() => setAccordeon(() => [!accordeon[0],accordeon[1],accordeon[2],accordeon[3]])} className={`arrow ${accordeon[0] ? "open" : ''}`}>
            <img src={arrow}></img>
          </div>
        </div>
        <div className={`content ${accordeon[0] ? "open" : ''}`}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>

      </div>

      <div className="accordeon">

        <div className="title">Respect 
            <div onClick={() => setAccordeon(() => [accordeon[0],!accordeon[1],accordeon[2],accordeon[3]])} className={`arrow ${accordeon[1] ? "open" : ''}`}>
              <img src={arrow}></img>
            </div>
        </div>
        <div className={`content ${accordeon[1] ? "open" : ''}`}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
        </div>

      </div>

      <div className="accordeon">

        <div className="title">Service 
          <div onClick={() => setAccordeon(() => [accordeon[0],accordeon[1],!accordeon[2],accordeon[3]])} className={`arrow ${accordeon[2] ? "open" : ''}`}>
            <img src={arrow}></img>
          </div>
        </div>
        <div className={`content ${accordeon[2] ? "open" : ''}`}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
        </div>

      </div>

      <div className="accordeon">

        <div className="title">Sécurité 
          <div onClick={() => setAccordeon(() => [accordeon[0],accordeon[1],accordeon[2],!accordeon[3]])} className={`arrow ${accordeon[3] ? "open" : ''}`}>
            <img src={arrow}></img>
          </div>
        </div>
        <div className={`content ${accordeon[3] ? "open" : ''}`}>
          Texte sécurité
        </div>

      </div>

    </div>
  );
}

export default About;