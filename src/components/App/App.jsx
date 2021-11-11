import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header containerClasses="app__container" />
        <Main containerClasses="app__container" />
        <Footer containerClasses="app__container" />
      </div>
    </BrowserRouter>
  );
}

export default App;
