import React from 'react';
import './Articles.css';

export const Articles = () => {
  const createCards = () => {
    return (
      <>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
      </>
    );
  };
  return (
    <section className='articles-container'>
      <h2>Top Articles</h2>
      {createCards()}
    </section>
  );
};
