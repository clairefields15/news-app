import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
// import { Main } from '../Main/Main';
import { Articles } from '../Articles/Articles';
import { Header } from '../Header/Header';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Details } from '../Details/Details';
import { fetchTopStories } from '../../utils/apiCalls';
import './App.css';
import { Sidebar } from '../Sidebar/Sidebar';

const sections = [
  'arts',
  'automobiles',
  'books',
  'business',
  'fashion',
  'food',
  'health',
  'home',
  'insider',
  'magazine',
  'movies',
  'obituaries',
  'opinion',
  'politics',
  'science',
  'sports',
  'technology',
  'theater',
  'travel',
  'upshot',
  'us',
  'world'
];

export const App = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [articles, setArticles] = useState([]);
  const [section, setSection] = useState('home');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setSection('home');
    }
  }, [pathname]);

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
  }, [section]);

  const changeSection = section => {
    setSection(section);
  };

  return (
    <main className='main-content-container'>
      <Header />
      <Sidebar sections={sections} changeSection={changeSection} />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Articles
              section={section}
              articles={articles}
              errorMessage={errorMessage}
            />
          )}
        />

        <Route
          exact
          path='/:section/'
          render={() => {
            return (
              <Articles
                section={section}
                articles={articles}
                errorMessage={errorMessage}
              />
            );
          }}
        />

        <Route
          exact
          path='/:section/:id'
          render={({ match }) => {
            const { id } = match.params;
            let article = articles.find(article => article.id === id);
            return <Details article={article} />;
          }}
        />

        <Route
          render={() => (
            <ErrorComponent message={"Sorry, that page doesn't exist"} />
          )}
        />
      </Switch>
    </main>
  );
};
