import './about.scss';
import React, { useEffect, useState } from 'react';


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
        <div className="title" onClick={() => setAccordeon(() => [!accordeon[0],accordeon[1],accordeon[2],accordeon[3]])}>Fiabilité <span className={`arrow ${accordeon[0] ? "open" : ''}`}>&gt;</span></div>
        <div className={`content ${accordeon[0] ? "open" : ''}`}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>
      </div>

      <div className="accordeon">
        <div className="title" onClick={() => setAccordeon(() => [accordeon[0],!accordeon[1],accordeon[2],accordeon[3]])}>Respect <span className={`arrow ${accordeon[1] ? "open" : ''}`}>&gt;</span></div>
        <div className={`content ${accordeon[1] ? "open" : ''}`}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
        </div>
      </div>

      <div className="accordeon">
        <div className="title" onClick={() => setAccordeon(() => [accordeon[0],accordeon[1],!accordeon[2],accordeon[3]])}>Service <span className={`arrow ${accordeon[2] ? "open" : ''}`}>&gt;</span></div>
        <div className={`content ${accordeon[2] ? "open" : ''}`}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
        </div>
      </div>

      <div className="accordeon">
        <div className="title" onClick={() => setAccordeon(() => [accordeon[0],accordeon[1],accordeon[2],!accordeon[3]])}>Sécurité <span className={`arrow ${accordeon[3] ? "open" : ''}`}>&gt;</span></div>
        <div className={`content ${accordeon[3] ? "open" : ''}`}>
          Texte sécurité
        </div>
      </div>
    </div>
  );
}

export default About;