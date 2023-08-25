import React from 'react';
import logo from '../assets/Logo.png'; // Importez le logo correctement

function Footer() {
  return (
    <footer className='footer'>
      <div className='logoKasa'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p className='logo'>© 2020 Kasa. All rights reserved</p>
      <img className='img'></img>
    </footer>
  );
}

export default Footer;
