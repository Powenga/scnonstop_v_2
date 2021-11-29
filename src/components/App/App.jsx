import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import auth from '../../utils/auth';
import api from '../../utils/main-api';
import UserContext from '../../context/user-context';
import ModalContext from '../../context/modal-context';
import Modal from '../Modal/Modal';
import { MODAL_TYPES_CONFIRM, MODAL_TYPES_NEWS } from '../../utils/constants';
import AddNewsForm from '../Form/AddNewsForm';
import ModalConfirm from '../Modal/ModalConfirm';
import './App.css';
import Preloader from '../Preloader/Preloader';

function App() {
  const [user, setUser] = useState({
    email: '',
    id: '',
    isAdmin: false,
  });

  const modalState = useState({ isOpen: false, modalType: '' });
  const [modal, setModalState] = modalState;

  const [deletetNewsid, setDeletedNewsId] = useState(null);

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
    if (modal.modalType === MODAL_TYPES_CONFIRM) {
      return (
        <Modal>
          <ModalConfirm
            id={deletetNewsid}
            onConfirm={handleDeleteNews}
            confirmMessage="Новость успешно удалена. Пожалуйста, перезагрузите страницу"
            />
        </Modal>
      );
    }
    return <Modal>Специалисты</Modal>;
  }

  const handleDeleteNewsClick = useCallback((cardId) => {
    console.log(cardId);
    setModalState({ isOpen: true, modalType: MODAL_TYPES_CONFIRM });
    setDeletedNewsId(cardId);
  }, []);

  const handleDeleteNews = (id) => {
    return api.deleteNews(id);
  };

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
          isAdmin: false,
        });
      });
  }, []);

  return (
    <BrowserRouter>
      <ModalContext.Provider value={modalState}>
        <div className="app">
          <Header containerClasses="app__container" />
          <UserContext.Provider value={user}>
            <Main
              containerClasses="app__container"
              handleDeleteNewsClick={handleDeleteNewsClick}
            />
          </UserContext.Provider>
          <Footer containerClasses="app__container" />
          {renderModal()}
        </div>
      </ModalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
