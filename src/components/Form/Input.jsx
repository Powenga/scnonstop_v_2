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
  type,
  max,
}) {
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function toggleFocus() {
    setIsFocused(!isFocused);
  }

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
        type={type || 'text'}
        value={value}
        className={`${styles.input} ${!isFocused && !value && styles.input_value_hide}`}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        max={max}
        required
      />
      <span
        className={`${styles.placeholder} ${
          isFocused || value ? styles.placeholder_fill : ''
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
  maxLength: PropTypes.number,
  type: PropTypes.string,
  max: PropTypes.number,
};

Input.defaultProps = {
  id: '',
  classes: '',
  minLength: 1,
  maxLength: 1000,
  type: 'text',
  max: 999,
};
