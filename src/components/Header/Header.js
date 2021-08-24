import React from 'react';
import './Header.css'
import Logo from "./Logo";
import Social from "./Social";
import fbPath from "../images/social-icon-fb.svg";
import vkPath from "../images/social-icon-vk.svg";
import insPath from "../images/social-icon-inst.svg";
import ytPath from "../images/social-icon-yt.svg";
import odPath from "../images/social-icon-od.svg";

function Header({onRequestClick, refForm}) {


  function handleClick () {
    onRequestClick()
  }

  return (
    <header className="header">
      <Logo />
      <Social styleNames="">
        <a href="https://www.facebook.com/scnonstop48" target="_blank" rel="noopener noreferrer" className="social__icon social__icon_target_fb">
          <img className="social__icon-img" src={fbPath} alt="Facebook"/>
        </a>
        <a href="https://vk.com/scnonstop" target="_blank" rel="noopener noreferrer" className="social__icon social__icon_target_vk">
          <img className="social__icon-img" src={vkPath} alt="Вконтакте"/>
        </a>
        <a href="https://www.instagram.com/scnonstop/" target="_blank" rel="noopener noreferrer" className="social__icon social__icon_target_ins">
          <img className="social__icon-img" src={insPath} alt="Instagram"/>
        </a>
        <a href="https://www.youtube.com/channel/UCMUx8nr9us-Rm1ZfhL0Ydwg" target="_blank" rel="noopener noreferrer" className="social__icon social__icon_target_yt">
          <img className="social__icon-img" src={ytPath} alt="Youtube"/>
        </a>
        <a href="https://ok.ru/scnonstop" target="_blank" rel="noopener noreferrer" className="social__icon social__icon_target_od">
          <img className="social__icon-img" src={odPath} alt="Однокласники"/>
        </a>
      </Social>
      <div className="header__contacts">
        <a href="tel:+79508022222" className="phone">+7 (950) 802-22-22</a>
          <button onClick={handleClick} type="button" className="button button_type_form">оформить заявку</button>
      </div>
    </header>
  );
}

export default Header;
