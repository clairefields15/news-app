import React from 'react';
import './Details.css';

export const Details = ({ article }) => {
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.abstract}</p>
    </>
  );
};
