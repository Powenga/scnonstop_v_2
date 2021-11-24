import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

export default function Form({
  name, classes, onSubmit, children, errorMessage,
}) {
  return (
    <form
      name={name}
      className={`${styles.form} ${classes}`}
      noValidate
      onSubmit={onSubmit}
    >
      {children}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </form>
  );
}

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
