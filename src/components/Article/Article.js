import React from 'react';
import { NavLink } from 'react-router-dom';
import './Article.css';

export const Article = ({ article }) => {
  return (
    <NavLink
      to={`/${article.section}/${article.id}`}
      className='article-wrapper'
    >
      <h3>{article.title}</h3>
      <h4>{article.byline}</h4>
      <img src={article.thumbnail} alt={article.alt} className='thumbnail' />
    </NavLink>
  );
};
