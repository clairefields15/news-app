import React from 'react';
import './Articles.css';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Article } from '../Article/Article';

export const Articles = ({ articles, section, errorMessage }) => {
  const createCards = articles => {
    return articles.map((article, index) => {
      return <Article article={article} key={article.id + index} />;
    });
  };
  return (
    <section className='articles-container'>
      {section === 'home' ? (
        <h2>Top Articles</h2>
      ) : (
        <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
      )}
      {errorMessage && <ErrorComponent message={errorMessage} />}
      {!errorMessage && !articles.length && <p>Loading articles...</p>}
      {!errorMessage && !!articles.length && (
        <section className='articles'>{createCards(articles)}</section>
      )}
    </section>
  );
};
