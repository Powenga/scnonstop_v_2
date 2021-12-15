import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Form = forwardRef(
  ({
    name,
    classes,
    onSubmit,
    children,
    errorMessage,
  }, ref) => (
    <form
      ref={ref}
      name={name}
      className={`form ${classes || ''}`}
      noValidate
      onSubmit={onSubmit}
    >
      {children}
      {errorMessage && <span className="form__error">{errorMessage}</span>}
    </form>
  ),
);

Form.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

Form.defaultProps = {
  errorMessage: '',
  classes: '',
};

export default Form;
