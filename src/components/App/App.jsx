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
import {
  MODAL_TYPES_CONFIRM_DELETE_NEWS,
  MODAL_TYPES_CONFIRM_DELETE_SPEC,
  MODAL_TYPES_EDIT_NEWS,
  MODAL_TYPES_ADD_NEWS,
  MODAL_TYPES_SHOW_NEWS,
  MODAL_TYPES_ADD_SPECS,
} from '../../utils/constants';
import AddNewsForm from '../Form/AddNewsForm';
import EditNewsForm from '../Form/EditNewsForm';
import ModalConfirm from '../Modal/ModalConfirm';
import './App.css';
import NewsContent from '../Modal/NewsContent';
import AddSpecialistForm from '../Form/AddSpecialistForm';

function App() {
  const [user, setUser] = useState({
    email: '',
    id: '',
    isAdmin: false,
  });

  const modalState = useState({ isOpen: false, modalType: '' });
  const [modal, setModalState] = modalState;

  const [currentNews, setCurrentNews] = useState({});
  const [currentSpec, setCurrentSpec] = useState({});

  const handleDeleteNewsClick = useCallback((news) => {
    setModalState({ isOpen: true, modalType: MODAL_TYPES_CONFIRM_DELETE_NEWS });
    setCurrentNews(news);
  }, []);

  const handleEditNewsClick = useCallback((news) => {
    setModalState({ isOpen: true, modalType: MODAL_TYPES_EDIT_NEWS });
    setCurrentNews(news);
  }, []);

  const handleDeleteNews = useCallback((data) => api.deleteNews(data.id), []);

  const handleClickNews = useCallback((news) => {
    setCurrentNews(news);
    setModalState({ isOpen: true, modalType: MODAL_TYPES_SHOW_NEWS });
  }, []);

  const handleDeleteSpecClick = useCallback((spec) => {
    setModalState({ isOpen: true, modalType: MODAL_TYPES_CONFIRM_DELETE_SPEC });
    setCurrentSpec(spec);
  }, []);

  const handleEditSpecClick = useCallback((news) => {
    setModalState({ isOpen: true, modalType: MODAL_TYPES_EDIT_NEWS });
    setCurrentSpec(news);
  }, []);

  const handleDeleteSpec = useCallback((data) => api.deleteSpec(data.id), []);

  const handleClickSpec = useCallback((news) => {
    setCurrentSpec(news);
    setModalState({ isOpen: true, modalType: MODAL_TYPES_SHOW_NEWS });
  }, []);

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
    if (modal.modalType === MODAL_TYPES_CONFIRM_DELETE_NEWS) {
      return (
        <Modal>
          <ModalConfirm
            title="Вы уверены что хотите удалить эту новость?"
            data={currentNews}
            onConfirm={handleDeleteNews}
            confirmMessage="Новость успешно удалена. Пожалуйста, перезагрузите страницу"
          />
        </Modal>
      );
    }
    if (modal.modalType === MODAL_TYPES_CONFIRM_DELETE_SPEC) {
      return (
        <Modal>
          <ModalConfirm
            title="Вы уверены что хотите удалить этого мастера?"
            data={currentSpec}
            onConfirm={handleDeleteSpec}
            confirmMessage="Мастер успешно удален. Пожалуйста, перезагрузите страницу"
          />
        </Modal>
      );
    }
    if (modal.modalType === MODAL_TYPES_EDIT_NEWS) {
      return (
        <Modal>
          <EditNewsForm news={currentNews} />
        </Modal>
      );
    }
    if (modal.modalType === MODAL_TYPES_SHOW_NEWS) {
      return (
        <Modal>
          <NewsContent news={currentNews} />
        </Modal>
      );
    }
    if (modal.modalType === MODAL_TYPES_ADD_SPECS) {
      return (
        <Modal>
          <AddSpecialistForm />
        </Modal>
      );
    }
    return <Modal>Специалисты</Modal>;
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
              handleEditNewsClick={handleEditNewsClick}
              handleClickNews={handleClickNews}
              handleDeleteSpecClick={handleDeleteSpecClick}
              handleEditSpecClick={handleEditSpecClick}
              handleClickSpec={handleClickSpec}
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
