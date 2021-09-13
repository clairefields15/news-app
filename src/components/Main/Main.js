import React from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Articles } from '../Articles/Articles';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

export const Main = ({ articles, errorMessage }) => {
  return (
    <main className='main-content-container'>
      {errorMessage && <ErrorComponent message={errorMessage} />}
      {!errorMessage && !articles.length && <p>Loading articles...</p>}
      {!errorMessage && !!articles.length && (
        <>
          <Sidebar />
          <Articles articles={articles} />
        </>
      )}
    </main>
  );
};
