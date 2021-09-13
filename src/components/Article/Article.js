import React from 'react';
import { NavLink } from 'react-router-dom';
import './Article.css';

export const Article = ({ article }) => {
  return (
    <NavLink to={`/${article.section}/${article.id}`}>
      <p>{article.title}</p>
    </NavLink>
  );
};
