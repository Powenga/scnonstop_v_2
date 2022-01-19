import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
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
import CookieMessage from '../CookieMessage/CookieMessage';
import Modals from '../Modals/Modals';
import Policy from '../../pages/policy';
import useScrollToTop from '../../hooks/useScrollToTop';
import { problems } from '../../utils/data';
import brands from '../../utils/data/brands';
import NotFound from '../../pages/404';

function App() {
  useScrollToTop();
  const [user, setUser] = useState({
    email: '',
    id: '',
    isAdmin: false,
    isLoaded: false,
  });

  const [order, setOrder] = useState({
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

  const [step, setStep] = useState(1);
  const [problemList, setProblemList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  const modalState = useState({
    isOpen: false,
    modalType: '',
    focusTarget: null,
  });
  const [, setModalState] = modalState;

  const [currentNews, setCurrentNews] = useState({});
  const [currentSpec, setCurrentSpec] = useState({});
  const [currentAdvantage, setCurrentAdvantage] = useState({});

  const history = useHistory();

  const orderRef = useRef(null);
  const schemeRef = useRef(null);
  const callbackRef = useRef(null);

  const handleOrderButtonClick = useCallback(async (event) => {
    event.preventDefault();
    await history.push('/');
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

  const handleApplianceClick = useCallback(async (event, card) => {
    event.preventDefault();
    await history.push('/');
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

  useEffect(() => {
    setOrder((state) => ({
      ...state,
      problem: '',
      brand: '',
      ownProblem: '',
    }));
    setStep(1);
    if (order.appType) {
      setProblemList(
        () => problems.find((item) => item.id === order.appType).problems,
      );
      const list = brands.filter((item) =>
        item.appType.includes(order.appType),
      );
      setBrandList([...list]);
    }
  }, [order.appType]);

  return (
    <ModalContext.Provider value={modalState}>
      <div className="app">
        <UserContext.Provider value={{ user, setUser }}>
          <Header
            containerClasses="app__container"
            onRequestClick={handleOrderButtonClick}
          />
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
                order={order}
                setOrder={setOrder}
                step={step}
                setStep={setStep}
                problemList={problemList}
                brandList={brandList}
                schemeRef={schemeRef}
                callbackRef={callbackRef}
                handleMoreDetailsClick={handleMoreDetailsClick}
                handleApplianceClick={handleApplianceClick}
                handleAdvantageClick={handleAdvantageClick}
                handleCallbackClick={handleCallbackClick}
              />
            </Route>
            <Route path="/policy" exact>
              <Policy />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <ProtectedRoute path="/update-password" exact>
              <UpdatePassword />
            </ProtectedRoute>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </UserContext.Provider>
        <Footer
          containerClasses="app__container"
          handleApplianceClick={handleApplianceClick}
        />
        <Modals
          currentNews={currentNews}
          handleDeleteNews={handleDeleteNews}
          currentSpec={currentSpec}
          currentAdvantage={currentAdvantage}
          handleDeleteSpec={handleDeleteSpec}
          order={order}
          setOrder={setOrder}
        />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
