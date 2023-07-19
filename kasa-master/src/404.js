import './404.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div className="error">
        <div className="text">
          <h1>404</h1>
          <p>Oups ! La page que vous demandez n'existe pas.</p>
          <Link to={`/`}> Retournez sur la page d'accueil </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;