import React, { useCallback, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../../pages/home';
import auth from '../../utils/auth';
import api from '../../utils/main-api';
import UserContext from '../../context/user-context';
import ModalContext from '../../context/modal-context';
import {
  MODAL_TYPES_CONFIRM_DELETE_NEWS,
  MODAL_TYPES_CONFIRM_DELETE_SPEC,
  MODAL_TYPES_EDIT_NEWS,
  MODAL_TYPES_SHOW_NEWS,
  MODAL_TYPES_EDIT_SPEC,
} from '../../utils/constants';
import './App.css';
import Login from '../../pages/login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UpdatePassword from '../../pages/updatePassword';
import BetaMessage from '../BetaMessage/BetaMessage';
import CookieMessage from '../CookieMessage/CookieMessage';
import Modals from '../Modals/Modals';

function App() {
  const [user, setUser] = useState({
    email: '',
    id: '',
    isAdmin: false,
    isLoaded: false,
  });

  const orderState = useState({
    appType: '',
    problem: '',
    ownProblem: '',
    brand: '',
    ownBrand: '',
    userName: '',
    userPhone: '',
    userAddress: '',
    policy: '',
  });

  const modalState = useState({
    isOpen: false,
    modalType: '',
    focusTarget: null,
  });
  const [, setModalState] = modalState;

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

  const handleEditSpecClick = useCallback((spec) => {
    setModalState({ isOpen: true, modalType: MODAL_TYPES_EDIT_SPEC });
    setCurrentSpec(spec);
  }, []);

  const handleDeleteSpec = useCallback((data) => api.deleteSpec(data.id), []);

  useEffect(() => {
    setUser({
      ...user,
      isLoaded: false,
    });
    auth
      .checkAutorization()
      .then((data) => {
        const { email, id, role } = data;
        setUser((state) => ({
          ...state,
          email,
          id,
          isAdmin: role === 'owner',
          isLoaded: true,
        }));
      })
      .catch(() => {
        setUser({
          email: '',
          id: '',
          isAdmin: false,
          isLoaded: true,
        });
      });
  }, []);

  return (
    <ModalContext.Provider value={modalState}>
      <div className="app">
        <UserContext.Provider value={{ user, setUser }}>
          <Header containerClasses="app__container" />
          <BetaMessage />
          <CookieMessage />
          <Switch>
            <Route path="/" exact>
              <Home
                containerClasses="app__container"
                handleDeleteNewsClick={handleDeleteNewsClick}
                handleEditNewsClick={handleEditNewsClick}
                handleClickNews={handleClickNews}
                handleDeleteSpecClick={handleDeleteSpecClick}
                handleEditSpecClick={handleEditSpecClick}
                orderState={orderState}
              />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <ProtectedRoute path="/update-password" exact>
              <UpdatePassword />
            </ProtectedRoute>
          </Switch>
        </UserContext.Provider>
        <Footer containerClasses="app__container" />
        <Modals
          currentNews={currentNews}
          handleDeleteNews={handleDeleteNews}
          currentSpec={currentSpec}
          handleDeleteSpec={handleDeleteSpec}
          orderState={orderState}
        />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
