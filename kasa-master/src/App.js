import Home from './pages/home/Home';
import React from 'react';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
        <Router>
            <Routes>
                <Route path="/Kasa/" element={<Home />} />
                <Route path="/accomodation/:id" element={<Accomodation />} />
				<Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}



