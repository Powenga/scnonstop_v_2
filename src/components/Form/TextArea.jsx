import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.css';

function TextArea({
  id,
  name,
  value,
  rows,
  placeholder,
  classes,
  onChange,
  minLength,
  maxLength,
}) {
  const [textLimit, setTextLimit] = useState(maxLength);
  const [error, setError] = useState('');

  function handleChange(event) {
    const { validationMessage } = event.target;
    setError(validationMessage);
    onChange(event);
  }

  useEffect(() => {
    function textCounter() {
      const newLimit = maxLength - value.length;
      setTextLimit(newLimit);
    }
    textCounter();
  }, [value, maxLength]);

  return (
    <label htmlFor={id} className={`${styles.label} ${classes && classes}`}>
      <textarea
        id={id}
        name={name}
        value={value}
        className={styles.input}
        onChange={handleChange}
        rows={`${rows}`}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span className={styles.limit}>{textLimit}</span>
      <span
        className={`${styles.placeholder} ${
          value ? styles.placeholder_state_fill : ''
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

export default TextArea;

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

TextArea.defaultProps = {
  rows: 1,
  classes: '',
  minLength: 1,
  maxLength: 0,
};
