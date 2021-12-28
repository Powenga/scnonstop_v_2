import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset';
import styles from './OrderForm.module.css';
import { orderStatePropTypes } from '../../utils/prop-types';
import Input from '../Form/Input';
import InputWithMask from '../Form/InputWithMask';
import Button from '../Button/Button';

const FieldsetWithUserData = ({ fieldsetStyle, values, handleChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 500);
    }
  }, []);

  return (
    <Fieldset
      title="Введите контактые данные"
      classes={`${styles.fieldset} ${fieldsetStyle}`}
    >
      <Input
        ref={inputRef}
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
      <Input
        id="callbackUserName"
        name="userAddress"
        placeholder="Ваш адрес"
        value={values.userAddress}
        classes={styles['user-input']}
        onChange={handleChange}
        minLength={2}
        maxLength={25}
        required
      />
      <div>
        <label htmlFor="order-policy" className="policy">
          <input
            id="order-policy"
            name="policy"
            type="checkbox"
            value={values.policy}
            className="checkbox"
            onChange={handleChange}
            required
          />
          <span className="checkbox-pseudo" />
          <span className="policy-info">
            Я согласен с{' '}
            <Button classes="button_type_text">
              Политикой конфиденциальности
            </Button>{' '}
            и{' '}
            <Button classes="button_type_text">
              Правилами пользования сайтом
            </Button>
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
};
