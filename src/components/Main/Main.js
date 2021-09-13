import React, { useEffect, useState } from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Articles } from '../Articles/Articles';
import { fetchTopStories } from '../../utils/apiCalls';

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
      <Sidebar />
      <Articles articles={articles} />
    </main>
  );
};
