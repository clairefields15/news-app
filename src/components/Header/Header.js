import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

export const Header = ({ hamburgerClick }) => {
  const [isClosed, setClosed] = useState(true);
  const { pathname } = useLocation();

  const handleClick = e => {
    e.preventDefault();
    setClosed(!isClosed);
    hamburgerClick();
  };
  return (
    <header>
      {pathname === '/' ? (
        <h1>THE NEWS</h1>
      ) : (
        <NavLink to='/' className='navlink'>
          <h1>THE NEWS</h1>
        </NavLink>
      )}
      <button
        className={isClosed ? 'hamburger' : 'hamburger open'}
        onClick={e => handleClick(e)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
