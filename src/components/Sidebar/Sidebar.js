import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = ({ sections, changeSection, navOpen }) => {
  const handleClick = e => {
    changeSection(e.target.id);
  };

  const makeOptions = sections => {
    return sections.map(section => (
      <NavLink
        to={`/${section}`}
        key={section}
        className='section-option'
        onClick={e => handleClick(e)}
        id={section}
      >
        {section}
      </NavLink>
    ));
  };
  return (
    <>{navOpen && <nav className='open-nav'>{makeOptions(sections)}</nav>}</>
  );
};
