import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

export const Header = ({ hamburgerClick }) => {
  const { pathname } = useLocation();

  const handleClick = e => {
    e.preventDefault();
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
      <button className='hamburger' onClick={e => handleClick(e)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
