import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AddressSuggestions } from 'react-dadata';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset';
import styles from './OrderForm.module.css';
import { orderStatePropTypes } from '../../utils/prop-types';
import Input from '../Form/Input';
import InputWithMask from '../Form/InputWithMask';
import inputStyles from '../Form/Input.module.css';

const FieldsetWithUserData = ({
  fieldsetStyle,
  values,
  setValues,
  handleChange,
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  function toggleFocus() {
    setIsFocused(!isFocused);
  }

  const handleAddressSet = (address) => {
    setValues((state) => ({
      ...state,
      userAddress: address.value,
    }));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Fieldset
      title="Введите контактые данные"
      classes={`${styles.fieldset} ${fieldsetStyle}`}
    >
      <div ref={inputRef} tabIndex={-1} />
      <Input
        id="callbackUserName"
        name="userName"
        placeholder="Ваше имя"
        value={values.userName}
        classes={styles['user-input']}
        onChange={handleChange}
        minLength={2}
        maxLength={25}
        required
      />
      <InputWithMask
        id="callbackUserPhone"
        name="userPhone"
        placeholder="Телефон для связи"
        value={values.userPhone}
        classes={styles['user-input']}
        onChange={handleChange}
        minLength={1}
        maxLength={25}
        required
        mask="_"
        format="+7 (###) ###-##-##"
        allowEmptyFormatting
        regexp={/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="user-address-id" className={inputStyles.label}>
        <AddressSuggestions
          inputProps={{
            name: 'userAddress',
            type: 'text',
            onChange: (event) => handleChange(event),
            className: `${styles['user-input']} ${inputStyles.input}`,
            minLength: 3,
            maxLength: 150,
            id: 'user-address-id',
            onFocus: toggleFocus,
            onBlur: toggleFocus,
          }}
          token="91e0e445a490f9e3b70e524eb5a9c7c44a225b7e"
          value={values.userAddress}
          renderOption={(data) => data.value}
          minChars={2}
          filterLocations={[{ region: 'липецкая' }]}
          onChange={handleAddressSet}
          defaultQuery={values.userAddress}
          suggestionsClassName={styles.list}
          suggestionClassName={`${styles.suggestion} main-text`}
          currentSuggestionClassName={styles.suggestion_current}
          count={5}
        />
        <span
          className={`${inputStyles.placeholder} ${
            isFocused || values.userAddress ? inputStyles.placeholder_fill : ''
          }`}
        >
          Введите адрес
        </span>
      </label>
      <div>
        <label htmlFor="order-policy" className="policy">
          <input
            id="order-policy"
            name="policy"
            type="checkbox"
            value={values.policy}
            className="checkbox"
            onChange={handleChange}
            checked={values.policy}
            required
          />
          <span className="checkbox-pseudo" />
          <span className="policy-info">
            Я согласен с{' '}
            <NavLink to="/policy" className="policy__text">
              Политикой конфиденциальности
            </NavLink>
          </span>
        </label>
      </div>
    </Fieldset>
  );
};

export default FieldsetWithUserData;

FieldsetWithUserData.propTypes = {
  fieldsetStyle: PropTypes.string.isRequired,
  values: orderStatePropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
};
