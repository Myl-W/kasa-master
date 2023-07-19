import './details.scss';
import React, { useEffect, useState } from 'react';

function Details() {
  const [accordeon, setAccordeon] = useState(() => []);
  // Called when the component
  // first mounts, and called only once
  useEffect(() => {
    setAccordeon([false,false]);
  }, []);
  return (
    <div>
        <div className="accordeon">
        <div className="title" onClick={() => setAccordeon(() => [!accordeon[0],accordeon[1]])}>Description <span className={`arrow ${accordeon[0] ? "open" : ''}`}>&gt;</span></div>
        <div className={`content ${accordeon[0] ? "open" : ''}`}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>
      </div>

      <div className="accordeon">
        <div className="title" onClick={() => setAccordeon(() => [accordeon[0],!accordeon[1]])}>Équipements <span className={`arrow ${accordeon[1] ? "open" : ''}`}>&gt;</span></div>
        <div className={`content ${accordeon[1] ? "open" : ''}`}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
        </div>
      </div>
    </div>
  );
}

export default Details;