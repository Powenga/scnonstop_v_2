import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Social from '../Social/Social';
import Button from '../Button/Button';
import PhoneLink from '../PhoneLink/PhoneLink';
import fbPath from '../../images/social-icon-fb.svg';
import vkPath from '../../images/social-icon-vk.svg';
import insPath from '../../images/social-icon-inst.svg';
import ytPath from '../../images/social-icon-yt.svg';
import odPath from '../../images/social-icon-od.svg';

function Header({ onRequestClick, containerClasses, refForm }) {
  function handleClick() {
    onRequestClick();
  }

  return (
    <header className="header">
      <div
        className={`header__container ${
          containerClasses ? containerClasses : ''
        }`}
      >
        <Logo classes="header__logo" />
        <div className="header__ya-rating-container">
          <iframe
            title="ya-rating"
            src="https://yandex.ru/sprav/widget/rating-badge/144356325736"
            width="150"
            height="50"
            frameBorder="0"
          ></iframe>
        </div>
        <Social classes="header__social social_tablet_menu">
          <a
            href="https://www.facebook.com/scnonstop48"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon social__icon_target_fb"
          >
            <img className="social__icon-img" src={fbPath} alt="Facebook" />
          </a>
          <a
            href="https://vk.com/scnonstop"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon social__icon_target_vk"
          >
            <img className="social__icon-img" src={vkPath} alt="Вконтакте" />
          </a>
          <a
            href="https://www.instagram.com/scnonstop/"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon social__icon_target_ins"
          >
            <img className="social__icon-img" src={insPath} alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMUx8nr9us-Rm1ZfhL0Ydwg"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon social__icon_target_yt"
          >
            <img className="social__icon-img" src={ytPath} alt="Youtube" />
          </a>
          <a
            href="https://ok.ru/scnonstop"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icon social__icon_target_od"
          >
            <img className="social__icon-img" src={odPath} alt="Однокласники" />
          </a>
        </Social>
        <p className="header__schedule">работаем каждый день с&nbsp;9:00 до&nbsp;22:00</p>
        <div className="header__contacts">
          <Button type="button" classes="button_type_order">
          оформить заявку
          </Button>
          <PhoneLink href="tel:+79508022222" classes="phone-link_type_header-link">
            позвонить
          </PhoneLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
