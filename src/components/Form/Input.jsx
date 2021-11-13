import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export default function Input({
  id,
  name,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <label htmlFor={id} className={styles.input}>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        className={styles['input__input-element']}
        onChange={handleChange}
      />
      <span
        className={`${styles.input__placeholder} ${
          value ? styles.stylesinput__placeholder_fill : ''
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
};

Input.defaultProps = {
  id: '',
  value: null,
};
