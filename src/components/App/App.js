import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Header } from '../Header/Header';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Details } from '../Details/Details';
import { fetchTopStories } from '../../utils/apiCalls';
import './App.css';

const section = 'home';

export const App = () => {
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
    <>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Main articles={articles} errorMessage={errorMessage} />
          )}
        />

        <Route exact path='/:section/' render={() => <Main />} />

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
    </>
  );
};
