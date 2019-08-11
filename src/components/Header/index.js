import React from 'react';
import header from '../../assets/header.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__image" src={header} />
    </header>
  );
};

export default Header;
