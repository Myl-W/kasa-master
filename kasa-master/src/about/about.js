import './about.scss';



function About() {
  let openAccordeon = [false,false];
  const expand = (number) => {
    openAccordeon[number] = !openAccordeon[number];
    console.log(openAccordeon[number])
  };
  return (
    <div>
      {/* image baniere */}
      <div>
      </div>
      <div className="accordeon">
        <div className="title" onClick={function(e) {expand(0)}}>Fiabilité <span className={`arrow ${openAccordeon[0] ? "open" : ""}`}>&gt;</span></div>
        <div className={`content ${openAccordeon[0] ? "open" : ""}`}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>
      </div>

      <div className="accordeon">
        <div className="title" onClick={function(e) {expand(1)}}>Respect</div>
        <div className={`content ${openAccordeon[1] ? "open" : ""}`}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
        </div>
      </div>
    </div>
  );
}

export default About;