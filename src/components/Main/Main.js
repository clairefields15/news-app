import React from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Articles } from '../Articles/Articles';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

export const Main = ({ articles, errorMessage, sections, changeSection }) => {
  return (
    <main className='main-content-container'>
      {errorMessage && <ErrorComponent message={errorMessage} />}
      {!errorMessage && !articles.length && (
        <>
          <Sidebar sections={sections} changeSection={changeSection} />
          <p>Loading articles...</p>
        </>
      )}
      {!errorMessage && !!articles.length && (
        <>
          <Sidebar sections={sections} changeSection={changeSection} />
          <Articles articles={articles} />
        </>
      )}
    </main>
  );
};
