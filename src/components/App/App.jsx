import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  MODAL_TYPES_MORE,
  MODAL_TYPES_SHOW_ADVANTAGE,
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

  const [, setOrder] = orderState;

  const modalState = useState({
    isOpen: false,
    modalType: '',
    focusTarget: null,
  });
  const [, setModalState] = modalState;

  const [currentNews, setCurrentNews] = useState({});
  const [currentSpec, setCurrentSpec] = useState({});
  const [currentAdvantage, setCurrentAdvantage] = useState({});

  const orderRef = useRef(null);
  const schemeRef = useRef(null);
  const callbackRef = useRef(null);

  const handleOrderButtonClick = useCallback((event) => {
    event.preventDefault();
    if (orderRef.current) {
      orderRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleMoreDetailsClick = useCallback((event) => {
    event.preventDefault();
    setModalState({
      isOpen: true,
      modalType: MODAL_TYPES_MORE,
      focusTarget: event.target,
    });
  }, []);

  const handleCallbackClick = useCallback((event) => {
    event.preventDefault();
    if (callbackRef.current) {
      callbackRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleApplianceClick = useCallback((event, card) => {
    event.preventDefault();
    setOrder((state) => ({
      ...state,
      appType: card.value,
    }));
    if (orderRef.current) {
      orderRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  });

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

  const handleAdvantageClick = useCallback((event, advantage) => {
    event.preventDefault();
    setCurrentAdvantage(advantage);
    setModalState({
      isOpen: true,
      modalType: MODAL_TYPES_SHOW_ADVANTAGE,
      focusTarget: event.target,
    });
  }, []);

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
          <Header
            containerClasses="app__container"
            onRequestClick={handleOrderButtonClick}
          />
          <BetaMessage />
          <CookieMessage />
          <Switch>
            <Route path="/" exact>
              <Home
                orderRef={orderRef}
                containerClasses="app__container"
                handleDeleteNewsClick={handleDeleteNewsClick}
                handleEditNewsClick={handleEditNewsClick}
                handleClickNews={handleClickNews}
                handleDeleteSpecClick={handleDeleteSpecClick}
                handleEditSpecClick={handleEditSpecClick}
                orderState={orderState}
                schemeRef={schemeRef}
                callbackRef={callbackRef}
                handleMoreDetailsClick={handleMoreDetailsClick}
                handleApplianceClick={handleApplianceClick}
                handleAdvantageClick={handleAdvantageClick}
                handleCallbackClick={handleCallbackClick}
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
          currentAdvantage={currentAdvantage}
          handleDeleteSpec={handleDeleteSpec}
          orderState={orderState}
        />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
