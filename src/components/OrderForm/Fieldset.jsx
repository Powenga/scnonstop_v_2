import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.module.css';

const Fieldset = ({ title, classes, children }) => {
  return (
    <fieldset className={classes}>
      <legend className={styles.legend}>{title}:</legend>
      <div className={styles['fieldset-content']}>{children}</div>
    </fieldset>
  );
};

export default Fieldset;

Fieldset.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Fieldset.defaultProps = {
  classes: '',
};
