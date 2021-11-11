import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import auth from '../../utils/auth';
import UserContext from '../../context/user-context';
import './App.css';

function App() {
  const [user, setUser] = useState({
    email: '',
    id: '',
    isAdmin: false,
  });

  useEffect(() => {
    auth
      .checkAutorization()
      .then((data) => {
        const { email, id, role } = data;
        setUser((state) => ({
          ...state,
          email,
          id,
          admin: role === 'owner',
        }));
      })
      .catch(() => {
        setUser({
          email: '',
          id: '',
          admin: false,
        });
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header containerClasses="app__container" />
        <UserContext.Provider value={user}>
          <Main containerClasses="app__container" />
        </UserContext.Provider>
        <Footer containerClasses="app__container" />
      </div>
    </BrowserRouter>
  );
}

export default App;
