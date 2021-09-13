import React, { useEffect, useState } from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Articles } from '../Articles/Articles';
import { fetchTopStories } from '../../utils/apiCalls';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

const section = 'home';

export const Main = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async section => {
      try {
        let data = await fetchTopStories(section);
        setArticles(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchArticles(section);
  }, []);

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
