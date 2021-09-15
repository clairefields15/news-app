import React from 'react';
import './Articles.css';
import { Article } from '../Article/Article';

export const Articles = ({ articles, section }) => {
  console.log(section);
  const createCards = articles => {
    return articles.map(article => {
      return <Article article={article} key={article.id} />;
    });
  };
  return (
    <section className='articles-container'>
      {section === 'home' ? (
        <h2>Top Articles</h2>
      ) : (
        <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
      )}
      <section className='articles'>{createCards(articles)}</section>
    </section>
  );
};
