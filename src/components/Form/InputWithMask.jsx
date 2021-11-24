import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import styles from './Input.module.css';

function InputWithMask({
  id,
  name,
  value,
  placeholder,
  styleNames,
  readOnly,
  onChange,
  mask,
  classes,
}) {
  const [error, setError] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { value: inputValue } = target;
    if (inputValue && !/\d{2}.\d{2}.\d{4}/i.test(inputValue)) {
      target.setCustomValidity('Введите корректные данные.');
    } else {
      target.setCustomValidity('');
    }
    const { validationMessage } = target;
    setError(validationMessage);
    onChange(event);
  };

  function limit(inputValue, max) {
    let val = inputValue;
    if (val.length === 1 && val[0] > max[0]) {
      val = `0${val}`;
    }
    if (val.length === 2) {
      if (Number(val) === 0) {
        val = '01';
        // this can happen when user paste number
      } else if (val > max) {
        val = max;
      }
    }
    return val;
  }

  function limitDate(val) {
    console.log(val);
    const day = limit(val.substring(0, 2), '31');
    const month = limit(val.substring(2, 4), '12');
    const year = val.substring(4, 8);

    return `${day[0] || 'д'}${day[1] || 'д'}.${month[0] || 'м'}${month[1] || 'м'}.${year[0] || 'г'}${year[1] || 'г'}${year[2] || 'г'}${year[3] || 'г'}`;
  }

  return (
    <label htmlFor={id} className={`${styles.label} ${classes}`}>
      <NumberFormat
        id={id}
        name={name}
        onChange={handleChange}
        onFocus={() => { setIsFocus(true); }}
        onBlur={() => { setIsFocus(false); }}
        mask={['д', 'д', 'м', 'м', 'г', 'г', 'г', 'г']}
        className={`${styles.input} classes`}
        placeholder={isFocus && 'дд.мм.гггг'}
        // format={cardExpiry}
        format={limitDate}
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

export default InputWithMask;
