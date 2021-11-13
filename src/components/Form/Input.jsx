import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export default function Input({
  id,
  name,
  placeholder,
  value,
  handleChange,
  classes,
}) {
  return (
    <label htmlFor={id} className={`${styles.label} ${classes}`}>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        className={styles.input}
        onChange={handleChange}
      />
      <span
        className={`${styles.placeholder} ${
          value ? styles.placeholder_fill : ''
        }`}
      >
        {placeholder}
      </span>
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  value: null,
  classes: '',
};
