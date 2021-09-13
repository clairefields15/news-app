import React from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Articles } from '../Articles/Articles';

export const Main = () => {
  return (
    <main className='main-content-container'>
      <Sidebar />
      <Articles />
    </main>
  );
};
