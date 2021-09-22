import './Footer.css';

import Social from '../Social/Social';
import fbPath from '../../images/social-icon-fb-w.svg';
import vkPath from '../../images/social-icon-vk-w.svg';
import insPath from '../../images/social-icon-inst-w.svg';
import ytPath from '../../images/social-icon-yt-w.svg';
import odPath from '../../images/social-icon-od-w.svg';
import { Link } from 'react-router-dom';

export default function Footer({ containerClasses }) {
  return (
    <footer className="footer">
      <div
        className={`footer__container ${
          containerClasses ? containerClasses : ''
        }`}
      >
        <ul className="footer__appliances-container">
          <li className="footer__appliances-item">Cтиральные машины</li>
          <li className="footer__appliances-item">Холодильники</li>
          <li className="footer__appliances-item">Посудомоечные машины</li>
          <li className="footer__appliances-item">Водонагреватели</li>
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
              <Social classes="footer__social">
                <a
                  href="https://www.facebook.com/scnonstop48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__icon footer__social-icon social__icon_target_fb"
                >
                  <img
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
                    className="social__icon-img"
                    src={odPath}
                    alt="Однокласники"
                  />
                </a>
              </Social>
            </div>
            <div className="footer__policy-container">
              <Link to="/policy" className="footer__policy-link">
                Политика конфиденциальности
              </Link>
              <Link to="/policy" className="footer__policy-link">
                Правила сайта
              </Link>
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
