import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({
  onButtonClick,
  type,
  classes,
  children,
  disabled,
}) {
  function handleClick(evt) {
    onButtonClick(evt);
  }
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className={`button ${classes || ''} ${disabled && 'button_disabled'}`}
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
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onButtonClick: () => {},
  type: '',
  classes: '',
  children: '',
  disabled: false,
};
