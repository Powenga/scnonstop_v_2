import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Form from '../Form/Form';
import './CallbackForm.css';
import Input from '../Form/Input';

export default function CallBackForm({ classes, children }) {
  const [values, setValues] = useState({
    userName: '',
    userPhone: '',
  });

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    alert('Форма отправлена!');
  }, []);

  const handleChange = useCallback((event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  return (
    <div className={`callback-form ${classes || ''}`}>
      <div className="callback-form__wrap">
        {children}
        <Form
          name="callback-form"
          classes="callback-form__form"
          onSubmit={onSubmit}
        >
          <p className="callback-form__info">
            Для многих фотография – способ самовыражения и общения, возможность
            высказаться и заявить о себе. Длиннофокусные объективы выполняют
            съемку с более узким углом обзора, чем угол зрения человеческого
            глаза.
          </p>
          <Input
            id="callbackUserName"
            name="userName"
            placeholder="Ваше имя"
            value={values.userName}
            classes="callback-form__label"
            onChange={handleChange}
            maxLength={60}
          />
          <Input
            id="callbackUserPhone"
            name="userPhone"
            placeholder="Телефон для связи"
            value={values.userPhone}
            classes="callback-form__label"
            onChange={handleChange}
            maxLength={60}
          />
          <div className="callback-form__policy-wrap">
            <label htmlFor="policy" className="callback-form__label callback-form__label_type_policy">
              <input
                id="policy"
                name="policy"
                type="checkbox"
                value={values.policy}
                className="callback-form__checkbox"
              />
              <span className="callback-form__checkbox-pseudo" />
              <span className="callback-form__policy-info">
                Я согласен с
                {' '}
                <Button
                  classes="button_type_text callback-form__policy"
                  type="button"
                >
                  Политикой конфиденциальности
                </Button>
                {' '}
                и
                {' '}
                <Button
                  classes="button_type_text callback-form__policy"
                  type="button"
                >
                  Правилами пользования сайтом
                </Button>
              </span>
            </label>
          </div>
          <Button type="submit" classes="callback-form__button">
            ЗАКАЗАТЬ ЗВОНОК
          </Button>
        </Form>
      </div>
    </div>
  );
}

CallBackForm.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.element.isRequired,
};

CallBackForm.defaultProps = {
  classes: '',
};
