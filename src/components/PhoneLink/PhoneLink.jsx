import React from 'react';
import PropTypes from 'prop-types';
import './PhoneLink.css';

function PhoneLink({ classes, children }) {
  return (
    <a href="tel:+79508022222" className={`phone-link ${classes && classes}`}>
      <span className="phone-link__text">
        {children}
      </span>
    </a>
  );
}

export default PhoneLink;

PhoneLink.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PhoneLink.defaultProps = {
  classes: '',
};
