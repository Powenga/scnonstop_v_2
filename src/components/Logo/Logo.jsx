import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './Logo.css';

function Logo({ classes }) {
  return (
    <Link to="/" className={`logo ${classes || ''}`} href="/">
      <img
        src={logoPath}
        className="logo__image"
        alt="Логотип сервисного центра НОН-СТОП"
      />
    </Link>
  );
}

export default Logo;

Logo.propTypes = {
  classes: PropTypes.string,
};

Logo.defaultProps = {
  classes: '',
};
