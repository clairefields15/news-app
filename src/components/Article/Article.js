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
      {article.imageUrl && (
        <div className='img-container'>
          <img
            src={article.imageUrl}
            alt={article.title}
            className='thumbnail'
          />
        </div>
      )}
      {!article.imageUrl && <p>{article.abstract}</p>}
    </NavLink>
  );
};
