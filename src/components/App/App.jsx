import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import auth from '../../utils/auth';
import UserContext from '../../context/user-context';
import './App.css';
import Modal from '../Modal/Modal';

function App() {
  const [user, setUser] = useState({
    email: '',
    id: '',
    isAdmin: false,
  });

  const [shouldShowModal, setShouldShowModal] = useState(true);

  function closeModal() {
    setShouldShowModal(false);
  }

  useEffect(() => {
    auth
      .checkAutorization()
      .then((data) => {
        const { email, id, role } = data;
        setUser((state) => ({
          ...state,
          email,
          id,
          isAdmin: role === 'owner',
        }));
      })
      .catch(() => {
        setUser({
          email: '',
          id: '',
          isAdmin: true,
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
        {shouldShowModal && (
          <Modal closeModal={() => closeModal()} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
