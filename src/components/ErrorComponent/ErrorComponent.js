import React from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorComponent.css';

export const ErrorComponent = ({ message }) => {
  return (
    <>
      <p>{message}</p>
      {message === "Sorry, that page doesn't exist" && (
        <>
          <p>Would you like to go home?</p>
          <NavLink to='/' className='error-home'>
            Home
          </NavLink>
        </>
      )}
    </>
  );
};
