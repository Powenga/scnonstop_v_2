import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export default function Input({
  id,
  name,
  placeholder,
  value,
  onChange,
  classes,
  minLength,
  maxLength,
}) {
  const [error, setError] = useState('');

  function handleChange(event) {
    const { validationMessage } = event.target;
    setError(validationMessage);
    onChange(event);
  }

  return (
    <label htmlFor={id} className={`${styles.label} ${classes}`}>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        className={styles.input}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span
        className={`${styles.placeholder} ${
          value ? styles.placeholder_fill : ''
        }`}
      >
        {placeholder}
      </span>
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number.isRequired,
};

Input.defaultProps = {
  id: '',
  classes: '',
  minLength: 1,
};
