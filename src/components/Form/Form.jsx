import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

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
      className={`${styles.form} ${classes}`}
      noValidate
      onSubmit={onSubmit}
    >
      {children}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </form>
  ),
);

Form.propTypes = {
  name: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Form.defaultProps = {
  errorMessage: '',
};

export default Form;
