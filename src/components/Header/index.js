import React from 'react';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <img className="header__hamburger" src={hamburger} />
    </header>
  );
};

export default Header;
