import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Social from '../Social/Social';
import Button from '../Button/Button';
import PhoneLink from '../PhoneLink/PhoneLink';
import fbPath from '../../images/social-icon-fb.svg';
import vkPath from '../../images/social-icon-vk.svg';
import insPath from '../../images/social-icon-inst.svg';
import ytPath from '../../images/social-icon-yt.svg';
import odPath from '../../images/social-icon-od.svg';
import auth from '../../utils/auth';
import UserContext from '../../context/user-context';
import useLoad from '../../hooks/useLoad';

function Header({ onRequestClick, containerClasses }) {
  const { setIsLoad, style } = useLoad(false);
  const [socialIsShown, setSocialIsShown] = useState(false);
  const [iconsLoaded, seticonsLoaded] = useState(0);
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleClick = useCallback((event) => {
    onRequestClick(event);
  }, []);

  const logout = (event) => {
    event.preventDefault();
    auth
      .logout()
      .then(() => {
        setUser({
          email: '',
          id: '',
          isAdmin: false,
          isLoaded: true,
        });
        history.replace('/');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    if (iconsLoaded === 5) {
      setIsLoad(true);
    }
  }, [iconsLoaded]);

  useEffect(() => {
    function socialOutClickHandler(event) {
      const { target } = event;
      if (!target.classList.contains('social__icon_tablet')) {
        setSocialIsShown(false);
      }
    }
    if (socialIsShown) {
      document.addEventListener('click', socialOutClickHandler);
    }
    return () => {
      document.removeEventListener('click', socialOutClickHandler);
    };
  }, [socialIsShown]);

  return (
    <header className="header">
      <div className={`header__container ${containerClasses || ''}`}>
        <Logo classes="header__logo" />
        <div className="header__ya-rating-container">
          <iframe
            title="ya-rating"
            src="https://yandex.ru/sprav/widget/rating-badge/144356325736"
            width="150"
            height="50"
            frameBorder="0"
          />
        </div>
        <div className="header__social_tablet">
          <button
            type="button"
            className={`header__social-button ${
              socialIsShown && 'header__social-button_opened'
            }`}
            aria-label="Показать социальные сети"
            onClick={(event) => {
              event.preventDefault();
              setSocialIsShown(!socialIsShown);
            }}
          >
            <svg
              width="50"
              height="46"
              viewBox="0 0 50 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="1">
                <rect width="50" height="46" fill="black" />
                <rect
                  id="header-button-rect-top"
                  x="6"
                  y="5"
                  width="38"
                  height="8"
                  fill="white"
                />
                <rect
                  id="header-button-rect-middle"
                  x="6"
                  y="19"
                  width="38"
                  height="8"
                  fill="white"
                />
                <rect
                  id="header-button-rect-bottom"
                  x="6"
                  y="33"
                  width="38"
                  height="8"
                  fill="white"
                />
              </g>
            </svg>
          </button>
          {socialIsShown && (
            <div className="header__social-container">
              <a
                href="https://www.facebook.com/scnonstop48"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon social__icon_tablet"
              >
                <img
                  style={style}
                  className="social__icon-img"
                  src={fbPath}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://vk.com/scnonstop"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon social__icon_tablet"
              >
                <img
                  style={style}
                  className="social__icon-img"
                  src={vkPath}
                  alt="Вконтакте"
                />
              </a>
              <a
                href="https://www.instagram.com/scnonstop/"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon social__icon_tablet"
              >
                <img
                  style={style}
                  className="social__icon-img"
                  src={insPath}
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCMUx8nr9us-Rm1ZfhL0Ydwg"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon social__icon_tablet"
              >
                <img
                  style={style}
                  className="social__icon-img"
                  src={ytPath}
                  alt="Youtube"
                />
              </a>
              <a
                href="https://ok.ru/scnonstop"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon social__icon_tablet"
              >
                <img
                  style={style}
                  className="social__icon-img"
                  src={odPath}
                  alt="Однокласники"
                />
              </a>
            </div>
          )}
        </div>
        <Social classes="header__social">
          <a
            href="https://www.facebook.com/scnonstop48"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon"
          >
            <img
              onLoad={() => seticonsLoaded(iconsLoaded + 1)}
              style={style}
              className="social__icon-img"
              src={fbPath}
              alt="Facebook"
            />
          </a>
          <a
            href="https://vk.com/scnonstop"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon"
          >
            <img
              onLoad={() => seticonsLoaded(iconsLoaded + 1)}
              style={style}
              className="social__icon-img"
              src={vkPath}
              alt="Вконтакте"
            />
          </a>
          <a
            href="https://www.instagram.com/scnonstop/"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon"
          >
            <img
              onLoad={() => seticonsLoaded(iconsLoaded + 1)}
              style={style}
              className="social__icon-img"
              src={insPath}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMUx8nr9us-Rm1ZfhL0Ydwg"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon"
          >
            <img
              onLoad={() => seticonsLoaded(iconsLoaded + 1)}
              style={style}
              className="social__icon-img"
              src={ytPath}
              alt="Youtube"
            />
          </a>
          <a
            href="https://ok.ru/scnonstop"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon"
          >
            <img
              onLoad={() => seticonsLoaded(iconsLoaded + 1)}
              style={style}
              className="social__icon-img"
              src={odPath}
              alt="Однокласники"
            />
          </a>
        </Social>
        <p className="header__schedule">
          работаем каждый день с&nbsp;9:00 до&nbsp;22:00
        </p>
        <div className="header__contacts">
          <Button
            type="button"
            classes="header__order-button"
            onButtonClick={handleClick}
          >
            оформить заявку
          </Button>
          <PhoneLink href="tel:+79508022222" classes="header__phone-button">
            позвонить
          </PhoneLink>
        </div>
      </div>
      {user.id && (
        <div className={containerClasses || ''}>
          <div className="admin-buttons">
            <Button
              type="button"
              classes="admin-buttons__button"
              onButtonClick={(event) => {
                event.preventDefault();
                history.push('/update-password');
              }}
            >
              Сбросить пароль
            </Button>
            <Button
              type="button"
              classes="admin-buttons__button admin-buttons__button_size_small"
              onButtonClick={logout}
            >
              Выйти
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  containerClasses: PropTypes.string,
  onRequestClick: PropTypes.func,
};

Header.defaultProps = {
  containerClasses: '',
  onRequestClick: () => {},
};

export default Header;
