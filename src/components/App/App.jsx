import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import auth from '../../utils/auth';
import UserContext from '../../context/user-context';
import ModalContext from '../../context/modal-context';
import './App.css';
import Modal from '../Modal/Modal';
import { MODAL_TYPES_NEWS } from '../../utils/constants';
import AddNewsForm from '../Form/AddNewsForm';
import Preloader from '../Preloader/Preloader';

function App() {
  const [user, setUser] = useState({
    email: '',
    id: '',
    isAdmin: false,
  });

  const modalState = useState({ isOpen: false, modalType: '' });
  const [modal] = modalState;

  function renderModal() {
    if (!modal.isOpen) {
      return '';
    }
    if (modal.modalType === MODAL_TYPES_NEWS) {
      return (
        <Modal>
          <AddNewsForm />
        </Modal>
      );
    }
    return (
      <Modal>Специалисты</Modal>
    );
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
          // TODO: change dev var
          isAdmin: true,
        });
      });
  }, []);

  return (
    <BrowserRouter>
      <ModalContext.Provider value={modalState}>
        <div className="app">
          <Header containerClasses="app__container" />
          <UserContext.Provider value={user}>
            <Main containerClasses="app__container" />
          </UserContext.Provider>
          <Footer containerClasses="app__container" />
          {renderModal()}
        </div>
      </ModalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
