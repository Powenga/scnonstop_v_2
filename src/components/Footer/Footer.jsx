import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

import { NavLink } from 'react-router-dom';
import Social from '../Social/Social';
import fbPath from '../../images/social-icon-fb-w.svg';
import vkPath from '../../images/social-icon-vk-w.svg';
import insPath from '../../images/social-icon-inst-w.svg';
import ytPath from '../../images/social-icon-yt-w.svg';
import odPath from '../../images/social-icon-od-w.svg';
import useLoad from '../../hooks/useLoad';
import {
  BOILER,
  DISHWASHER,
  REFRIGETATOR,
  WASHING_MACHINE,
} from '../../utils/constants';

export default function Footer({ containerClasses, handleApplianceClick }) {
  const { setIsLoad, style } = useLoad(false);
  const [iconsLoaded, seticonsLoaded] = useState(0);

  useEffect(() => {
    if (iconsLoaded === 4) {
      setIsLoad(true);
    }
  }, [iconsLoaded]);

  return (
    <footer className="footer">
      <div className={`footer__container ${containerClasses || ''}`}>
        <ul className="footer__appliances-container">
          <li className="footer__appliances-item">
            <button
              className="footer__appliances-button"
              type="button"
              onClick={(event) => {
                handleApplianceClick(event, { value: WASHING_MACHINE });
              }}
            >
              Cтиральные машины
            </button>
          </li>
          <li className="footer__appliances-item">
            <button
              className="footer__appliances-button"
              type="button"
              onClick={(event) => {
                handleApplianceClick(event, { value: REFRIGETATOR });
              }}
            >
              Холодильники
            </button>
          </li>
          <li className="footer__appliances-item">
            <button
              className="footer__appliances-button"
              type="button"
              onClick={(event) => {
                handleApplianceClick(event, { value: DISHWASHER });
              }}
            >
              Посудомоечные машины
            </button>
          </li>
          <li className="footer__appliances-item">
            <button
              className="footer__appliances-button"
              type="button"
              onClick={(event) => {
                handleApplianceClick(event, { value: BOILER });
              }}
            >
              Водонагреватели
            </button>
          </li>
        </ul>
        <div className="footer__content">
          <div className="footer__content-column">
            <div className="footer__contacts">
              <a href="tel:+79508022222" className="footer__phone">
                +7 (950) 802-22-22
              </a>
              <a href="mailto:order@scnonstop.ru" className="footer__email">
                order@scnonstop.ru
              </a>
              <Social classes="footer__social social_pos_footer">
                <a
                  href="https://www.facebook.com/scnonstop48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__icon footer__social-icon social__icon_target_fb"
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
                  className="social__icon footer__social-icon social__icon_target_vk"
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
                  className="social__icon footer__social-icon social__icon_target_ins"
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
                  className="social__icon footer__social-icon social__icon_target_yt"
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
                  className="social__icon footer__social-icon social__icon_target_od"
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
            </div>
            <div className="footer__policy-container">
              <NavLink to="/policy" className="footer__policy-link">
                Политика конфиденциальности
              </NavLink>
            </div>
          </div>
          <div className="footer__content-column">
            <div className="footer__column-inner">
              <p className="footer__schedule-title">График работы:</p>
              <p className="footer__schedule">
                пн&#8211;вс: 9:00 &#8211; 22:00
              </p>
              <p className="footer__address-title">Адрес:</p>
              <p className="footer__address">
                г.&nbsp;Липецк, ул.&nbsp;40&nbsp;лет&nbsp;Октября, д.4
              </p>
            </div>
          </div>
        </div>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Сервисный центр NON-STOP
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  containerClasses: PropTypes.string,
  handleApplianceClick: PropTypes.func,
};

Footer.defaultProps = {
  containerClasses: '',
  handleApplianceClick: () => {},
};
