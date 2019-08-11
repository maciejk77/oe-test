import React from 'react';
import header from '../../assets/header.png';

// TODO
// Fix image, async fetch?
const Header = props => {
  return (
    <header className="header">
      <img className="header__image" src={header} />
    </header>
  );
};

export default Header;
