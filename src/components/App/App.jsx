import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import auth from '../../utils/auth';
import api from '../../utils/main-api';
import UserContext from '../../context/user-context';
import NewsHandlerContext from '../../context/news-handlers-context';
import ModalContext from '../../context/modal-context';
import Modal from '../Modal/Modal';
import {
  MODAL_TYPES_CONFIRM,
  MODAL_TYPES_EDIT_NEWS,
  MODAL_TYPES_ADD_NEWS,
  MODAL_TYPES_SHOW_NEWS,
} from '../../utils/constants';
import AddNewsForm from '../Form/AddNewsForm';
import EditNewsForm from '../Form/EditNewsForm';
import ModalConfirm from '../Modal/ModalConfirm';
import './App.css';
import Preloader from '../Preloader/Preloader';
import NewsContent from '../Modal/NewsContent';

function App() {
  const [user, setUser] = useState({
    email: '',
    id: '',
    isAdmin: false,
  });

  const modalState = useState({ isOpen: false, modalType: '' });
  const [modal, setModalState] = modalState;

  const [currentNews, setCurrentNews] = useState({});

  function renderModal() {
    if (!modal.isOpen) {
      return '';
    }
    if (modal.modalType === MODAL_TYPES_ADD_NEWS) {
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
            news={currentNews}
            onConfirm={handleDeleteNews}
            confirmMessage="Новость успешно удалена. Пожалуйста, перезагрузите страницу"
            />
        </Modal>
      );
    }
    if (modal.modalType === MODAL_TYPES_EDIT_NEWS) {
      return (
        <Modal>
          <EditNewsForm news={currentNews}/>
        </Modal>
      );
    }
    if (modal.modalType === MODAL_TYPES_SHOW_NEWS) {
      return (
        <Modal>
          <NewsContent news={currentNews}/>
        </Modal>
      );
    }
    return <Modal>Специалисты</Modal>;
  }

  const handleDeleteNewsClick = useCallback((news) => {
    setModalState({ isOpen: true, modalType: MODAL_TYPES_CONFIRM });
    setCurrentNews(news);
  }, []);

  const handleEditNewsClick = useCallback((news) => {
    setModalState({ isOpen: true, modalType: MODAL_TYPES_EDIT_NEWS });
    setCurrentNews(news);
  }, []);

  const handleDeleteNews = useCallback((id) => {
    return api.deleteNews(id);
  }, [])

  const handleClickNews = useCallback((news) => {
    setCurrentNews(news)
    setModalState({ isOpen: true, modalType: MODAL_TYPES_SHOW_NEWS });
  }, [])

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
            <NewsHandlerContext.Provider
              value={{
                handleDeleteNewsClick,
                handleEditNewsClick,
                handleClickNews
               }}
            >
            <Main
              containerClasses="app__container"
            />
            </NewsHandlerContext.Provider>
          </UserContext.Provider>
          <Footer containerClasses="app__container" />
          {renderModal()}
        </div>
      </ModalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
