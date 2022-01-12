import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './Logo.css';
import useLoad from '../../hooks/useLoad';

function Logo({ classes }) {
  const { setIsLoad, style } = useLoad(false);

  return (
    <Link to="/" className={`logo ${classes || ''}`} href="/">
      <img
        onLoad={() => setIsLoad(true)}
        src={logoPath}
        className="logo__image"
        alt="Логотип сервисного центра НОН-СТОП"
        style={style}
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
