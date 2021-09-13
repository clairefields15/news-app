import React, { useEffect, useState } from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Articles } from '../Articles/Articles';
import { fetchTopStories } from '../../utils/apiCalls';

export const Main = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let data = await fetchTopStories();
        console.log('dataaaaa', data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <main className='main-content-container'>
      <Sidebar />
      <Articles />
    </main>
  );
};
