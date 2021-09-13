import React from 'react';
import './Articles.css';
import { Article } from '../Article/Article';

export const Articles = ({ articles }) => {
  const createCards = articles => {
    return articles.map(article => {
      return <Article article={article} key={article.id} />;
    });
  };
  return (
    <section className='articles-container'>
      <h2>Top Articles</h2>
      {createCards(articles)}
    </section>
  );
};
