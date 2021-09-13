import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      {pathname === '/' ? (
        <h1>THE NEWS</h1>
      ) : (
        <NavLink to='/' className='navlink'>
          <h1>THE NEWS</h1>
        </NavLink>
      )}
    </header>
  );
};
