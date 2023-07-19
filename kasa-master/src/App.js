import logo from './logo.svg';
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

function App() {
  
  return (
    <Router>
      <div className='bodyHome'>

          <header className="header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className='logoKasa'> 
              <p>K</p>
              <img></img>
              <p>sa</p>
            </div>
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
            <nav className='Home'>
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/about">A propos</Link>
                </li>
              </ul>
            </nav>
            
          </header>

          <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/details/:id"  element={<Details/>}></Route>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>

          <footer className='footer'>
            <p className='logo'>© 2020 Kasa.All rights reserved</p>
            <img className='img'></img>
            
          </footer>
      </div>
    </Router>
  );
}

export default App;
