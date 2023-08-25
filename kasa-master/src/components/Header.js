import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Importez le logo correctement

function Header() {
  return (
    <header className="header">
      <div className='logoKasa'>
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>
      <nav className='Home'>
        <div>
          <Link to="/">Accueil</Link>
        </div>
        <div>
          <Link to="/about">A propos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
