import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

function InputWithMask({
  id,
  name,
  value,
  placeholder,
  format,
  onChange,
  mask,
  classes,
  allowEmptyFormatting,
  required,
  regexp,
}) {
  const [error, setError] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { value: inputValue } = target;
    if (inputValue && !regexp.test(inputValue)) {
      target.setCustomValidity('Введите корректные данные.');
    } else {
      target.setCustomValidity('');
    }
    const { validationMessage } = target;
    setError(validationMessage);
    onChange(event);
  };

  return (
    <label htmlFor={id} className={`${styles.label} ${classes}`}>
      <NumberFormat
        id={id}
        name={name}
        onChange={handleChange}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        mask={mask}
        className={`${styles.input} ${
          !isFocus && !value ? styles.input_value_hide : ''
        }`}
        format={format}
        required={required}
        allowEmptyFormatting={allowEmptyFormatting}
      />
      <span
        className={`${styles.placeholder} ${
          value ? styles.placeholder_fill : ''
        }`}
      >
        {placeholder}
      </span>
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}

InputWithMask.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  mask: PropTypes.string.isRequired,
  classes: PropTypes.string,
  allowEmptyFormatting: PropTypes.bool,
  required: PropTypes.bool,
  regexp: PropTypes.instanceOf(RegExp).isRequired,
};

InputWithMask.defaultProps = {
  classes: '',
  allowEmptyFormatting: false,
  required: false,
};

export default InputWithMask;
