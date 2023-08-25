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
import logo from './assets/Logo.png'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <div className='bodyHome'>

        <Header/>
        
        <Routes>
            <Route path="/details/:id"  element={<Details/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>

        <Footer/>
        
      </div>
      
    </Router>
  );
}

export default App;
