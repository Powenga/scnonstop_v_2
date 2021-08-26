import React from 'react';
import logoPath from '../../images/logo.svg';
import './Logo.css';

function Logo({ classes }) {
  return (
    <a className={`logo ${classes && classes}`} href="/">
      <img
        src={logoPath}
        className="logo__image"
        alt="Логотип сервисного центра НОН-СТОП"
      />
    </a>
  );
}

export default Logo;
