import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({
  onButtonClick, type, classes, children,
}) {
  function handleClick(evt) {
    onButtonClick(evt);
  }

  return (
    <button
      onClick={handleClick}
      type={type !== undefined ? 'submit' : 'button'}
      className={`button ${classes && classes}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func,
  type: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Button.defaultProps = {
  onButtonClick: () => {},
  type: '',
  classes: '',
  children: '',
};
