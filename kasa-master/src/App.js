import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './about/about.js'
import Details from './details/details.js'
import Home from './home/home.js'
import NotFound from './404.js'
import logo from './assets/logo.svg'

function App() {
  
  return (
    <Router>
      <div className='bodyHome'>

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

          <Routes>
            <Route path="/details/:id"  element={<Details/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>

          <footer className='footer'>
            <div className='logoKasa'> 
              <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            </div>
            <p className='logo'>© 2020 Kasa.All rights reserved</p>
            <img className='img'></img>
            
          </footer>
      </div>
    </Router>
  );
}

export default App;
