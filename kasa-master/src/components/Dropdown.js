import React, { useState } from 'react';
import '../components/Dropdown.scss';
import arrow from '../assets/arrow.svg';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordeonBloc">
      <div className={`title ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <div className={`arrow ${isOpen ? "open" : ""}`}>
          <img src={arrow}></img>
        </div>
      </div>

      <div className={`content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
